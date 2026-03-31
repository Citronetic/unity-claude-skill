This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).IsProfileReadOnly




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

public bool IsProfileReadOnly(string profileId);






### Parameters



| Parameter | Description |
| --- | --- |
| profileId | ID of profile to determine read-only status for. |





### Returns



**bool**

          `true` if the profile with ID `profileId` is read-only: otherwise, `false`.





### Description



Is the profile for the given profile ID *read-only*?





Profiles that are read-only cannot be modified, e.g. [RebindShortcut](ShortcutManagement.IShortcutManager.RebindShortcut.html) requires that [activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html) does not reference a read-only profile. Use this method to ensure that methods that require the active profile ID to not be read-only won't throw `ArgumentException`.


            
