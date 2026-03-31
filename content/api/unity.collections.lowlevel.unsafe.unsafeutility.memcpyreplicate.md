This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).MemCpyReplicate




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

public static void MemCpyReplicate(void* destination,
void* source,
int size,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| destination | A pointer to the destination memory block. Ensure this block has enough space to hold the replicated data. |
| source | A pointer to the source memory block. This block should contain the data you want to replicate. |
| size | The size, in bytes, of the data block to copy and replicate. This specifies the number of bytes that are replicated each time. |
| count | The number of times to replicate the source data block in the destination buffer. |





### Description



Copies memory from a source to a destination and replicates it multiple times.





The `MemCpyReplicate` method copies a specified block of memory from a source location and replicates that block multiple times into a destination location. This is useful for quickly initializing a large buffer with repeated values, such as setting up constant buffers or initializing large arrays with repeated patterns.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class MemCpyReplicateExample : MonoBehaviour
{
    void Start()
    {
        int elementCount = 3;
        int replicateCount = 4;
        int dataSize = elementCount * sizeof(float);        // Use stackalloc to allocate memory for source and destination buffers
        unsafe
        {
            float* srcBuffer = stackalloc float[elementCount];
            float* dstBuffer = stackalloc float[elementCount * replicateCount];            // Initialize the source buffer with multiple values
            srcBuffer[0] = 1.1f;
            srcBuffer[1] = 2.2f;
            srcBuffer[2] = 3.3f;            // Use MemCpyReplicate to copy and replicate the source values into the destination
            UnsafeUtility.MemCpyReplicate(dstBuffer, srcBuffer, dataSize, replicateCount);            // Output the contents of the destination buffer to verify replication
            Debug.Log("Contents of destination buffer after MemCpyReplicate:");
            for (int i = 0; i < elementCount * replicateCount; i++)
            {
                Debug.Log(dstBuffer[i]);  // Expected pattern: 1.1, 2.2, 3.3 repeated
            }
        }
    }
}
```





Additional resources: [UnsafeUtility.MemCpy](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.MemCpy.html).


            
