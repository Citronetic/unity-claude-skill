This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).AlignOf




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

public static int AlignOf();






### Returns



**int**
        The alignment size in bytes required for the specified struct type.





### Description



Retrieves the minimum memory alignment requirement for a specified struct type.





The `AlignOf` method calculates the minimum alignment required for a struct type in memory. This is crucial for ensuring the proper alignment of data structures, which can improve access speed and comply with hardware requirements.

Proper alignment can prevent performance penalties by avoiding misaligned data access, which might require multiple memory accesses. This function is particularly useful when you're implementing custom memory allocations or interop scenarios where data alignment is critical.


              


```
using System;
using Unity.Collections.LowLevel.Unsafe;
using System.Runtime.InteropServices;
using UnityEngine;[StructLayout(LayoutKind.Sequential)]
struct ExampleStruct
{
    public byte ByteValue;  // 1 byte
    public int IntValue;    // 4 bytes
    public byte AnotherByte; // 1 byte
}public class StructSizeAndAlignment : MonoBehaviour
{
    void Start()
    {
        // Calculate size and alignment for ExampleStruct
        int size = UnsafeUtility.SizeOf<ExampleStruct>();
        int alignment = UnsafeUtility.AlignOf<ExampleStruct>();        Debug.Log($"Size of ExampleStruct: {size} bytes");
        Debug.Log($"Alignment requirement of ExampleStruct: {alignment} bytes");
    }
}
```





Additional resources: [UnsafeUtility.SizeOf](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.SizeOf.html).


            
