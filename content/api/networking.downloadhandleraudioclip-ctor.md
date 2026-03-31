This version of Unity is unsupported.



# DownloadHandlerAudioClip Constructor




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















## Declaration

public DownloadHandlerAudioClip(string url,
[AudioType](AudioType.html) audioType);






## Declaration

public DownloadHandlerAudioClip(Uri uri,
[AudioType](AudioType.html) audioType);






### Parameters



| Parameter | Description |
| --- | --- |
| url | The nominal (pre-redirect) URL at which the audio clip is located. |
| audioType | Value to set for AudioClip type. |
| uri | A System.Uri object identifying the audio clip resource. |





### Description



Constructor, specifies what kind of audio data is going to be downloaded.





The value in `audioType` will be used to parameterize the [AudioClip](AudioClip.html) when importing the downloaded audio data.


            
