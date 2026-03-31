This version of Unity is unsupported.



# [ElementsList<T0>](Unity.Android.Gradle.Manifest.ElementsList_1.html).GetElement




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

public T GetElement(uint elementID);






## Declaration

public T GetElement(Dictionary<string,string> attributes);






## Declaration

public T GetElement(string name,
Dictionary<string,string> attributes);






### Parameters



| Parameter | Description |
| --- | --- |
| elementID | Element ID. |
| attributes | Dictionary of attributes that the element must include. |
| name | Element name. |





### Returns



**T**
        The element from the list that matches the parameter. If there isn't a match, returns null.





### Description



Gets an element from the list.


            
