This version of Unity is unsupported.



# [ContactFilter2D](ContactFilter2D.html).IsFilteringNormalAngle




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

public bool IsFilteringNormalAngle([Vector2](Vector2.html) normal);






### Parameters



| Parameter | Description |
| --- | --- |
| normal | The normal used to calculate an angle. |





### Returns



**bool**
        Returns true when `normal` is excluded by the filter and false if otherwise.





### Description



Checks if the angle of `normal` is within the normal angle range to be filtered.





Filtering is defined as including or excluding objects based upon a specific condition.  Normal angle filtering checks an angle and includes it when it is within the normal angle range and excludes it if otherwise.
IsFilteringNormalAngle returns true when [useNormalAngle](ContactFilter2D-useNormalAngle.html) is set to true and the angle is outside the normal angle range defined by [minNormalAngle](ContactFilter2D-minNormalAngle.html) and [maxNormalAngle](ContactFilter2D-maxNormalAngle.html). This indicates the angle is filtered which means it should be excluded. IsFilteringNormalAngle returns false if otherwise.
**Note:**: Setting [useOutsideNormalAngle](ContactFilter2D-useOutsideNormalAngle.html) to true inverts the function behavior and it returns opposite results.
Additional resources: [useNormalAngle](ContactFilter2D-useNormalAngle.html), ::ref:minNormalAngle & [maxNormalAngle](ContactFilter2D-maxNormalAngle.html).




---








## Declaration

public bool IsFilteringNormalAngle(float angle);






### Parameters



| Parameter | Description |
| --- | --- |
| angle | The angle used for comparison in the filter. |





### Returns



**bool**
        Returns true when `angle` is excluded by the filter and false if otherwise.





### Description



Checks if the `angle` is within the normal angle range to be filtered.





Filtering is defined as including or excluding objects based upon a specific condition.  Normal angle filtering checks an angle and includes it when it is within the normal angle range and excludes it if otherwise.
IsFilteringNormalAngle returns true when [useNormalAngle](ContactFilter2D-useNormalAngle.html) is set to true and the angle is outside the normal angle range defined by [minNormalAngle](ContactFilter2D-minNormalAngle.html) and [maxNormalAngle](ContactFilter2D-maxNormalAngle.html). This indicates the angle is filtered which means it should be excluded. IsFilteringNormalAngle returns false if otherwise.
**Note:**: Setting [useOutsideNormalAngle](ContactFilter2D-useOutsideNormalAngle.html) to true inverts the function behavior and it returns opposite results.
Additional resources: [useNormalAngle](ContactFilter2D-useNormalAngle.html), ::ref:minNormalAngle & [maxNormalAngle](ContactFilter2D-maxNormalAngle.html).


            
