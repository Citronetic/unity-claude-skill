This version of Unity is unsupported.



# ProcessService





class in
          UnityEditor.MPE


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



*This is an experimental feature.* The ProcessService allows you to start slave instance of UnityEditor, opened to the same Project as the master instance, with a specific [RoleProviderAttribute](MPE.RoleProviderAttribute.html).





The Standalone Profiler workflow uses this technology.





### Static Properties



| Property | Description |
| --- | --- |
| level | The ProcessLevel of the running instance of UnityEditor. |
| roleName | The role name of the running UnityEditor process. For more information about how to register handlers for a specific process role, see RoleProviderAttribute. For a UnityEditor process of ProcessLevel Master, the roleName is always empty. |





### Static Methods



| Method | Description |
| --- | --- |
| DisableProfileConnection | Closes the Profiler connection. |
| EnableProfileConnection | Enables a connection to the Profiler. The standalone Profiler uses this method. |
| GetProcessState | Gets the ProcessState of a given instance of UnityEditor. |
| HasCapability | Checks whether the current process has a given capability. |
| IsChannelServiceStarted | Checks whether the ChannelService is already started. |
| Launch | Launches a secondary instance of UnityEditor on the same project as the master instance. |
| ReadParameter | A utility function to read command line arguments passed to the current process. |
| Terminate | Terminates an editor process. |





### Events



| Event | Description |
| --- | --- |
| ProcessExitedEvent | An event triggered in a master instance of UnityEditor when you start a slave instance with ProcessService.Launch exit. |
| SlaveProcessExitedEvent | An event triggered in a master instance of UnityEditor when you start a slave instance with ProcessService.LaunchSlave exit. |


            
