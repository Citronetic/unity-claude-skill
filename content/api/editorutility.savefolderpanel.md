This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).SaveFolderPanel




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

public static string SaveFolderPanel(string title,
string folder,
string defaultName);






### Description



Displays the "save folder" dialog and returns the selected path name.





Additional resources: [SaveFilePanel](EditorUtility.SaveFilePanel.html), [OpenFilePanel](EditorUtility.OpenFilePanel.html) functions.

[Image: image]

*Save Folder Panel.*


              


```
using UnityEngine;
using UnityEditor;
using System.IO;public class SaveFolderPanelExample : EditorWindow
{
    [MenuItem("Example/Save Textures To Folder")]
    static void Apply()
    {
        Object[] textures = Selection.GetFiltered(typeof(Texture2D), SelectionMode.Unfiltered);
        if (textures.Length == 0)
        {
            EditorUtility.DisplayDialog("Select Textures", "You must select at least one texture first!", "OK");
            return;
        }        string path = EditorUtility.SaveFolderPanel("Save textures to folder", "", "");
        if (path.Length != 0)
        {
            foreach (Texture2D texture in textures)
            {
                Texture2D processedTex = texture;                byte[] pngData = processedTex.EncodeToPNG();
                if (pngData != null)
                    File.WriteAllBytes(path + "/" + texture.name + ".png", pngData);
                else
                    Debug.Log("Could not convert " + texture.name + " to png. Skipping saving texture.");
            }            // Just in case we are saving to the asset folder, tell Unity to scan for modified or new assets
            AssetDatabase.Refresh();
        }
    }
}
```


            
