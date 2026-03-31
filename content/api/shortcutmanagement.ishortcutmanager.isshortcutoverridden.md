This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).IsShortcutOverridden




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

public bool IsShortcutOverridden(string shortcutId);






### Parameters



| Parameter | Description |
| --- | --- |
| shortcutId | ID of shortcut to determine overridden status for. |





### Returns



**bool**

          `true` if the shortcut with ID `shortcutId` is overridden in the active profile; otherwise, `false`.





### Description



Does the active profile override the binding for the given shortcut ID?





Returns `true` if the profile referenced by [activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html) overrides the binding for the given shortcut ID. This includes the cases where the binding is overridden to the same as the default or to the empty binding. It returns false if the active profile does not specify a binding for the given shortcut ID.

Throws `ArgumentNullException` if `shortcutId` is `null`. Throws `ArgumentException` if `shortcutId` is not available, i.e. when [GetAvailableShortcutIds](ShortcutManagement.IShortcutManager.GetAvailableShortcutIds.html) does not contain `shortcutId`.


            
