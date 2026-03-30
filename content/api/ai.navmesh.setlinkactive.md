This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).SetLinkActive




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

public static void SetLinkActive([AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) handle,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The link instance whose active state to modify. |
| value | Whether agents can plan paths through, and traverse, the link. When the value is true, agents can plan paths through, and traverse, the link. Otherwise, no paths can use the link instance. |





### Description



Activates or deactivates the link instance. An active link instance can be traversed by agents and used to plan paths, but a deactivated link cannot.





This method changes the state of the link instance immediately. Any path that you [calculate](AI.NavMesh.CalculatePath.html) afterwards takes into account the new state of the link. When you disable the link instance any paths that have already been calculated through it get a [status](AI.NavMeshPath-status.html) value of [invalid](AI.NavMeshPathStatus.PathInvalid.html).

You can call this method at any time to deactivate the link and prevent agents from moving through a section of the game level, for example through a door that connects two rooms. Conversely, you can activate the link and allow the agents to move between the respective game level sections.

Deactivated links remain connected to the NavMesh surfaces and they do not need to find the connection points again when they are reactivated.

Any link instance created with the [AddLink](AI.NavMesh.AddLink.html) method is active by default.

This method is available as of 2023.2.

Additional resources: [IsLinkActive](AI.NavMesh.IsLinkActive.html).


            
