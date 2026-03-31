This version of Unity is unsupported.



# [VideoTrackAttributes](Media.VideoTrackAttributes.html).frameRate




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












                    public [Media.MediaRational](Media.MediaRational.html) frameRate;






### Description



Frames per second.





Expressed as a fraction so that rates such as 29.97 (precisely 30000/1001) are represented accurately.

**Note**

Specifying a 0 or invalid rate (see [MediaRational.isValid](Media.MediaRational-isValid.html)) indicates the video track uses Variable Frame Rate (VFR). In this mode of operation, because there is no pre-defined frame duration, all frames added through [MediaEncoder.AddFrame](Media.MediaEncoder.AddFrame.html) must use the overload that receives a [MediaTime](Media.MediaTime.html).


            
