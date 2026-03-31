This version of Unity is unsupported.



# PropertySceneHandle





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



Handle to read a [Component](Component.html) property on an object in the Scene.





PropertySceneHandle are read-only.


              


```
using UnityEngine;
using UnityEngine.Playables;
using UnityEngine.Animations;public struct PropertySceneHandleJob : IAnimationJob
{
    public PropertySceneHandle handleR;
    public PropertySceneHandle handleG;
    public PropertySceneHandle handleB;    public void ProcessRootMotion(AnimationStream stream)
    {
    }    public void ProcessAnimation(AnimationStream stream)
    {
        // Log the light color.
        var r = handleR.GetFloat(stream);
        var g = handleG.GetFloat(stream);
        var b = handleB.GetFloat(stream);
        Debug.LogFormat("Light color: (R: {0}, G: {1}, B: {2})", r, g, b);
    }
}[RequireComponent(typeof(Animator))]
[RequireComponent(typeof(Light))]
public class PropertySceneHandleExample : MonoBehaviour
{
    public Light sceneLight;    PlayableGraph m_Graph;
    AnimationScriptPlayable m_AnimationScriptPlayable;    void Start()
    {
        if (sceneLight == null)
            return;        var animator = GetComponent<Animator>();        m_Graph = PlayableGraph.Create("PropertySceneHandleExample");
        var output = AnimationPlayableOutput.Create(m_Graph, "output", animator);        var animationJob = new PropertySceneHandleJob();
        animationJob.handleR = animator.BindSceneProperty(sceneLight.transform, typeof(Light), "m_Color.r");
        animationJob.handleG = animator.BindSceneProperty(sceneLight.transform, typeof(Light), "m_Color.g");
        animationJob.handleB = animator.BindSceneProperty(sceneLight.transform, typeof(Light), "m_Color.b");
        m_AnimationScriptPlayable = AnimationScriptPlayable.Create(m_Graph, animationJob);        output.SetSourcePlayable(m_AnimationScriptPlayable);
        m_Graph.Play();
    }    void OnDisable()
    {
        if (sceneLight == null)
            return;        m_Graph.Destroy();
    }
}
```





Additional resources: [AnimatorJobExtensions.BindSceneProperty](Animations.AnimatorJobExtensions.BindSceneProperty.html), [TransformSceneHandle](Animations.TransformSceneHandle.html), [PropertyStreamHandle](Animations.PropertyStreamHandle.html), and [TransformStreamHandle](Animations.TransformStreamHandle.html).





### Public Methods



| Method | Description |
| --- | --- |
| GetBool | Gets the boolean property value from an object in the Scene. |
| GetEntityId | Gets the EntityId property value from an object in the Scene. |
| GetFloat | Gets the float property value from an object in the Scene. |
| GetInt | Gets the integer property value from an object in the Scene. |
| IsResolved | Returns whether or not the handle is resolved. |
| IsValid | Returns whether or not the handle is valid. |
| Resolve | Resolves the handle. |


            
