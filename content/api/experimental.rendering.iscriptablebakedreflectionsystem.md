This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# IScriptableBakedReflectionSystem





interface in
          UnityEditor.Experimental.Rendering


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Defines the required members for a ScriptableBakedReflectionSystem implementation.





You can use the empty implementation as base class, see [ScriptableBakedReflectionSystem](Experimental.Rendering.ScriptableBakedReflectionSystem.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEditor.Experimental.Rendering;public interface IBakeJobs
{
    // Add job counts + remove jobs count
    int count { get; }
    int toAddCount { get; }
    int toRemoveCount { get; }
}public interface IBaker<TProbe>
{
    IBakeJobs PrepareBakeJobsFor(SceneStateHash sceneStateHash);
    void IssueJobs(IBakeJobs jobs);
    List<TProbe> bakedProbes { get; set; }
    void StopRunningJobs();
}abstract class CustomScriptableBakedReflectionSystem : ScriptableBakedReflectionSystem
{
    enum Stage
    {
        None,
        BakeReflectionProbes
    }    IBaker<ReflectionProbe> m_ReflectionProbeBaker;    public CustomScriptableBakedReflectionSystem(
        IBaker<ReflectionProbe> reflectionProbeBaker)
    // Our custom system processes in 1 stage: reflection probes
        : base(1)
    {
        m_ReflectionProbeBaker = reflectionProbeBaker;
    }    public override void Tick(
        SceneStateHash sceneStateHash,
        IScriptableBakedReflectionSystemStageNotifier handle)
    {
        // Reflection Probes
        {
            // Calculate reflection probes to remove and to bake and add
            var jobs = m_ReflectionProbeBaker.PrepareBakeJobsFor(sceneStateHash);
            if (jobs.count > 0)
            {
                // Update progression information of current stage
                // Progress is the progression of to bake and add jobs
                handle.EnterStage(
                    (int)Stage.BakeReflectionProbes,
                    string.Format("Reflection Probes | {0} jobs", jobs.toAddCount),
                    1 - (jobs.toAddCount / (float)m_ReflectionProbeBaker.bakedProbes.Count));                // Perform removal of remove jobs
                // Issue baking of add jobs if they are not in progress
                m_ReflectionProbeBaker.IssueJobs(jobs);                return;
            }
            handle.ExitStage((int)Stage.BakeReflectionProbes);
        }        // Update the hash of the reflection system
        stateHashes = CalculateStateHash();
        // Baking is complete for this sceneStateHash
        handle.SetIsDone(true);
    }    public override void SynchronizeReflectionProbes()
    {
        // Synchronize Reflection Probes
        for (int i = 0, c = m_ReflectionProbeBaker.bakedProbes.Count; i < c; ++i)
        {
            var probe = m_ReflectionProbeBaker.bakedProbes[i];
            probe.bakedTexture = GetReflectionProbeBakedTexture(probe);
        }
    }    public override void Clear()
    {
        m_ReflectionProbeBaker.bakedProbes.Clear();
        DeleteBakedReflectionProbeTextures();
    }    public override void Cancel()
    {
        m_ReflectionProbeBaker.StopRunningJobs();
    }    Cubemap GetReflectionProbeBakedTexture(ReflectionProbe probe)
    {
        throw new System.NotImplementedException();
    }    protected abstract void DeleteBakedReflectionProbeTextures();
    protected abstract Hash128[] CalculateStateHash();
}
```





### Properties



| Property | Description |
| --- | --- |
| stageCount | Number of stages of the baking process. |
| stateHashes | The hashes of the current baked state of the ScriptableBakedReflectionSystem. |





### Public Methods



| Method | Description |
| --- | --- |
| BakeAllReflectionProbes | Implement this method to bake all of the loaded reflection probes. |
| Cancel | Cancel the running bake jobs. |
| Clear | Clear the state of the ScriptableBakedReflectionSystem. |
| SynchronizeReflectionProbes | Synchronize the baked data with the actual components and rendering settings. |
| Tick | This method is called every Editor update until the ScriptableBakedReflectionSystem indicates that the baking is complete, with handle.SetIsDone(true). (See IScriptableBakedReflectionSystemStageNotifier.SetIsDone). |


            
