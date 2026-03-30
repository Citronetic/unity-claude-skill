This version of Unity is unsupported.



# [OffMeshLinkData](AI.OffMeshLinkData.html).owner




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












                    public Object owner;






### Description



Get the object used to create the NavMesh link represented by the data in this struct.





If the link has been instantiated by a call to [NavMesh.AddLink](AI.NavMesh.AddLink.html) then this property returns the object that might have been associated to that instance with a call to [NavMesh.SetLinkOwner](AI.NavMesh.SetLinkOwner.html). If that link instance has no owner assigned to it then this property returns null.

If the link was instantiated by an OffMeshLink component then the owner returns a reference to that component.

To effectively use this property in your scripts you need to determine the exact type of the returned object. To do that cast the object to the types that you use in your project to create NavMesh links.

For automatically-generated Jump or Drop links, this property returns null.

Additional resources: [NavMesh.SetLinkOwner](AI.NavMesh.SetLinkOwner.html).


            
