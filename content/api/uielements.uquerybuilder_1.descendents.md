This version of Unity is unsupported.



# [UQueryBuilder<T0>](UIElements.UQueryBuilder_1.html).Descendents




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

public UQueryBuilder<T2> Descendents(string name,
params string[] classNames);






### Description



Selects all elements, recursively, that are descendants of currently matching ancestors.


              


```
// Get all children, recursively, of root that are buttons and have classes "health-button" or "unity-button".
 var buttons = root.Query().Descendents<Button>(classNames: new[] { "health-button", "unity-button" });
```




---








## Declaration

public UQueryBuilder<T2> Descendents(string name,
string classname);






### Description



Selects all elements, recursively, that are descendants of currently matching ancestors.


              


```
// Get all children, recursively, of root that are buttons and have class "health-button".
 var buttons = root.Query().Descendents<Button>(classname: "health-button");
```


            
