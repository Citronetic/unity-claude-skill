This version of Unity is unsupported.



# RationalTime





struct in
          Unity.IntegerTime



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Data type that represents time as an integer count of a rational number.





### Properties



| Property | Description |
| --- | --- |
| Count | Returns the number of ticks. |
| Ticks | Returns the number of ticks per second. |





### Static Methods



| Method | Description |
| --- | --- |
| FromDouble | Converts a floating point number into a RationalTime with an explicit rate. |





### Operators



| Operator | Description |
| --- | --- |
| DiscreteTime | Converts a RationalTime to DiscreteTime representation. If the rate denominator is 1 and the DiscreteTime.TicksPerSecond is a multiple of the numerator, this conversion is lossless. |


            
