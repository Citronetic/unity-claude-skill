This version of Unity is unsupported.



# NativeArray<T0>





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



Provides a buffer of native memory to managed code, making it possible to share data between managed and native code without marshalling costs.





NativeArray is a fixed-size block of unmanaged memory which you can directly access from managed code. You can use NativeArray instances in jobs and Burst-compiled code, with optional safety checks for bounds, access, and dependencies. You explicitly control allocation and disposal via an allocator, and Unity tracks allocations to help detect memory leaks. You can use the [Unity Collections package](https://docs.unity3d.com/Packages/com.unity.collections@latest ) to further extend its functionality.





### Properties



| Property | Description |
| --- | --- |
| IsCreated | Indicates that a NativeArray<T0> has an allocated memory buffer. |
| Length | Number of elements in a NativeArray<T0>. |
| this[int] | Access NativeArray<T0> elements by index. |





### Constructors



| Constructor | Description |
| --- | --- |
| NativeArray_1 | Creates a NativeArray from an array of elements. |





### Public Methods



| Method | Description |
| --- | --- |
| AsReadOnly | Casts a NativeArray<T0> to read-only array. |
| AsReadOnlySpan | Exposes NativeArray<T0> data as a System.ReadOnlySpan<T>. |
| AsSpan | Exposes NativeArray<T0> data as a System.Span<T>. |
| CopyFrom | Copies all the elements from a NativeArray<T0> or a managed array of the same length. |
| CopyTo | Copies all the elements to another NativeArray<T0> or a managed array of the same length. |
| Dispose | Disposes a NativeArray<T0>. |
| Equals | Compares two NativeArray<T0> instances. |
| GetEnumerator | Gets an enumerator. |
| GetHashCode | Gets a hash code for the current instance. |
| GetSubArray | Gets a view into an array starting at the specified index. |
| Reinterpret | Reinterpret a NativeArray<T0> with a different data type (type punning). |
| ReinterpretLoad | Reinterpret and load data starting at underlying index as a different type. |
| ReinterpretStore | Reinterpret and store data starting at underlying index as a different type. |
| ToArray | Convert a NativeArray<T0> to an array. |





### Static Methods



| Method | Description |
| --- | --- |
| Copy | Copies a range of elements from a source array to a destination array, starting from the source index and copying them to the destination index. |


            
