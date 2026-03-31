This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).shortcutBindingChanged




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | Shortcut binding changed event handler. |





### Description



Raised when shortcut overrides are changed on the active profile.





This event is raised when the shortcut overrides are changed on the active profile, e.g. via [RebindShortcut](ShortcutManagement.IShortcutManager.RebindShortcut.html) or [ClearShortcutOverrides](ShortcutManagement.IShortcutManager.ClearShortcutOverrides.html). It is not raised when shortcut overrides change in response to changing the active profile changed (use [activeProfileChanged](ShortcutManagement.IShortcutManager-activeProfileChanged.html) instead).


            
