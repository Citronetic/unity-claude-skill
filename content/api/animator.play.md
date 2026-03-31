This version of Unity is unsupported.



# [Animator](Animator.html).Play




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public void Play(string stateName,
int layer = -1,
float normalizedTime = float.NegativeInfinity);






## Declaration

public void Play(int stateNameHash,
int layer = -1,
float normalizedTime = float.NegativeInfinity);






### Parameters



| Parameter | Description |
| --- | --- |
| stateName | The state name. |
| stateNameHash | The state hash name. If stateNameHash is 0, it changes the current state time. |
| layer | The layer index. If layer is -1, it plays the first state with the given state name or hash. |
| normalizedTime | The time offset between zero and one. |





### Description



Plays a state.





When you specify a state name, or the string used to generate a hash, it should include the name of the parent layer. For example, if you have a `Bounce` state in the `Base Layer`, the name is `Base Layer.Bounce`.
When you use the `stateName` parameter, this method calls [Animator.StringToHash](Animator.StringToHash.html) internally. If you use this method with the same `stateName` often, precompute the hash and use the `stateHashName` parameter to improve performance.

The `normalizedTime` parameter varies between 0 and 1.  If this parameter is left at zero then [Play](Animator.Play.html) will operate as expected.  A different starting point can be given.  An example could be `normalizedTime` set to 0.5, which means the animation starts halfway through.  If the transition from one state switches to another, it may or may not be blended.  If the transition starts at 0.75 it will be blended with the other state.  If no transition is set up then [Play](Animator.Play.html) will continue to 1.0 with no changes.

[Image: image]

*The following example script animates a cube.*

This cube has two Animator states called `Rest` and `Bounce`.  An empty animation is played in the `Rest` state.  When the Space key is pressed the cube switches into the `Bounce` state.  This causes the cube to jump up and down twice.  The cube then returns to the `Rest` state.  Because `Bounce` is selected from the [Animator.Play](Animator.Play.html) script, no Transition is needed. However the return from `Bounce` to `Rest` does have a Transition. `Has Exit Time` is ticked to make `Bounce` last for its one second. Attach this script to the GameObject you want to animate.


              


```
using UnityEngine;

// Press the space key in Play Mode to switch to the Bounce state.

[RequireComponent(typeof(Animator))]
public class AnimatorPlayExample : MonoBehaviour
{
    // The Animator component on the GameObject this script is attached to.
    Animator m_Animator;

    // Cache the hash of the bounce state.
    int m_BounceStateHash;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
        m_BounceStateHash = Animator.StringToHash("Base Layer.Bounce");
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Play Bounce but start at a quarter of the way through
            m_Animator.Play(m_BounceStateHash, 0, 0.25f);
        }
    }
}
```





Additional resources:  [Animator.StringToHash](Animator.StringToHash.html) for how to get a hash from the name.


            
