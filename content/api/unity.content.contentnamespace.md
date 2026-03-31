This version of Unity is unsupported.



# ContentNamespace





struct in
          Unity.Content



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



Provides functionality for grouping loaded Archive files into separate namespaces.





You can use the [ContentNamespace.Default](Unity.Content.ContentNamespace.Default.html) namespace, or create your own custom namespace with [ContentNamespace.GetOrCreateNamespace](Unity.Content.ContentNamespace.GetOrCreateNamespace.html).

                **Note:** A ContentNamespace name must contain only alphanumeric characters and can't be longer than 16 characters.

                Additional resources: [ArchiveFileInterface.MountAsync](Unity.IO.Archive.ArchiveFileInterface.MountAsync.html).





### Static Properties



| Property | Description |
| --- | --- |
| Default | Default ContentNamespace object. |





### Properties



| Property | Description |
| --- | --- |
| IsValid | Indicates whether the ContentNamespace still exists. |





### Public Methods



| Method | Description |
| --- | --- |
| Delete | Destroys the specified ContentNamespace object. |
| GetName | Retrieves the name of the ContentNamespace. |





### Static Methods



| Method | Description |
| --- | --- |
| GetAll | Retrieves all existing ContentNamespace objects. |
| GetOrCreateNamespace | Retrieves or creates the ContentNamespace if it doesn't exist. |


            
