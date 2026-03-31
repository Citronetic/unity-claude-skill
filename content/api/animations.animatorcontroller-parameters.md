This version of Unity is unsupported.



# [AnimatorController](Animations.AnimatorController.html).parameters




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












                    public AnimatorControllerParameter[] parameters;






### Description



Parameters are used to communicate between scripting and the controller. They are used to drive transitions and blendtrees for example.





It's important to note that the AnimatorControllerParameters are returned as a copy. The array should be set back into the property when changed.


              


```
using UnityEngine;
using UnityEditor;class ControllerModifier
{
    UnityEditor.Animations.AnimatorController controller;    public void ModifyParameters(int parameterIndex, string newName)
    {
        AnimatorControllerParameter[] parameters = controller.parameters;
        parameters[parameterIndex].name = newName;
        controller.parameters = parameters;
    }
}
```


            
