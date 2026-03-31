This version of Unity is unsupported.



# [Collision2D](Collision2D.html).GetContact




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

public [ContactPoint2D](ContactPoint2D.html) GetContact(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the contact to retrieve. |





### Returns



**ContactPoint2D**
        The contact at the specified `index`.





### Description



Gets the contact point at the specified `index`.





You can retrieve individual contacts for this collision by `index`. You can use [contactCount](Collision2D-contactCount.html) to determine how many contacts are available.

Additional resources: [contactCount](Collision2D-contactCount.html) and [GetContacts](Collision2D.GetContacts.html).


            
