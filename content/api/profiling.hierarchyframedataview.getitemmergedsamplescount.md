This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).GetItemMergedSamplesCount




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

public int GetItemMergedSamplesCount(int id);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Hierarchy item identifier. |





### Returns



**int**
        Returns merged samples count represented by the tree item.





### Description



Return merged samples count represented by the hierarchy item.





When HierarchyFrameDataView.ViewMode.MergeSamplesWithTheSameName is active, multiple samples with the same name at the same hierarchy level are merged together and are represented by a single item.


            
