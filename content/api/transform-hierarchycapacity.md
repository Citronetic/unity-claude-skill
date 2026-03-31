This version of Unity is unsupported.



# [Transform](Transform.html).hierarchyCapacity




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public int hierarchyCapacity;






### Description



The transform capacity of the transform's hierarchy data structure.





Unity internally represents each transform hierarchy, i.e. a root and all it's deep children, with its own packed data structure. This data structure is resized when the number of transforms in it exceeds its capacity.

Setting the capacity to a value slightly larger than the maximum expected size can reduce memory usage and improve performance of [Transform.SetParent](Transform.SetParent.html) and [Object.Destroy](Object.Destroy.html) for very large hierarchies.

Additional resources: [Transform.hierarchyCount](Transform-hierarchyCount.html).


            
