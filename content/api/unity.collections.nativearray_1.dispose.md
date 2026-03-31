This version of Unity is unsupported.



# [NativeArray<T0>](Unity.Collections.NativeArray_1.html).Dispose




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

public void Dispose();






### Description



Disposes a [NativeArray<T0>](Unity.Collections.NativeArray_1.html).





This methods disposes the memory owned by a [NativeArray<T0>](Unity.Collections.NativeArray_1.html). The behavior of this methods depends on the
[Allocator](Unity.Collections.Allocator.html) used when the NativeArray was created.




---








## Declaration

public [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) Dispose([Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) inputDeps);






### Parameters



| Parameter | Description |
| --- | --- |
| inputDeps | The dependency of the new job. |





### Returns



**JobHandle**
        The [JobHandle](Unity.Jobs.JobHandle.html)] of the new job. The job depends upon `inputDeps` and releases all resources (memory and safety handles)
of the [NativeArray<T0>](Unity.Collections.NativeArray_1.html).





### Description



Creates and schedules a job that releases all resources (memory and safety handles) of a [NativeArray<T0>](Unity.Collections.NativeArray_1.html).


            
