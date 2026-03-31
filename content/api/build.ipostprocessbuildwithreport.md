This version of Unity is unsupported.



# IPostprocessBuildWithReport





interface in
          UnityEditor.Build


                  Leave feedback





Implements interfaces:[IOrderedCallback](Build.IOrderedCallback.html)




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



Implement this interface to execute code immediately after the Player build process is completed.





This is useful for tasks that need to be performed as the last step of building, such as cleaning up assets, generating analytics or reports, or customizing build outputs.

As a final step of a Player build, Unity uses the [IOrderedCallback.callbackOrder](Build.IOrderedCallback-callbackOrder.html) property on each implementation to determine the order in which to invoke the callbacks.

Additional resources: [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html), [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html).


              


```
using System.Linq;
using System.Text;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;// To try this example add this code into an Editor-only assembly,
// run a Player build, and then look for the message in the console.
// Note: if the build fails or is cancelled then the code will not run.
class BuildPostProcessor : IPostprocessBuildWithReport
{
    public int callbackOrder { get { return 100; } }
    public void OnPostprocessBuild(BuildReport report)
    {
        // Log some information from the BuildReport
        // Note: OnPostprocessBuild callbacks are invoked before the build is complete.
        // So the content of the BuildReport is not completely finalized.
        // For example, the summary.buildEndedAt has not been be determined,
        // and the incomplete "parent" BuildSteps still report 0 for their durations.
        var summary = report.summary;        var files = report.GetFiles();
        ulong size = 0;
        foreach (var file in files)
            size += file.size;        var sb = new StringBuilder();
        sb.AppendLine("Build completed");
        sb.AppendLine($"  Target: {summary.platform}");
        sb.AppendLine($"  Output Location: {summary.outputPath}");
        sb.AppendLine($"  Number of output files: {files.Length}");
        sb.AppendLine($"  Total size in bytes: {size}");
        sb.AppendLine($"  Starting time: {summary.buildStartedAt.ToLocalTime().ToShortTimeString()}");
        sb.AppendLine();        var buildSteps = report.steps;
        sb.AppendLine($"Build steps: {buildSteps.Length}");
        int maxWidth = buildSteps.Max(s => s.name.Length + s.depth) + 2;
        foreach (var step in buildSteps)
        {
            string rawStepOutput = new string('-', step.depth) + ' ' + step.name;
            sb.AppendLine($"{rawStepOutput.PadRight(maxWidth)}: {step.duration:g}");
        }        Debug.Log(sb.ToString());
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| OnPostprocessBuild | Implement this function to receive a callback after the build is complete. |


            
