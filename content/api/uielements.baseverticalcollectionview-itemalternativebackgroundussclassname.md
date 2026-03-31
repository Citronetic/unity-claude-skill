This version of Unity is unsupported.



# [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).itemAlternativeBackgroundUssClassName




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












                    public static string itemAlternativeBackgroundUssClassName;






### Description



The USS class name for odd rows in the BaseVerticalCollectionView.





Unity adds this USS class to every odd-numbered item in the BaseVerticalCollectionView when the
 [BaseVerticalCollectionView.showAlternatingRowBackgrounds](UIElements.BaseVerticalCollectionView-showAlternatingRowBackgrounds.html) property is set to `ContentOnly` or `All`.
 When the `showAlternatingRowBackgrounds` property is set to either of those values, odd-numbered items
 are displayed with a different background color than even-numbered items. This USS class is used to differentiate
 odd-numbered items from even-numbered items. When the `showAlternatingRowBackgrounds` property is set to
 `None`, the USS class is not added, and any styling or behavior that relies on it's invalidated.


            
