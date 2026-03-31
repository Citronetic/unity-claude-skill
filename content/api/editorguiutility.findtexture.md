This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).FindTexture




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

public static [Texture2D](Texture2D.html) FindTexture(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the Editor resources texture or the asset path of the texture. |





### Returns



**Texture2D**
        The texture.





### Description



Gets a texture from its source filename. You can load an Editor texture resource by name or a texture from an asset path.





[Image: image]


*Checks the path of a texture.*


              


```
// Simple editor window that lets you quick check a path of
// a texture in the editor.
//
// If the path exists then it shows a message
// else displays an error messageusing UnityEngine;
using UnityEditor;public class FindTextureExample : EditorWindow
{
    string s;    [MenuItem("Examples/Find editor texture")]
    static void findTextureExampleEditor()
    {
        FindTextureExample window = EditorWindow.GetWindow<FindTextureExample>(true);
        window.Show();
    }    [MenuItem("Examples/Find Editor texture from name")]
    static void findTextureExampleByName()
    {
        // Load a texture located in the Editor resource bundle.
        // Unfortunately there is no official way to know the name of all Editor resources bundle assets.
        var texture = EditorGUIUtility.FindTexture("aboutwindow.mainheader");
    }    [MenuItem("Examples/Find editor texture from path")]
    static void findTextureExampleFromPath()
    {
        // Load a texture from its path.
        // This is equivalent to AssetDatabase.LoadAssetAtPath
        var t1 = EditorGUIUtility.FindTexture("Assets/Sprites/Bomb_Sprite.png");
        var t2 = AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/Sprites/Bomb_Sprite.png");
        if (t1 == t2)
            Debug.Log("Same texture!");
    }    void OnGUI()
    {
        s = EditorGUILayout.TextField("Texture To Locate:", s);        if (GUILayout.Button("Check"))
            if (EditorGUIUtility.FindTexture(s))
            {
                Debug.Log("Texture found at: " + s);
            }
            else
            {
                Debug.Log("No texture found at: " + s + ". Check your filename.");
            }
    }
}
```





**Note:** This function is used for searching for editor icons only.


            
