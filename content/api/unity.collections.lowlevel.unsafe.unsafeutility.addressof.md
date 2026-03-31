This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).AddressOf




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

public static void* AddressOf(ref T output);






### Parameters



| Parameter | Description |
| --- | --- |
| output | The managed object for which you need the memory address. Ensure the object remains valid and exists throughout the use of its address. |





### Returns



**void***
        A void pointer that represents the memory address of the object. This pointer allows direct access to the memory location. Manage this pointer carefully to prevent runtime errors.





### Description



Obtains the memory address of the specified object as a pointer.





The `AddressOf` method retrieves the memory address of a managed object. Use this in scenarios that need direct memory access or interaction with unmanaged code, where efficiency is crucial.

Exercise caution when you use this method. Improper handling of memory addresses may cause memory corruption or application instability. Use this method to enhance performance in areas where managed memory safety has significant overhead.


              


```
using Unity.Collections.LowLevel.Unsafe;
using UnityEngine;public class AddressOfExample : MonoBehaviour
{
    struct ExampleStruct
    {
        public int Number;
    }    void Start()
    {
        ExampleStruct example = new ExampleStruct { Number = 100 };
        unsafe
        {
            // Get the memory address of the struct
            void* address = UnsafeUtility.AddressOf(ref example);            // Modify the struct's value directly through the pointer
            ExampleStruct* pointer = (ExampleStruct*)address;
            pointer->Number = 200;            Debug.Log($"Modified value: {example.Number}");  // Outputs: Modified value: 200
        }
    }
}
```





Additional resources: [UnsafeUtility.As](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.As.html).


            
