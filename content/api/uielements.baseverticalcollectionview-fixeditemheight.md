This version of Unity is unsupported.



# [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).fixedItemHeight




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












                    public float fixedItemHeight;






### Description



The height of a single item in the list, in pixels.





This property must be set when using the virtualizationMethod is set to `FixedHeight`, for the collection view to function.
 If set when virtualizationMethod is `DynamicHeight`, it serves as the default height to help calculate the
 number of items necessary and the scrollable area, before items are laid out. It should be set to the minimum expected height of an item.


            
