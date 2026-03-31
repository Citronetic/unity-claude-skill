This version of Unity is unsupported.



# [ISearchView](Search.ISearchView.html).itemIconSize




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












                    public float itemIconSize;






### Description



Defines the size of items in the search view.





[Image: image].


              


```
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_itemIconSize
{
    [MenuItem("Examples/ISearchView/itemIconSize")]
    public static void Run()
    {
        // SearchService can open a SearchView.
        var view = SearchService.ShowContextual("asset");
        view.itemIconSize = 45;
    }
}
```


            
