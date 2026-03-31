This version of Unity is unsupported.



# Animation





class in
          UnityEngine



/



Inherits from:[Behaviour](Behaviour.html)



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




                [Switch to Manual](../Manual/class-Animation.html)














### Description



The animation component is used to play back animations.





You can assign animation clips to the animation component and control playback from your script.
The animation system in Unity is weight-based and supports Animation Blending, Additive animations, Animation Mixing, Layers and full control over all aspects of playback.

For an overview of animation scripting in Unity please [read this introduction](../Manual/AnimationOverview.html).

[AnimationState](AnimationState.html) can be used to change the layer of an animation, modify playback speed, and for direct control over blending and mixing.

Also [Animation](Animation.html) supports enumerators. Looping through all AnimationStates is performed like this:


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Animation anim;    void Start()
    {
        anim = GetComponent<Animation>();
        foreach (AnimationState state in anim)
        {
            state.speed = 0.5F;
        }
    }
}
```





Additional resources: An overview of animation scripting in Unity is [here](../Manual/AnimationOverview.html).





### Properties



| Property | Description |
| --- | --- |
| animatePhysics | When enabled, the physics system uses animated transforms from GameObjects with kinematic Rigidbody components to influence other GameObjects. |
| clip | The default animation. |
| cullingType | Controls culling of this Animation component. |
| isPlaying | Is an animation currently being played? |
| localBounds | AABB of this Animation animation component in local space. |
| playAutomatically | Should the default animation clip (the Animation.clip property) automatically start playing on startup? |
| this[string] | Returns the animation state named name. |
| updateMode | Specifies the update mode of the Animation. |
| wrapMode | How should time beyond the playback range of the clip be treated? |





### Public Methods



| Method | Description |
| --- | --- |
| AddClip | Adds a clip to the animation with name newName. |
| Blend | Blends the animation named animation towards targetWeight over the next time seconds. |
| CrossFade | Fades in the animation with the name animation over a period of time defined by fadeLength. |
| CrossFadeQueued | Cross fades an animation after previous animations has finished playing. |
| GetClipCount | Get the number of clips currently assigned to this animation. |
| IsPlaying | Is the animation named name playing? |
| Play | Plays an animation without blending. |
| PlayQueued | Plays an animation after previous animations has finished playing. |
| RemoveClip | Remove clip from the animation list. |
| Rewind | Rewinds the animation named name. |
| Sample | Samples animations at the current state. |
| Stop | Stops all playing animations that were started with this Animation. |





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





            
