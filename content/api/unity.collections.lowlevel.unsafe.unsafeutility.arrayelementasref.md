This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).ArrayElementAsRef




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

public static ref T ArrayElementAsRef(void* ptr,
int index);






### Parameters



| Parameter | Description |
| --- | --- |
| ptr | A pointer to the first element of the array. Ensure that this pointer is valid and points to allocated memory. |
| index | The zero-based index of the element to reference. Verify that the index is within the bounds of the array to prevent access violations. |





### Returns



**T**
        A reference to the value of type T at the specified index within the array. This reference allows direct manipulation of the value at its memory location.





### Description



Obtains a reference to a value of type `T` in an array at a specified index in memory.





The `ArrayElementAsRef` method allows direct access to an array element by its index in memory. This method provides a reference to the element, enabling efficient data manipulation without copying. Use this method with care, as incorrect pointer usage can cause memory corruption or application crashes.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;
using System.Runtime.InteropServices;public class ArrayElementAsRefExample : MonoBehaviour
{
    [StructLayout(LayoutKind.Sequential)]
    struct CustomStruct
    {
        public int Id;
        public float Value;
    }    void Start()
    {
        int arrayLength = 5;        // Allocate a buffer for CustomStruct using stackalloc
        unsafe
        {
            CustomStruct* structArray = stackalloc CustomStruct[arrayLength];            // Initialize the array with values
            for (int i = 0; i < arrayLength; i++)
            {
                structArray[i].Id = i;
                structArray[i].Value = i * 1.5f;
            }            // Get a reference to an element using ArrayElementAsRef
            ref CustomStruct element = ref UnsafeUtility.ArrayElementAsRef<CustomStruct>(structArray, 2);
            element.Value = 99.9f;  // Modify the value in place            // Output the modified value
            Debug.Log($"Modified element at index 2: Id = {structArray[2].Id}, Value = {structArray[2].Value}");
        }
    }
}
```





Additional resources: [UnsafeUtility.ReadArrayElement](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.ReadArrayElement.html), [UnsafeUtility.WriteArrayElement](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.WriteArrayElement.html).


            
