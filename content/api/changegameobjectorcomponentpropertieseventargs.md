This version of Unity is unsupported.



# ChangeGameObjectOrComponentPropertiesEventArgs





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



A change of this type indicates that a property of a [GameObject](GameObject.html) or [Component](Component.html) has changed. This happens for example when [Undo.RecordObject](Undo.RecordObject.html) is used with an instance of a [Component](Component.html).





### Properties



| Property | Description |
| --- | --- |
| instanceId | The instance ID of the modified GameObject or Component. |
| scene | The Scene that contains the GameObject associated with the change. If a Component is changed, this is the GameObject to which the component belongs. |





### Constructors



| Constructor | Description |
| --- | --- |
| ChangeGameObjectOrComponentPropertiesEventArgs | Constructs a new instance. |


            
