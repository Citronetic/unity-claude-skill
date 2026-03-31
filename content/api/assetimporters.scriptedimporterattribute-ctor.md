This version of Unity is unsupported.



# ScriptedImporterAttribute Constructor




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

public ScriptedImporterAttribute(int version,
string ext);






## Declaration

public ScriptedImporterAttribute(int version,
string ext,
int importQueueOffset);






## Declaration

public ScriptedImporterAttribute(int version,
string[] exts);






## Declaration

public ScriptedImporterAttribute(int version,
string[] exts,
string[] overrideExts);






## Declaration

public ScriptedImporterAttribute(int version,
string[] exts,
int importQueueOffset);






## Declaration

public ScriptedImporterAttribute(int version,
string[] exts,
string[] overrideExts,
int importQueueOffset);






### Parameters



| Parameter | Description |
| --- | --- |
| version | A number that is used by the import pipeline to detect new versions of the importer script. Changing this number will trigger a re-import of all assets matching the listed extensions. |
| exts | List of file name extensions (not including the leading period character) that the scripted importer handles. |
| ext | Single file name extension (not including the leading period character) that the scripted importer handles. |
| importQueueOffset | Gives control over ordering of asset import based on types. Positive values delay the processing of source asset files while negative values place them earlier in the import process. |
| overrideExts | List of file name extensions (not including the leading period character) that the scripted importer can handle in addition to the default file name extension(s). |





### Description



Use the ScriptedImporter attribute to register a custom importer derived from [ScriptedImporter](AssetImporters.ScriptedImporter.html) with Unity's Asset import pipeline.





Always increment a scripted importer's version number whenever the script changes. This forces Assets imported with lower version numbers to be re-imported.

If the Editor's **Auto Refresh** preference is enabled, editing a script outside of the editor and saving it triggers a re-import of both the script and all Assets of the corresponding type.
The following example declares an importer that handles files with extension `cb` and `cube`.


              


```
using UnityEngine;
using UnityEditor.AssetImporters;[ScriptedImporter(1, new[] {"cb", "cube"})]
public class CubeImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        // ...
    }
}
```





The following example declares an importer that handles files with extension `sphere`.  Its **importQueueOffset** parameter is set to 10, forcing assets with extension `sphere` to be imported **after** all other scripted importers that have an **importQueueOffset** of less than 10.


              


```
using UnityEngine;
using UnityEditor.AssetImporters;[ScriptedImporter(1, "sphere", 10)]
public class SphereImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        // ...
    }
}
```





The following example declares an importer that handles files with the extension `fbb` and that can be used to import `fbx` files instead of Unity's default [ModelImporter](ModelImporter.html).


              


```
using UnityEngine;
using UnityEditor.AssetImporters;[ScriptedImporter(1, new[] {"fbb"}, new[] {"fbx"})]
public class CustomModelImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        // ...
    }
}
```


            
