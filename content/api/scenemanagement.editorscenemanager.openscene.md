This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).OpenScene




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) OpenScene(string scenePath,
[SceneManagement.OpenSceneMode](SceneManagement.OpenSceneMode.html) mode = OpenSceneMode.Single);






### Parameters



| Parameter | Description |
| --- | --- |
| scenePath | The path of the Scene. This should be relative to the Project folder; for example, "Assets/MyScenes/MyScene.unity". |
| mode | Allows you to select how to open the specified Scene, and whether to keep existing Scenes in the Hierarchy. See OpenSceneMode for more information about the options. |





### Returns



**Scene**
        A reference to the opened Scene.





### Description



Open a Scene in the Editor.





Use this function to open Scenes in the Hierarchy while in the Editor, for example for making custom Editor scripts, tools, or menu items. Do not use it for loading Scenes at run time. To load Scenes at run time, see [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html).

If the function fails for any reason (for example, because of a wrong file path), it will throw an ArgumentException.


              


```
//Create a new folder (Right click in the Assets folder, Create>Folder) and name it “Editor” if one doesn’t already exist
//Put this script in the folder//This script creates a new menu (Examples) and item (Open Scene). If you choose this item in the Editor, the EditorSceneManager opens the Scene at the given directory (In this case, the “Scene2” Scene is located in the Assets folder). This allows you to open Scenes while still working with the Editor.using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;public class Example : MonoBehaviour
{
    // Create a new drop-down menu in Editor named "Examples" and a new option called "Open Scene"
    [MenuItem("Examples/Open Scene")]
    static void OpenScene()
    {
        //Open the Scene in the Editor (do not enter Play Mode)
        EditorSceneManager.OpenScene("Assets/Scene2.unity");
    }
}
```


            
