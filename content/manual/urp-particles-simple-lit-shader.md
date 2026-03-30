This version of Unity is unsupported.

Particles Lit shader material Inspector window reference for URP

Particles Unlit shader material Inspector window reference for URP

# Particles Simple Lit shader material Inspector window reference for URP

Explore the properties and settings you can use to customize the default Particle Simple Lit **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP).

**Note:** URP implements certain Lit shader material features as shader variants, which require more [**SRP Batcher**](../SRPBatcher.html) batches. For optimal performance, disable unused features.

## Surface Options

The **Surface Options** section controls how URP renders the material on-screen.

| Property | Sub-property | Description |
| --- | --- | --- |
| Surface Type |  | Sets whether the surface is opaque or transparent. The options are the following:

Opaque: The surface is fully opaque and doesn’t use transparency blending. URP renders opaque surfaces first.

Transparent: Blends the surface with the background. URP renders transparent surfaces in a separate render pass after opaque surfaces.
 This property affects batching performance. |
| Blending Mode |  | Sets how the shader blends the color of a transparent material with the background. This property is available only when you set Surface Type to Transparent. The options are:

Alpha: Calculates transparency using the alpha value of the material.

Premultiply: Calculates transparency using the alpha value of the material, but multiplies the RGB values by the alpha value first.

Additive: Adds the color of the material to the background color.

Multiply: Multiplies the color of the material with the background color.
For more information about blending modes, refer to Blending modes. This property affects batching performance. |
| Render Face |  | Specifies which faces of the mesh the shader renders. The options are:

Front: Renders only front‑facing triangles. This is the default.

Back: Renders only back‑facing triangles.

Both: Renders both front and back faces. |
| Alpha Clipping |  | Discards pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary if their alpha value is lower than the Threshold value. The default value is 0.5. Use this property to create hard edges between opaque and transparent areas, for example to create blades of grass. This property affects batching performance. |
|  | Threshold | Sets the minimum alpha value for a pixel to be visible. The default value is 0.5. This property is only available if you enable Alpha Clipping. |
| Receive Shadows |  | Determines whether the material receives and displays shadows cast from other objects. This property affects batching performance. |
| Color Mode |  | Sets how the shader blends the material color and the particle color. For more information, refer to Color Mode dropdown. |

### Color Mode dropdown

| Option | Description |
| --- | --- |
| Multiply | Creates a darker final color by multiplying the two colors. |
| Additive | Creates a brighter final color by adding the two colors together. |
| Subtractive | Creates a dark effect by subtracting the particle color from the material color. |
| Overlay | Blends the particle color over the material color. This option creates a brighter color at values over 0.5, and darker colors at values under 0.5. |
| Color | Colorizes the material color with the particle color, while keeping the value and saturation of the material color. Use this option to add splashes of color to monochrome scenesA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| Difference | Returns the difference between the color values. Use this option to blend particle and material colors that are similar to each other. |

## Surface Inputs

The **Surface Inputs** describe the surface itself. For example, you can use these properties to make your surface look wet, dry, rough, or smooth.

| Property | Sub-property | Description |
| --- | --- | --- |
| Base Map |  | Sets the surface color, also known as diffuse. To assign a texture, select the picker (⊙). To assign a color, either as the main color or a tint on top of the texture, select the swatch or the dropper.If you set Surface Type to Transparent or enable Alpha Clipping, Unity uses the alpha channel to calculate the transparency of the surface. |
| Specular Map |  | Sets the color of reflections. This property is available only if you set Workflow Mode to Specular. To assign a texture, select the picker (⊙). To assign a color, select the swatch or the dropper. This property is available only if you enable Specular Highlights. |
|  | Smoothness | Sets the smoothness of the surface, which affects the clarity of reflections. The range is 0 to 1, where 0 provides a wide, rough highlight, and 1 provides a small, sharp highlight like glass. For more information, refer to Configure smoothness. |
|  | Source | Selects a source to use as a smoothness map. The options are the following:

Metallic Alpha: Uses the alpha channel from the Metallic Map texture. This is the default option.

Albedo Alpha: Uses the alpha channel from the Base Map texture.
Unity multiplies the texture values by the Smoothness value. This property affects batching performance. |
| Normal MapA type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.See in Glossary |  | Adds details like bumps, scratches, and grooves. To assign a normal map, select the picker (⊙). Use the slider to adjust the intensity of the effect. The range is 0 to 1, where lower values create less visible details. For more information, refer to Introduction to normal maps (bump mapping). This property affects batching performance. |
| Emission |  | Enables the surface to emit a color as a light source. This property affects batching performance. |
|  | Emission Map | Sets the color the material emits as a light source. The default is black, which means no emission. To assign a texture, select the picker (⊙). To assign a color, either as the main color or a tint on top of the texture, select the swatch or the dropper. For effects like lava that glow brighter than white while still being another color, increase the Intensity value in the color picker. This property affects batching performance. |
|  | Global Illumination | Sets whether Unity bakes the emissive light cast onto other GameObjects, or calculates it in real-time. The options are:

Realtime: Unity calculates the emission in real-time. This property only has an effect if you Create lightmaps at runtime with Enlighten Realtime Global Illumination.

Baked: Unity bakes the emission into lightmaps. This property only has an effect if you bake lightmaps before runtime.

None: Disables other GameObjects receiving the emissive light. |

## Advanced Options

The **Advanced Options** section controls the rendering calculations Unity uses.

| Property | Sub-property | Description |
| --- | --- | --- |
| Specular Highlights |  | Adds specular highlights from direct lighting, for example Directional, Point, and Spot lights. This means that your material reflects the shine from these light sources. Disable this property to make shaders render faster. This property affects batching performance. |
| Flip-Book Blending |  | Blends between the frames of a flipbook texture. Enable this property to make animations smoother for flipbook textures with limited frames. Enabling this property might reduce performance. |
| Soft Particles |  | Indicates whether to fade particles as they approach the edges of opaque GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. This property is only available if you set Surface Type to Transparent, and works only if you enable Depth Texture in the URP Asset. For more information, refer to Soft particlesParticles that create semi-transparent effects like smoke, fog or fire. Soft particles fade out as they approach an opaque object, to prevent intersections with the geometry. More infoSee in Glossary. |
|  | Surface Fade | Sets when particles fade, in world units. This property is available only if you enable Soft Particles. The properties are:

Near: Sets the distance from the opaque GameObject where the particle fades out completely.

Far: Sets the distance from the opaque GameObject where the particle is fully opaque. |
| CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary Fading |  | Indicates whether to fade particles as they approach the camera. This property is only available if you set Surface Type to Transparent, and works only if you enable Depth Texture in the URP Asset. |
|  | Distance | Sets when particles fade, in world units. This property is available only if you enable Camera Fading. The properties are:

Near: Sets the distance from the camera where a particle fades out completely.

Far: Sets the distance from the camera where a particle is fully opaque. |
| Distortion |  | Distorts the background behind the particles, for example to create a heat shimmer effect. This property is available only if you set Surface Type to Transparent, and works only if you enable Depth Texture in the URP Asset. |
|  | Strength | Sets how much a particle distorts the background. Negative values have the opposite effect of positive values. For example, if something is offset to the right with a positive value, the equal negative value offsets it to the left. |
|  | Blend | Sets the visibility of the distortion effectAn audio effect that modifies the sound by squashing and clipping the waveform to produce a rough, harsh result. More infoSee in Glossary. 0 means no visible distortion. 1 means only the distortion effect is visible. |
| Vertex Streams |  | Lists the vertex streams that the material requires in order to work properly. If the vertex streams aren’t correctly assigned, select the Fix Now button to apply the correct setup of vertex streams to the particle systemA component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. More infoSee in Glossary. |
| Sorting Priority |  | Determines when Unity renders the material. Unity renders materials with lower values first. Use this property to prevent Unity from rendering pixels twice by rendering materials behind other materials. This property works similarly to the render queue in the Built-In Render Pipeline. |

Particles Lit shader material Inspector window reference for URP

Particles Unlit shader material Inspector window reference for URP
