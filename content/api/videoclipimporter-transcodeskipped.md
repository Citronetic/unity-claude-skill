This version of Unity is unsupported.



# [VideoClipImporter](VideoClipImporter.html).transcodeSkipped




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












                    public bool transcodeSkipped;






### Description



Returns true if transcoding was skipped during import, false otherwise. (Read Only)

When [VideoImporterTargetSettings.enableTranscoding](VideoImporterTargetSettings-enableTranscoding.html) is set to true, the resulting transcoding operation done at import time may be quite long, up to many hours depending on source resolution and content duration. An option to skip this process is offered in the asset import progress bar. When skipped, the transcoding instead provides a non-transcoded verision of the asset. However, the importer settings stay intact so this property can be inspected to detect the incoherence with the generated artifact.

Re-importing without stopping the transcode process, or with transcode turned off, causes this property to become false.


            
