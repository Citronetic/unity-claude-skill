This version of Unity is unsupported.



# [PlatformEffector2D](PlatformEffector2D.html).useOneWayGrouping




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












                    public bool useOneWayGrouping;






### Description



Ensures that all contacts controlled by the one-way behaviour act the same.





When using the [oneWay](PlatformEffector2D-oneWay.html) behaviour, each individual collider that comes into contact with the [PlatformEffector2D](PlatformEffector2D.html) is checked to see if it should be disabled or not by comparing its collision normal to the [surfaceArc](PlatformEffector2D-surfaceArc.html).  Working on each individual collider like this can cause problems on objects that are comprised of multiple colliders.

If an object is comprised of many colliders and one of them has a contact disabled due to the one-way behaviour then it may be preferable to do the same for all colliders on the same object should they come into contact with the same [PlatformEffector2D](PlatformEffector2D.html).  To do this, set the [useOneWayGrouping](PlatformEffector2D-useOneWayGrouping.html) to true.  When you do this, all colliders essentially act as one, all following each other with regards to the one-way behaviour.

When the [useOneWayGrouping](PlatformEffector2D-useOneWayGrouping.html) is not enabled, an object comprised of multiple colliders could end up in a situation where it has one collider contact disabled by passing through the one-way platform, but have others not able to pass through.

Additional resources: [useOneWay](PlatformEffector2D-useOneWay.html).


            
