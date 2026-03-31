This version of Unity is unsupported.



# [AnimationMode](AnimationMode.html).InAnimationMode




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

public static bool InAnimationMode();






## Declaration

public static bool InAnimationMode([AnimationModeDriver](AnimationModeDriver.html) driver);






### Parameters



| Parameter | Description |
| --- | --- |
| driver | An AnimationModeDriver object that tests if AnimationMode has been locked specifically for this driver. |





### Description



Checks whether the Editor is in Animation mode.





[InAnimationMode](AnimationMode.InAnimationMode.html) returns a value of true or false, indicating whether the animation
        is being controlled by [AnimationMode](AnimationMode.html).  If [InAnimationMode](AnimationMode.InAnimationMode.html) returns `true` then
        [SampleAnimationClip](AnimationMode.SampleAnimationClip.html) can be used to animate the attached object.

**Note:** The script example at [AnimationMode](AnimationMode.html) shows how [InAnimationMode](AnimationMode.InAnimationMode.html) can be used.


            
