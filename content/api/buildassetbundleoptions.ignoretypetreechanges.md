This version of Unity is unsupported.



# [BuildAssetBundleOptions](BuildAssetBundleOptions.html).IgnoreTypeTreeChanges




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



Ignore the type tree changes when doing the incremental build check.





This allows you to ignore the type tree changes when doing the incremental build check. With this flag set, if the included assets haven't change but type trees have changed, the target assetBundle will not be rebuilt.


              


```
//Create a folder (right click in the Assets folder and go to Create>Folder), and name it “Editor” if it doesn’t already exist
//Place this script in the Editor folder//This script creates a new Menu named “Build Asset” and new options within the menu named “Normal” and “Ignore Type Tree Changes”. Click these menu items to build an AssetBundle into a folder with different options.using UnityEngine;
using UnityEditor;public class Example
{
    //Creates a new menu (Build Asset Bundles) and item (Normal) in the Editor
    [MenuItem("Build Asset Bundles/Normal")]
    static void BuildABsNone()
    {
        //Build AssetBundles with no special options
        //They will be written in the custom folder ("MyAssetBuilds") which needs to exist prior to this call.
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.None, BuildTarget.StandaloneOSX);
    }    //Creates a new item (Ignore Type Tree Changes) in the new Build Asset Bundles menu
    [MenuItem("Build Asset Bundles/Ignore Type Tree Changes")]
    static void BuildABsDry()
    {
        //Build the AssetBundles in ignore type tree changes build mode
        BuildPipeline.BuildAssetBundles("Assets/MyAssetBuilds", BuildAssetBundleOptions.IgnoreTypeTreeChanges, BuildTarget.StandaloneOSX);
    }
}
```


            
