This version of Unity is unsupported.



# ArchiveHandle





struct in
          Unity.IO.Archive



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Represents an asynchronous operation handle that references an archive.





Additional resources: [ArchiveFileInterface.MountAsync](Unity.IO.Archive.ArchiveFileInterface.MountAsync.html)





### Properties



| Property | Description |
| --- | --- |
| Compression | The type of compression the archive uses. |
| IsStreamed | Indicates if the archive contains streamed blocks. |
| JobHandle | JobHandle of the mount operation. |
| Status | Status of the archive mount operation. |





### Public Methods



| Method | Description |
| --- | --- |
| GetFileInfo | Retrieves information about files included in the archive. |
| GetMountPath | Retrieves the path where the archive was mounted. |
| Unmount | Removes the archive from its mount point. |


            
