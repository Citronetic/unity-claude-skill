This version of Unity is unsupported.



# NativeContainerIsAtomicWriteOnlyAttribute





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



Indicates that the native container only allows writing, and can only be written to in safe, parallel contexts.





Use this attribute when defining a concurrent, write-only interface to the data in the native container.

Providing a write-only interface to the data in a native container allows your container to be passed to parallel job types, such as IJobParallelFor, as writable
without restrictions on which indices can be written to, and indicates that none of the portions overlap.

Native container types marked with this attribute must enforce write-only access.

For an alternative method of supporting parallel writing, refer to [NativeContainerSupportsMinMaxWriteRestrictionAttribute](Unity.Collections.LowLevel.Unsafe.NativeContainerSupportsMinMaxWriteRestrictionAttribute.html). For information on creating your own native
container, refer to the User Manual documentation on [Implement a custom native container](../Manual/job-system-custom-nativecontainer.html).


            
