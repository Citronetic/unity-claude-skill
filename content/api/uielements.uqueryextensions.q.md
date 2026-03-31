This version of Unity is unsupported.



# [UQueryExtensions](UIElements.UQueryExtensions.html).Q




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

public static T Q([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
params string[] classes);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. |
| classes | If provided, it selects elements with all the specified classes (case sensitive, to be distinguished from Type). |





### Returns



**T**
        The first element matching all the criteria, or null if none was found.





### Description



Convenience overload, shorthand for `Query<T>().Build().First().`




---








## Declaration

public static [UIElements.VisualElement](UIElements.VisualElement.html) Q([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
params string[] classes);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. |
| classes | If provided, it selects elements with all the specified classes (case sensitive, to be distinguished from Type). |





### Returns



**VisualElement**
        The first element matching all the criteria, or null if none was found.





### Description



Convenience overload, shorthand for `Query<T>().Build().First().`




---








## Declaration

public static T Q([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
string className);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. |
| className | If provided, it selects elements with the specified class (case sensitive, to be distinguished from Type). |





### Returns



**T**
        The first element matching all the criteria, or null if none was found.





### Description



Convenience overload, shorthand for `Query<T>().Build().First().`




---








## Declaration

public static [UIElements.VisualElement](UIElements.VisualElement.html) Q([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
string className);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. |
| className | If provided, it selects elements with the specified class (case sensitive, to be distinguished from Type). |





### Returns



**VisualElement**
        The first element matching all the criteria, or null if none was found.





### Description



Convenience overload, shorthand for `Query<T>().Build().First().`


            
