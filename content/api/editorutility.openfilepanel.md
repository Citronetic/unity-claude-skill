This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).OpenFilePanel




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

public static string OpenFilePanel(string title,
string directory,
string extension);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The text to display in the title bar of the dialog window. |
| directory | The default file directory that this dialog opens. This parameter is relative to the project directory. For example, "Assets" displays the Assets directory when this dialog opens. |
| extension | The file extensions to filter in this dialog. Do not precede file extension names with a period. Enter an empty string to include all file types. Separate multiple file extensions with a comma and no space between entries. |





### Returns



**string**
        The fully qualified path to a file.





### Description



Displays the "open file" dialog and returns the selected path name.





Additional resources: [SaveFilePanel](EditorUtility.SaveFilePanel.html) function.

[Image: image]

*Open File Panel.*


              


```
using System.IO;
using UnityEngine;
using UnityEditor;public class OpenFilePanelExample : EditorWindow
{
    [MenuItem("Example/Overwrite Texture")]
    static void Apply()
    {
        Texture2D texture = Selection.activeObject as Texture2D;
        if (texture == null)
        {
            EditorUtility.DisplayDialog("Select Texture", "You must select a texture first!", "OK");
            return;
        }        string path = EditorUtility.OpenFilePanel("Overwrite with png", "", "png");
        if (path.Length != 0)
        {
            var fileContent = File.ReadAllBytes(path);
            texture.LoadImage(fileContent);
        }
    }
}
```


            
