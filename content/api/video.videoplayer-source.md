This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).source




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












                    public [Video.VideoSource](Video.VideoSource.html) source;






### Description



The source that the [VideoPlayer](Video.VideoPlayer.html) uses for playback.





It is valid to set both a [VideoClip](Video.VideoClip.html) and a URL in the [VideoPlayer](Video.VideoPlayer.html). This property controls which one will get used for playback.
When setting a new clip or URL, the source will automatically change to make the associated type current.

**Note:** On WebGL, only [VideoSource.Url](Video.VideoSource.Url.html) is supported.


            
