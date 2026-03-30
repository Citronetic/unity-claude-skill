This version of Unity is unsupported.

Run an XR application

Universal Render Pipeline compatibility in XR

# XR graphics

Graphics and rendering in an **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](XR.html)
See in [Glossary](Glossary.html#XR) app follow the same principles as they do in any Unity application, with some differences arising from the need for stereo rendering and increased efficiency.

XR apps generally require very high and consistent frame rates for user comfort. At the same time, rendering in stereo means that every visible object must be drawn twice from different perspectives. Techniques like single-pass rendering can improve rendering efficiency by reducing the duplication of effort, but also require changes to **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) code.

| Topic | Description |
| --- | --- |
| Universal Render Pipeline compatibility in XR | Understand which Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary features are compatible with XR platforms. |
| Stereo rendering | Understand stereo rendering for XR platforms. |
| Foveated rendering | Learn about foveated rendering for XR. |
| Multiview Render Regions | Understand the Multiview Render Regions feature for XR devices. |
| VR frame timing | Learn about VRVirtual Reality More infoSee in Glossary frame timing. |
| URP Application Spacewarp | How to use the URP Application Spacewarp feature on OpenXR platforms to optimize graphics performance. |
| Optimize for untethered XR devices in URP | Understand the ways you can optimize your URP project for XR devices. |
| Resolution control in XR projects | Understand how to control the resolution in your untethered XR project. |

Run an XR application

Universal Render Pipeline compatibility in XR
