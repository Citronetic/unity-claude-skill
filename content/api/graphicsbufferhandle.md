This version of Unity is unsupported.



# GraphicsBufferHandle





struct in
          UnityEngine



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



Stores the internal handle of a [GraphicsBuffer](GraphicsBuffer.html) using a plain integer value.





The purpose of `GraphicsBufferHandle` is to represent a [GraphicsBuffer](GraphicsBuffer.html) using a struct which can be stored in unmanaged memory. This is necessary to interact with certain Unity APIs that may involve `unsafe`, Burst compatible code, and/or unmanaged memory such as NativeArray. For example, some parts of the [BatchRendererGroup](Rendering.BatchRendererGroup.html) API use `GraphicsBufferHandle` to be able to set buffers from Burst compatible code.

Any `GraphicsBufferHandle` instances with the same `value` are completely equivalent to one another. A `GraphicsBufferHandle` can be manually constructed with any `uint` value that originates from a valid `GraphicsBufferHandle.value`. For example, you could store the `value` into a `NativeArray<uint>`, and later construct a new `GraphicsBufferHandle` with the same integer read from the array, and it would be equivalent to the original `GraphicsBufferHandle`.

A `GraphicsBufferHandle` is valid as long as the [GraphicsBuffer](GraphicsBuffer.html) it has been fetched from has not been disposed.





### Properties



| Property | Description |
| --- | --- |
| value | The integer value of this GraphicsBufferHandle. |





### Public Methods



| Method | Description |
| --- | --- |
| CompareTo | Compares this GraphicsBufferHandle with another to determine their relative positions in the sort order, according to their integer values. |
| Equals | Checks if this GraphicsBufferHandle and another are equal, based on their integer values. |


            
