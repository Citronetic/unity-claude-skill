This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).Load




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

public static Object Load(string path);






### Description



Load a built-in resource.





This function will look in Assets/Editor Default Resources/ + path for the resource.
If not there, it will try the built-in editor resources by name.


              


```
using UnityEngine;
using UnityEditor;public class LoadExample
{
    [MenuItem("Examples/Load Editor Texture Example")]
    static void loadExample()
    {
        Texture tex  = (Texture)EditorGUIUtility.Load("aboutwindow.mainheader");
        Debug.Log("Got: " + tex.name + " !");        Renderer r = GameObject.Find("Cube").GetComponent<Renderer>();
        r.sharedMaterial.mainTexture = tex;
    }
}
```


            
