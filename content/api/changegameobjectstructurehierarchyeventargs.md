This version of Unity is unsupported.



# ChangeGameObjectStructureHierarchyEventArgs





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



A change of this type indicates that the structure of a [GameObject](GameObject.html) has changed and any [GameObject](GameObject.html) in the hierarchy below it might have changed. This happens for example when [Undo.RegisterFullObjectHierarchyUndo](Undo.RegisterFullObjectHierarchyUndo.html) is used.





An event of this type means that essentially anything on the [GameObject](GameObject.html) or any object in the hierarchy below it might have changed in arbitrary ways. This includes deletion and creation of additional objects, adding or deleting components, changes to the hierarchical structure, or modified properties.





### Properties



| Property | Description |
| --- | --- |
| instanceId | The instance ID of the GameObject that has been changed. |
| scene | The scene containing the GameObject that has been changed. |





### Constructors



| Constructor | Description |
| --- | --- |
| ChangeGameObjectStructureHierarchyEventArgs | Constructs a new instance. |


            
