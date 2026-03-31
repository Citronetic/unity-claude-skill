This version of Unity is unsupported.



# PlayableDirector





class in
          UnityEngine.Playables



/



Inherits from:[Behaviour](Behaviour.html)



/



Implemented in:[UnityEngine.DirectorModule](UnityEngine.DirectorModule.html)


                  Leave feedback





Implements interfaces:[IExposedPropertyTable](IExposedPropertyTable.html)




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



Controls playback of [Playable](Playables.Playable.html) objects.





The PlayableDirector is primarily used by the [Timeline Package](https://docs.unity3d.com/Manual/com.unity.timeline.html) to handle bindings to scene objects and control playback of the [PlayableGraph](Playables.PlayableGraph.html).

The PlayableDirector object builds a [PlayableGraph](Playables.PlayableGraph.html) from a [PlayableAsset](Playables.PlayableAsset.html). Once the graph is built, use the PlayableDirector to manage playback of the graph's [Playable](Playables.Playable.html). To control playback of the [PlayableGraph](Playables.PlayableGraph.html), use:



          - [PlayableDirector.Play](Playables.PlayableDirector.Play.html)

          - [PlayableDirector.Stop](Playables.PlayableDirector.Stop.html)

          - [PlayableDirector.Pause](Playables.PlayableDirector.Pause.html)

          - [PlayableDirector.Resume](Playables.PlayableDirector.Resume.html)





To be notified of playback state changes, subscribe to:



          - [PlayableDirector.played](Playables.PlayableDirector-played.html)

          - [PlayableDirector.paused](Playables.PlayableDirector-paused.html)

          - [PlayableDirector.stopped](Playables.PlayableDirector-stopped.html)





To handle references between assets and scene objects, PlayableDirector implements [IExposedPropertyTable](IExposedPropertyTable.html). To set or get bindings, use:



          - [PlayableDirector.SetGenericBinding](Playables.PlayableDirector.SetGenericBinding.html)

          - [PlayableDirector.GetGenericBinding](Playables.PlayableDirector.GetGenericBinding.html)





Multiple PlayableDirectors can reference the same [PlayableAsset](Playables.PlayableAsset.html). When this occurs, each PlayableDirector creates its own independent [PlayableGraph](Playables.PlayableGraph.html) with its own scene bindings.

The following example demonstrates how to use the Playable Director to bind scene objects to assets and how to control the Playable Graph.


              


```
using System;
using UnityEngine;
using UnityEngine.Playables;
using Object = UnityEngine.Object;

[RequireComponent(typeof(PlayableDirector))]
public class PlayableDirectorSample : MonoBehaviour
{
    PlayableDirector m_Director;
    TestPlayableAsset m_TestAsset;

    void Start()
    {
        m_Director = gameObject.GetComponent<PlayableDirector>();
        m_TestAsset = ScriptableObject.CreateInstance<TestPlayableAsset>();
        m_Director.playableAsset = m_TestAsset;
        m_Director.SetGenericBinding(m_TestAsset, gameObject);
        BuildGraphAndPlay();
    }

    void BuildGraphAndPlay()
    {
        m_Director.RebuildGraph();
        if (m_Director.playableGraph.IsValid())
        {
            m_Director.Play();
        }
    }
}

[Serializable]
class TestBehaviour : PlayableBehaviour
{
    public override void OnPlayableCreate(Playable playable) { }

    public override void OnPlayableDestroy(Playable playable) { }
    public Object target { get; set; }
    public override void OnBehaviourPlay(Playable playable, FrameData info)
    {
        base.OnBehaviourPlay(playable, info);
        if (target != null)
        {
            Debug.Log($"{target.name}-{info.frameId}");
        }
    }
}

[Serializable]
class TestPlayableAsset : PlayableAsset
{
    public override Playable CreatePlayable(PlayableGraph graph, GameObject owner)
    {
        ScriptPlayable<TestBehaviour> behavior = ScriptPlayable<TestBehaviour>.Create(graph);
        var director = owner.GetComponent<PlayableDirector>();
        Object target = director.GetGenericBinding(this);
        behavior.GetBehaviour().target = target;
        return behavior;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| duration | The duration of the currently connected Playable in seconds. |
| extrapolationMode | Controls how the time is incremented when it goes beyond the duration of the playable. |
| initialTime | The time at which the Playable should start when first played. |
| playableAsset | The PlayableAsset that is used to instantiate a playable for playback. |
| playableGraph | The PlayableGraph created by the PlayableDirector. |
| playOnAwake | Whether the playable asset will start playing back as soon as the component awakes. |
| state | The current playing state of the component. (Read Only) |
| time | The component's current time. This value is incremented according to the PlayableDirector.timeUpdateMode when it is playing. You can also change this value manually. |
| timeUpdateMode | Controls how time is incremented when playing back. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearGenericBinding | Clears the binding of a reference object. |
| ClearReferenceValue | Clears an exposed reference value. |
| DeferredEvaluate | Schedules the PlayableDirector to perform PlayableGraph.Evaluate on the PlayableGraph associated with the PlayableDirector.playableAsset on the next update. |
| Evaluate | Performs PlayableGraph.Evaluate on the PlayableGraph associated with the PlayableDirector.playableAsset at PlayableDirector.time. |
| GetGenericBinding | Returns a binding to a reference object. |
| GetReferenceValue | Retreives an ExposedReference binding. |
| Pause | Pauses playback of the currently running playable. |
| Play | Instatiates a Playable using the provided PlayableAsset and starts playback. |
| RebindPlayableGraphOutputs | Rebinds each PlayableOutput of the PlayableGraph. |
| RebuildGraph | Discards the existing PlayableGraph and creates a new instance. |
| Resume | Resume playing a paused playable. |
| SetGenericBinding | Sets the binding of a reference object from a PlayableBinding. |
| SetReferenceValue | Sets an ExposedReference value. |
| Stop | Stops playback of the current Playable and destroys the corresponding graph. |





### Events



| Event | Description |
| --- | --- |
| paused | Event that is raised when a PlayableDirector component has paused. |
| played | Event that is raised when a PlayableDirector component has begun playing. |
| stopped | Event that is raised when a PlayableDirector component has stopped. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| enabled | Enabled Behaviours are Updated, disabled Behaviours are not. |
| isActiveAndEnabled | Checks whether a component is enabled, attached to a GameObject that is active in the hierarchy, and the component's OnEnable has been called. |
| gameObject | The game object this component is attached to. A component is always attached to a game object. |
| tag | The tag of this game object. |
| transform | The Transform attached to this GameObject. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| BroadcastMessage | Calls the method named methodName on every MonoBehaviour in this game object or any of its children. |
| CompareTag | Checks the GameObject's tag against the defined tag. |
| GetComponent | Gets a reference to a component of type T on the same GameObject as the component specified. |
| GetComponentInChildren | Gets a reference to a component of type T on the same GameObject as the component specified, or any child of the GameObject. |
| GetComponentIndex | Gets the index of the component on its parent GameObject. |
| GetComponentInParent | Gets a reference to a component of type T on the same GameObject as the component specified, or any parent of the GameObject. |
| GetComponents | Gets references to all components of type T on the same GameObject as the component specified. |
| GetComponentsInChildren | Gets references to all components of type T on the same GameObject as the component specified, and any child of the GameObject. |
| GetComponentsInParent | Gets references to all components of type T on the same GameObject as the component specified, and any parent of the GameObject. |
| SendMessage | Calls the method named methodName on every MonoBehaviour in this game object. |
| SendMessageUpwards | Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. |
| TryGetComponent | Gets the component of the specified type, if it exists. |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
