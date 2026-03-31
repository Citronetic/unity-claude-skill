This version of Unity is unsupported.



# RemoveRequest





class in
          UnityEditor.PackageManager.Requests



/



Inherits from:[PackageManager.Requests.Request](PackageManager.Requests.Request.html)


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




                [Switch to Manual](../Manual/class-PackageManager.html)














### Description



Represents an asynchronous request to remove a package from the project.





The PackageManager [Client](PackageManager.Client.html) class returns a RemoveRequest instance when you call the [Client.Remove](PackageManager.Client.Remove.html) method to remove a package from your project.  Use this object to determine when the request is complete.





### Properties



| Property | Description |
| --- | --- |
| PackageIdOrName | The package being removed by this request. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |












            
