This version of Unity is unsupported.

Programming with the Asset Database

Create presets to save and reuse settings

# Reusing settings with preset assets

Presets are assets that you can use to save and apply identical property settings across multiple components, assets, or [Project Settings](comp-ManagerGroup.html)A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings) windows. You can also use presets to specify default settings for new components and default [import settings](ImportingAssets.html) for assets in the [Preset Manager](class-PresetManager.html). The Preset Manager supports any importers, components, or scriptable objects you add to the Unity Editor.

You can only apply Presets in the Editor. Presets have no effect at runtime. You can use scripting to [support presets](SupportingPresets.html) in your own MonoBehaviour, ScriptableObject or ScriptedImporter classes.

| Topic | Description |
| --- | --- |
| Create presets to save and reuse settings | Save the property configuration of a component, asset, or Project Settings window as a preset asset and apply the same settings to a different component, asset, or Project Settings window. |
| Supporting presets for custom types | Add preset support for your own custom C# types. |
| Apply default presets to assets by folder | Apply default presets based on the location of an asset. |

## Additional resources

- [Preset Manager](class-PresetManager.html)

- [Project Settings](comp-ManagerGroup.html)

Programming with the Asset Database

Create presets to save and reuse settings
