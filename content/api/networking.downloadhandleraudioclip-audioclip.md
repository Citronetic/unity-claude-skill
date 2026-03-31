This version of Unity is unsupported.



# [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html).audioClip




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












                    public [AudioClip](AudioClip.html) audioClip;






### Description



Returns the downloaded [AudioClip](AudioClip.html), or `null`. (Read Only)





This property returns an [AudioClip](AudioClip.html) object. If Unity was unable to decode the downloaded data, or has not yet finished decompressing/decoding the downloaded data, this property will return `null`.

If all data has not yet been downloaded, accessing this property will throw an [InvalidOperationException](http://msdn.microsoft.com/en-us/library/system.invalidoperationexception).

*Note:* This property will return a reference to the *same* [AudioClip](AudioClip.html) object on every call. Accessing this property causes no additional memory allocation.


            
