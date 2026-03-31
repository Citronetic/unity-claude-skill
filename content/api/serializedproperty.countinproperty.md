This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).CountInProperty




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

public int CountInProperty();






### Description



Count visible children of this property, including this property itself.





This is useful for allocating height for drawing this property including its children. Note that calling the method will move the property forward, so if this is not the desired behavior make a copy of the property before calling the method using [Copy](SerializedProperty.Copy.html).

                Additional resources: [hasVisibleChildren](SerializedProperty-hasVisibleChildren.html), [CountRemaining](SerializedProperty.CountRemaining.html)


            
