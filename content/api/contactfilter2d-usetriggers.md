This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).useTriggers




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












                    public bool useTriggers;






### Description



Sets to filter contact results based on trigger collider involvement.





Set to false to ignore any contacts involving trigger colliders. Set to true, to filter any contacts involving triggers and return such contacts.

**Note:** Contacts filtered by involved trigger colliders, are not filtered by the normal angles of the collisions, so [useNormalAngle](ContactFilter2D-useNormalAngle.html), [minNormalAngle](ContactFilter2D-minNormalAngle.html) and [maxNormalAngle](ContactFilter2D-maxNormalAngle.html) are ignored. Other active contacts will continue to be filtered by the normal angles of the collisions.


            
