This version of Unity is unsupported.



# NativeContainerSupportsMinMaxWriteRestrictionAttribute





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



Indicates that a native container type can restrict its writable ranges to be between a min and a max index.





You must mark your native container type with this attribute to write to an instance of the container type in an IJobParallelFor job. IJobParallelFor
jobs use this write restriction to make sure that each parallel job instance only writes to its assigned range in the native container.

To support the min-max write restriction, your native container type must have the members `int m_Length`, `int m_MinIndex`, and `int m_MaxIndex` in that order with no
other members between them. The container must also throw an exception for writes outside the min/max range.

**Note:** You can relax the parallel writing restriction for any native container instance using the NativeDisableParallelForRestriction attribute. However, that also removes
any checks to prevent parallel job instances from overwriting the same elements in the container.


              


```
private readonly int m_Length;
#if ENABLE_UNITY_COLLECTIONS_CHECKS
        private readonly int m_MinIndex;
        private readonly int m_MaxIndex;
#endif
```


            
