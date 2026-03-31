This version of Unity is unsupported.



# [UQueryExtensions](UIElements.UQueryExtensions.html).Query




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

public static UQueryBuilder<VisualElement> Query([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
params string[] classes);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. The default value is null. |
| classes | If provided, it selects elements with all the specified classes (case sensitive, to be distinguished from Type). |





### Returns



**UQueryBuilder<VisualElement>**
        QueryBuilder configured with the associated selection rules.





### Description



Initializes a QueryBuilder with the specified selection rules.




---








## Declaration

public static UQueryBuilder<VisualElement> Query([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
string className);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. The default value is null. |
| className | If provided, it selects elements with the specified class (case sensitive, to be distinguished from Type). The default value is null. |





### Returns



**UQueryBuilder<VisualElement>**
        QueryBuilder configured with the associated selection rules.





### Description



Initializes a QueryBuilder with the specified selection rules.




---








## Declaration

public static UQueryBuilder<T> Query([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
params string[] classes);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. The default value is null. |
| classes | If provided, it selects elements with all the specified classes (case sensitive, to be distinguished from Type). |





### Returns



**UQueryBuilder<T>**
        QueryBuilder configured with the associated selection rules.





### Description



Initializes a QueryBuilder with the specified selection rules.




---








## Declaration

public static UQueryBuilder<T> Query([UIElements.VisualElement](UIElements.VisualElement.html) e,
string name,
string className);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |
| name | If specified, will select elements with this name. The default value is null. |
| className | If provided, it selects elements with the specified class (case sensitive, to be distinguished from Type). The default value is null. |





### Returns



**UQueryBuilder<T>**
        QueryBuilder configured with the associated selection rules.





### Description



Initializes a QueryBuilder with the specified selection rules.




---








## Declaration

public static UQueryBuilder<VisualElement> Query([UIElements.VisualElement](UIElements.VisualElement.html) e);






### Parameters



| Parameter | Description |
| --- | --- |
| e | Root VisualElement on which the selector will be applied. |





### Returns



**UQueryBuilder<VisualElement>**
        QueryBuilder configured with the associated selection rules.





### Description



Initializes a QueryBuilder with the specified selection rules.


            
