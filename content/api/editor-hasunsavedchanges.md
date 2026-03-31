This version of Unity is unsupported.



# [Editor](Editor.html).hasUnsavedChanges




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












                    public bool hasUnsavedChanges;






### Description



This property specifies whether the Editor prompts the user to save or discard unsaved changes before the Inspector gets rebuilt.





Set hasUnsavedChanges to true to prompt the user to save or discard unsaved changes. This helps prevent them from accidentally losing unsaved work. When you use hasUnsavedChanges, you must also use [EditorWindow.saveChangesMessage](EditorWindow-saveChangesMessage.html), and override the [EditorWindow.SaveChanges](EditorWindow.SaveChanges.html) and/or [EditorWindow.DiscardChanges](EditorWindow.DiscardChanges.html) methods.
                 When hasUnsavedChanges is enabled, the title bar and docked tabs update to indicate that the user needs to save their work. If the user closes the InspectorWindow, change selection or enters playmode without saving, a message box appears, and prompts them to either save, discard their changes, or cancel.


              


```
using UnityEngine;
using UnityEditor;[CreateAssetMenu]
public class UnsavedChangesExampleSO : ScriptableObject
{}[CustomEditor(typeof(UnsavedChangesExampleSO))]
public class UnsavedChangesExampleEditor : UnityEditor.Editor
{
    void OnEnable()
    {
        saveChangesMessage = "This editor has unsaved changes. Would you like to save?";
    }    void OnInspectorGUI()
    {
        saveChangesMessage = EditorGUILayout.TextField(saveChangesMessage);        EditorGUILayout.LabelField(hasUnsavedChanges ? "I have changes!" : "No changes.", EditorStyles.wordWrappedLabel);
        EditorGUILayout.LabelField("Try to change selection.");        using (new EditorGUI.DisabledScope(hasUnsavedChanges))
        {
            if (GUILayout.Button("Create unsaved changes"))
                hasUnsavedChanges = true;
        }        using (new EditorGUI.DisabledScope(!hasUnsavedChanges))
        {
            if (GUILayout.Button("Save"))
                SaveChanges();            if (GUILayout.Button("Discard"))
                DiscardChanges();
        }
    }    public override void SaveChanges()
    {
        // Your custom save procedures here        Debug.Log($"{this} saved successfully!!!");
        base.SaveChanges();
    }    public override void DiscardChanges()
    {
        // Your custom procedures to discard changes        Debug.Log($"{this} discarded changes!!!");
        base.DiscardChanges();
    }
}
```


            
