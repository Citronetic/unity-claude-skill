This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).DryRunBuild




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



Performs a simulated build of AssetBundles without actually creating the files.





This allows you to do a dry run build for the AssetBundles but not actually build them. With this option enabled, [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html) still returns an [AssetBundleManifest](AssetBundleManifest.html) object which contains valid AssetBundle dependencies and hashes.


              


```
//Create a folder (right click in the Assets folder and go to Create>Folder), and name it “Editor” if it doesn’t already exist
//Place this script in the Editor folder//This script creates a new Menu named “Build Asset” and new options within the menu named “Normal” and “Dry Run Build”. Click these menu items to build an AssetBundle into a folder.using UnityEngine;
using UnityEditor;public class Example
{
    //Creates a new menu (Build Asset Bundles) and item (Normal) in the Editor
    [MenuItem("Build Asset Bundles/Normal")]
    static void BuildABsNone()
    {
        //Build AssetBundles with no special options
        //They will be written in the custom folder ("MyAssetBuilds") which needs to exist prior to this call.
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.None, BuildTarget.StandaloneOSX);
    }    //Creates a new item (Dry Run Build) in the new Build Asset Bundles menu
    [MenuItem("Build Asset Bundles/Dry Run Build")]
    static void BuildABsDry()
    {
        //Build the AssetBundles in dry run build mode
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.DryRunBuild, BuildTarget.StandaloneOSX);
    }
}
```


            
