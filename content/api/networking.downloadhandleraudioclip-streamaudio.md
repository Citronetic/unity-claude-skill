This version of Unity is unsupported.



# [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html).streamAudio




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












                    public bool streamAudio;






### Description



Create streaming [AudioClip](AudioClip.html).





Creates an AudioClip that can begin playback without needing the whole file to be downloaded. After starting the download, you must perform checks to determine that enough of your file has downloaded before attempting playback. To do this, poll [UnityWebRequest.downloadedBytes](Networking.UnityWebRequest-downloadedBytes.html) to calculate an average download speed. Only begin playback after your checks confirm that the remainder of the file will finish downloading before the playback of your AudioClip finishes.

*Note:* When streamAudio is true, it supersedes compression, and the download handler creates an AudioClip similar to an imported clip with the loadType [AudioClipLoadType.Streaming](AudioClipLoadType.Streaming.html).


            
