This version of Unity is unsupported.



# [IPostprocessBuildWithReport](Build.IPostprocessBuildWithReport.html).OnPostprocessBuild




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

public void OnPostprocessBuild([Build.Reporting.BuildReport](Build.Reporting.BuildReport.html) report);






### Parameters



| Parameter | Description |
| --- | --- |
| report | A BuildReport containing information about the build, such as the target platform and output path. |





### Description



Implement this function to receive a callback after the build is complete.





This callback is invoked during Player builds, but not during AssetBundle builds.
                    If the build stops early, due to a failure or cancellation, then the callback is not invoked.


                    Additional resources:  [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html), [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html)


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;class MyCustomBuildProcessor : IPostprocessBuildWithReport
{
    public int callbackOrder { get { return 0; } }
    public void OnPostprocessBuild(BuildReport report)
    {
        Debug.Log("MyCustomBuildProcessor.OnPostprocessBuild for target " + report.summary.platform + " at path " + report.summary.outputPath);
    }
}
```


            
