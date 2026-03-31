This version of Unity is unsupported.



# [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).virtualizationMethod




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












                    public [UIElements.CollectionVirtualizationMethod](UIElements.CollectionVirtualizationMethod.html) virtualizationMethod;






### Description



The virtualization method to use for this collection when a scroll bar is visible.
 Takes a value from the [CollectionVirtualizationMethod](UIElements.CollectionVirtualizationMethod.html) enum.





The default value is `FixedHeight`.
 When using fixed height, specify the fixedItemHeight property.
 Fixed height is more performant but offers less flexibility on content.
 When using `DynamicHeight`, the collection will wait for the actual height to be computed.
 Dynamic height is more flexible but less performant.


            
