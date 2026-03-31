This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).CountRemaining




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

public int CountRemaining();






### Description



Count remaining visible properties.





This is useful for allocating height for drawing this property and all the following ones. Note that calling this method will move the property forward to the end of the [SerializedObject](SerializedObject.html). If this is not the desired behavior either use [Copy](SerializedProperty.Copy.html) to make a copy of the current property before calling this method or [Reset](SerializedProperty.Reset.html) to reset the property after calling this method.

                Additional resources: [hasVisibleChildren](SerializedProperty-hasVisibleChildren.html), [CountInProperty](SerializedProperty.CountInProperty.html)


            
