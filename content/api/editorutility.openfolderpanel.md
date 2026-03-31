This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).OpenFolderPanel




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

public static string OpenFolderPanel(string title,
string folder,
string defaultName);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The text to display in the title bar of the dialog window. |
| folder | The default file directory that this dialog opens. This parameter is relative to the project directory. For example, "Assets" displays the Assets directory when this dialog opens. |
| defaultName | The default name to name the folder. Can be an empty string. |





### Returns



**string**
        The fully qualified path to a folder.





### Description



Displays the "open folder" dialog and returns the selected path name.





Additional resources: [OpenFilePanel](EditorUtility.OpenFilePanel.html), [SaveFolderPanel](EditorUtility.SaveFolderPanel.html) functions.


              


```
using UnityEditor;
using System.IO;public class OpenFolderPanelExample : EditorWindow
{
    [MenuItem("Example/Load Textures To Folder")]
    static void Apply()
    {
        string path = EditorUtility.OpenFolderPanel("Load png Textures", "", "");
        string[] files = Directory.GetFiles(path);        foreach (string file in files)
            if (file.EndsWith(".png"))
                File.Copy(file, EditorApplication.currentScene);
    }
}
```


            
