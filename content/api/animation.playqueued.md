This version of Unity is unsupported.



# [Animation](Animation.html).PlayQueued




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










## Declaration

public [AnimationState](AnimationState.html) PlayQueued(string animation,
[QueueMode](QueueMode.html) queue = QueueMode.CompleteOthers,
[PlayMode](PlayMode.html) mode = PlayMode.StopSameLayer);






### Description



Plays an animation after previous animations has finished playing.





For example you might play a specific sequence of animations after each other.

The animation state duplicates itself before playing thus you can fade between the same animation.
This can be used to overlay two same animations. For example you might have a sword swing animation.
The player slashes two times quickly after each other.
You could rewind the animation and play from the beginning but then you will get a jump in the animation.

The following [queue modes](QueueMode.html) are available:

If `queue` is [QueueMode.CompleteOthers](QueueMode.CompleteOthers.html) this animation will only start once all other animations have stopped playing.

If `queue` is [QueueMode.PlayNow](QueueMode.PlayNow.html) this animation will start playing immediately on a duplicated animation state.

After the animation has finished playing it will automatically clean itself up. Using the duplicated animation state after it has finished will result in an exception.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Animation anim = GetComponent<Animation>();        //Queues each of these animations to be played one after the other
        anim.PlayQueued("CubeBob", QueueMode.CompleteOthers);
        anim.PlayQueued("CubeFlip", QueueMode.CompleteOthers);
        anim.PlayQueued("CubeShuffle", QueueMode.CompleteOthers);
    }
}
```


            
