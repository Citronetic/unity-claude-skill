This version of Unity is unsupported.



# [RectTransformUtility](RectTransformUtility.html).CalculateRelativeRectTransformBounds




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

public static [Bounds](Bounds.html) CalculateRelativeRectTransformBounds([Transform](Transform.html) root,
[Transform](Transform.html) child);






## Declaration

public static [Bounds](Bounds.html) CalculateRelativeRectTransformBounds([Transform](Transform.html) trans);






### Parameters



| Parameter | Description |
| --- | --- |
| root | The Transform to use when converting from world to local space. |
| child | The parent Transform object whose RectTransform children will be encapsulated. |
| trans | The Transform to both search for RectTransform children and convert into world to local space. |





### Returns



**Bounds**
        A Bounds object representing the encapsulated bounds in local space relative to the root Transform.





### Description



Creates a Bounds object that encapsulates all the child RectTransform objects found in the `child` parameter, and converts the resulting bounds into local space relative to the `root` transform.


            
