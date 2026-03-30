This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddCapability




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

public bool AddCapability(string targetGuid,
[iOS.Xcode.PBXCapabilityType](iOS.Xcode.PBXCapabilityType.html) capability,
string entitlementsFilePath,
bool addOptionalFramework);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by GetUnityFrameworkTargetGuid. |
| capability | The capability to enable. |
| entitlementsFilePath | Path to the entitlements file to be used for this capability. Information regarding the contents of entitlements files can be found in Apple Documentation |
| addOptionalFramework | Set this to true to indicate that this capability requires additional frameworks. Set it to false if no additional frameworks are required. |





### Returns



**bool**
        True if the capability was successfully added.





### Description



Adds a target capability to the Xcode project.





This enables behavior based on the capability type. Some capabilities require additional setup within Xcode. For more control over the specific settings of capability, use the [ProjectCapabilityManager](iOS.Xcode.ProjectCapabilityManager.html) class.


              


```
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddCapability
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUIDs for UnityFramework and Main targets
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();
        string unityFrameworkTargetGuid = pbxProject.GetUnityFrameworkTargetGuid();
        // Create an entitlements file for your capability
        string entitlementsFileName = "Example.entitlements";        PlistDocument plistDocument = new PlistDocument();
        plistDocument.Create();        PlistElementDict rootDict = plistDocument.root;
        rootDict.SetString("com.apple.developer.applesignin", "Default");        plistDocument.WriteToFile(Path.Combine(pathToBuiltProject, entitlementsFileName));        // Add 'Sign in with Apple' capability to the proejct with the entitlements file specified
        pbxProject.AddCapability(mainTargetGuid, PBXCapabilityType.SignInWithApple, entitlementsFileName);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }}
```


            
