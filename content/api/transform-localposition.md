This version of Unity is unsupported.



# [Transform](Transform.html).localPosition




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Vector3](Vector3.html) localPosition;






### Description



Position of the transform relative to the parent transform.





If the transform has no parent, it's the same as [Transform.position](Transform-position.html).

Like most Transform operations, localPosition may not always be accessible, particularly during certain operations such as an [Undo](Undo.html) operation or before the transform hierarchy is fully initialized. For example, OnValidate() can be invoked before the hierarchy is completely set up, potentially causing a logged error. If you attempt to access localPosition at an incompatible time, it will return Vector3.zero instead of the actual value.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        // Move the object to the same position as the parent:
        transform.localPosition = new Vector3(0, 0, 0);        // Get the y component of the position relative to the parent
        // and print it to the Console
        print(transform.localPosition.y);
    }
}
```





Note that the parent transform's world rotation and scale are applied to the local position when calculating the world position.
This means that while 1 unit in [Transform.position](Transform-position.html) is always 1 unit, 1 unit in [Transform.localPosition](Transform-localPosition.html) will get scaled by the scale of all ancestors.


            
