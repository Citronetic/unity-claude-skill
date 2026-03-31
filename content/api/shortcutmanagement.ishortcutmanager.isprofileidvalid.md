This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).IsProfileIdValid




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

public bool IsProfileIdValid(string profileId);






### Parameters



| Parameter | Description |
| --- | --- |
| profileId | The profile ID to be checked. If a null string is specified, the method throws an ArgumentNullException error. |





### Returns



**bool**
        Returns `true` if the profile ID is valid. Returns `false` if the profile ID is empty or equals [ShortcutManager.defaultProfileId](ShortcutManagement.ShortcutManager-defaultProfileId.html).





### Description



Checks that the profile ID is valid.





A Profile ID cannot be empty and it cannot contain invalid characters. Invalid file characters are specific to each file system. Use this method to avoid an `ArgumentException` error from methods that require a valid profile ID.


            
