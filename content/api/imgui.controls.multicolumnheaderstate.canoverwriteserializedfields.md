This version of Unity is unsupported.



# [MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html).CanOverwriteSerializedFields




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

public static bool CanOverwriteSerializedFields([IMGUI.Controls.MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html) source,
[IMGUI.Controls.MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html) destination);






### Parameters



| Parameter | Description |
| --- | --- |
| source | State that have serialized data to be transfered to the destination state. |
| destination | Destination state. |





### Returns



**bool**
        Returns true if the source state have the same number of columns as the destination state.





### Description



Checks if the source state can transfer its serialized data to the destination state.





Some of the fields in the MultiColumnHeader state are serializable so they can be preserved between assembly reloads and/or when restarting Unity. The non-serialized fields have to be reconstructed. After having reconstructed the state use this method before calling [OverwriteSerializedFields](IMGUI.Controls.MultiColumnHeaderState.OverwriteSerializedFields.html) to apply any serialized fields from a previous session.

Additional resources: [OverwriteSerializedFields](IMGUI.Controls.MultiColumnHeaderState.OverwriteSerializedFields.html).


            
