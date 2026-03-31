This version of Unity is unsupported.



# [ScriptedImporterAttribute](AssetImporters.ScriptedImporterAttribute.html).fileExtensions




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












                    public string[] fileExtensions;






### Description



The list of file name extensions that this scripted importer should handle. You must not include the period character, only the extension characters such as "ext".





By specifying one or more extensions in this list, your ScriptedImporter becomes the default importer for each of those types of asset files.
                    The file name extension list is case insensitive. Unity will match files with any variations of casing for the extensions you specify.
                    Note: Do not assign the same file name extension to more than one ScriptedImporter. If you do, an error message is thrown, and files with that file name extension will not be imported by any ScriptedImporter.
                    Note: You cannot override Unity's built-in default importers. For example, if you include ".prefab" in your file name extension list, it will be ignored because it is a built-in default importer type.


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


            
