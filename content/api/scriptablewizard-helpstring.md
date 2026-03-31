This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).helpString




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












                    public string helpString;






### Description



Allows you to set the help text of the wizard.





Additional resources: [ScriptableWizard.OnWizardUpdate](ScriptableWizard.OnWizardUpdate.html)

[Image: image]

*Help string on a ScriptableWizard window.*


              


```
// Creates a simple Wizard window and prints the HelpString
// in the Wizard window.using UnityEngine;
using UnityEditor;public class HelpString : ScriptableWizard
{
    [MenuItem("Example/Show Help String")]
    static void CreateWindow()
    {
        ScriptableWizard.DisplayWizard("", typeof(HelpString), "Finish");
    }    void OnWizardUpdate()
    {
        helpString = "This string describes what the Scriptable Wizard does.";
    }
}
```


            
