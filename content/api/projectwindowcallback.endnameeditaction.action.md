This version of Unity is unsupported.



# [EndNameEditAction](ProjectWindowCallback.EndNameEditAction.html).Action




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

public void Action(int instanceId,
string pathName,
string resourceFile);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceId | The instance ID of the edited asset. |
| pathName | The path to the asset. |
| resourceFile | The resource file string argument passed to ProjectWindowUtil.StartNameEditingIfProjectWindowExists. |





### Description



Unity calls this function when the user accepts an edited name, either by pressing the Enter key or by losing the keyboard input focus.


            
