This version of Unity is unsupported.



# [AnimationUtility](AnimationUtility.html).GetObjectReferenceValue




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

public static bool GetObjectReferenceValue([GameObject](GameObject.html) root,
[EditorCurveBinding](EditorCurveBinding.html) binding,
out [Object](Object.html) data);






### Parameters



| Parameter | Description |
| --- | --- |
| root | The root GameObject of the animated hierarchy. |
| binding | The binding that defines the path and the properties of the value. |
| data | The resulting object value, if a value exists. |





### Returns



**bool**
        Returns True if the value exists. False otherwise.





### Description



Retrieves the object value that the binding points to.





Use this method when recording keyframes.


            
