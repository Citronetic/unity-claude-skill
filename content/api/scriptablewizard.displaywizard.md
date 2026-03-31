This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).DisplayWizard




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

public static T DisplayWizard(string title);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The title shown at the top of the wizard window. |





### Returns



**T**
        The wizard.





### Description



Creates a wizard.





When the user hits the Create button [OnWizardCreate](ScriptableWizard.OnWizardCreate.html) function will be called.
DisplayWizard will only show one wizard for every wizard class.

[Image: image]

*Simple Wizard window that copies a GameObject several times.*


              


```
// Simple Wizard that clones an object.using UnityEngine;
using UnityEditor;
using System.Collections;public class ScriptableWizardDisplayWizard : ScriptableWizard
{
    public GameObject objectToCopy = null;
    public int numberOfCopies = 2;
    [MenuItem("Example/Show DisplayWizard usage")]
    static void CreateWindow()
    {
        // Creates the wizard for display
        ScriptableWizard.DisplayWizard("Copy an object.",
            typeof(ScriptableWizardDisplayWizard),
            "Copy!");
    }    void OnWizardUpdate()
    {
        helpString = "Clones an object a number of times";
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




---








## Declaration

public static T DisplayWizard(string title,
string createButtonName);






## Declaration

public static T DisplayWizard(string title,
string createButtonName,
string otherButtonName);






### Parameters



| Parameter | Description |
| --- | --- |
| title | The title shown at the top of the wizard window. |
| createButtonName | The text shown on the create button. |
| otherButtonName | The text shown on the optional other button. Leave this parameter out to leave the button out. |





### Returns



**T**
        The wizard.





### Description



Creates a wizard.





When the user hits the Create button [OnWizardCreate](ScriptableWizard.OnWizardCreate.html) function will be called.
DisplayWizard will only show one wizard for every wizard class.




---








## Declaration

public static [ScriptableWizard](ScriptableWizard.html) DisplayWizard(string title,
Type klass,
string createButtonName = "Create",
string otherButtonName = "");






### Parameters



| Parameter | Description |
| --- | --- |
| title | The title shown at the top of the wizard window. |
| klass | The class implementing the wizard. It has to derive from ScriptableWizard. |
| createButtonName | The text shown on the create button. |
| otherButtonName | The text shown on the optional other button. Leave this parameter out to leave the button out. |





### Returns



**ScriptableWizard**
        The wizard.





### Description



Creates a wizard.





When the user hits the Create button [OnWizardCreate](ScriptableWizard.OnWizardCreate.html) function will be called.
DisplayWizard will only show one wizard for every wizard class.


            
