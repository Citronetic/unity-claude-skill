This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).ClearShortcutOverride




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

public void ClearShortcutOverride(string shortcutId);






### Parameters



| Parameter | Description |
| --- | --- |
| shortcutId | ID of shortcut to clear override for. |





### Description



Clears the binding for shortcut with given shortcut ID from the active profile.





Throws `ArgumentNullException` if `shortcutId` is `null`. Throws `InvalidOperationException` if the active profile is read-only, i.e. when [IsReadOnlyProfile](ShortcutManagement.IShortcutManager.IsReadOnlyProfile.html) returns `true` for [activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html). Throws `InvalidArgumentException` when `shortcutId` is not an available shortcut ID, i.e. when [GetAvailableShortcutIds](ShortcutManagement.IShortcutManager.GetAvailableShortcutIds.html) does not contain `shortcutId`.


            
