This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).CreateProfile




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

public void CreateProfile(string profileId);






### Parameters



| Parameter | Description |
| --- | --- |
| profileId | ID of created profile. |





### Description



Creates a new profile with the given profile ID.





Throws `ArgumentNullException` if `profileId` is `null`. Throws `ArgumentException` if `profileId` is invalid. Throws `ArgumentException` if `profileId` is not unique, i.e. when [GetAvailableProfileIds](ShortcutManagement.IShortcutManager.GetAvailableProfileIds.html) contains `profileId`.


            
