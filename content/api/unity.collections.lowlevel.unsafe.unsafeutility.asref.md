This version of Unity is unsupported.



# [UnsafeUtility](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.html).AsRef




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

public static ref T AsRef(void* ptr);






### Parameters



| Parameter | Description |
| --- | --- |
| ptr | A pointer to the memory location of the struct. Ensure the pointer is valid and correctly allocated. |





### Returns



**T**
        A reference to the struct of type `T`. This reference allows changes to the struct at its current memory location.





### Description



Gets a reference to a struct at a specific memory location.





The `AsRef` method provides a reference to a struct directly in memory. This allows efficient data manipulation without copying. Use this method when performance is critical, and you must access data in-place. Improper use can lead to memory corruption, so always ensure pointer validity.


              


```
using UnityEngine;
using Unity.Collections.LowLevel.Unsafe;public class AsRefExample : MonoBehaviour
{
    struct Position
    {
        public float X;
        public float Y;
        public float Z;
    }    void Start()
    {
        // Allocate memory for Position using stackalloc
        unsafe
        {
            Position* positionPtr = stackalloc Position[1];            // Set initial values
            positionPtr->X = 1.0f;
            positionPtr->Y = 2.0f;
            positionPtr->Z = 3.0f;            // Use AsRef to get a reference to the struct
            ref Position positionRef = ref UnsafeUtility.AsRef<Position>(positionPtr);            // Modify the struct through the reference
            positionRef.X = 10.0f;
            positionRef.Y = 20.0f;
            positionRef.Z = 30.0f;            // Output the modified values
            Debug.Log($"Modified Position: X = {positionPtr->X}, Y = {positionPtr->Y}, Z = {positionPtr->Z}");
        }
    }
}
```





Additional resources: [UnsafeUtility.As](Unity.Collections.LowLevel.Unsafe.UnsafeUtility.As.html).


            
