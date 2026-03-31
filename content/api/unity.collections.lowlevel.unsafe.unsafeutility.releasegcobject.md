This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).ReleaseGCObject




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

public static void ReleaseGCObject(ulong gcHandle);






### Parameters



| Parameter | Description |
| --- | --- |
| gcHandle | The handle associated with the pinned object. |





### Description



Releases a GC handle obtained from [UnsafeUtility.PinGCObjectAndGetAddress](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.PinGCObjectAndGetAddress.html) or [UnsafeUtility.PinGCArrayAndGetDataAddress](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.PinGCArrayAndGetDataAddress.html).





The `ReleaseGCObject` method unpins an object, allowing the garbage collector to manage its memory freely. Use this method to prevent resource leaks. Ensure you release each handle after finishing direct memory operations.


              


```
using Unity.Collections.LowLevel.Unsafe;
using UnityEngine;public class ReleaseGCObjectExample : MonoBehaviour
{
    private struct MyStruct
    {
        public int value;
    }    void Start()
    {
        // Box a struct
        object boxedStruct = new MyStruct { value = 10 };        // Pin the object and get a GC handle
        unsafe
        {
            void* dataPtr = UnsafeUtility.PinGCObjectAndGetAddress(boxedStruct, out ulong gcHandle);            // Access and modify data
            int objectHeaderSize = UnsafeUtility.SizeOf<long>() * 2;
            int* valuePtr = (int*)((byte*)dataPtr + objectHeaderSize);
            *valuePtr = 20;            // Release the GC handle
            UnsafeUtility.ReleaseGCObject(gcHandle);
        }        // Verify modification
        MyStruct modifiedStruct = (MyStruct)boxedStruct;
        Debug.Log($"Modified value: {modifiedStruct.value}"); // Outputs: 20        // Confirm handle release
        Debug.Log("GC handle released.");
    }
}
```





Additional resources: [UnsafeUtility.PinGCObjectAndGetAddress](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.PinGCObjectAndGetAddress.html), [UnsafeUtility.PinGCArrayAndGetDataAddress](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.PinGCArrayAndGetDataAddress.html).


            
