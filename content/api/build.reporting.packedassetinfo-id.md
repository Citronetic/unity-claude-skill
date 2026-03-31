This version of Unity is unsupported.



# [PackedAssetInfo](Build.Reporting.PackedAssetInfo.html).id




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












                    public long id;






### Description



Local file id of the object





For Serialized Files this is the local file id of the object in the file in the build output.  It will be unique within that file.
During the builds ids are reassigned, so this id will be different from the id of the object in its source scene or asset.

This ID is 0 for the content of .resS and .resource files.


            
