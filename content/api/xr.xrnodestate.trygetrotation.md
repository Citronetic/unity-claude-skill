This version of Unity is unsupported.



# [XRNodeState](XR.XRNodeState.html).TryGetRotation




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

public bool TryGetRotation(out [Quaternion](Quaternion.html) rotation);






### Returns



**bool**
        True if the rotation was set in the output parameter. False if the rotation is not available due to limitations of the underlying platform or if the node is not presently tracked.





### Description



Attempt to retrieve a quaternion representing the current rotation of the tracked node.


            
