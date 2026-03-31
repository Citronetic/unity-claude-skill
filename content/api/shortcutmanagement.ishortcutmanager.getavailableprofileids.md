This version of Unity is unsupported.



# [IShortcutManager](ShortcutManagement.IShortcutManager.html).GetAvailableProfileIds




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

public IEnumerable<string> GetAvailableProfileIds();






### Returns



**IEnumerable<string>**
        Enumerable of available profile IDs.





### Description



Returns an enumeration of all of avaliable profile IDs.





Profiles loaded from disk or created using [CreateProfile](ShortcutManagement.IShortcutManager.CreateProfile.html) are available unless deleted with [DeleteProfile](ShortcutManagement.IShortcutManager.DeleteProfile.html). Note that the returned enumeration always includes the default profile ID [ShortcutManager.defaultProfileId](ShortcutManagement.ShortcutManager-defaultProfileId.html).


            
