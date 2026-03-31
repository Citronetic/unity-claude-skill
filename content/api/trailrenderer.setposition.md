This version of Unity is unsupported.



# [TrailRenderer](TrailRenderer.html).SetPosition




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




                [Switch to Manual](../Manual/class-TrailRenderer.html)










## Declaration

public void SetPosition(int index,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Which position to set. |
| position | The new position. |





### Description



Set the position of a vertex in the trail.





You can only use this method to modify existing positions in the Trail. You cannot use it to add new positions.

When setting multiple positions, consider using [SetPositions](TrailRenderer.SetPositions.html) instead because it is much faster than making individual function calls for each position.

Additional resources: [positionCount](TrailRenderer-positionCount.html) property.


            
