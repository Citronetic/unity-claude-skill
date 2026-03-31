This version of Unity is unsupported.



# [AssistiveSupport](Accessibility.AssistiveSupport.html).activeHierarchy




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












                    public static [Accessibility.AccessibilityHierarchy](Accessibility.AccessibilityHierarchy.html) activeHierarchy;






### Description



The active AccessibilityHierarchy for the screen reader. May be `null` if no hierarchy is active.

You need an active accessibility hierarchy to present any content to the user through the screen reader.

If the screen reader is off, there is no active hierarchy. If the screen reader is turned off on the device
 while an active hierarchy is set, the active hierarchy is automatically set to `null`.

For all the supported platforms, refer to [AssistiveSupport](Accessibility.AssistiveSupport.html).





Throws `PlatformNotSupportedException` if the screen reader support is not implemented for the
 platform and the code is not running in the Unity Editor.


 When the active hierarchy is assigned, a notification is sent to the operating system that the screen changed
 considerably. The notification is sent by calling [IAccessibilityNotificationDispatcher.SendScreenChanged](Accessibility.IAccessibilityNotificationDispatcher.SendScreenChanged.html) (with a `null` parameter).


            
