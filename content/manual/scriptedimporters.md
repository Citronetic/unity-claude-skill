This version of Unity is unsupported.

Import assets simultaneously

Text assets

# Managing importers with scripts

You can use C# **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) to interact with [Unity’s built-in importers](#scripting-with-built-in-importers), or [create a scripted importer](#create-custom-importers) to add support for files that aren’t natively supported by Unity.

## Scripting with built-in importers

Use the callbacks in the [`AssetPostprocessor`](../ScriptReference/AssetPostprocessor.html) class to add custom behavior before or after Unity starts the import process for its built-in importers. You can manipulate import settings, analyze imported assets, or generate new assets dynamically during import. Refer to [Supported asset type reference](AssetTypes.html#asset-importers) for a full list of built in importers available.

The following is an example of an `AssetPostprocessor` script that modifies the import settings of a texture before importing it, and then applies a red color tint to the texture after importing:

```csharp
using UnityEngine;
using UnityEditor;

public class CustomTextureImporter : AssetPostprocessor
{
    void OnPreprocessTexture()
    {
        // Get a reference to the TextureImporter
        TextureImporter importer = assetImporter as TextureImporter;

        // Customize settings
        importer.mipmapEnabled = false;
        importer.textureType = TextureImporterType.Default;
        importer.maxTextureSize = 512;
        importer.wrapMode = TextureWrapMode.Repeat;

        Debug.Log($"Texture '{assetPath}' has had its import settings changed in OnPreProcessTexture.");
    }

    void OnPostprocessTexture(Texture2D texture)
    {
        // Set a red color tint to the texture
        Color tintColor = new(1.0f, 0.5f, 0.5f, 1.0f);

        // Get the texture's pixels
        Color[] pixels = texture.GetPixels();
        for (int i = 0; i < pixels.Length; i++)
        {
            // Apply the tint color
            pixels[i] *= tintColor;
        }
        // Set the modified pixels back to the texture
        texture.SetPixels(pixels);
        // Apply the changes to the texture
        texture.Apply();

        // Log the change
        Debug.Log($"Texture '{texture.name}' has been tinted with a red color in OnPostProcessTexture.");
    }
}
```

To use this example, place it in a new script file in somewhere your project’s `Assets` folder, and then add a new texture to the `Assets` folder. Unity then applies the settings to the texture, as shown in the following image:

[Image: A texture with a red tint applied and some custom settings applied.]
A texture with a red tint applied and some custom settings applied.

## Create custom importers

To add your own support for file formats that aren’t natively supported by Unity, you can use a [`ScriptedImporter`](../ScriptReference/AssetImporters.ScriptedImporter.html) to write custom asset importers in C#.

A scripted importer is a class that inherits from the abstract class [`ScriptedImporter`](../ScriptReference/AssetImporters.ScriptedImporter.html) and has the [`[ScriptedImporter]`](../ScriptReference/AssetImporters.ScriptedImporterAttribute.html) attribute. This registers your custom importer to handle one or more file extensions. When Unity detects a file that matches the registered file extensions as being new or changed, it invokes the method `OnImportAsset` of your custom importer.

**Important:** Scripted importers can’t handle a file extension that Unity already natively handles. You can use the [`overrideExts`](../ScriptReference/AssetImporters.ScriptedImporterAttribute-ctor.html) parameter to override this behavior and add the file extension for the existing importer. For a list of files Unity natively supports, refer to [Supported asset type reference](AssetTypes.html).

Once you have added a `ScriptedImporter` script to a project, you can use it the same way as any other file type supported by Unity. For more information, refer to [Introduction to importing assets](ImportingAssets.html).

### Create a scripted importer

The following code example imports asset files with the extension `cube` into a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) with a cube primitive as the main asset and a default material and color. It then assigns its position from a value read from the asset file:

```cs
using UnityEngine;
using UnityEditor.AssetImporters;
using System.IO;

// The importer is registered with Unity's asset pipeline by placing the ScriptedImporter attribute on the
// CubeImporter class. The CubeImporter class implements the abstract ScriptedImporter base class.

[ScriptedImporter(1, "cube")]
public class CubeImporter : ScriptedImporter
{
    public float m_Scale = 1;

    // The ctx argument contains both input and output data for the import event

    public override void OnImportAsset(AssetImportContext ctx)
    {
        var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        var position = JsonUtility.FromJson<Vector3>(File.ReadAllText(ctx.assetPath));

        cube.transform.position = position;
        cube.transform.localScale = new Vector3(m_Scale, m_Scale, m_Scale);

        // 'cube' is a GameObject and is automatically converted into a prefab.
        // Only the 'Main Asset' is eligible to become a prefab.
        ctx.AddObjectToAsset("main obj", cube);
        ctx.SetMainObject(cube);

        var material = new Material(Shader.Find("Standard"));
        material.color = Color.red;

        // Assets must be assigned a unique identifier string consistent across imports.
        ctx.AddObjectToAsset("my Material", material);

        // Assets that are not passed into the context as import outputs must be destroyed.
        var tempMesh = new Mesh();
        DestroyImmediate(tempMesh);
    }
}
```

For more information, refer to the [`AssetImporters.ScriptedImporter` API documentation](../ScriptReference/AssetImporters.ScriptedImporter.html).

### Create a custom import settings window

To create a custom import settings window for your scripted importer, create a class that inherits from [`ScriptedImporterEditor`](../ScriptReference/AssetImporters.ScriptedImporterEditor.html) and decorate it with the `[CustomEditor]` attribute. For example:

```cs
using UnityEditor;
using UnityEditor.AssetImporters;
using UnityEditor.SceneManagement;
using UnityEngine;

[CustomEditor(typeof(CubeImporter))]
public class CubeImporterEditor: ScriptedImporterEditor
{
    public override void OnInspectorGUI()
    {
        var colorShift = new GUIContent("Color Shift");
        var prop = serializedObject.FindProperty("m_ColorShift");
        EditorGUILayout.PropertyField(prop, colorShift);
        base.ApplyRevertGUI();
    }
}
```

### Examples of scripted importers

Unity uses scripted importers for the following file formats:

- **Alembic**: The [Alembic package](https://docs.unity3d.com/Packages/com.unity.formats.alembic@latest) uses a scripted importer to import `.abc` file types.

- **Universal **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) Description (USD)**: The [USD Importer package](https://docs.unity3d.com/Packages/com.unity.importer.usd@latest) uses a scripted importer to import `.usd` file types.

## Additional resources

- [`AssetPostprocessor` API reference](../ScriptReference/AssetPostprocessor.html)

- [`ScriptedImporter` API reference](../ScriptReference/AssetImporters.ScriptedImporter.html)

- [Supported asset type reference](AssetTypes.html)

- [Introduction to importing assets](ImportingAssets.html)

Import assets simultaneously

Text assets
