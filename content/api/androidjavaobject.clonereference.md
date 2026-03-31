This version of Unity is unsupported.



# [AndroidJavaObject](AndroidJavaObject.html).CloneReference




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

public [AndroidJavaObject](AndroidJavaObject.html) CloneReference();






### Returns



**AndroidJavaObject**
        A new C# object which references the same Java object as the original instance.





### Description



Creates a clone of the C# object that references the same Java object.





Allows you to create multiple C# instances referencing the same Java object. The Java object will be excluded from garbage collection until all the C# references to it are disposed or garbage collected.
If you call this method on an [AndroidJavaClass](AndroidJavaClass.html) instance, the returned clone's type will also be AndroidJavaClass.


            
