This version of Unity is unsupported.



# [AnimationMode](AnimationMode.html).SampleAnimationClip




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

public static void SampleAnimationClip([GameObject](GameObject.html) gameObject,
[AnimationClip](AnimationClip.html) clip,
float time);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The root GameObject for the animation. |
| clip | The AnimationClip to sample. |
| time | The time at which to sample. |





### Returns



**void**
        Returns true when the Editor is in Animation mode. Returns false otherwise.





### Description



Samples the [AnimationClip](AnimationClip.html) for the [GameObject](GameObject.html) and also records modified properties when in Animation mode.





If this method returns true, you can use [SampleAnimationClip](AnimationMode.SampleAnimationClip.html) to animate the attached object.

**Note:** The script example for [AnimationMode](AnimationMode.html) demonstrates how to use [InAnimationMode](AnimationMode.InAnimationMode.html).


            
