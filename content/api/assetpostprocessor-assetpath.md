This version of Unity is unsupported.



# [AssetPostprocessor](AssetPostprocessor.html).assetPath




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












                    public string assetPath;






### Description



The path name of the asset being imported.


              


```
using UnityEngine;
using UnityEditor;// Automatically sets Textures settings upon first import and prints the
// path from  where is being importedclass CustomImportSettings : AssetPostprocessor
{
    void OnPreprocessTexture()
    {
        Debug.Log("Importing texture to: " + assetPath);
        TextureImporter importer  = (TextureImporter)assetImporter;
        importer.textureFormat = TextureImporterFormat.ARGB32;
        importer.isReadable = true;
        importer.mipmapEnabled = false;
    }
}
```


            
