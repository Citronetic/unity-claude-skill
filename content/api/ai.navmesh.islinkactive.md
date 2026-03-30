This version of Unity is unsupported.



# [NavMesh](AI.NavMesh.html).IsLinkActive




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

public static bool IsLinkActive([AI.NavMeshLinkInstance](AI.NavMeshLinkInstance.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The link instance whose state to query. |





### Returns



**bool**
        True if agents can plan paths through, and traverse, this instance of the link, otherwise false.





### Description



Determines whether the instance of the link can be used to [calculate](AI.NavMesh.CalculatePath.html) paths, and if NavMesh agents can move over it.





Use this method to determine if paths for the assigned [agent type](AI.NavMeshLinkData-agentTypeID.html) can traverse this link or not.

A link instance is active by default regardless of whether the ends connect to NavMesh surfaces or not. To change the link's state, call [SetLinkActive](AI.NavMesh.SetLinkActive.html). After you [remove](AI.NavMesh.RemoveLink.html) the link from the running navigation system this method always returns `false`.

This method is available as of 2023.2.

Additional resources: [SetLinkActive](AI.NavMesh.SetLinkActive.html).


            
