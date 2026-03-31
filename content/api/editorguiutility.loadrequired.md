This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).LoadRequired




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

public static Object LoadRequired(string path);






### Description



Load a required built-in resource.





This function will look in Assets/Editor Default Resources/ folder
        for the required resource.  The example below shows an the loading of an iPhone
        texture and used to texture a cube.


              


```
using UnityEngine;
using UnityEditor;public class LoadRequiredExample
{
    [MenuItem("Examples/LoadRequired Editor Example")]
    static void loadRequiredExample()
    {
        Texture tex  = (Texture)EditorGUIUtility.LoadRequired("BuildSettings.iPhone");        Renderer r = GameObject.Find("Cube").GetComponent<Renderer>();
        r.sharedMaterial.mainTexture = tex;
    }
}
```


            
