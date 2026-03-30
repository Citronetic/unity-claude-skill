This version of Unity is unsupported.

Upgrading from the Built-In Render Pipeline to URP

Upgrading shaders to URP from the Built-In Render Pipeline

# Convert assets using the Render Pipeline Converter

The ****Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) Converter** converts assets made for a Built-In Render Pipeline project to assets compatible with URP.

> **Note**: The conversion process makes irreversible changes to the project. Back up your project before the conversion.

## Convert only selected materials

To convert only selected materials, select materials that display the [magenta shader error](../../shader-error.html), and select **Edit** > **Rendering** > **Materials** > **Convert Selected Materials to URP**.

## Conversion types and converters

The Render Pipeline Converter let’s you select one of the following conversion types:

- Built-In Render Pipeline to URP

- Built-In Render Pipeline 2D to URP 2D

- Upgrade 2D URP Assets

When you select on of the conversion types, the tool shows you the available converters.

The following sections describe the converters available for each conversion type.

### Built-In Render Pipeline to URP

This conversion type converts project elements from the Built-In Render Pipeline to URP. It enables the following options:

- **Rendering Settings**: Creates the URP asset and Universal Renderer asset, then converts the settings in the Built-In Render Pipeline project to equivalent properties in the URP assets.

- **Material Upgrade**: Converts [prebuilt materials](../../shader-built-in-birp.html) to URP materials. This converter doesn’t support materials with custom **shaders**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader).

- **Read-only Material Converter**: Converts [prebuilt read-only materials](../../shader-built-in-birp.html) that aren’t in the **Assets** folder of your project, for example **Default-Diffuse** and **Default-Line**. This converter audits the project and creates a temporary `.index` file, which might take a significant amount of time.

- ****Animation Clip**Animation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. [More info](../../class-AnimationClip.html)
See in [Glossary](../../Glossary.html#AnimationClip) Converter**: Converts animation clips after the **Material Upgrade** converter finishes. This converter is available only if the project contains animations that affect the properties of materials, or [Post-Processing Stack v2](https://docs.unity3d.com/Packages/com.unity.postprocessing@latest) properties.

- ****Post-Processing**A process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. [More info](../../PostProcessingOverview.html) post processing, postprocessing, postprocess
See in [Glossary](../../Glossary.html#post-processing) Stack v2 Converter**: Converts [Post-Processing Stack v2](https://docs.unity3d.com/Packages/com.unity.postprocessing@latest) volumes, profiles, and layers to URP volumes, profiles, and **cameras**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera). This converter audits the project and creates a temporary `.index` file, which might take a significant amount of time. This converter is available only if the Post-Processing Stack v2 package is installed.

### Built-In Render Pipeline 2D to URP 2D

This conversion type converts elements of a project from Built-In Render Pipeline 2D to URP 2D.

Available converters:

- **Material and Material Reference Upgrade**

This converter converts all Materials and Material references from Built-In Render Pipeline 2D to URP 2D.

### Upgrade 2D URP Assets

This conversion type upgrades assets of a 2D project from an earlier URP version to the current URP version.

Available converters:

- **Parametric to Freeform Light Upgrade**

This converter converts all parametric lights to freeform lights.

## How to use the Render Pipeline Converter

To convert project assets:

1. Select **Window** > **Rendering** > **Render Pipeline Converter**. Unity opens the Render Pipeline Converter window.

[Image: Render Pipeline Converter dialog]
Render Pipeline Converter dialog

2. Select the conversion type.

[Image: Conversion type]
Conversion type

3. Depending on the conversion type, the dialog shows the available converters. Select or clear the check boxes next to converter names to enable or disable the converters.

[Image: Select converters]
Select converters

For the list of available converters, refer to the section [Converters](#converters).

4. Click **Initialize Converters**. The Render Pipeline Converter preprocesses the assets in the project and shows the list of elements to convert. Select or clear check boxes next to assets to include or exclude them from the conversion process.

[Image: Initialize converters]
Initialize converters

The following illustration shows initialized converters.

[Image: Initialized converters]
Initialized converters

Click a converter to check the list of items that a converter is about to convert.

[Image: Converter detailed view]
Converter detailed view

**Yellow icon**: a yellow icon next to an element indicates that a user action might be required to run the conversion. Hover the mouse pointer over the icon to check the description of the issue.

5. Click **Convert Assets** to start the conversion process.

> **Note**: The conversion process makes irreversible changes to the project. Back up your project before the conversion.

When the conversion process finishes, the window shows the status of each converter.

[Image: Conversion finished]
Conversion finished

**Green check mark**: the conversion went without issues.

**Yellow icon**: the conversion finished with warnings and might require user action.

**Red icon**: the conversion failed.

6. Click a converter to check the list of processed items in that converter.

[Image: Conversion finished. Detailed view of a converter]
Conversion finished. Detailed view of a converter

After reviewing the converted project, close the Render Pipeline Converter window.

# Run conversion using API or CLI

The Render Pipeline Converter implements the [Converters](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/api/UnityEditor.Rendering.Universal.Converters.html) class with [RunInBatchMode](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/api/UnityEditor.Rendering.Universal.Converters.html#UnityEditor_Rendering_Universal_Converters_RunInBatchMode_UnityEditor_Rendering_Universal_ConverterContainerId_) methods that let you run the conversion process from a command line.

For example, the following script initializes and executes the converters **Material Upgrade**, and **Read-only Material Converter**.

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Rendering.Universal;
using UnityEngine;

public class MyUpgradeScript : MonoBehaviour
{
    public static void ConvertBuiltinToURPMaterials()
    {
        Converters.RunInBatchMode(
            ConverterContainerId.BuiltInToURP
            , new List<ConverterId> {
                ConverterId.Material,
                ConverterId.ReadonlyMaterial
            }
            , ConverterFilter.Inclusive
        );
        EditorApplication.Exit(0);
    }
}
```

To run the example conversion from the command line, use the following command:

```shell
"<path to Unity application> -projectPath <project path> -batchmode -executeMethod MyUpgradeScript.ConvertBuiltinToURPMaterials
```

Also check: [Unity Editor command line arguments](../../EditorCommandLineArguments.html).

Upgrading from the Built-In Render Pipeline to URP

Upgrading shaders to URP from the Built-In Render Pipeline
