This version of Unity is unsupported.

Troubleshooting Adaptive Probe Volumes

Troubleshooting dark blotches or streaks in Adaptive Probe Volumes in URP

# Light Probe validity in Adaptive Probe Volumes in URP

Light Probes inside geometry are called invalid probes. The Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP) marks a **Light Probe**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](../LightProbes.html)
See in [Glossary](../Glossary.html#LightProbe) as invalid when the probe fires sampling rays to capture surrounding light data, but the rays hit the unlit backfaces inside geometry.

URP uses the following techniques to minimise incorrect lighting data from Light Probes:

- [Virtual Offset](probevolumes-troubleshoot-artefacts.html#virtualoffset) tries to make invalid Light Probes valid, by moving their capture points so they’re outside any [colliders](https://docs.unity3d.com/Documentation/Manual/CollidersOverview.html)An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../CollidersOverview.html)
See in [Glossary](../Glossary.html#Collider).

- [Dilation](probevolumes-troubleshoot-artefacts.html#dilation) detects Light Probes that remain invalid after Virtual Offset, and gives them data from valid Light Probes nearby.

- [Rendering Layers](probevolumes-troubleshoot-light-leaks.html#layers) prevent objects from sampling probes that are on another **Layer Mask**A value defining which layers to include or exclude from an operation, such as rendering, collision or your own code. [More info](../Layers.html)
See in [Glossary](../Glossary.html#LayerMask), reducing light leaking in certain scenarios.

You can check which Light Probes are invalid using the [Rendering Debugger](features/rendering-debugger.html)

[Image: In the Scene on the left, Virtual Offset isnt active and dark bands are visible. In the Scene on the right, Virtual Offset is active.]

[Image: In the Scene on the left, Dilation isnt active and some areas are too dark. In the Scene on the right, Dilation is active.]

Troubleshooting Adaptive Probe Volumes

Troubleshooting dark blotches or streaks in Adaptive Probe Volumes in URP
