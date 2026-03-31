This version of Unity is unsupported.



# [Selection](Selection.html).objects




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












                    public static Object[] objects;






### Description



The actual unfiltered selection from the Scene.





All objects  will be returned, including assets in projects.  You can also assign objects to the selection.

Additional resources: [Selection.instanceIDs](Selection-instanceIDs.html).

[Image: image]

*Scriptable Wizard that lets you select GameObjects by their tag.*


              


```
using UnityEngine;
using UnityEditor;class SelectAllOfTag : ScriptableWizard
{
    public string tagName = "ExampleTag";    [MenuItem("Example/Select All of Tag...")]
    static void SelectAllOfTagWizard()
    {
        ScriptableWizard.DisplayWizard(
            "Select All of Tag...",
            typeof(SelectAllOfTag),
            "Make Selection");
    }    void OnWizardCreate()
    {
        GameObject[] gos = GameObject.FindGameObjectsWithTag(tagName);
        Selection.objects = gos;
    }
}
```


            
