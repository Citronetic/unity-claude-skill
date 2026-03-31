This version of Unity is unsupported.



# ChangeRootOrderEventArgs





struct in
          UnityEditor


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



A change of this type indicates that a GameObject placed at the scene root has been reordered. This happens when [Undo.SetSiblingIndex](Undo.SetSiblingIndex.html) is called or when reordering a root GameObject in the hierarchy under the same parent.





### Properties



| Property | Description |
| --- | --- |
| instanceId | The instance ID of the GameObject being reordered. Note that this is not the instance ID of the Transform component. |
| scene | The Scene containing the GameObject whose root order index was changed. |





### Constructors



| Constructor | Description |
| --- | --- |
| ChangeRootOrderEventArgs | Constructs a new instance. |


            
