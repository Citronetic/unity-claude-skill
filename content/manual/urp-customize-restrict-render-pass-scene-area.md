This version of Unity is unsupported.

Inject a render pass via scripting in URP

Injection points reference for URP

# Restrict a render pass to a scene area in URP

To restrict a render pass to a specific area of a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene), add a [volume](../volumes-landing-page.html) to the scene, then add code to your render pass and your **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) to check if the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) is inside the volume.

Follow these steps:

1. Update your shader code to enable or disable your custom rendering effect based on a Boolean value.

For example, add the following code to your shader:

```hlsl
Pass
{
    ...

    // Add a variable to enable or disable your custom rendering effect
    float _Enabled;

    ...

    float4 Frag(Varyings input) : SV_Target0
    {
        ...

        // Return the color with the effect if the variable is 1, or the original color if the variable is 0
        if (_Enabled == 1){
            return colorWithEffect;
        } else {
            return originalColor;
        }
    }
}
```

2. Create a script that implements the `VolumeComponent` class. This creates a volume override component that you can add to a volume.

```cs
using UnityEngine;
using UnityEngine.Rendering;

public class MyVolumeOverride : VolumeComponent
{
}
```

3. In the **Hierarchy** window, select the **Add** (**+**) button, then select **GameObject** > **Volume** > **Box Volume**.

4. In the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector)** window for the new box volume, under **Volume**, select **New** to create a new volume profile.

5. Select **Add override**, then select your volume override component, for example **My Volume Override**.

6. Add a property to the volume override script. Unity adds the property in the **Inspector** window of the volume override.

For example:

```cs
public class MyVolumeOverride : VolumeComponent
{
    // Add an 'Effect Enabled' checkbox to the Volume Override, with a default value of true.
    public BoolParameter effectEnabled = new BoolParameter(true);
}
```

7. In your custom pass, use the `GetComponent` API to get the volume override component and check the value of the property.

For example:

```cs
class myCustomPass : ScriptableRenderPass
{

    ...

    public void Setup(Material material)
    {
        // Get the volume override component
        MyVolumeOverride myOverride = VolumeManager.instance.stack.GetComponent<MyVolumeOverride>();

        // Get the value of the 'Effect Enabled' property
        bool effectStatus = myOverride.effectEnabled.overrideState ? myOverride.effectEnabled.value : false;
    }
}
```

8. Pass the value of the property to the variable you added to the shader code.

For example:

```cs
class myCustomPass : ScriptableRenderPass
{

    ...

    public void Setup(Material material)
    {
        MyVolumeOverride myOverride = VolumeManager.instance.stack.GetComponent<MyVolumeOverride>();
        bool effectStatus = myOverride.effectEnabled.overrideState ? myOverride.effectEnabled.value : false;

        // Pass the value to the shader
        material.SetFloat("_Enabled", effectStatus ? 1 : 0);
    }
}
```

Your custom rendering effect is now enabled when the camera is inside the volume, and disabled when the camera is outside the volume.

## Additional resources

- [Write a Scriptable Render Pass](../renderer-features/write-a-scriptable-render-pass.html)

- [Volumes in URP](../volumes-landing-page.html)

- [Writing custom shaders in URP](../writing-custom-shaders-urp.html)

- [Create a custom post-processing effect with Volume support in URP](../post-processing/custom-post-processing-with-volume.html)

Inject a render pass via scripting in URP

Injection points reference for URP
