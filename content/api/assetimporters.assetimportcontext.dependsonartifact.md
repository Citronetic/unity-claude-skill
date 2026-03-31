This version of Unity is unsupported.



# [AssetImportContext](AssetImporters.AssetImportContext.html).DependsOnArtifact




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

public void DependsOnArtifact(string path);






## Declaration

public void DependsOnArtifact(GUID guid);






## Declaration

public void DependsOnArtifact([Experimental.ArtifactKey](Experimental.ArtifactKey.html) key);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The path of the Asset whose artifact should be the dependency. Note: Although the dependency is the artifact (import result) which is stored in the library folder, this parameter is the path to the Asset in the Assets folder, and not a path to the artifact in the Library folder. |
| guid | The guid of the artifact dependency. |
| key | The artifact key of the artifact dependency. |





### Description



Setup artifact dependency to an asset.





An artifact dependency is a dependency where an Asset depends on the import result (known as an artifact) of another Asset. If you change an Asset that has been marked as a dependency, all Assets which depend on it will also get reimported (after the dependency has been imported).

Note: If you specify an Asset as a dependency that doesn't exist or hasn't yet been imported, the dependency is still registered. It is registered as an un-imported Asset. When the Asset is later imported, all Assets which depend on it will also get reimported.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;class TextureInfo : ScriptableObject
{
    public int height;
}[ScriptedImporter(1, "cube")]
public class CubeWithTextureImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var assetDependency = "Assets/MyTexture.png";        ctx.DependsOnArtifact(assetDependency);        var texture = AssetDatabase.LoadAssetAtPath<Texture>(assetDependency);        if (texture != null)
        {
            var textureInfo = ScriptableObject.CreateInstance<TextureInfo>();
            textureInfo.height = texture.height;
            ctx.AddObjectToAsset("TextureInfo", textureInfo);
        }
    }
}
```


            
