This version of Unity is unsupported.



# [AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html).SetNestedContainer




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

public static void SetNestedContainer([Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.html) handle,
bool isNestedContainer);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The AtomicSafetyHandle to flag. |
| isNestedContainer | Set to true to flag the container protected by this AtomicSafetyHandle as nested; false otherwise. |





### Description



Sets the nested container flag on an AtomicSafetyHandle.





The job system doesn't support nested containers which are containers where the individual elements inside the container are themselves
containers), because it can't configure the AtomicSafetyHandle instances stored inside the container's elements independently for each job using the container. This
means that attempting to use a nested container in a job doesn't work correctly.

To protect against using nested containers in jobs and prevent subtle and hard-to-diagnose errors from arising, you should set the nested container flag on any container's
AtomicSafetyHandle that detects that it is being used to store containers. This makes the Job Debugger throw an explicit error when scheduling a job which tries
to use a nested container.

Additional resources: [AtomicSafetyHandle.GetNestedContainer](Unity.Collections.LowLevel.Unsafe.AtomicSafetyHandle.GetNestedContainer.html).


            
