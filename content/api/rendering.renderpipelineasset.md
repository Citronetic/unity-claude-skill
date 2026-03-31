This version of Unity is unsupported.



# RenderPipelineAsset





class in
          UnityEngine.Rendering



/



Inherits from:[ScriptableObject](ScriptableObject.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



An asset that produces a specific IRenderPipeline.





Default implementation of IRenderPipelineAsset. This manages the lifecylces of inherited types, as well as ensures that created IRenderPipeline's are invalidated when the asset is changed.

Additional resources: IRenderPipelineAsset.





### Properties



| Property | Description |
| --- | --- |
| autodeskInteractiveMaskedShader | Retrieves the default Autodesk Interactive masked Shader for this pipeline. |
| autodeskInteractiveShader | Retrieves the default Autodesk Interactive Shader for this pipeline. |
| autodeskInteractiveTransparentShader | Retrieves the default Autodesk Interactive transparent Shader for this pipeline. |
| default2DMaskMaterial | Gets the default 2D Mask Material used by Sprite Masks in Universal Render Pipeline. |
| default2DMaterial | Return the default 2D Material for this pipeline. |
| defaultLineMaterial | Return the default Line Material for this pipeline. |
| defaultMaterial | Return the default Material for this pipeline. |
| defaultParticleMaterial | Return the default particle Material for this pipeline. |
| defaultShader | Return the default Shader for this pipeline. |
| defaultSpeedTree7Shader | Return the default SpeedTree v7 Shader for this pipeline. |
| defaultSpeedTree8Shader | Return the default SpeedTree v8 Shader for this pipeline. |
| defaultSpeedTree9Shader | Return the default SpeedTree v9 Shader for this pipeline. |
| defaultTerrainMaterial | Return the default Terrain  Material for this pipeline. |
| defaultUIETC1SupportedMaterial | Return the default UI ETC1  Material for this pipeline. |
| defaultUIMaterial | Return the default UI Material for this pipeline. |
| defaultUIOverdrawMaterial | Return the default UI overdraw Material for this pipeline. |
| pipelineType | Returns a RenderPipeline type associated with the given RenderPipelineAsset instance. |
| renderPipelineShaderTag | Returns the Shader Tag value for the render pipeline that is described by this asset. |
| terrainBrushPassIndex | The render index for the terrain brush in the editor. |
| terrainDetailGrassBillboardShader | Return the detail grass billboard Shader for this pipeline. |
| terrainDetailGrassShader | Return the detail grass Shader for this pipeline. |
| terrainDetailLitShader | Return the detail lit Shader for this pipeline. |





### Protected Methods



| Method | Description |
| --- | --- |
| CreatePipeline | Create a IRenderPipeline specific to this asset. |
| EnsureGlobalSettings | Ensures Global Settings are ready and registered into GraphicsSettings. |
| OnDisable | Default implementation of OnDisable for RenderPipelineAsset. See ScriptableObject.OnDisable |
| OnValidate | Default implementation of OnValidate for RenderPipelineAsset. See MonoBehaviour.OnValidate |





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
| CreateInstance | Creates an instance of a scriptable object. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |



### Messages

| Message | Description |
| --- | --- |
| Awake | Called when an instance of ScriptableObject is created. |
| OnDestroy | This function is called when the scriptable object will be destroyed. |
| OnEnable | This function is called when the object is loaded. |
| Reset | Reset to default values. |




            
