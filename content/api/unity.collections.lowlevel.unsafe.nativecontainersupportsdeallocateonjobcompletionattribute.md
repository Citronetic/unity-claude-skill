This version of Unity is unsupported.



# NativeContainerSupportsDeallocateOnJobCompletionAttribute





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



Indicates that a NativeContainer can be automatically deallocated when a job is complete.





Apply this attribute to native container types that you want to automatically deallocate with [DeallocateOnJobCompletionAttribute](Unity.Collections.DeallocateOnJobCompletionAttribute.html).
The native container must contain the following fields:



          - A field named `m_Buffer` of a pointer type.

          - A field named `m_AllocatorLabel` of type [Allocator](Unity.Collections.Allocator.html).





The job system uses the values of these fields to automatically deallocate the native container on job completion.

Additional resources: [DeallocateOnJobCompletionAttribute](Unity.Collections.DeallocateOnJobCompletionAttribute.html)


              


```
[NativeDisableUnsafePtrRestriction]
      internal void*                  m_Buffer;
      internal Allocator              m_AllocatorLabel;
#if ENABLE_UNITY_COLLECTIONS_CHECKS
      [NativeSetClassTypeToNullOnSchedule]
      internal DisposeSentinel        m_DisposeSentinel;
#endif
```


            
