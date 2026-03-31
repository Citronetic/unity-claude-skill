This version of Unity is unsupported.



# EmbedRequest





class in
          UnityEditor.PackageManager.Requests



/



Inherits from:[PackageManager.Requests.Request_1](PackageManager.Requests.Request_1.html)


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



Represents an asynchronous request to embed a package inside a project.





The PackageManager [Client](PackageManager.Client.html) class returns an [EmbedRequest](PackageManager.Requests.EmbedRequest.html) instance when you call the [Client.Embed](PackageManager.Client.Embed.html) method to embed a package inside your project.  Use this object to determine when the request is complete and to access the result.

                Once the request is complete, you can retrieve the [PackageInfo](PackageManager.PackageInfo.html) instance from the Result property.





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |
| Result | A property that provides access to the result of a completed Package Manager request operation. |












            
