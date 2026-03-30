This version of Unity is unsupported.



# [ApplicationExitInfoProvider](Android.ApplicationExitInfoProvider.html).GetHistoricalProcessExitInfo




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

public static IApplicationExitInfo[] GetHistoricalProcessExitInfo(string packageName,
int pid,
int maxNum);






### Parameters



| Parameter | Description |
| --- | --- |
| packageName | Application package name |
| pid | Process ID |
| maxNum | Maximum number of records to return |





### Returns



**IApplicationExitInfo[]**
        An array of [ApplicationExitInfo](Android.IApplicationExitInfo.html) records sorted by date.





### Description



Gets records of application terminations including the reasons for the most recent terminations.





Mirrors `android:android.app.ApplicationExitInfo gethistoricalprocessexitreasons() method`. For more information, refer to Android's documentation on [getHistoricalProcessExitReasons method](https://developer.android.com/reference/kotlin/android/app/ActivityManager#gethistoricalprocessexitreasons).


            
