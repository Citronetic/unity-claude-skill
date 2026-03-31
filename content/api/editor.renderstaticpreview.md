This version of Unity is unsupported.



# [Editor](Editor.html).RenderStaticPreview




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

public [Texture2D](Texture2D.html) RenderStaticPreview(string assetPath,
Object[] subAssets,
int width,
int height);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | The asset to operate on. |
| subAssets | An array of all Assets at assetPath. |
| width | Width of the created texture. |
| height | Height of the created texture. |





### Returns



**Texture2D**
        Generated texture or null.





### Description



Override this method if you want to render a static preview.





When overridden [RenderStaticPreview](Editor.RenderStaticPreview.html) can be used to render a list
                    of assets converted into a single texture.  This function will need user
                    supplied source code that can merge the assets together.  The size of the
                    create texture can be supplied by the provided width and height.

                If null is returned the builtin icon for the class type is used.


              


```
// Render the provided asset texture into an Inspector thumbnail.
using UnityEngine;
using System.Collections;
using UnityEditor;using System.IO;public class Example : ScriptableObject
{
    public Texture2D PreviewIcon;
}
[CustomEditor(typeof(Example))]
public class ExampleEditor : UnityEditor.Editor
{
    public static void CreateAsset<Example>() where Example : ScriptableObject
    {
        Example asset = ScriptableObject.CreateInstance<Example>();        string path = AssetDatabase.GetAssetPath(Selection.activeObject);        if (path == "")
        {
            path = "Assets";
        }
        else if (Path.GetExtension(path) != "")
        {
            path = path.Replace(Path.GetFileName(AssetDatabase.GetAssetPath(Selection.activeObject)), "");
        }        string assetPathAndName = AssetDatabase.GenerateUniqueAssetPath(path + "/New " + typeof(Example).ToString() + ".asset");        AssetDatabase.CreateAsset(asset, assetPathAndName);
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        EditorUtility.FocusProjectWindow();
        Selection.activeObject = asset;
    }    [MenuItem("Examples/RenderStaticPreview example")]
    public static void CreateAsset()
    {
        CreateAsset<Example>();
    }    public override void OnInspectorGUI()
    {
        Example e = (Example)target;        EditorGUI.BeginChangeCheck();        // Example has a single arg called PreviewIcon which is a Texture2D
        e.PreviewIcon = (Texture2D)
                EditorGUILayout.ObjectField(
                    "Thumbnail",                    // string
                    e.PreviewIcon,                  // Texture2D
                    typeof(Texture2D),              // Texture2D object, of course
                    false                           // allowSceneObjects
                );        if (EditorGUI.EndChangeCheck())
        {
            EditorUtility.SetDirty(e);
            AssetDatabase.SaveAssets();
            Repaint();
        }
    }    public override Texture2D RenderStaticPreview(string assetPath, Object[] subAssets, int width, int height)
    {
        Example example = (Example)target;        if (example == null || example.PreviewIcon == null)
            return null;        // example.PreviewIcon must be a supported format: ARGB32, RGBA32, RGB24,
        // Alpha8 or one of float formats
        Texture2D tex = new Texture2D (width, height);
        EditorUtility.CopySerialized (example.PreviewIcon, tex);        return tex;
    }
}
```


            
