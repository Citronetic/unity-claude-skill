This version of Unity is unsupported.


                  **Method group is Obsolete**





# [AssetImporterEditor](AssetImporters.AssetImporterEditor.html).ApplyAndImport




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













                        **Obsolete**
                        UnityUpgradeable () -> SaveChanges.




## Declaration

protected void ApplyAndImport();






### Description



Saves the changes from the editor UI to the settings object and imports the asset.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class ExampleScript : AssetImporterEditor
{
    public void OnInspectorGUI()
    {
        serializedObject.Update();        // Draw custom GUI        serializedObject.ApplyModifiedProperties();        ApplyRevertGUI();
    }    protected virtual bool OnApplyRevertGUI()
    {
        using (new EditorGUI.DisabledScope(!HasModified()))
        {
            bool applied;            RevertButton();
            applied = ApplyButton();            if (GUILayout.Button("Apply And Generate Other Files..."))
            {
                // Apply first to make sure the importer settings are up-to-date
                Apply();                // Generate a bunch of new files for each importer
                foreach (AssetImporter importer in targets)
                {
                    var path = importer.assetPath;
                    // Do create files based on the path.
                }                ApplyAndImport();
                applied = true;
            }
            return applied;
        }
    }
}
```


            
