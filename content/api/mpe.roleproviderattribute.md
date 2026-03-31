This version of Unity is unsupported.



# RoleProviderAttribute





class in
          UnityEditor.MPE


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



An attribute used to decorate function that defines how a slave process can interact with a main instance of Unity.





### Properties



| Property | Description |
| --- | --- |
| eventType | The event that the process triggered. |
| level | The process level (either master or slave) that the handler is registered on. |
| name | The name of the RoleProvider. For example, StandaloneProfiler. |





### Constructors



| Constructor | Description |
| --- | --- |
| RoleProviderAttribute | Constructor for a RoleProviderAttribute. Allows you to register a handler that is triggered when a specific ProcessEvent is triggered in a UnityEditor process of a specific ProcessLevel. |


            
