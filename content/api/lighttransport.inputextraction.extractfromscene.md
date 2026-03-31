This version of Unity is unsupported.



# [InputExtraction](LightTransport.InputExtraction.html).ExtractFromScene




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

public static bool ExtractFromScene(out [LightTransport.InputExtraction.BakeInput](LightTransport.InputExtraction.BakeInput.html) bakeInput);






### Parameters



| Parameter | Description |
| --- | --- |
| bakeInput | Output parameter that receives the extracted scene data. |





### Returns



**bool**
        True if extraction completed successfully, false if errors occurred.





### Description



Extracts all relevant scene data for light transport calculations from the currently open scenes.





This method scans all currently open scenes and extracts objects that affect global illumination calculations. It processes:

**Geometry:**
- [MeshRenderer](MeshRenderer.html) components with static flags or "Contribute GI" enabled.
- [Terrain](Terrain.html) objects with baked lighting enabled, including trees.
- Associated [Material](Material.html) properties and textures.

**Lighting:**
- [Light](Light.html) components configured for baked or mixed lighting.
- Environment lighting and skybox settings.
- Light probe groups ([LightProbeGroup](LightProbeGroup.html)).

**Output Data:**
The resulting [BakeInput](LightTransport.InputExtraction.BakeInput.html) contains preprocessed data ready for PopulateWorld. Objects not marked as static or not affecting GI are automatically excluded.

**Performance Note:** This operation can be expensive for large scenes as it processes all geometry and builds internal data structures.


              


```
// Extract scene data for baking
bool extractionSuccess = InputExtraction.ExtractFromScene(out var bakeInput);
if (!extractionSuccess)
{
    Debug.LogError("Failed to extract scene data for light baking");
    return;
}// Proceed with context creation and world population
using var context = new RadeonRaysContext();
context.Initialize();
var world = new RadeonRaysWorld();
using var progress = new BakeProgressState();bool populateSuccess = InputExtraction.PopulateWorld(bakeInput, progress, context, world);
Assert.IsTrue(populateSuccess);
```


            
