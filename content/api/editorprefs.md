This version of Unity is unsupported.



# EditorPrefs





class in
          UnityEditor


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



Stores and accesses Unity Editor preferences.





On macOS, EditorPrefs are stored in `~/Library/Preferences/com.unity3d.UnityEditor5.x.plist`.

On Windows, EditorPrefs are stored in the registry under the
`HKCU\Software\Unity Technologies\Unity Editor 5.x` key.

On Linux, EditorPrefs are stored in `~/.local/share/unity3d/prefs`.





### Static Methods



| Method | Description |
| --- | --- |
| DeleteAll | Removes all keys and values from the preferences. Use with caution. |
| DeleteKey | Removes key and its corresponding value from the preferences. |
| GetBool | Returns the value corresponding to key in the preference file if it exists. |
| GetFloat | Returns the float value corresponding to key if it exists in the preference file. |
| GetInt | Returns the value corresponding to key in the preference file if it exists. |
| GetString | Returns the value corresponding to key in the preference file if it exists. |
| HasKey | Returns true if key exists in the preferences file. |
| SetBool | Sets the value of the preference identified by key. |
| SetFloat | Sets the float value of the preference identified by key. |
| SetInt | Sets the value of the preference identified by key as an integer. |
| SetString | Sets the value of the preference identified by key. Note that EditorPrefs does not support null strings and will store an empty string instead. |


            
