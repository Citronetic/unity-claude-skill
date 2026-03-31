This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).IsFilteringTrigger




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

public bool IsFilteringTrigger([Collider2D](Collider2D.html) collider);






### Parameters



| Parameter | Description |
| --- | --- |
| collider | The Collider2D used to check for a trigger. |





### Returns



**bool**
        Returns true when `collider` is excluded by the filter and false if otherwise.





### Description



Checks if the `collider` is a trigger and should be filtered by the [useTriggers](ContactFilter2D-useTriggers.html) to be filtered.





Filtering is defined as including or excluding objects based upon a specific condition.  Trigger filtering checks the [Collider.isTrigger](Collider-isTrigger.html) and includes it if triggers are being used and excludes it otherwise.
IsFilteringTriggers returns true when [useTriggers](ContactFilter2D-useTriggers.html) is set to false and [Collider.isTrigger](Collider-isTrigger.html) is true. This indicates the `collider` is filtered which means it should be excluded. IsFilteringTriggers returns false if otherwise.

Additional resources: [useTriggers](ContactFilter2D-useTriggers.html).


            
