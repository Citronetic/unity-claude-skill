This version of Unity is unsupported.



# [ScriptableWizard](ScriptableWizard.html).OnWizardCreate()




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



This is called when the user clicks on the Create button.





Here you perform any final creation/modification actions. After OnCreateWizard is called, the wizard is automatically closed.

Additional resources: [ScriptableWizard.DisplayWizard](ScriptableWizard.DisplayWizard.html)

[Image: image]

*ScriptableWizard window for selecting GameObjects of a certain "type".*


              


```
// Editor Script that lets you "Select" all the GameObjects that have a certain Component.using UnityEngine;
using UnityEditor;
using System.Collections;public class ScriptableWizardOnWizardCreate : ScriptableWizard
{
    [MenuItem("Example/OnWizardCreate example")]
    public static void SelectAllOfTypeMenuIem()
    {
        ScriptableWizard.DisplayWizard(
            "Select objects of type ...",
            typeof(ScriptableWizardOnWizardCreate),
            "Select");
    }    void OnWizardCreate()
    {
        Object[] objs = FindObjectsOfType(typeof(GameObject));
        ArrayList selectionBuilder = new ArrayList();
        foreach (GameObject go in objs)
        {
            if (go.GetComponent<Camera>())
                selectionBuilder.Add(go);
        }
        Selection.objects = selectionBuilder.ToArray(typeof(GameObject)) as GameObject[];
    }
}
```


            
