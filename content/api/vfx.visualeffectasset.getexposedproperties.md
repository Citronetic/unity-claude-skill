This version of Unity is unsupported.



# [VisualEffectAsset](VFX.VisualEffectAsset.html).GetExposedProperties




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

public void GetExposedProperties(List<VFXExposedProperty> exposedProperties);






### Parameters



| Parameter | Description |
| --- | --- |
| exposedProperties | The List that this function populates with exposed properties. |





### Description



Gets the name and type of every exposed property.





The returned `System.Type` is one of the following:



          - [AnimationCurve](AnimationCurve.html)

          - bool

          - `float`

          - [Gradient](Gradient.html)

          - [GraphicsBuffer](GraphicsBuffer.html)

          - `int`

          - [Matrix4x4](Matrix4x4.html)

          - [Mesh](Mesh.html)

          - [SkinnedMeshRenderer](SkinnedMeshRenderer.html)

          - [Texture](Texture.html)

          - `uint`

          - [Vector2](Vector2.html)

          - [Vector3](Vector3.html)

          - [Vector4](Vector4.html)





To determine the [TextureDimension](Rendering.TextureDimension.html) of a Texture, call [VisualEffectAsset.GetTextureDimension](VFX.VisualEffectAsset.GetTextureDimension.html).

To determine the [VFXSpace](VFX.VFXSpace.html) of an exposed property, call [VisualEffectAsset.GetExposedSpace](VFX.VisualEffectAsset.GetExposedSpace.html).

To increase the speed of the retrieval process, preallocate the `exposedProperties` input list.

This example logs detailed information regarding all exposed properties:


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.VFX;

[ExecuteInEditMode]
class LogExposedProperties : MonoBehaviour
{
	// Called when the script or GameObject is enabled
    void OnEnable()
    {
        VisualEffect vfx = GetComponent<VisualEffect>();
        if (vfx != null && vfx.visualEffectAsset != null)
        {
            VisualEffectAsset vfxAsset = vfx.visualEffectAsset;
            var exposedProperties = new List<VFXExposedProperty>();

            // Retrieve all exposed properties from the VisualEffectAsset and store them in the list
            vfxAsset.GetExposedProperties(exposedProperties);

            if (exposedProperties.Count == 0)
            {
                Debug.Log($"There are no exposed properties for asset: {vfxAsset}");
            }

            foreach (var exposedProperty in exposedProperties)
            {
                // Retrieve additional details about the exposed property
                VFXSpace space = vfxAsset.GetExposedSpace(exposedProperty.name);
                TextureDimension texDim = vfxAsset.GetTextureDimension(exposedProperty.name);

                string log = $"{exposedProperty.name}, {exposedProperty.type}";
                if (space != VFXSpace.None)
                {
                    log += $", {space}";
                }
                if (texDim != TextureDimension.Unknown)
                {
                    log += $", {texDim}";
                }
                Debug.Log(log);
            }
        }
        else
        {
            Debug.Log("Unable to retrieve VisualEffect component or VisualEffectAsset is null.");
        }
    }
}
```


            
