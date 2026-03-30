This version of Unity is unsupported.



# [NavMeshLinkData](AI.NavMeshLinkData.html).costModifier




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












                    public float costModifier;






### Description



If positive, overrides the pathfinder cost to traverse the link.





When searching for a path this cost multiplies the Euclidean distance between the link end points when scoring the link. If the value is negative, the default cost based on area type is used. The value must be >= 1.0.


            
