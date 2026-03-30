This version of Unity is unsupported.

Rendering Layers in URP

Enable Rendering Layers for Lights in URP

# Introduction to Rendering Layers in URP

The Rendering Layers feature lets you configure certain Lights to affect only specific **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject).

For example, in the following illustration, Light `A` affects Sphere `D`, but not Sphere `C`. Light `B` affects Sphere `C`, but not Sphere `D`.

[Image: Light A affects Sphere D, but not Sphere C. Light B affects Sphere C, but not Sphere D.]
Light A affects Sphere D, but not Sphere C. Light B affects Sphere C, but not Sphere D.

## Limitations

This feature has the following limitations:

- Rendering Layers are not supported on OpenGL and OpenGL ES API.

## Performance

This section contains information related to the impact of Rendering Layers on performance.

- Keep the Rendering Layer count as small as possible. Avoid creating Rendering Layers that you don’t use in the project.

- When using Rendering Layers for decals, increasing the layer count increases the required memory bandwidth and decreases the performance.

- When using Rendering Layers only for Lights in the Forward **Rendering Path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath), the performance impact is insignificant.

- Performance impact increases more significantly when the number of Rendering Layers reaches 9, 17, 25, and so on. This is because when the Rendering Layers exceed a multiple of 8, URP adds an extra texture channel the GPU must access.

## Additional resources

- [How to use Rendering Layers](rendering-layers.html)

Rendering Layers in URP

Enable Rendering Layers for Lights in URP
