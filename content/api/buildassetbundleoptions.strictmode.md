This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).StrictMode




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



















### Description



Fails the build if any errors are reported during it.





Without this flag, non-fatal errors - such as a failure to compile a shader for a particular platform - will not cause the build to fail, but may result in incorrect behaviour at runtime.


              


```
//Create a folder (right click in the Assets folder and go to Create>Folder), and name it “Editor” if it doesn’t already exist
//Place this script in the Editor folder//This script creates a new Menu named “Build Asset” and new options within the menu named “Normal” and “Strict Mode”. Click these menu items to build an AssetBundle into a folder with either no extra build options, or a strict build.using UnityEngine;
using UnityEditor;public class Example
{
    //Creates a new menu (Build Asset Bundles) and item (Normal) in the Editor
    [MenuItem("Build Asset Bundles/Normal")]
    static void BuildABsNone()
    {
        //Build AssetBundles with no special options
        //They will be written in the custom folder ("MyAssetBuilds") which needs to exist prior to this call.
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.None, BuildTarget.StandaloneOSX);
    }    //Creates a new item (Strict Mode) in the new Build Asset Bundles menu
    [MenuItem("Build Asset Bundles/Strict Mode")]
    static void BuildABsStrict()
    {
        //Build the AssetBundles in strict mode (build fails if any errors are detected)
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.StrictMode, BuildTarget.StandaloneOSX);
    }
}
```


            
