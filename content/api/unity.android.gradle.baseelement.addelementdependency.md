This version of Unity is unsupported.



# [BaseElement](Unity.Android.Gradle.BaseElement.html).AddElementDependency




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

public void AddElementDependency([Unity.Android.Gradle.BaseElement](Unity.Android.Gradle.BaseElement.html) element);






## Declaration

public void AddElementDependency(uint elementId);






### Parameters



| Parameter | Description |
| --- | --- |
| element | Element which this element depend on. |
| elementId | ID of an element which this element will depend on. |





### Description



Adds a dependency to this element.





This element will depend on the given element and therefore will be printed below the specified element in the generated file. You can't set an empty element as a dependency of another element and you can't set any element as a dependency of an empty element.

Unity throws an exception if:



          - The provided element does not share the same parent.

          - The provided element is empty.

          - This element is empty.




            
