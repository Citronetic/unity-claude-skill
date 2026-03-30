This version of Unity is unsupported.



# [NavMeshPath](AI.NavMeshPath.html).GetCornersNonAlloc




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

public int GetCornersNonAlloc(out Vector3[] results);






### Parameters



| Parameter | Description |
| --- | --- |
| results | Array to store path corners. |





### Returns



**int**
        The number of corners along the path - including start and end points.





### Description



Calculate the corners for the path.





This function is similar to the [corners](AI.NavMeshPath-corners.html) property except that the results are returned in the supplied array.

Note that this function expects the supplied array to have at least 2 elements.


            
