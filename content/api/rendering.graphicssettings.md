This version of Unity is unsupported.



# GraphicsSettings





class in
          UnityEngine.Rendering



/



Inherits from:[Object](Object.html)



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



Script interface for [Graphics Settings](../Manual/class-GraphicsSettings.html).





### Static Properties



| Property | Description |
| --- | --- |
| allConfiguredRenderPipelines | An array containing the RenderPipelineAsset instances that describe the default render pipeline and any quality level overrides. |
| cameraRelativeLightCulling | Enable or disable using the camera position as the reference point for culling lights. |
| cameraRelativeShadowCulling | Enable or disable using the camera position as the reference point for culling shadows. |
| currentRenderPipeline | The RenderPipelineAsset that defines the active render pipeline for the current quality level. |
| currentRenderPipelineAssetType | The type of the currently active RenderPipelineAsset, or null if there's no currently active Asset. |
| defaultGateFitMode | Stores the default value for the GateFit property of newly created Cameras. |
| defaultRenderPipeline | The RenderPipelineAsset that defines the default render pipeline. |
| disableBuiltinCustomRenderTextureUpdate | Disables the built-in update loop for Custom Render Textures, so that you can write your own update loop. |
| isScriptableRenderPipelineEnabled | If the value is true, a Scriptable Render Pipeline is active. |
| lightProbeOutsideHullStrategy | Defines the way Unity chooses a probe to light a Renderer that is lit by Light Probes but positioned outside the bounds of the Light Probe tetrahedral hull. |
| lightsUseColorTemperature | Whether to use a Light's color temperature when calculating the final color of that Light." |
| lightsUseLinearIntensity | If this is true, Light intensity is multiplied against linear color values. If it is false, gamma color values are used. |
| logWhenShaderIsCompiled | If this is true, a log entry is made each time a shader is compiled at application runtime. |
| realtimeDirectRectangularAreaLights | Is the current render pipeline capable of rendering direct lighting for rectangular area Lights? |
| transparencySortAxis | An axis that describes the direction along which the distances of objects are measured for the purpose of sorting. |
| transparencySortMode | Transparent object sorting mode. |
| useScriptableRenderPipelineBatching | Enable/Disable SRP batcher (experimental) at runtime. |
| videoShadersIncludeMode | If and when to include video shaders in the build. |





### Static Methods



| Method | Description |
| --- | --- |
| ForEach | Executes the given callback for each IRenderPipelineGraphicsSettings. |
| GetCustomShader | Get custom shader used instead of a built-in shader. |
| GetGraphicsSettings | Provides a reference to the GraphicSettings object. |
| GetRenderPipelineSettings | Gets the RenderPipelineGlobalSettings asset assigned to the given RenderPipeline asset. |
| GetSettingsForRenderPipeline | Get the registered RenderPipelineGlobalSettings for the given RenderPipeline. |
| GetShaderMode | Get built-in shader mode. |
| HasShaderDefine | Returns true if shader define was set when compiling shaders for current GraphicsTier. Graphics Tiers are only available in the Built-in Render Pipeline. |
| SetCustomShader | Set custom shader to use instead of a built-in shader. |
| SetShaderMode | Set built-in shader mode. |
| Subscribe | Subscribe to changes of properties in the IRenderPipelineGraphicsSettings. |
| TryGetCurrentRenderPipelineGlobalSettings | Obtains the current active pipeline RenderPipelineGlobalSettings. |
| TryGetRenderPipelineSettings | Gets a IRenderPipelineGraphicsSettings from the GraphicsSettings and returns if the setting is found. |
| Unsubscribe | Cancels any subscription to changes of properties of a settings object implemented with the IRenderPipelineGraphicsSettings interface. |





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





            
