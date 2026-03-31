This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).androidVulkanDeviceFilterListAsset




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html) androidVulkanDeviceFilterListAsset;






### Description



Specifies an [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html) asset which provides filtering criteria for allowing or denying Android devices from using Vulkan API and selecting Graphics Jobs mode when running Unity applications.





This replaces both PlayerSettings.Android.androidVulkanAllowFilterList and PlayerSettings.Android.androidVulkanDenyFilterList as it contains the same functionality but extended. Refer to [VulkanDeviceFilterLists](VulkanDeviceFilterLists.html) for additional information.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class AndroidVulkanDeviceFilterListAssetSample : MonoBehaviour
{
    static string assetName = "New Vulkan Device Filter";
    [MenuItem("Build/Android Vulkan Device Filter List Sample")]
    public static void BuildAndroidVulkanDeviceFilterListAssetSample()
    {
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;

        VulkanDeviceFilterLists myVulkanDeviceList = Resources.Load<VulkanDeviceFilterLists>(assetName);
        //Set myVulkanDeviceList to androidVulkanDeviceFilterListAsset
        PlayerSettings.Android.androidVulkanDeviceFilterListAsset = myVulkanDeviceList;

        BuildPlayerOptions options = new BuildPlayerOptions();
        options.scenes = new[] { "Assets/Scenes/SampleScene.unity" };
        options.locationPathName = "Build/AndroidBuild.apk";
        options.target = BuildTarget.Android;
        options.targetGroup = BuildTargetGroup.Android;
        BuildPipeline.BuildPlayer(options);
    }
}
```


            
