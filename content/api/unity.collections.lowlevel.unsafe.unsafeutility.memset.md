This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).MemSet




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

public static void MemSet(void* destination,
byte value,
long size);






### Parameters



| Parameter | Description |
| --- | --- |
| destination | A pointer to the start of the memory block that you want to fill. Ensure that the memory region has space equal to or greater than the specified size to avoid overflow. |
| value | The byte value used to fill the memory block. This value is duplicated throughout the entire specified size of the block. |
| size | The number of bytes to set in the memory block. Ensure that this size does not exceed the capacity of the destination buffer to prevent memory corruption. |





### Description



Sets a block of memory to a specified byte value for a defined size.





The `MemSet` method fills a specified block of memory with a given byte value. This operation is useful for initializing memory to a known state, such as setting a buffer to zero or another specific value. Properly initializing memory can prevent data leaks and ensure predictable behavior in memory management.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class MemSetExample : MonoBehaviour
{
    void Start()
    {
        int bufferSize = 10;        // Allocate a buffer using stackalloc
        unsafe
        {
            byte* buffer = stackalloc byte[bufferSize];            // Use MemSet to initialize buffer with the value 0xFF
            UnsafeUtility.MemSet(buffer, 0xFF, bufferSize);            // Output the initialized buffer to verify the result
            Debug.Log("Buffer contents after MemSet:");
            for (int i = 0; i < bufferSize; i++)
            {
                Debug.Log(buffer[i]);  // Expected output: 255 (0xFF) for each element
            }
        }
    }
}
```





Additional resources: [UnsafeUtility.MemCpy](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemCpy.html).


            
