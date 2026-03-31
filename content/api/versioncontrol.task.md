This version of Unity is unsupported.



# Task





class in
          UnityEditor.VersionControl


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



A Task describes an instance of a version control operation.





An object of this type allows you to process operations such as [Provider.Checkout](VersionControl.Provider.Checkout.html), [Provider.GetLatest](VersionControl.Provider.GetLatest.html), and [Provider.Submit](VersionControl.Provider.Submit.html). Unity creates this item almost every time you ask [Provider](VersionControl.Provider.html) to perform an action. Task objects, that version control operations return, execute in the background and don't always finish immediately, use [Task.Wait](VersionControl.Task.Wait.html) if you need to wait for them to finish.





### Properties



| Property | Description |
| --- | --- |
| assetList | The result of some types of tasks. |
| changeSets | List of changesets returned by some tasks. |
| description | A short description of the current task. |
| messages | May contain messages from the version control plugins. |
| progressPct | A progress percentage for the current task. |
| resultCode | Some task return result codes, these are stored here. |
| secondsSpent | Total time spent in task since the task was started. |
| success | Get whether or not the task was completed succesfully. |
| text | Will contain the result of the Provider.ChangeSetDescription task. |





### Public Methods



| Method | Description |
| --- | --- |
| SetCompletionAction | Upon completion of a task a completion task will be performed if it is set. |
| Wait | A blocking wait for the task to complete. |


            
