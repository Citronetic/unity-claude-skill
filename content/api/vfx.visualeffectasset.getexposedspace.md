This version of Unity is unsupported.



# [VisualEffectAsset](VFX.VisualEffectAsset.html).GetExposedSpace




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

public [VFX.VFXSpace](VFX.VFXSpace.html) GetExposedSpace(int nameID);






## Declaration

public [VFX.VFXSpace](VFX.VFXSpace.html) GetExposedSpace(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**VFXSpace**
        The expected space of the property.





### Description



Provides the configured space of an exposed property in VisualEffectAsset.





VFXSpace.None will be returned if the property doesn't exist or isn't spaceable.

The [VisualEffect.SetVector3](VFX.VisualEffect.SetVector3.html) won't apply any automatic transform, because `VisualEffect` expects raw values.

Additional resources: [VisualEffectAsset.GetExposedProperties](VFX.VisualEffectAsset.GetExposedProperties.html), [VisualEffectAsset.GetExposedSpace](VFX.VisualEffectAsset.GetExposedSpace.html), [VisualEffectAsset.GetTextureDimension](VFX.VisualEffectAsset.GetTextureDimension.html).


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





This example logs detailed information regarding all exposed properties.


            
