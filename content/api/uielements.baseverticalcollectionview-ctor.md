This version of Unity is unsupported.



# BaseVerticalCollectionView Constructor




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

public BaseVerticalCollectionView();






### Description



Creates a [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html) with all default properties.
 The [BaseVerticalCollectionView.itemsSource](UIElements.BaseVerticalCollectionView-itemsSource.html) must all be set for the BaseVerticalCollectionView to function properly.




---








## Declaration

public BaseVerticalCollectionView(IList itemsSource,
float itemHeight);






### Parameters



| Parameter | Description |
| --- | --- |
| itemsSource | The list of items to use as a data source. |
| itemHeight | The height of each item, in pixels. For FixedHeight virtualization only. |





### Description



Constructs a [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html), with all required properties provided.




---






                        **Obsolete**
                        makeItem and bindItem are now in ListView and TreeView directly, please use a constructor without these parameters.




## Declaration

public BaseVerticalCollectionView(IList itemsSource,
float itemHeight,
Func<VisualElement> makeItem,
Action<VisualElement,int> bindItem);






### Parameters



| Parameter | Description |
| --- | --- |
| itemsSource | The list of items to use as a data source. |
| itemHeight | The height of each item, in pixels. For FixedHeight virtualization only. |
| makeItem | The factory method to call to create a display item. The method should return a
 VisualElement that can be bound to a data item. |
| bindItem | The method to call to bind a data item to a display item. The method
 receives as parameters the display item to bind, and the index of the data item to bind it to. |





### Description



Obsolete.  Use [ListView](UIElements.ListView.html) or [TreeView](UIElements.TreeView.html) constructor directly.


            
