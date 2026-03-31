This version of Unity is unsupported.



# ExitGUIException





class in
          UnityEngine



/



Implemented in:[UnityEngine.IMGUIModule](UnityEngine.IMGUIModule.html)


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



An exception that will prevent all subsequent immediate mode GUI functions from evaluating for the remainder of the GUI loop.





If you have exception handling in your [GUI](GUI.html) code, it should not catch this exception type, as Unity's immediate mode GUI system relies on this exception to exit the current [GUI](GUI.html) loop properly in some cases.

If you need to exit the immediate mode GUI loop in your own code, you should call [GUIUtility.ExitGUI](GUIUtility.ExitGUI.html) rather than throwing this exception directly.


            
