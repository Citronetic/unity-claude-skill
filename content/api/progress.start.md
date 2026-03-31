This version of Unity is unsupported.



# [Progress](Progress.html).Start




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

public static int Start(string name,
string description,
[Progress.Options](Progress.Options.html) options,
int parentId);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The progress indicator's name. You can display the name as a title in the progress window. Use / (slash) as a separator to group child progress indicators together. |
| description | The progress indicator's initial description. You can change it using Report or SetDescription. |
| parentId | The unique ID of the parent progress indicator, if any. If the progress indicator has no parent, pass -1. |
| options | The progress indicator's initial progress options. |





### Returns



**int**
        The newly created progress identifier. This identifier is used for all other APIs to update the progress status.





### Description



This method starts a new progress indicator.


              


```
public IEnumerator Run_TwoTasks()
{
    var title1 = "Running task 1...";
    var title2 = "Running task 2...";
    int progressId1 = Progress.Start(title1);
    int progressId2 = Progress.Start(title2);    Progress.ShowDetails(false);
    yield return null;    for (int frame = 0; frame <= 10; ++frame)
    {
        Progress.Report(progressId1, Random.value);
        yield return WaitForSeconds(0.5f);
        Progress.Report(progressId2, Random.value);
        yield return WaitForSeconds(0.5f);
    }    Progress.Remove(progressId1);
    Progress.Remove(progressId2);
}
```


            
