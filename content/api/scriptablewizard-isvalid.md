This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).isValid




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












                    public bool isValid;






### Description



Allows you to enable and disable the wizard create button, so that the user can not click it.





Additional resources: [ScriptableWizard.OnWizardUpdate](ScriptableWizard.OnWizardUpdate.html)

[Image: image]

*The finish button gets disabled until the user sets the number to 5.*


              


```
// Asks the user to set the var "Number" to 5, if is not set to 5
// the "Finish" button will not be reachableusing UnityEngine;
using UnityEditor;public class isValidScriptableWizard : ScriptableWizard
{
    public int number = 0;
    [MenuItem("Example/Show isValid Usage")]
    static void CreateWindow()
    {
        ScriptableWizard.DisplayWizard(
            "isValid boolean example",
            typeof(isValidScriptableWizard),
            "Finish");
    }    void OnWizardUpdate()
    {
        helpString = "Set The number to 5 and press finish";
        if (number != 5)
        {
            errorString = "The number has to be set to 5!";
            isValid = false;
        }
        else
        {
            errorString = "";
            isValid = true;
        }
    }
}
```


            
