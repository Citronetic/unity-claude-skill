This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GUIDFromAssetPath




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

public static GUID GUIDFromAssetPath(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path for the asset. |





### Returns



**GUID**
        The GUID of the asset. An all-zero GUID denotes an invalid asset path.





### Description



Get the GUID for the asset at `path`.





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".


              


```
using UnityEngine;
using UnityEditor;public static class Example
{
    [MenuItem("AssetDatabase/GUIDFromAssetPath")]
    static void Doit()
    {
        GUID t = AssetDatabase.GUIDFromAssetPath("Assets/texture.jpg");
        Debug.Log(t.ToString());
    }
}
```


            
