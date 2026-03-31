This version of Unity is unsupported.



# LodSelectionCurve





struct in
          UnityEngine



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




                [Switch to Manual](../Manual/class-Mesh.html)














### Description



This struct represents the parameters that Unity uses to calculate which Mesh LOD level to select. It contains the lodBias and lodSlope properties, which scale logarithmically using screen space pixel area.





### Properties



| Property | Description |
| --- | --- |
| lodBias | Bias for level of detail selection calculation. |
| lodSlope | The slope parameter that Unity uses when calculating which Mesh LOD level to select. |





### Public Methods



| Method | Description |
| --- | --- |
| IsValid | Returns true if the lodSlope value is greater than 0.0001f. |


            
