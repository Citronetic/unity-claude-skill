This version of Unity is unsupported.



# LightmapParameters





class in
          UnityEditor



/



Inherits from:[Object](Object.html)


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




                [Switch to Manual](../Manual/class-LightmapParameters.html)














### Description



Configures how Unity bakes lighting and can be assigned to a [LightingSettings](LightingSettings.html) instance or asset.





Note that Unity's built-in Lightmap Parameters Assets are read-only.

Additional resources: [LightmapParameters.SetLightmapParametersForLightingSettings](LightmapParameters.SetLightmapParametersForLightingSettings.html).





### Properties



| Property | Description |
| --- | --- |
| antiAliasingSamples | The kernel width the lightmapper uses when sampling a lightmap texel. |
| AOAntiAliasingSamples | The maximum number of times to supersample a texel to reduce aliasing in AO. |
| AOQuality | The number of rays to cast for computing ambient occlusion. |
| backFaceTolerance | The percentage of rays shot from a ray origin that must hit front faces to be considered usable. |
| bakedLightmapTag | BakedLightmapTag is an integer that affects the assignment to baked lightmaps. Objects with different values for bakedLightmapTag are guaranteed to not be assigned to the same lightmap even if the other baking parameters are the same. |
| blurRadius | The radius (in texels) of the post-processing filter that blurs baked direct lighting. |
| clusterResolution | Controls the resolution at which Enlighten Realtime Global Illumination stores and can transfer input light. |
| directLightQuality | The number of rays used for lights with an area. Allows for accurate soft shadowing. |
| irradianceBudget | The amount of data used for Enlighten Realtime Global Illumination texels. Specifies how detailed view of the Scene a texel has. Small values mean more averaged out lighting. |
| irradianceQuality | The number of rays to cast for computing irradiance form factors. |
| isTransparent | If enabled, the object appears transparent during GlobalIllumination lighting calculations. |
| limitLightmapCount | If enabled, objects sharing the same lightmap parameters will be packed into LightmapParameters.maxLightmapCount lightmaps. |
| maxLightmapCount | The maximum number of lightmaps created for objects sharing the same lightmap parameters. This property is ignored if LightmapParameters.limitLightmapCount is false. |
| modellingTolerance | Maximum size of gaps that can be ignored for GI (multiplier on pixel size). |
| pushoff | The distance to offset the ray origin from the geometry when performing ray tracing, in modelling units. Unity applies the offset to all baked lighting: direct lighting, indirect lighting, environment lighting and ambient occlusion. |
| resolution | The texel resolution per meter used for real-time lightmaps. This value is multiplied by LightingSettings.indirectResolution. |
| stitchEdges | Whether pairs of edges should be stitched together. |
| systemTag | System tag is an integer identifier. It lets you force an object into a different Enlighten Realtime Global Illumination system even though all the other parameters are the same. |





### Public Methods



| Method | Description |
| --- | --- |
| AssignToLightingSettings | Assignes itself to a LightingSettings instance or asset. |





### Static Methods



| Method | Description |
| --- | --- |
| GetLightmapParametersForLightingSettings | Returns the assigned LightmapParameters for the specified LightingSettings. |
| SetLightmapParametersForLightingSettings | Sets the LightmapParameters for the specified LightingSettings. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
