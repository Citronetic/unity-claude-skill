This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).errorString




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












                    public string errorString;






### Description



Allows you to set the error text of the wizard.





Additional resources: [ScriptableWizard.OnWizardUpdate](ScriptableWizard.OnWizardUpdate.html)

[Image: image]

*Error String on a ScriptableWizard window.*


              


```
// Creates a simple Wizard window and prints an error
// string until you set the number to 5using UnityEngine;
using UnityEditor;public class ErrorString : ScriptableWizard
{
    public int number = 0;
    [MenuItem("Example/Show Error String")]
    static void CreateWindow()
    {
        ScriptableWizard.DisplayWizard("Error String example", typeof(ErrorString), "Close");
    }    void OnWizardUpdate()
    {
        helpString = "Set The number to 5";
        if (number != 5)
            errorString = "The number has to be set to 5!";
        else
            errorString = "";
    }
}
```


            
