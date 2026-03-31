This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).activeProfileId




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












                    public string activeProfileId;






### Description



Gets or sets the ID of the currently active profile.





When active profile is changed all shortcut bindings are updated to reflect the overrides of active profile and its ancestors profiles. If the active profile is set to a profile ID of [ShortcutManager.defaultProfileId](ShortcutManagement.ShortcutManager-defaultProfileId.html) then all shortcut bindings will return to their default bindings. Setter throws `ArgumentNullException` if the value is `null`. Setter throws `ArgumentException` if the given profile ID is not available.


            
