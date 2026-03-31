This version of Unity is unsupported.



# [ArchiveFileInterface](Unity.IO.Archive.ArchiveFileInterface.html).MountAsync




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

public static [Unity.IO.Archive.ArchiveHandle](Unity.IO.Archive.ArchiveHandle.html) MountAsync([Unity.Content.ContentNamespace](Unity.Content.ContentNamespace.html) namespaceId,
string filePath,
string prefix);






### Parameters



| Parameter | Description |
| --- | --- |
| namespaceId | ContentNamespace identifier. |
| filePath | Path of the archive on disk. |
| prefix | Mount point identifier. Set to an empty string if no prefix should be used. |





### Returns



**ArchiveHandle**
        Returns an operation handle that references the archive.





### Description



Loads all files in an archive to a mount point.





The mounted files can only be accessed through APIs that use Unity's virtual file system such as [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html). They cannot be accessed through the regular C# APIs such as System.IO.


            
