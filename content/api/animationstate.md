This version of Unity is unsupported.



# AnimationState





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



The AnimationState gives full control over animation blending.





In most cases the [Animation](Animation.html) interface is sufficient and easier to use.
Use the AnimationState if you need full control over the animation blending any playback process.

The AnimationState interface allows you to modify speed, weight, time and layers while any animation is playing.
You can also setup animation mixing and wrapMode.

The Animation.





### Properties



| Property | Description |
| --- | --- |
| blendMode | Which blend mode should be used? |
| clip | The clip that is being played by this animation state. |
| enabled | Enables / disables the animation. |
| length | The length of the animation clip in seconds. |
| name | The name of the animation. |
| normalizedSpeed | The normalized playback speed. |
| normalizedTime | Normalized time of the State. |
| speed | The playback speed of the animation. 1 is normal playback speed. |
| time | The current time of the animation. |
| weight | The weight of animation. |
| wrapMode | Wrapping mode of the animation. |





### Public Methods



| Method | Description |
| --- | --- |
| AddMixingTransform | Adds a transform which should be animated. This allows you to reduce the number of animations you have to create. |
| RemoveMixingTransform | Removes a transform which should be animated. |


            
