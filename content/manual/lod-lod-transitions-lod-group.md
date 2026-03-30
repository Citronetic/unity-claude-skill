This version of Unity is unsupported.

Import a mesh with LOD settings

LOD Group component reference

# Make LOD Group transitions smooth

Cross-fading is a technique that makes the transitions between LODs smooth and lets you avoid a visible switchover from one **LOD**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](../LevelOfDetail.html)
See in [Glossary](../Glossary.html#LOD) to another.

With this technique, Unity renders both the current and the next LODs separately, and then blends them together:

[Image: Cross-fading between the current LOD and the next one.]
Cross-fading between the current LOD and the next one.

Unity implements the cross-fading effect by using either screen-space dithering or transparency. For the last LOD, Unity uses the fade-out effect instead of cross-fading.

## Enable LOD cross-fading

To enable LOD cross-fading:

1. In [URP Asset](../urp/universalrp-asset.html), enable the **LOD Cross Fade** property.

2. In the ****LOD Group**A component to manage level of detail (LOD) for GameObjects. [More info](../class-LODGroup.html)
See in [Glossary](../Glossary.html#LODGroup)** component, in the **Fade Mode** drop-down select **Cross Fade**.

For [SpeedTree](https://unity.com/products/speedtree?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937152866) assets, select **Speed Tree**. For more information, refer to [Working with SpeedTree models](#SpeedTreeModels).

**Note**: The **Speed Tree** mode doesn’t apply to SpeedTree models with an .st9 file extension.

## Cross-fading modes

**LOD Group** technique supports two cross-fading modes:

- **Animate Cross-fading**

- Custom transition zones

### Animate Cross-fading mode

In this mode Unity performs transitions between LODs over a short period of time. This is the default option.

The transition between LODs begins when the model’s screen size ratio reaches the next LOD threshold. For example, if the LOD1 threshold is set t0 50%, the transition between LOD0 and LOD1 begins as soon as the screen size ration of the model is 50%. The transition lasts for a short period of time.

[Image: LOD Group selection bar with a visualization of LOD transitions in the Animate Cross-fading mode.]
LOD Group selection bar with a visualization of LOD transitions in the Animate Cross-fading mode.

The duration of the cross-fade effect is the same for every LOD.

### Customizing the transition zone

To define custom transition zones based on the model’s screen size ratio, use the **Fade Transition Width** property.

Each transition zone begins and ends between the current and the next LOD’s threshold. The **Fade Transition Width** property defines where a transition zone begins:

[Image: LOD Group selection bar with a visualization of Fade Transition Width properties.]
LOD Group selection bar with a visualization of Fade Transition Width properties.

To define the transition zone on each LOD level:

1. In the **LOD Group** component, disable the **Animate Cross-fading** option.

2. Click on a LOD box in LOD selection bar.

3. Set the **Fade Transition Width** value. The value defines the width of the transition zone as a proportion (between 0.0 and 1.0) of the current LOD’s selection bar length. A smaller value delays the beginning of the transition and makes the transition faster.

[Image: The Fade Transition Width property appears]
The Fade Transition Width property appears

## SpeedTree models and the Speed Tree mode

In SpeedTree models, each vertex stores its position in the current and the next LOD.

When Unity imports SpeedTree models with .spm and .st extensions, it automatically sets their **Fade Mode** property to **Speed Tree**.

In this mode, during LOD transitions, Unity interpolates between the vertex positions to gradually transform the model’s geometry from the current to the next LOD.

**Note**: Unity uses the **Cross Fade** mode instead of the **Speed Tree** mode for the following models and transitions:

- SpeedTree models with an .st9 file extension.

- Transitions to or from LODs that don’t have a **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh) Renderer. For example, fade-outs, or transitions to **billboard**A textured 2D object that rotates so that it always faces the Camera. [More info](../class-BillboardRenderer.html)
See in [Glossary](../Glossary.html#Billboard) LODs.

## LOD cross-fading in shader code

Unity doesn’t provide a built-in technique to blend LOD geometries. To blend LODs in custom **shaders**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader), implement your own technique depending on your application type and asset production pipeline.

Unity calculates a blend factor using the **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject)’s screen size and passes it to shaders in the [unity_LODFade.x uniform](SL-UnityShaderVariables.html#unity_LODFade) variable. Depending on the **Fade Mode** property, use either the `LOD_FADE_PERCENTAGE` or `LOD_FADE_CROSSFADE` keyword for GameObjects that use LOD cross-fading.

In **Animate Cross-fading** mode, you can set the duration of the transition for every LOD using the [LODGroup.crossFadeAnimationDuration](../../ScriptReference/LODGroup-crossFadeAnimationDuration.html) property.

## Additional resources

- [Import a mesh with LOD settings](importing-lod-meshes.html).

Import a mesh with LOD settings

LOD Group component reference
