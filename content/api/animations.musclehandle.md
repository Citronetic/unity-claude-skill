This version of Unity is unsupported.



# MuscleHandle





struct in
          UnityEngine.Animations



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



Handle for a muscle in the [AnimationHumanStream](Animations.AnimationHumanStream.html).





MuscleHandle can only be used on [AnimationHumanStream](Animations.AnimationHumanStream.html), otherwise an `InvalidOperationException` is thrown.


              


```
using UnityEngine;
using UnityEngine.Animations;
using UnityEngine.Playables;public struct MuscleHandleExampleJob : IAnimationJob
{
    public MuscleHandle muscleHandle;    public void ProcessRootMotion(AnimationStream stream) {}
    public void ProcessAnimation(AnimationStream stream)
    {
        AnimationHumanStream humanStream = stream.AsHuman();        // Get a muscle value.
        float muscleValue = humanStream.GetMuscle(muscleHandle);        // Set a muscle value.
        humanStream.SetMuscle(muscleHandle, muscleValue);
    }
}[RequireComponent(typeof(Animator))]
public class MuscleHandleExample : MonoBehaviour
{
    void Start()
    {
        var graph = PlayableGraph.Create();
        var output = AnimationPlayableOutput.Create(graph, "output", GetComponent<Animator>());        var job = new MuscleHandleExampleJob();
        job.muscleHandle = new MuscleHandle(HumanPartDof.LeftArm, ArmDof.HandDownUp);        var scriptPlayable = AnimationScriptPlayable.Create(graph, job);
        output.SetSourcePlayable(scriptPlayable);        graph.Evaluate(1.0f);        graph.Destroy();
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| muscleHandleCount | The total number of DoF parts in a humanoid. (Read Only) |





### Properties



| Property | Description |
| --- | --- |
| dof | The muscle human sub-part. (Read Only) |
| humanPartDof | The muscle human part. (Read Only) |
| name | The name of the muscle. (Read Only) |





### Constructors



| Constructor | Description |
| --- | --- |
| MuscleHandle | The different constructors that creates the muscle handle. |





### Static Methods



| Method | Description |
| --- | --- |
| GetMuscleHandles | Fills the array with all the possible muscle handles on a humanoid. |


            
