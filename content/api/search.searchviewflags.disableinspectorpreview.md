This version of Unity is unsupported.



# [SearchViewFlags](Search.SearchViewFlags.html).DisableInspectorPreview




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



















### Description



This flag disables the use of the Inspector Preview in the Search Picker window.





This flag is not set by default. When it is set, the Search Picker window will not show any panel or button related to the Inspector Preview. The flag [OpenInspectorPreview](Search.SearchViewFlags.OpenInspectorPreview.html) will not work when [DisableInspectorPreview](Search.SearchViewFlags.DisableInspectorPreview.html) is set.


              


```
[SearchContext("t:material", "asset", SearchViewFlags.DisableInspectorPreview)]
public Material selectMaterial;
```


            
