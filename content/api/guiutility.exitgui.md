This version of Unity is unsupported.



# [GUIUtility](GUIUtility.html).ExitGUI




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

public static void ExitGUI();






### Description



Puts the GUI in a state that will prevent all subsequent immediate mode GUI functions from evaluating for the remainder of the GUI loop by throwing an [ExitGUIException](ExitGUIException.html).





In Unity's immediate mode GUI system, the GUI loop procedes by calling [GUI](GUI.html) methods during a sequence of [Event](Event.html)s and these methods take action according to the [Event.type](Event-type.html). For example, when using [GUILayout](GUILayout.html), controls will first receive a [EventType.Layout](EventType.Layout.html) event to determine how much space they need, and then later receive a [EventType.Repaint](EventType.Repaint.html) event to actually draw into the space allocated for them.

In this sequence, it is expected that control IDs are requested and used in the same order for each [Event](Event.html) that is processed during the GUI loop, and that the event loop does not re-enter itself. Use [GUIUtility.ExitGUI](GUIUtility.ExitGUI.html) in situations that might violate these assumptions, such as when a change in some value might change what controls are displayed next. Using this method can prevent errors such as `ArgumentException: Getting control 0's position in a group with only 0 controls when doing Repaint`.

Additional resources: [GetControlID](GUIUtility.GetControlID.html).


            
