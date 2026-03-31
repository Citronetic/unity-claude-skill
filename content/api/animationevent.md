This version of Unity is unsupported.



# AnimationEvent





class in
          UnityEngine



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



AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation.





Animation events support functions that take zero or one parameter.
The parameter can be a float, an int, a string, an object reference, or an AnimationEvent.


              


```
// Animation Event example
// Small example that can be called on each specified frame.
// The code is executed once per animation loop.using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public void PrintEvent()
    {
        Debug.Log("PrintEvent");
    }
}
```





A more detailed example below shows a more complex
      way of creating an animation.  In this script example the `Animator`
      component is accessed and a `Clip` from it obtained.  (This clip was
      set up in the Animation window.)  The clip lasts for 2 seconds.  An
      `AnimationEvent` is created, and has parameters set.  The parameters include
      the function `PrintEvent()` which will handle the event. The event is then
      added to the clip.  This all happens in `Start()`.  Once the game has launched
      the event is called after 1.3s and then repeats every 2s.


              


```
// Add an Animation Event to a GameObject that has an Animator
using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public void Start()
    {
        // existing components on the GameObject
        AnimationClip clip;
        Animator anim;        // new event created
        AnimationEvent evt;
        evt = new AnimationEvent();        // put some parameters on the AnimationEvent
        //  - call the function called PrintEvent()
        //  - the animation on this object lasts 2 seconds
        //    and the new animation created here is
        //    set up to happen 1.3s into the animation
        evt.intParameter = 12345;
        evt.time = 1.3f;
        evt.functionName = "PrintEvent";        // get the animation clip and add the AnimationEvent
        anim = GetComponent<Animator>();
        clip = anim.runtimeAnimatorController.animationClips[0];
        clip.AddEvent(evt);
    }    // the function to be called as an event
    public void PrintEvent(int i)
    {
        print("PrintEvent: " + i + " called at: " + Time.time);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| animationState | The animation state that fired this event (Read Only). |
| animatorClipInfo | The animator clip info related to this event (Read Only). |
| animatorStateInfo | The animator state info related to this event (Read Only). |
| floatParameter | Float parameter that is stored in the event and will be sent to the function. |
| functionName | The name of the function that will be called. |
| intParameter | Int parameter that is stored in the event and will be sent to the function. |
| isFiredByAnimator | Returns true if this Animation event has been fired by an Animator component. |
| isFiredByLegacy | Returns true if this Animation event has been fired by an Animation component. |
| messageOptions | Function call options. |
| objectReferenceParameter | Object reference parameter that is stored in the event and will be sent to the function. |
| stringParameter | String parameter that is stored in the event and will be sent to the function. |
| time | The time at which the event will be fired off. |





### Constructors



| Constructor | Description |
| --- | --- |
| AnimationEvent | Creates a new animation event. |


            
