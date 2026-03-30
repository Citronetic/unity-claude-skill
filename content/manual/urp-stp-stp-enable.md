This version of Unity is unsupported.

Introduction to Spatial-Temporal Post-processing in URP

Spatial-Temporal Post-processing Rendering Debugger reference for URP

# Enable Spatial-Temporal Post-processing in URP

To enable STP in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP):

1. Select the active URP Asset in the **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](../../ProjectView.html)
See in [Glossary](../../Glossary.html#Projectwindow).

2. In the Inspector, go to **Quality** > **Upscaling Filter**, and select **Spatial-Temporal Post-Processing**.

STP remains active when **Render Scale** is set to **1.0** as it applies temporal anti-aliasing (TAA) to the final rendered output.

**Note**: STP is not compatible with ****Dynamic Resolution**A Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. [More info](../../DynamicResolution-landing.html)
See in [Glossary](../../Glossary.html#dynamicresolution)** in URP, only with **Render Scale**.

Introduction to Spatial-Temporal Post-processing in URP

Spatial-Temporal Post-processing Rendering Debugger reference for URP
