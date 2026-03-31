This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).SaveChanges




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

public void SaveChanges();






### Description



Performs a save action on the contents of the window.





Override SaveChanges() when using the [EditorWindow.hasUnsavedChanges](EditorWindow-hasUnsavedChanges.html) property so that a user will not lose unsaved work when a window is closed.
                The Editor also calls this method internally when the user closes the window. Once called, the Editor prompts the user to save changes.
                When overring the method, be sure to call the base implementation or else the [EditorWindow.hasUnsavedChanges](EditorWindow-hasUnsavedChanges.html) property is not reset to false.
                Note, if the Editor has multiple prompts to the user to save their changes, the Editor will call this method as part of a list of changes that need saving.
                Unity cancels the save process for all remaining prompts if this method throws an exception. In this case, you will find an error message with the exception message displayed in a dialog box.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class UnsavedChangesExampleWindow : EditorWindow
{
    [MenuItem("Examples/Editor Window With Unsaved Changes")]
    static void Init()
    {
        UnsavedChangesExampleWindow window = (UnsavedChangesExampleWindow)EditorWindow.GetWindowWithRect(typeof(UnsavedChangesExampleWindow), new Rect(100, 100, 400, 400));

        window.saveChangesMessage = "This window has unsaved changes. Would you like to save?";
        window.Show();
    }

    void CreateGUI()
    {
        var label = new Label();
        label.text = hasUnsavedChanges ? "I have changes!" : "No changes.";
        rootVisualElement.Add(label);

        var buttonCreate = new Button();
        buttonCreate.text = "Create unsaved changes";
        buttonCreate.clicked += () => {
            hasUnsavedChanges = true;
            Debug.Log($"{this} has unsaved changes!!!");
        };
        rootVisualElement.Add(buttonCreate);

        var buttonSave = new Button();
        buttonSave.text = "Save";
        buttonSave.clicked += () => SaveChanges();
        rootVisualElement.Add(buttonSave);

        var buttonDiscard = new Button();
        buttonDiscard.text = "Discard";
        buttonDiscard.clicked += () => DiscardChanges();
        rootVisualElement.Add(buttonDiscard);
    }

    public override void SaveChanges()
    {
        // Your custom save procedures here

        Debug.Log($"{this} saved successfully!!!");
        base.SaveChanges();
    }

    public override void DiscardChanges()
    {
        // Your custom procedures to discard changes

        Debug.Log($"{this} discarded changes!!!");
        base.DiscardChanges();
    }
}
```


            
