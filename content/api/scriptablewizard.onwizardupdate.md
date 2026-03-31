This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).OnWizardUpdate()




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



This is called when the wizard is opened or whenever the user changes something in the wizard.





This allows you to set the [helpString](ScriptableWizard-helpString.html), [errorString](ScriptableWizard-errorString.html) and enable/disable the Create button via [isValid](ScriptableWizard-isValid.html).
Also it lets you change labels (for timers i.e.) or buttons when the wizard is being shown

Additional resources: [ScriptableWizard.DisplayWizard](ScriptableWizard.DisplayWizard.html)

[Image: image]

*ScriptableWizard window for cloning a Game Object.*


              


```
// Simple Wizard that clones an object several times.using UnityEngine;
using UnityEditor;
using System.Collections;public class CloneObjects : ScriptableWizard
{
    public GameObject objectToCopy = null;
    public int numberOfCopies = 2;
    [MenuItem("Example/Clone objects")]
    static void CreateWindow()
    {
        // Creates the wizard for display
        ScriptableWizard.DisplayWizard("Clone an object.", typeof(CloneObjects), "Clone!");
    }    void OnWizardUpdate()
    {
        helpString = "Clones an object a number of times and move the cloned objects to the origin";
        if (!objectToCopy)
        {
            errorString = "Please assign an object";
            isValid = false;
        }
        else
        {
            errorString = "";
            isValid = true;
        }
    }    void OnWizardCreate()
    {
        for (int i = 0; i < numberOfCopies; i++)
            Instantiate(objectToCopy, Vector3.zero, Quaternion.identity);
    }
}
```


            
