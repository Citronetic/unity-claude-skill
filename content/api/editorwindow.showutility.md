This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).ShowUtility




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

public void ShowUtility();






### Description



Show the EditorWindow as a floating utility window.





When the utility window loses focus it remains on top of the new active window.  This means
the [EditorWindow.ShowUtility](EditorWindow.ShowUtility.html) window is never hidden by the Unity editor.  It is, however, not
dockable to the editor.

Utility windows will always be in front of normal Unity windows. It will be hidden when
the user switches from Unity to another application.

**Note:** You do not need to use [EditorWindow.GetWindow](EditorWindow.GetWindow.html) before using this function to show the window.


              


```
// Simple script that randomizes the rotation of the selected GameObjects.

using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class RandomizeInSelectionShowUtility : EditorWindow
{
    System.Random random = new System.Random();
    public float rotationAmount;
    public string selected = "";

    [MenuItem("Examples/Randomize Objects")]
    static void Init()
    {
        RandomizeInSelectionShowUtility window =
            EditorWindow.GetWindow<RandomizeInSelectionShowUtility>(true, "Randomize Objects");
        window.ShowUtility();
    }

    void CreateGUI()
    {
        var label = new Label("Selected an object and click Randomize!");
        rootVisualElement.Add(label);

        var buttonRandomize = new Button();
        buttonRandomize.text = "Randomize!";
        buttonRandomize.clicked += () => RandomizeSelected();
        rootVisualElement.Add(buttonRandomize);
    }

    void RandomizeSelected()
    {
        foreach (var transform in Selection.transforms)
        {
            Quaternion rotation = Random.rotation;
            rotationAmount = (float)random.NextDouble();
            transform.localRotation = Quaternion.Slerp(transform.localRotation, rotation, rotationAmount);
        }
    }
}
```


            
