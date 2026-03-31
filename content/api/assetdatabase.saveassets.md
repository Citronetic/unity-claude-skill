This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).SaveAssets




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

public static void SaveAssets();






### Description



Writes all unsaved asset changes to disk.





Identical to EditorApplication.SaveAssets except not permitted to be called during serialization.

When calling this function, [AssetModificationProcessor.OnWillSaveAssets](AssetModificationProcessor.OnWillSaveAssets.html) will be invoked, allowing you to override which files are saved to disk.

EditorApplication.SaveAssets will be deprecated in a future release. Please use [SaveAssets](AssetDatabase.SaveAssets.html) to maintain future compatibility.


              


```
using UnityEngine;
using UnityEditor;
using System.Text;public class SaveAssetsExample : MonoBehaviour
{
    [MenuItem("APIExamples/SaveAssets")]
    static void AssetsToBeSaved()
    {
        Color[] colorList = new[] { Color.red, Color.green, Color.blue, Color.black, Color.gray };        for (int i = 0; i < colorList.Length; ++i)
        {
            Material material = new Material(Shader.Find("Specular"));
            var materialName = "material_" + i + ".mat";
            AssetDatabase.CreateAsset(material, "Assets/Artifacts/" + materialName);            material.SetColor("_Color", colorList[i]);
        }        AssetDatabase.SaveAssets();
    }
}public class OutputListOfFilesToSave : UnityEditor.AssetModificationProcessor
{
    //Will be invoked once for each call to CreateAsset()
    //and once for calling AssetDatabase.SaveAssets()
    static string[] OnWillSaveAssets(string[] paths)
    {
        Debug.Log("OnWillSaveAssets invoked");        StringBuilder assetsToBeSaved = new StringBuilder();
        assetsToBeSaved.AppendLine();        foreach (string path in paths)
        {
            assetsToBeSaved.Append(path);
            assetsToBeSaved.AppendLine();
        }        Debug.Log("Assets to be saved:" + assetsToBeSaved.ToString());        return paths;
    }
}
```


            
