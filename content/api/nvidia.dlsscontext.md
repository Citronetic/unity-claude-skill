This version of Unity is unsupported.



# DLSSContext





class in
          UnityEngine.NVIDIA



/



Implemented in:[UnityEngine.NVIDIAModule](UnityEngine.NVIDIAModule.html)


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



Represents the state of DLSS.





This class must be persistent, since internally it keeps track of history buffers and other important implementation details. To modify the results of DLSS, alter values in the ExecuteData property and then run [GraphicsDevice.ExecuteDLSS](NVIDIA.GraphicsDevice.ExecuteDLSS.html).





### Properties



| Property | Description |
| --- | --- |
| executeData | The mutable state of the current DLSS object. |
| initData | The immutable initialization data the DLSSContext requires. |


            
