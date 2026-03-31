This version of Unity is unsupported.



# [LayerMask](LayerMask.html).LayerToName




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

public static string LayerToName(int layer);






### Description



Given a layer number, returns the name of the layer as defined in either a Builtin or a User Layer in the [Tags and Layers manager](../Manual/class-TagManager.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints the name of the layer 1        Debug.Log(LayerMask.LayerToName(1));
    }
}
```





**Note:** [LayerToName](LayerMask.LayerToName.html) takes an integer argument.  This argument selects the
name of Layer and returns it.  The layers are listed in the inspector.  As an
example assume User Layer 13 has a string.  This string can be accessed by calling
[LayerToName](LayerMask.LayerToName.html) with the value 2^13, which is 8192.


            
