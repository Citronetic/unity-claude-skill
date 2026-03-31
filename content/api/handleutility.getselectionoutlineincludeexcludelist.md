This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).GetSelectionOutlineIncludeExcludeList




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

public static [PickingIncludeExcludeList](PickingIncludeExcludeList.html) GetSelectionOutlineIncludeExcludeList([Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| allocator | The allocator to use to create the PickingIncludeExcludeList object. |





### Returns



**PickingIncludeExcludeList**
        The [PickingIncludeExcludeList](PickingIncludeExcludeList.html) struct.





### Description



Gets the selection outline [PickingIncludeExcludeList](PickingIncludeExcludeList.html) for the currently executing BatchRendererGroup.OnPerformCulling callback.





**Note**: If you call this method outside of a BatchRendererGroup.OnPerformCulling callback, it returns an empty [PickingIncludeExcludeList](PickingIncludeExcludeList.html) object.


            
