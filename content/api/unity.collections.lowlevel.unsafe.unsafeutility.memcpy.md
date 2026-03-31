This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).MemCpy




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

public static void MemCpy(void* destination,
void* source,
long size);






### Parameters



| Parameter | Description |
| --- | --- |
| destination | A pointer to the destination memory block. Ensure this block is large enough to store the data being copied. |
| source | A pointer to the source memory block. This block should contain the data you want to copy. |
| size | The number of bytes to copy from the source to the destination. |





### Description



Copies a specified number of bytes from a source memory location to a destination memory location.





The `MemCpy` method efficiently copies data from one memory location to another. It is ideal for quickly duplicating memory content in performance-critical applications. Note that if the source and destination memory regions overlap, the result is not guaranteed to be correct. In such cases, use [UnsafeUtility.MemMove](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemMove.html) to handle overlapping data safely.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class MemCpyExample : MonoBehaviour
{
    void Start()
    {
        int numElements = 5;
        int size = numElements * sizeof(float);        // Use stackalloc to allocate memory for source and destination buffers
        unsafe
        {
            float* srcBuffer = stackalloc float[numElements];
            float* dstBuffer = stackalloc float[numElements];            // Initialize the source buffer with data
            for (int i = 0; i < numElements; i++)
            {
                srcBuffer[i] = i * 1.5f;  // Fills srcBuffer with values 0.0, 1.5, 3.0, 4.5, 6.0
            }            // Use MemCpy to copy data from source to destination
            UnsafeUtility.MemCpy(dstBuffer, srcBuffer, size);            // Output the contents of the destination buffer to verify the copy
            Debug.Log("Contents of destination buffer after MemCpy:");
            for (int i = 0; i < numElements; i++)
            {
                Debug.Log(dstBuffer[i]);  // Expected output: 0.0, 1.5, 3.0, 4.5, 6.0
            }
        }
    }
}
```





Additional resources: [UnsafeUtility.MemMove](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemMove.html).


            
