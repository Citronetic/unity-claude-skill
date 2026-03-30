This version of Unity is unsupported.



# [AnimatorJobExtensions](Animations.AnimatorJobExtensions.html).AddJobDependency




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















## Declaration

public static void AddJobDependency([Animator](Animator.html) animator,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) jobHandle);






### Parameters



| Parameter | Description |
| --- | --- |
| animator | The Animator instance that calls this method. |
| jobHandle | The JobHandle of the job that needs to run before animator jobs. |





### Description



Creates a dependency between animator jobs and the job represented by the supplied job handle. To add multiple job dependencies, call this method for each job that need to run before the Animator's jobs.





After each update the [Animator](Animator.html) dependencies are flushed.


              


```
using UnityEngine;
using UnityEngine.Animations;
using UnityEngine.Playables;using Unity.Collections;
using Unity.Jobs;public class MyMonoBehaviour : MonoBehaviour
{
    NativeArray<int> input0;
    NativeArray<int> input1;
    NativeArray<int> output;    PlayableGraph graph;
    Animator animator;    public struct SumDataForJob : IJob
    {
        [ReadOnly]
        public NativeArray<int> input0;        [ReadOnly]
        public NativeArray<int> input1;        public NativeArray<int> output;        public void Execute()
        {
            for (var i = 0; i < output.Length; ++i)
                output[i] = input0[i] + input1[i];
        }
    }    public struct MyAnimationJob : IAnimationJob
    {
        [ReadOnly]
        public NativeArray<int> input;        public float            sum;        public void ProcessRootMotion(AnimationStream stream)
        {
            sum = 0;
            for (var i = 0; i < input.Length; ++i)
                sum += input[i];
        }        public void ProcessAnimation(AnimationStream stream) {}
    }    public void Start()
    {
        input0 = new NativeArray<int>(10, Allocator.Persistent);
        input1 = new NativeArray<int>(10, Allocator.Persistent);
        output = new NativeArray<int>(10, Allocator.Persistent);        for (var i = 0; i < output.Length; i++)
        {
            input0[i] = i;
            input1[i] = 10 * i;
            output[i] = 0;
        }        animator = gameObject.AddComponent<Animator>();        graph = PlayableGraph.Create();
        var myAnimationJob = new MyAnimationJob();
        myAnimationJob.input = output;        var scriptPlayable = AnimationScriptPlayable.Create(graph, myAnimationJob);
        var playableOutput = AnimationPlayableOutput.Create(graph, "output", animator);        playableOutput.SetSourcePlayable(scriptPlayable);
        graph.Play();
    }    public void Update()
    {
        SumDataForJob sumJob;
        sumJob.input0 = input0;
        sumJob.input1 = input1;
        sumJob.output = output;        var jobHandle = sumJob.Schedule();
        animator.AddJobDependency(jobHandle);
    }    public void OnDestroy()
    {
        graph.Destroy();
        input0.Dispose();
        input1.Dispose();
        output.Dispose();
    }
}
```


            
