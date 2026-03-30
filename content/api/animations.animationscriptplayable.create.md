This version of Unity is unsupported.



# [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html).Create




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

public static [Animations.AnimationScriptPlayable](Animations.AnimationScriptPlayable.html) Create([Playables.PlayableGraph](Playables.PlayableGraph.html) graph,
T jobData,
int inputCount);






### Parameters



| Parameter | Description |
| --- | --- |
| graph | The PlayableGraph object that will own the AnimationScriptPlayable. |
| job | The IAnimationJob to execute when processing the playable. |
| inputCount | The number of inputs on the playable. |





### Returns



**AnimationScriptPlayable**
        A new [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html) linked to the [PlayableGraph](Playables.PlayableGraph.html).





### Description



Creates an [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html) in the [PlayableGraph](Playables.PlayableGraph.html).





This playable contains a job implementing an [IAnimationJob](Animations.IAnimationJob.html). This interface defines two methods that will be called while processing the [PlayableGraph](Playables.PlayableGraph.html).

Here is an example of how to create an [AnimationScriptPlayable](Animations.AnimationScriptPlayable.html) with a simple [IAnimationJob](Animations.IAnimationJob.html):


              


```
using UnityEngine;
using UnityEngine.Playables;
using UnityEngine.Animations;public struct AnimationJob : IAnimationJob
{
    public int userData;    public void ProcessRootMotion(AnimationStream stream)
    {
        // This method is called during the root motion process pass.
    }    public void ProcessAnimation(AnimationStream stream)
    {
        // This method is called during the animation process pass.
        Debug.Log(string.Format("Value of the userData: {0}", userData));
    }
}[RequireComponent(typeof(Animator))]
public class AnimationScriptExample : MonoBehaviour
{
    PlayableGraph m_Graph;
    AnimationScriptPlayable m_AnimationScriptPlayable;    void OnEnable()
    {
        m_Graph = PlayableGraph.Create("AnimationScriptExample");
        var output = AnimationPlayableOutput.Create(m_Graph, "ouput", GetComponent<Animator>());        var animationJob = new AnimationJob();
        m_AnimationScriptPlayable = AnimationScriptPlayable.Create(m_Graph, animationJob);        output.SetSourcePlayable(m_AnimationScriptPlayable);
        m_Graph.Play();
    }    void Update()
    {
        var animationJob = m_AnimationScriptPlayable.GetJobData<AnimationJob>();
        ++animationJob.userData;
        m_AnimationScriptPlayable.SetJobData(animationJob);
    }    void OnDisable()
    {
        m_Graph.Destroy();
    }
}
```





Additional resources: [IAnimationJob](Animations.IAnimationJob.html), [AnimatorJobExtensions](Animations.AnimatorJobExtensions.html).


            
