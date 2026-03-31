This version of Unity is unsupported.



# ExposedReference<T0>





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Creates a type whos value is resolvable at runtime.





ExposedReference is a generic type that can be used to create references to Scene objects and resolve their actual values at runtime and by using a context object. This can be used by assets, such as a [ScriptableObject](ScriptableObject.html) or [PlayableAsset](Playables.PlayableAsset.html) to create references to Scene objects.

The example below shows how a [PlayableAsset](Playables.PlayableAsset.html) can use exposed references to create references to a Scene GameObject.
This is an example that uses Timeline, so you may want to [set up your GameObject in Timeline](https://docs.unity3d.com/Packages/com.unity.timeline@latest/index.html?subfolder=/manual/wf-create-instance.html) and [make an animation with your GameObject](https://docs.unity3d.com/Packages/com.unity.timeline@latest/index.html?subfolder=/manual/wf-record-anim.html).


              


```
//Put both of these scripts in your Project, then go to your Timeline, click the Add dropdown and choose Playable Track. Place this script on your Timeline as a Playable Track
//Click on the track and choose a GameObject from your Scene in the "My Scene Object" field. Also set the velocity.using UnityEngine;
using UnityEngine.Playables;[System.Serializable]
public class ExposedReferenceExample : PlayableAsset
{
    //This allows you to use GameObjects in your Scene
    public ExposedReference<GameObject> m_MySceneObject;
    //This variable allows you to decide the velocity of your GameObject
    public Vector3 m_SceneObjectVelocity;    public  override Playable CreatePlayable(PlayableGraph graph , GameObject myGameObject)
    {
        //Get access to the Playable Behaviour script
        TestExample playableBehaviour = new TestExample();
        //Resolve the exposed reference on the Scene GameObject by returning the table used by the graph
        playableBehaviour.m_MySceneObject = m_MySceneObject.Resolve(graph.GetResolver());        //Make the PlayableBehaviour velocity variable the same as the variable you set
        playableBehaviour.m_SceneObjectVelocity = m_SceneObjectVelocity;        //Create a custom playable from this script using the Player Behaviour script
        return ScriptPlayable<TestExample>.Create(graph, playableBehaviour);
    }
}
```





Place this next script in your Project in the same folder as the above script.
This script changes the behaviour of the timeline by moving the Scene GameObject while the Playable Track is playing.


              


```
using  UnityEngine;
using  UnityEngine.Playables;public  class TestExample : PlayableBehaviour
{
    public GameObject m_MySceneObject;
    public Vector3 m_SceneObjectVelocity;    public override void PrepareFrame(Playable playable, FrameData frameData)
    {
        //If the Scene GameObject exists, move it continuously until the Playable pauses
        if (m_MySceneObject != null)
            //Move the GameObject using the velocity you set in your Playable Track's inspector
            m_MySceneObject.transform.Translate(m_SceneObjectVelocity);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| defaultValue | The default value, in case the value cannot be resolved. |
| exposedName | The name of the ExposedReference. |





### Public Methods



| Method | Description |
| --- | --- |
| Resolve | Gets the value of the reference by resolving it given the ExposedPropertyResolver context object. |


            
