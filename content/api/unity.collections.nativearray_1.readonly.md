This version of Unity is unsupported.



# ReadOnly





struct in
          Unity.Collections



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



Represents a [NativeArray<T0>](Unity.Collections.NativeArray_1.html) interface constrained to read-only operations.





### Properties



| Property | Description |
| --- | --- |
| IsCreated | Indicates that a ReadOnly has an allocated memory buffer. |
| Length | Provides the number of elements in the ReadOnly. |
| this[int] | Provides read-only access to ReadOnly elements by index. |





### Public Methods



| Method | Description |
| --- | --- |
| AsReadOnlySpan | Exposes ReadOnly data as a System.ReadOnlySpan<T>. |
| CopyTo | Copies all elements to a ReadOnly or managed array of the same length. |
| GetEnumerator | Gets an enumerator. |
| Reinterpret | Reinterpret a ReadOnly with a different data type (type punning). |
| ToArray | Convert the data in a ReadOnly to a managed array. |
| UnsafeElementAt | Provides read-only access to ReadOnly elements by index. |


            
