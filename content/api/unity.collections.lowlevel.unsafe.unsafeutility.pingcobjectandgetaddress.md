This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).PinGCObjectAndGetAddress




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

public static void* PinGCObjectAndGetAddress(object target,
out ulong gcHandle);






### Parameters



| Parameter | Description |
| --- | --- |
| target | The object to pin. This should be a managed object whose memory location needs to remain fixed during garbage collection. |
| gcHandle | The handle associated with the pinned object. Manage this handle properly to ensure it is released when no longer needed. |





### Returns



**void***
        A pointer to the memory location of the pinned object. Use this pointer for direct memory access to the object's data.





### Description



Pins an object in memory, ensuring it remains at a fixed memory location during garbage collection.





The `PinGCObjectAndGetAddress` method pins a managed object, preventing the garbage collector from relocating it. This is particularly useful when you need to maintain stable memory addresses while interfacing with unmanaged code or performing low-level memory operations. Ensure that you release the GC handle using [UnsafeUtility.ReleaseGCObject](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.ReleaseGCObject.html) to prevent resource leaks.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class PinGCObjectBoxedStructExample : MonoBehaviour
{
    private struct MyStruct
    {
        public int value;
    }    void Start()
    {
        // Create and box a struct
        object myObject = new MyStruct { value = 20 };        // Pin the boxed struct and get the address of its memory location
        unsafe
        {
            void* dataPtr = UnsafeUtility.PinGCObjectAndGetAddress(myObject, out ulong gcHandle);            // Move the pointer to skip the object header to get to the struct value
            int objectHeaderSize = UnsafeUtility.SizeOf<long>() * 2; // Typical object header size in bytes
            int* valuePtr = (int*)((byte*)dataPtr + objectHeaderSize);            // Log the initial value
            Debug.Log($"Initial struct value: {*valuePtr}"); // Expected output: 20            // Modify the value through the pointer
            *valuePtr = 40;            // Release the GC handle after manipulation
            UnsafeUtility.ReleaseGCObject(gcHandle);
        }        // Re-cast the object to a struct to verify modifications
        MyStruct modifiedStruct = (MyStruct)myObject;
        Debug.Log($"Modified struct value: {modifiedStruct.value}"); // Expected output: 40        // Confirm the GC handle is released
        Debug.Log("GC handle released, boxed struct unpinned.");
    }
}
```





Additional resources: UnsafeUtility.PinGCArrayAndGetAddress.


            
