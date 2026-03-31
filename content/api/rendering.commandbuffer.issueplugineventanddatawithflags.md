This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).IssuePluginEventAndDataWithFlags




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

public void IssuePluginEventAndDataWithFlags(IntPtr callback,
int eventID,
[Rendering.CustomMarkerCallbackFlags](Rendering.CustomMarkerCallbackFlags.html) flags,
IntPtr data);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | Native code callback to queue for Unity's renderer to invoke. |
| eventID | Built in or user defined id to send to the callback. |
| flags | See CustomMarkerCallbackFlags for more details. |
| data | Custom data to pass to the native plugin callback. |





### Description



Send a user-defined event to a native code plugin with custom data and callback flags.


            
