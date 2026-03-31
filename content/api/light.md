This version of Unity is unsupported.



# Light





class in
          UnityEngine



/



Inherits from:[Behaviour](Behaviour.html)



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




                [Switch to Manual](../Manual/class-Light.html)














### Description



Script interface for [light components](../Manual/class-Light.html).





Use this to control all aspects of Unity's lights. The properties are an exact match for the
                values shown in the Inspector.

                For more information about shadow maps, refer to [Shadow Mapping](../Manual/shadow-mapping.html).

                Usually lights are just created in the editor, but sometimes you want to create a light from a script:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Make a game object
        GameObject lightGameObject = new GameObject("The Light");        // Add the light component
        Light lightComp = lightGameObject.AddComponent<Light>();        // Set color and position
        lightComp.color = Color.blue;        // Set the position (or any transform property)
        lightGameObject.transform.position = new Vector3(0, 5, 0);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| areaSize | The size of the area light. |
| bakingOutput | This property describes the output of the last Global Illumination bake. |
| bounceIntensity | The multiplier that defines the strength of the bounce lighting. |
| boundingSphereOverride | Bounding sphere used to override the regular light bounding sphere during culling. |
| color | Specifies the color emitted by the light. |
| colorTemperature | The color temperature of the light.
          Correlated Color Temperature (abbreviated as CCT) is multiplied with the color filter when calculating the final color of a light source. The color temperature of the electromagnetic radiation emitted from an ideal black body is defined as its surface temperature in Kelvin. White is 6500K according to the D65 standard. A candle light is 1800K and a soft warm light bulb is 2700K.
          If you want to use colorTemperature, GraphicsSettings.lightsUseLinearIntensity and Light.useColorTemperature has to be enabled.
          Additional resources: GraphicsSettings.lightsUseLinearIntensity, GraphicsSettings.useColorTemperature. |
| commandBufferCount | Number of command buffers set up on this light (Read Only). |
| cookie | The cookie texture projected by the light. |
| cookieSize | The size of a directional light's cookie. |
| cullingMask | This is used to light certain objects in the Scene selectively. |
| dilatedRange | The maximum distance the emitted light might travel from the position of the light. This property does not apply to directional lights. |
| enableSpotReflector | Wether a Spot Light should simulate having a reflector. |
| flare | The flare asset to use for this light. |
| forceVisible | Force a light to be visible even if outside the view frustum. |
| innerSpotAngle | The angle of the spot light's inner cone in degrees. |
| intensity | The Intensity of a light is multiplied with the Light color. |
| layerShadowCullDistances | Per-light, per-layer shadow culling distances. Directional lights only. |
| lightmapBakeType | This property describes what part of a light's contribution can be baked (Editor only). |
| lightShadowCasterMode | Allows you to override the global Shadowmask Mode per light. Only use this with render pipelines that can handle per light Shadowmask modes. Incompatible with the legacy renderers. |
| lightUnit | The unit Light.intensity should be displayed in. |
| luxAtDistance | How far away to measure LightUnit.Lux from. |
| range | The maximum distance that light travels from a point of emission. This property does not apply to directional lights. |
| renderingLayerMask | Determines which rendering LayerMask this Light affects. |
| renderMode | Controls how often the light's contribution is calculated during rendering. |
| shadowAngle | Controls the amount of artificial softening applied to the edges of shadows cast by directional lights (Editor only). |
| shadowBias | Shadow mapping constant bias. |
| shadowCustomResolution | The custom resolution of the shadow map. |
| shadowMatrixOverride | Matrix that overrides the regular light projection matrix during shadow culling. Unity uses this matrix if you set Light.useShadowMatrixOverride to true. |
| shadowNearPlane | Near plane value to use for shadow frustums. |
| shadowNormalBias | Shadow mapping normal-based bias. |
| shadowRadius | Controls the amount of artificial softening applied to the edges of shadows cast by the Point or Spot light (Editor only). |
| shadowResolution | The resolution of the shadow map. Change it to balance shadow visual quality and performance. |
| shadows | Determines if this light will cast soft or hard shadows, or not cast shadows at all. |
| shadowStrength | Strength of light's shadows. |
| spotAngle | The angle of the spot light's cone in degrees. |
| type | The type of the light. |
| useBoundingSphereOverride | Set to true to override light bounding sphere for culling. |
| useColorTemperature | Set to true to use the color temperature. |
| useShadowMatrixOverride | Set to true to enable custom matrix for culling during shadows. |
| useViewFrustumForShadowCasterCull | Whether to cull shadows for this Light when the Light is outside of the view frustum. |





### Public Methods



| Method | Description |
| --- | --- |
| AddCommandBuffer | Add a command buffer to be executed at a specified place. |
| AddCommandBufferAsync | Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point. |
| GetCommandBuffers | Get command buffers to be executed at a specified place. |
| RemoveAllCommandBuffers | Remove all command buffers set on this light. |
| RemoveCommandBuffer | Remove command buffer from execution at a specified place. |
| RemoveCommandBuffers | Remove command buffers from execution at a specified place. |
| Reset | Revert all light parameters to default. |
| SetLightDirty | Sets a light dirty to notify the light baking backends to update their internal light representation (Editor only). |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| enabled | Enabled Behaviours are Updated, disabled Behaviours are not. |
| isActiveAndEnabled | Checks whether a component is enabled, attached to a GameObject that is active in the hierarchy, and the component's OnEnable has been called. |
| gameObject | The game object this component is attached to. A component is always attached to a game object. |
| tag | The tag of this game object. |
| transform | The Transform attached to this GameObject. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| BroadcastMessage | Calls the method named methodName on every MonoBehaviour in this game object or any of its children. |
| CompareTag | Checks the GameObject's tag against the defined tag. |
| GetComponent | Gets a reference to a component of type T on the same GameObject as the component specified. |
| GetComponentInChildren | Gets a reference to a component of type T on the same GameObject as the component specified, or any child of the GameObject. |
| GetComponentIndex | Gets the index of the component on its parent GameObject. |
| GetComponentInParent | Gets a reference to a component of type T on the same GameObject as the component specified, or any parent of the GameObject. |
| GetComponents | Gets references to all components of type T on the same GameObject as the component specified. |
| GetComponentsInChildren | Gets references to all components of type T on the same GameObject as the component specified, and any child of the GameObject. |
| GetComponentsInParent | Gets references to all components of type T on the same GameObject as the component specified, and any parent of the GameObject. |
| SendMessage | Calls the method named methodName on every MonoBehaviour in this game object. |
| SendMessageUpwards | Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. |
| TryGetComponent | Gets the component of the specified type, if it exists. |
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





            
