This version of Unity is unsupported.



# [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html).OnPreprocessBuild




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

public void OnPreprocessBuild([Build.Reporting.BuildReport](Build.Reporting.BuildReport.html) report);






### Parameters



| Parameter | Description |
| --- | --- |
| report | A report containing information about the build, such as its target platform and output path. |





### Description



Implement this method to receive a callback before the build is started.





This callback is invoked during Player builds, but not during AssetBundle builds.


                    Additional resources: [IPostprocessBuildWithReport](Build.IPostprocessBuildWithReport.html), [BuildPlayerProcessor](Build.BuildPlayerProcessor.html), [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html)


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;class MyCustomBuildProcessor : IPreprocessBuildWithReport
{
    public int callbackOrder { get { return 0; } }
    public void OnPreprocessBuild(BuildReport report)
    {
        Debug.Log("MyCustomBuildProcessor.OnPreprocessBuild for target " + report.summary.platform + " at path " + report.summary.outputPath);
    }
}
```


            
