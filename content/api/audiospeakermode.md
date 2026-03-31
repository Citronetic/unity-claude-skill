This version of Unity is unsupported.



# AudioSpeakerMode





enumeration


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



These are speaker types defined for use with [AudioSettings.speakerMode](AudioSettings-speakerMode.html).





Your project's default speaker mode can be set in the [Audiomanager](../Manual/class-AudioManager.html) through **Edit->Project Settings->Audio**.

Additional resources: [AudioSettings](AudioSettings.html), [Audio Manager](../Manual/class-AudioManager.html).





### Properties



| Property | Description |
| --- | --- |
| Mono | Channel count is set to 1. The speakers are monaural. |
| Stereo | Channel count is set to 2. The speakers are stereo. This is the editor default. |
| Quad | Channel count is set to 4. 4 speaker setup. This includes front left, front right, rear left, rear right. |
| Surround | Channel count is set to 5. 5 speaker setup. This includes front left, front right, center, rear left, rear right. |
| Mode5point1 | Channel count is set to 6. 5.1 speaker setup. This includes front left, front right, center, rear left, rear right and a subwoofer. |
| Mode7point1 | Channel count is set to 8. 7.1 speaker setup. This includes front left, front right, center, rear left, rear right, side left, side right and a subwoofer. |
| Prologic | Channel count is set to 2. Stereo output, but data is encoded in a way that is picked up by a Prologic/Prologic2 decoder and split into a 5.1 speaker setup. |


            
