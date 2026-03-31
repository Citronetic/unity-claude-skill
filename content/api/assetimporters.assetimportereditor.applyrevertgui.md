This version of Unity is unsupported.



# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).ApplyRevertGUI




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

protected void ApplyRevertGUI();






### Description



Add's the 'Apply' and 'Revert' buttons to the editor.





To be called from the OnInstpectorGUI event handler method as this is where the Apply/Revert buttons are placed on editor.
This method may not be overridden but custom behaviour can be injected by re-implementing OnApplyRevertGUI event handler method.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : ScriptedImporterEditor
{
    public override void OnInspectorGUI()
    {
        serializedObject.Update();        // Draw custom GUI        serializedObject.ApplyModifiedProperties();        ApplyRevertGUI();
    }
}
```


            
