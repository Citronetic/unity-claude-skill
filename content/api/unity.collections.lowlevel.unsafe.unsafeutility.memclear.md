This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).MemClear




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

public static void MemClear(void* destination,
long size);






### Parameters



| Parameter | Description |
| --- | --- |
| destination | A pointer to the start of the memory block you want to clear. Ensure this pointer is valid and that the memory region is correctly allocated. |
| size | The number of bytes to clear in the memory block. Ensure this size does not exceed the allocated memory to avoid data corruption. |





### Description



Clears a block of memory, setting all bytes to zero.





The `MemClear` method sets all bytes in a specified memory block to zero. This is useful for initializing memory without any residual data that might cause unexpected behavior. Use this method to ensure memory safety when reusing or reallocating memory blocks.

This method provides a fast and efficient way to clear data, which is important in scenarios where performance and reliability are paramount. It is often used when you need to reset arrays or buffers before further processing.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class MemClearExample : MonoBehaviour
{
    void Start()
    {
        int bufferSize = 10;        // Allocate a buffer using stackalloc
        unsafe
        {
            byte* buffer = stackalloc byte[bufferSize];            // Initialize the buffer with some data
            for (int i = 0; i < bufferSize; i++)
            {
                buffer[i] = (byte)(i + 1);
            }            // Output the buffer contents before clearing
            Debug.Log("Buffer contents before MemClear:");
            for (int i = 0; i < bufferSize; i++)
            {
                Debug.Log(buffer[i]);
            }            // Clear the buffer using MemClear
            UnsafeUtility.MemClear(buffer, bufferSize);            // Output the buffer contents after clearing
            Debug.Log("Buffer contents after MemClear:");
            for (int i = 0; i < bufferSize; i++)
            {
                Debug.Log(buffer[i]);  // Expected output: 0 for each element
            }
        }
    }
}
```





Additional resources: [UnsafeUtility.MemSet](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemSet.html).


            
