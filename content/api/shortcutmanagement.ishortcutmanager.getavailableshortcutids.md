This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).GetAvailableShortcutIds




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

public IEnumerable<string> GetAvailableShortcutIds();






### Returns



**IEnumerable<string>**
        Enumeration of available shortcut IDs.





### Description



Returns an enumeration of all available shortcut IDs.





The returned enumeration depends on the active profile ([activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html)). Throws `ArgumentNullException` if `shortcutId` is `null`. Throws `ArgumentException` if `shortcutId` is not available, i.e. when [GetAvailableShortcutIds](ShortcutManagement.IShortcutManager.GetAvailableShortcutIds.html) does not contain `shortcutId`.


            
