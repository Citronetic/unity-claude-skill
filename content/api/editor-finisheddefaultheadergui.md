This version of Unity is unsupported.



# [Editor](Editor.html).finishedDefaultHeaderGUI




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



An event raised while drawing the header of the Inspector window, after the default header items have been drawn.





Add an event handler to this event in order to draw additional items in the header for the [Editor](Editor.html) passed to the event handler method.

The following example script displays an asset's GUID as a copyable label in the header, if the inspected object is a persistent asset and not a Scene object. Copy this example script into a file called EditorHeaderGUID.cs and put it in a folder called Editor.

[Image: image]
*The Inspector header with a custom GUID control added.*


              


```
using UnityEditor;[InitializeOnLoadAttribute]
static class EditorHeaderGUID
{
    static EditorHeaderGUID()
    {
        Editor.finishedDefaultHeaderGUI += DisplayGUIDIfPersistent;
    }    static void DisplayGUIDIfPersistent(Editor editor)
    {
        if (!EditorUtility.IsPersistent(editor.target))
            return;        var guid = AssetDatabase.AssetPathToGUID(AssetDatabase.GetAssetPath(editor.target));
        var totalRect = EditorGUILayout.GetControlRect();
        var controlRect = EditorGUI.PrefixLabel(totalRect, EditorGUIUtility.TrTempContent("GUID"));
        if (editor.targets.Length > 1)
            EditorGUI.LabelField(controlRect, EditorGUIUtility.TrTempContent("[Multiple objects selected]"));
        else
            EditorGUI.SelectableLabel(controlRect, guid);
    }
}
```


            
