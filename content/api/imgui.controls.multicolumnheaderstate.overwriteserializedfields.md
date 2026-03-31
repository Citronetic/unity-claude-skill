This version of Unity is unsupported.



# [MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html).OverwriteSerializedFields




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

public static void OverwriteSerializedFields([IMGUI.Controls.MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html) source,
[IMGUI.Controls.MultiColumnHeaderState](IMGUI.Controls.MultiColumnHeaderState.html) destination);






### Parameters



| Parameter | Description |
| --- | --- |
| source | State that have serialized data to be transfered to the destination state. |
| destination | Destination state. |





### Description



Overwrites the seralized fields from the source state to the destination state.





Some of the fields in the MultiColumnHeader state are serializable so they can be preserved between assembly reloads and/or when restarting Unity. The non-serialized fields have to be reconstructed. After having reconstructed the state use this method to apply any serialized fields from a previous session. Ensure to check if the data can be overwritten using [CanOverwriteSerializedFields](IMGUI.Controls.MultiColumnHeaderState.CanOverwriteSerializedFields.html)

Additional resources: [CanOverwriteSerializedFields](IMGUI.Controls.MultiColumnHeaderState.CanOverwriteSerializedFields.html).


            
