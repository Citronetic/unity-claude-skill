This version of Unity is unsupported.



# BaseAnimValue<T0>





class in
          UnityEditor.AnimatedValues


                  Leave feedback





Implements interfaces:[ISerializationCallbackReceiver](ISerializationCallbackReceiver.html)




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



Abstract base class for Animated Values.





Animated Values are an editor only concept for values that have a current value and a target. The value will tween towards the target at a given speed.





### Properties



| Property | Description |
| --- | --- |
| isAnimating | Is the value currently animating. |
| speed | Speed of the tween. |
| target | Target to tween towards. |
| value | Current value of the animation. |
| valueChanged | Callback while the value is changing. |





### Protected Methods



| Method | Description |
| --- | --- |
| BeginAnimating | Begin an animation moving from the start value to the target value. |
| GetValue | Abstract function to be overridden in derived types. Should return the current value of the animated value. |
| StopAnim | Stop the animation and assign the given value. |


            
