This version of Unity is unsupported.



# AnimFloat





class in
          UnityEditor.AnimatedValues



/



Inherits from:[AnimatedValues.BaseAnimValueNonAlloc_1](AnimatedValues.BaseAnimValueNonAlloc_1.html)


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



An animated float value.





Animated using [Mathf.Lerp](Mathf.Lerp.html).





### Constructors



| Constructor | Description |
| --- | --- |
| AnimFloat | Constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| GetValue | Type specific implementation of BaseAnimValue_1.GetValue. |





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
| StopAnim | Stop the animation and assign the given value. |







            
