This version of Unity is unsupported.



# [LayerMask](LayerMask.html).LayerMask




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



Implicitly converts an integer to a LayerMask.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Converts an int to a layer mask and prints all the layer names.
        // As the value is 3, it will print "Default" and "TransparentFX".
        // 2^0 + 2^1 = 1 + 2 = 3        int number = 3;
        LayerMask layerMask;

        // ✅ This line is the key to this example:
        // Implicitly converts the integer 'number' into a LayerMask.
        // This uses LayerMask.LayerMask implicitly.
        layerMask = number;
        for (int i = 0; i < 32; i++)
        {
            if ((layerMask.value & (1 << i)) != 0)
            {
                Debug.Log($"Layer {i}: {LayerMask.LayerToName(i)}");
            }
        }
    }
}
```


            
