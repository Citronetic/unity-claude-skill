This version of Unity is unsupported.

Reflection Probes in URP

Adaptive Probe Volumes (APV) in URP

# Troubleshooting reflections

## Troubleshoot reflections suddenly appearing

Reflection probe blending lets you avoid a situation where a reflection suddenly appears on an object when it enters the probe box volume. When **reflection probe**A rendering component that captures a spherical view of its surroundings in all directions, rather like a camera. The captured image is then stored as a Cubemap that can be used by objects with reflective materials. [More info](../../class-ReflectionProbe.html)
See in [Glossary](../../Glossary.html#ReflectionProbe) blending is enabled, Unity gradually fades probe **cubemaps**A collection of six square textures that can represent the reflections in an environment or the skybox drawn behind your geometry. The six squares form the faces of an imaginary cube that surrounds an object; each face represents the view along the directions of the world axes (up, down, left, right, forward and back). [More info](../../class-Cubemap-landing.html)
See in [Glossary](../../Glossary.html#Cubemap) in and out as the reflective object passes from one volume to the other.

URP supports reflection probe blending in all **Rendering Paths**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath).

Reflection Probes in URP

Adaptive Probe Volumes (APV) in URP
