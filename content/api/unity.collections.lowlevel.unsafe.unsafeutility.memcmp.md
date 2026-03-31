This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).MemCmp




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

public static int MemCmp(void* ptr1,
void* ptr2,
long size);






### Parameters



| Parameter | Description |
| --- | --- |
| ptr1 | A pointer to the first memory buffer. This buffer contains the first block of data to compare. |
| ptr2 | A pointer to the second memory buffer to compare against the first. Ensure this buffer is the same size as the first for an accurate comparison. |
| size | The number of bytes to compare between the two memory regions. |





### Returns



**int**
        Returns 0 if the contents of the two memory regions are identical; returns a non-zero value if they differ.





### Description



Checks whether two memory regions are identical.





The `MemCmp` method compares two memory regions to determine if they contain identical data. It returns zero if the memory contents are the same and a non-zero value if they differ. This method can be used to compare data blocks efficiently in performance-critical applications.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class MemCmpExample : MonoBehaviour
{
    void Start()
    {
        int numElements = 5;
        int size = numElements * sizeof(int);

        unsafe
        {
            // Use stackalloc to allocate memory for three buffers
            int* buffer1 = stackalloc int[numElements];
            int* buffer2 = stackalloc int[numElements];
            int* buffer3 = stackalloc int[numElements];            // Initialize buffer1 with data
            for (int i = 0; i < numElements; i++)
            {
                buffer1[i] = i * 10;  // 0, 10, 20, 30, 40
            }            // Copy contents from buffer1 to buffer2
            UnsafeUtility.MemCpy(buffer2, buffer1, size);            // Modify buffer3 differently
            for (int i = 0; i < numElements; i++)
            {
                buffer3[i] = buffer1[i] + 1;  // 1, 11, 21, 31, 41
            }            // Compare buffer1 and buffer2
            int result1 = UnsafeUtility.MemCmp(buffer1, buffer2, size);
            Debug.Log($"Comparing buffer1 and buffer2, Result: {result1}");  // Expected output: 0 (identical)            // Compare buffer1 and buffer3
            int result2 = UnsafeUtility.MemCmp(buffer1, buffer3, size);
            Debug.Log($"Comparing buffer1 and buffer3, Result: {result2}");  // Expected output: non-zero (different)
        }
    }
}
```





Additional resources: [UnsafeUtility.MemSet](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemSet.html).


            
