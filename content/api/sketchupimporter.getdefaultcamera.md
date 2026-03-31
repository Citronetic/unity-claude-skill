This version of Unity is unsupported.



# [SketchUpImporter](SketchUpImporter.html).GetDefaultCamera




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

public [SketchUpImportCamera](SketchUpImportCamera.html) GetDefaultCamera();






### Returns



**SketchUpImportCamera**
        The default camera.





### Description



The default camera or the camera of the active Scene which the SketchUp file was saved with.





The following is an example of extracting the default camera and logging if the camera is a perspective camera stored in [SketchUpImportCamera](SketchUpImportCamera.html).


              


```
using UnityEngine;
using UnityEditor;public class SketchUpUtility
{
    public static void IsDefaultCameraPerspective(GameObject go)
    {
        string assetPath = AssetDatabase.GetAssetPath(go); // get asset path
        // get SketchUpImporter
        SketchUpImporter importer = AssetImporter.GetAtPath(assetPath) as SketchUpImporter;
        if (importer == null)
        {
            Debug.Log("This object is not imported by SketchUpImporter");
            return;
        }        SketchUpImportCamera camera = importer.GetDefaultCamera();  // get all the scenes        Debug.Log("The default camera is " + (camera.isPerspective ? "perspective" : "orthogonal"));
    }
}
```


            
