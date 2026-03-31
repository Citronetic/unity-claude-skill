This version of Unity is unsupported.



# [SketchUpImporter](SketchUpImporter.html).GetScenes




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




                [Switch to Manual](../Manual/class-SketchUpImporter.html)










## Declaration

public SketchUpImportScene[] GetScenes();






### Returns



**SketchUpImportScene[]**
        Array of scenes extracted from a SketchUp file.





### Description



The method returns an array of SketchUpImportScene which represents SketchUp scenes.





[SketchUpImportScene](SketchUpImportScene.html) is the structure to represent the Scene that was extracted from the SketchUp file.


              


```
using UnityEngine;
using UnityEditor;public class SketchUpUtility
{
    public static void PrintSketchUpSceneName(GameObject go)
    {
        string assetPath = AssetDatabase.GetAssetPath(go); // get asset path
        // get SketchUpImporter
        SketchUpImporter importer = AssetImporter.GetAtPath(assetPath) as SketchUpImporter;
        if (importer == null)
        {
            Debug.Log("This object is not imported by SketchUpImporter");
            return;
        }        SketchUpImportScene[] scenes = importer.GetScenes();  // get all the scenes        foreach (SketchUpImportScene scene in scenes)
        {
            Debug.Log(scene.name);
        }
    }
}
```





The above example takes a GameObject that is imported from a SketchUp file and prints the name of the scenes in the SketchUp file.


            
