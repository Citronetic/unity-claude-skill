This version of Unity is unsupported.



# BaseAnimValueNonAlloc<T0>





class in
          UnityEditor.AnimatedValues



/



Inherits from:[AnimatedValues.BaseAnimValue_1](AnimatedValues.BaseAnimValue_1.html)


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



Abstract base class that provides an allocation free version of BaseAnimValue.





Abstract base class that provides an allocation free version of BaseAnimValue. See BaseAnimValue.





### Inherited Members




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







            
