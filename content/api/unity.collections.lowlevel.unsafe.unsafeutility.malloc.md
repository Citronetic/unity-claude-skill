This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).Malloc




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

public static void* Malloc(long size,
int alignment,
[Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| size | The number of bytes to allocate. Ensure this size matches the memory required for your data. |
| alignment | The alignment for the allocated memory block. |
| allocator | The allocator type, such as Allocator.Temp or Allocator.Persistent, indicating how the memory is managed. |





### Returns



**void***
        A pointer to the allocated memory block. Manage this pointer carefully to prevent memory leaks and ensure proper deallocation.





### Description



Allocates a block of memory of a specified size and alignment.





The `Malloc` method allocates a block of unmanaged memory. It allows developers to specify the size in bytes and the alignment of the memory block. This method is critical in performance-critical applications where precise memory control is required.

The memory allocated is not initialized to zero. Ensure that you free the allocated memory with [UnsafeUtility.Free](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Free.html) when it is no longer needed.


              


```
using UnityEngine;
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;public class MallocExample : MonoBehaviour
{
    void Start()
    {
        // Specify the number of elements
        int numElements = 10;        // Allocate memory for an array of integers
        unsafe
        {
            int* array = (int*)UnsafeUtility.Malloc(numElements * sizeof(int), UnsafeUtility.AlignOf<int>(), Allocator.Temp);            // Initialize the array with some values
            for (int i = 0; i < numElements; i++)
            {
                array[i] = i * 2;
            }            // Output the contents of the array
            for (int i = 0; i < numElements; i++)
            {
                Debug.Log(array[i]);  // Expected output: 0, 2, 4, 6, ..., 18
            }            // Free the allocated memory
            UnsafeUtility.Free(array, Allocator.Temp);
        }
    }
}
```





Additional resources: [UnsafeUtility.MallocTracked](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MallocTracked.html), [UnsafeUtility.FreeTracked](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.FreeTracked.html).


            
