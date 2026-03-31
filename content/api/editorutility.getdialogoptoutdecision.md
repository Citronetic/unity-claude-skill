This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).GetDialogOptOutDecision




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

public static bool GetDialogOptOutDecision([DialogOptOutDecisionType](DialogOptOutDecisionType.html) dialogOptOutDecisionType,
string dialogOptOutDecisionStorageKey);






### Parameters



| Parameter | Description |
| --- | --- |
| dialogOptOutDecisionType | The type of opt-out decision a user can make. |
| dialogOptOutDecisionStorageKey | The unique key setting to store the decision under. |





### Returns



**bool**

          `true` if the user previously opted out of seeing the dialog associated with `dialogOptOutDecisionStorageKey`. Returns `false` if the user did not yet opt out.





### Description



This method displays a modal dialog that lets the user opt-out of being shown the current dialog box again.





Use this method as a short-hand to query the opt-out decision a user made on a dialog displayed via [DisplayDialog](EditorUtility.DisplayDialog.html).

                You don't need to query this before you call [DisplayDialog](EditorUtility.DisplayDialog.html), as Unity handles it automatically.

                If the user chooses to opt-out of a dialog box, Unity stores this decision. If `dialogOptOutDecisionType` is set to [DialogOptOutDecisionType.ForThisMachine](DialogOptOutDecisionType.ForThisMachine.html) Unity stores it via [EditorPrefs.SetBool](EditorPrefs.SetBool.html). If `dialogOptOutDecisionType` is set to [DialogOptOutDecisionType.ForThisSession](DialogOptOutDecisionType.ForThisSession.html) Unity stores it via [SessionState.SetBool](SessionState.SetBool.html). In both cases Unity stores it under the key provided as `dialogOptOutDecisionStorageKey`.

                This method automatically selects the storage place based on the provided `dialogOptOutDecisionType`.

                If you want to the let the user change their decision that is stored in [EditorPrefs](EditorUtility.EditorPrefs.html), you can add this to the Editor Preferences with a [SettingsProvider](EditorUtility.SettingsProvider.html).

                Additional resources: [DisplayDialog](EditorUtility.DisplayDialog.html) function.


            
