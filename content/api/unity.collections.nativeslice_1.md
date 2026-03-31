This version of Unity is unsupported.



# NativeSlice<T0>





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



Provides a view on a buffer of native memory most commonly acquired from a [NativeArray<T0>](Unity.Collections.NativeArray_1.html).





A NativeSlice provides systems that means they can be used safely with jobs. In contrast to a [NativeArray<T0>](Unity.Collections.NativeArray_1.html),
a NativeSlice doesn't own any memory allocations and can't be disposed.

A NativeSlice supports a stride value and doesn't necessarily represent a contiguous memory range. The stride value
determines the number of bytes from the first byte of the element to the first byte of the next element. The stride value
must always be a multiple of the size of the type of the slice in bytes. The stride value allows you to skip elements from the underlying buffer.

By default, the stride is set to the size of the type of slice in bytes. This means that the slice represents a contiguous memory range.
If you don't need a stride and are only working with contiguous memory ranges, use [NativeArray<T0>](Unity.Collections.NativeArray_1.html) instead.





### Properties



| Property | Description |
| --- | --- |
| Length | Represents the number of elements in a NativeSlice<T0>. |
| Stride | Gets the stride value for the NativeSlice<T0> instance. |
| this[int] | Accesses NativeSlice<T0> elements by index. |





### Constructors



| Constructor | Description |
| --- | --- |
| NativeSlice_1 | Constructs a new NativeSlice from a NativeArray or NativeSlice. |





### Public Methods



| Method | Description |
| --- | --- |
| CopyFrom | Copies all the elements from a NativeSlice<T0> or managed array of the same length. |
| CopyTo | Copies all the elements of a NativeSlice<T0> to a NativeArray<T0> or managed array of the same length. |
| GetEnumerator | Gets an enumerator to iterate through the elements of a NativeSlice<T0>. |
| SliceConvert | Reinterprets a NativeSlice with a different data type (type punning). |
| SliceWithStride | SliceWithStride. |
| ToArray | Converts a NativeSlice<T0> to managed array. |





### Operators



| Operator | Description |
| --- | --- |
| NativeSlice<T> | Implicit operator to create a NativeSlice<T0> from a NativeArray<T0>. |


            
