This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).Free




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

public static void Free(void* memory,
[Unity.Collections.Allocator](Unity.Collections.Allocator.html) allocator);






### Parameters



| Parameter | Description |
| --- | --- |
| memory | A pointer to the block of memory you want to free. Ensure this pointer is valid and was previously allocated using UnsafeUtility.Malloc to avoid undefined behavior. |
| allocator | The allocator type that was originally used to allocate the memory. It is crucial that the allocator matches the one used during allocation to ensure correct deallocation. |





### Description



Frees a block of memory that was previously allocated.





The `Free` method deallocates memory that was allocated using [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html). This is essential to prevent memory leaks, which can lead to reduced application performance or system instability. Always ensure that any allocated memory is freed when it is no longer needed.

Exercise caution when using this method. Improper deallocation of memory can result in undefined behavior and application crashes. The allocator used in this function should match the one used in the corresponding allocation.


              


```
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;
using UnityEngine;public class UnsafeUtilityFreeExample : MonoBehaviour
{
    void Start()
    {
        unsafe
        {
            // Allocate a block of memory for 10 integers
            int sizeOfInt = UnsafeUtility.SizeOf<int>();
            void* memoryBlock = UnsafeUtility.Malloc(sizeOfInt * 10, 4, Allocator.Temp);            // Ensure memory is freed when no longer needed
            UnsafeUtility.Free(memoryBlock, Allocator.Temp);
            Debug.Log("Memory block freed.");
        }
    }
}
```





Additional resources: [UnsafeUtility.Malloc](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.Malloc.html).


            
