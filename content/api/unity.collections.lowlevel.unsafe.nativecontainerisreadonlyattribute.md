This version of Unity is unsupported.



# NativeContainerIsReadOnlyAttribute





class in
          Unity.Collections.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Marks a native container type as read only.





Use this attribute when defining a read-only interface to the data stored in a native container.

Providing a read-only interface to a native collection can help to use your container efficiently because it removes any ambiguity about whether the code is reading or
writing the data when scheduling a job.

Native container types marked with this attribute must only allow read access. Applying this attribute doesn't prevent code that uses the native container type from
attempting to write to the native container.

For information on creating your own native container, refer to the User Manual documentation on [Implement a custom native container](../Manual/job-system-custom-nativecontainer.html).


            
