This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).RenameProfile




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

public void RenameProfile(string profileId,
string newProfileId);






### Parameters



| Parameter | Description |
| --- | --- |
| profileId | ID of existing profile. |
| newProfileId | New ID for profile. |





### Description



Renames the ID of a profile.





Changes the ID of the

Throws `ArgumentNullException` if `profileId` or `newProfileId` is null. Throws `ArgumentException` if `profileId` is not available. Throws `ArgumentException` if profile is read-only, i.e. [IsProfileReadOnly](ShortcutManagement.IShortcutManager.IsProfileReadOnly.html) returns `true` for `profileId`. Throws `ArgumentException` if `newProfileId` is already available, i.e. when [GetAvailableProfileIds](ShortcutManagement.IShortcutManager.GetAvailableProfileIds.html) contains `newProfileId`. Throws `ArgumentException` if newProfileId is invalid.


            
