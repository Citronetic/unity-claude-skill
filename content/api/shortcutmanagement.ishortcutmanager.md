This version of Unity is unsupported.



# IShortcutManager





interface in
          UnityEditor.ShortcutManagement


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



















### Description



Represents a manager that configures a particular instance of the shortcuts system.





The manager maintains a list of *available* profiles which can be retrieved with [GetAvailableProfiles](ShortcutManagement.IShortcutManager.GetAvailableProfiles.html). Some of the methods require the passed profile ID to be available at the time it is called. Creating a new profile with [CreateProfile](ShortcutManagement.IShortcutManager.CreateProfile.html) makes it available and deleting a profile with [DeleteProfile](ShortcutManagement.IShortcutManager.DeleteProfile.html) makes it not available anymore.

It also maintains a reference to the *active* profile ([activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html)) which determines the active bindings based on the shortcut overrides of the active profile. [RebindShortcut](ShortcutManagement.IShortcutManager.RebindShortcut.html) and [ClearShortcutOverride](ShortcutManagement.IShortcutManager.ClearShortcutOverride.html) requires the active profile to not be *read-only* (i.e. [IsProfileReadOnly](ShortcutManagement.IShortcutManager.IsProfileReadOnly.html) returns `false` for [activeProfileId](ShortcutManagement.IShortcutManager-activeProfileId.html)) since these two methods modify the active profile.

Finally, it maintains a list of available shortcuts which can be retrieved with [GetAvailableShortcuts](ShortcutManagement.IShortcutManager.GetAvailableShortcuts.html). All methods that take a shortcut ID require that the shortcut is avaliable.





### Properties



| Property | Description |
| --- | --- |
| activeProfileId | Gets or sets the ID of the currently active profile. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearShortcutOverride | Clears the binding for shortcut with given shortcut ID from the active profile. |
| CreateProfile | Creates a new profile with the given profile ID. |
| DeleteProfile | Deletes profile with the given profile ID. |
| GetAvailableProfileIds | Returns an enumeration of all of avaliable profile IDs. |
| GetAvailableShortcutIds | Returns an enumeration of all available shortcut IDs. |
| GetShortcutBinding | Returns the active binding for the given shortcut ID. |
| IsProfileIdValid | Checks that the profile ID is valid. |
| IsProfileReadOnly | Is the profile for the given profile ID read-only? |
| IsShortcutOverridden | Does the active profile override the binding for the given shortcut ID? |
| RebindShortcut | Rebinds the shortcut for the given shortcut ID to the given binding in the active profile. |
| RenameProfile | Renames the ID of a profile. |





### Events



| Event | Description |
| --- | --- |
| activeProfileChanged | Raised when the ID of the active profile is changed. |
| shortcutBindingChanged | Raised when shortcut overrides are changed on the active profile. |


            
