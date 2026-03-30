This version of Unity is unsupported.



# [NavMeshPath](AI.NavMeshPath.html).status




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












                    public [AI.NavMeshPathStatus](AI.NavMeshPathStatus.html) status;






### Description



Status of the path. (Read Only)





This reports whether the path reaches the target, reaches part of the way to the target, or is just not valid. Among other reasons, a path returns [NavMeshPathStatus.PathInvalid](AI.NavMeshPathStatus.PathInvalid.html) if it can't determine the nearest polygon of the source or target position, or if the path would have been a partial result, but the point closest to the target on the final polygon could not be determined. These situations are rare, and may arise if the navigation mesh is being changed while a path is being calculated.


            
