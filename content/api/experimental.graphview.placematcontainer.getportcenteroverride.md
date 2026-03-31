This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [PlacematContainer](Experimental.GraphView.PlacematContainer.html).GetPortCenterOverride




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

public bool GetPortCenterOverride([Experimental.GraphView.Port](Experimental.GraphView.Port.html) port,
out [Vector2](Vector2.html) overriddenPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| port | The specific port. |
| overriddenPosition | The overridden position, if the port is overridden. Set to Vector2.zero otherwise. |





### Returns



**bool**
        Returns true if the port center is overridden. Returns false otherwise





### Description



Gets another location for a specific port and checks if the port has an overridden position.





Use this method for when nodes are hidden by a collapsed placemat and the edges redirect elsewhere.


            
