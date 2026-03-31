This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).RebindShortcut




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

public void RebindShortcut(string shortcutId,
[ShortcutManagement.ShortcutBinding](ShortcutManagement.ShortcutBinding.html) binding);






### Parameters



| Parameter | Description |
| --- | --- |
| shortcutId | ID of shortcut to rebind. |
| binding | New binding of shortcut. |





### Description



Rebinds the shortcut for the given shortcut ID to the given binding in the active profile.





Creates a new (or modifies the existing) binding override for the given shortcut ID on the active profile.

Throws `ArgumentNullException` if `shortcutId` is null. Throws `ArgumentException` if `shortcutId` is not available, i.e. when [GetAvailableShortcutIds](ShortcutManagement.IShortcutManager.GetAvailableShortcutIds.html) does not contain `shortcutId`. Throws `InvalidOperationException` if the active profile is read-only, i.e. when [IsReadOnlyProfile](ShortcutManagement.IShortcutManager.IsReadOnlyProfile.html) returns `true` for [activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html).


            
