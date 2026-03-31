This version of Unity is unsupported.



# Microphone





class in
          UnityEngine



/



Implemented in:[UnityEngine.AudioModule](UnityEngine.AudioModule.html)


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




                [Switch to Manual](../Manual/class-Microphone.html)














### Description



Use this class to record to an [AudioClip](AudioClip.html) using a connected microphone.





You can get a list of connected microphones from the [devices](Microphone-devices.html) property and then use the [Start](Microphone.Start.html) and [End](Microphone.End.html) functions to start or end a recording session using one of the available devices.

**Note:** Microphone is not supported in the Unity Web player.





### Static Properties



| Property | Description |
| --- | --- |
| devices | A list of available microphone devices, identified by name. |





### Static Methods



| Method | Description |
| --- | --- |
| End | Stops recording. |
| GetDeviceCaps | Get the frequency capabilities of a device. |
| GetPosition | Get the position in samples of the recording. |
| IsRecording | Query if a device is currently recording. |
| Start | Start Recording with device. |


            
