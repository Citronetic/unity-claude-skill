This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).OnWizardOtherButton()




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



Allows you to provide an action when the user clicks on the other button.





This is the place where you can implement all the stuff that will
be done if the user clicks the secondary option when calling DisplayWizard.

Additional resources: [ScriptableWizard.DisplayWizard](ScriptableWizard.DisplayWizard.html)

[Image: image]

*ScriptableWizard with an "Other" button, in this case named "Info".*


              


```
// Display a window showing the distance between two objects when clicking the Info button.using UnityEngine;
using UnityEditor;public class ScriptableWizardOnWizardOtherButton : ScriptableWizard
{
    public Transform firstObject = null;
    public Transform secondObject = null;    [MenuItem("Example/Show OnWizardOtherButton Usage")]
    static void CreateWindow()
    {
        ScriptableWizard.DisplayWizard("Click info to know the distance between the objects",
            typeof(ScriptableWizardOnWizardOtherButton), "Finish!", "Info");
    }    void OnWizardUpdate()
    {
        if (firstObject == null || secondObject == null)
        {
            isValid = false;
            errorString = "Select the objects you want to measure";
        }
        else
        {
            isValid = true;
            errorString = "";
        }
    }    // Called when you press the "Info" button.
    void OnWizardOtherButton()
    {
        float distanceObjs = Vector3.Distance(firstObject.position, secondObject.position);
        EditorUtility.DisplayDialog(
            "The distance between the objects is: " + distanceObjs + " Units",
            "",
            "OK");
    }    // Called when you press the "Finish!" button.
    void OnWizardCreate()
    {
    }
}
```


            
