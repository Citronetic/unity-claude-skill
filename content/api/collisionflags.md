This version of Unity is unsupported.



# CollisionFlags





enumeration


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



















### Description



CollisionFlags is a bitmask returned by CharacterController.Move.





It gives you a broad overview of where your character collided with any other objects.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        CharacterController controller = GetComponent<CharacterController>();        if (controller.collisionFlags == CollisionFlags.None)
        {
            print("Free floating!");
        }        if ((controller.collisionFlags & CollisionFlags.Sides) != 0)
        {
            print("Touching sides!");
        }        if (controller.collisionFlags == CollisionFlags.Sides)
        {
            print("Only touching sides, nothing else!");
        }        if ((controller.collisionFlags & CollisionFlags.Above) != 0)
        {
            print("Touching Ceiling!");
        }        if (controller.collisionFlags == CollisionFlags.Above)
        {
            print("Only touching Ceiling, nothing else!");
        }        if ((controller.collisionFlags & CollisionFlags.Below) != 0)
        {
            print("Touching ground!");
        }        if (controller.collisionFlags == CollisionFlags.Below)
        {
            print("Only touching ground, nothing else!");
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | CollisionFlags is a bitmask returned by CharacterController.Move. |
| Sides | CollisionFlags is a bitmask returned by CharacterController.Move. |
| Above | CollisionFlags is a bitmask returned by CharacterController.Move. |
| Below | CollisionFlags is a bitmask returned by CharacterController.Move. |


            
