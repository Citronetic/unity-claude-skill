This version of Unity is unsupported.



# [IPostBuildPlayerScriptDLLs](Build.IPostBuildPlayerScriptDLLs.html).OnPostBuildPlayerScriptDLLs




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

public void OnPostBuildPlayerScriptDLLs([Build.Reporting.BuildReport](Build.Reporting.BuildReport.html) report);






### Parameters



| Parameter | Description |
| --- | --- |
| report | A report containing information about the build, such as its target platform and output path. |





### Description



Implement this interface to receive a callback just after the player scripts have been compiled.





You can implement this if you need to read or patch managed Assemblies for players being built. You can get assembly locations from the [files](BuildReport.files.html) property of the `report` parameter. Note that implementing this callback will cause builds to run slower, as assemblies need to be copied to an intermediate location, and is not recommended for best performance.

Additional resources: [BuildPlayerProcessor](Build.BuildPlayerProcessor.html), [IFilterBuildAssemblies](Build.IFilterBuildAssemblies.html), [IUnityLinkerProcessor](Build.IUnityLinkerProcessor.html), [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html)


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;class MyCustomBuildProcessor : IPostBuildPlayerScriptDLLs
{
    public int callbackOrder { get { return 0; } }
    public void OnPostBuildPlayerScriptDLLs(BuildReport report)
    {
        Debug.Log("MyCustomBuildProcessor.OnPostBuildPlayerScriptDLLs for target " + report.summary.platform + " at path " + report.summary.outputPath);
    }
}
```


            
