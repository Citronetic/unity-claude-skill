This version of Unity is unsupported.



# [Handles](Handles.html).DrawWireCube




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

public static void DrawWireCube([Vector3](Vector3.html) center,
[Vector3](Vector3.html) size);






### Description



Draw a wireframe box with `center` and `size`.


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;//this class should exist somewhere in your project
public class WireCubeExample : MonoBehaviour
{
    public Vector3 size;    // ...other code...
}
```


              


```
// Editor script. This would go into an Editor directory.
using UnityEditor;
using UnityEngine;[CustomEditor(typeof(WireCubeExample))]
public class WireBoxExample : Editor
{
    void OnSceneGUI()
    {
        Handles.color = Color.yellow;
        WireCubeExample myObj = (WireCubeExample)target;
        Handles.DrawWireCube(myObj.transform.position, myObj.size);
    }
}
```


            
