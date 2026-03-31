This version of Unity is unsupported.



# [IPostprocessLaunch](Build.IPostprocessLaunch.html).OnPostprocessLaunch




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

public void OnPostprocessLaunch([Build.ILaunchReport](Build.ILaunchReport.html) launchReport);






### Parameters



| Parameter | Description |
| --- | --- |
| launchReport | A report containing information about the launch, such as the target platform on which the application was launched and outcome of the process. Some platforms such as Android provide additional launch information which you can obtain by performing a necessary cast. |





### Description



Implement this method to receive a callback after Unity attempts to launch the application.





Unity invokes this callback regardless of whether the application launch was successful or not.

The following platforms are not supported:



          - Nintendo Switch

          - PlayStation 4

          - PlayStation 5

          - Xbox One

          - Xbox Series X|S.





Additional resources: [AndroidLaunchReportExtensions.AsAndroidReport](Android.AndroidLaunchReportExtensions.AsAndroidReport.html)


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;public class PostLaunchCallback : IPostprocessLaunch
{
	public int callbackOrder => 0;	private void Log(string message)
	{
		Debug.LogFormat(LogType.Log, LogOption.NoStacktrace, null, message);
	}	public void OnPostprocessLaunch(ILaunchReport launchReport)
	{
		Log($"Launch callback on {launchReport.buildTarget.TargetName.ToString()}, result: {launchReport.result}");
#if UNITY_ANDROID
		var androidLaunchReport = UnityEditor.Android.AndroidLaunchReportExtensions.AsAndroidReport(launchReport);
		if (androidLaunchReport != null)
		{
			foreach (var launch in androidLaunchReport.Launches)
			{
				Log($"Running '{launch.PackageName}/{launch.ActivityName}' on device '{launch.DeviceId}', Success: {launch.Success}, errors: {launch.Errors}");
			}
		}
#endif
	}
}
```


            
