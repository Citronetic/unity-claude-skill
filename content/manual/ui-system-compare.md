This version of Unity is unsupported.

UI systems

UI Toolkit

# Comparison of UI systems in Unity

[UI Toolkit](UIElements.html) is intended to become the recommended UI system for you to develop UI in your projects. However, in its current release, UI Toolkit does not have some features that [uGUI (Unity UI)](com.unity.ugui.html) and [IMGUI (Immediate Mode GUI)](GUIScriptingGuide.html) support. uGUI and IMGUI are more appropriate for certain use cases, and are required to support legacy projects.

This page provides a high-level feature comparison of UI Toolkit, uGUI, and IMGUI, and their respective approaches to UI design.

## General consideration

The following table lists the recommended and alternative system for runtime and Editor:

| Unity 6.2 | Recommendation | Alternative |
| --- | --- | --- |
| Runtime | uGUI (Unity UI) | UI Toolkit |
| Editor | UI Toolkit | IMGUI |

## Roles and skill sets

Your team’s skill set and comfort level with different technologies is also an important consideration.

The following table lists the recommended system for different roles:

| Roles | UI Toolkit | uGUI (Unity UI) | IMGUI | Skill sets |
| --- | --- | --- | --- | --- |
| Programmer | Yes | Yes | Yes | Programmers can use any game development tool or API. |
| Technical Artist | Partial | Yes | No | Technical artists who are familiar with Unity’s GameObject-based tools and workflows are likely to be comfortable working with GameObjects, Components, and the Scene view. They might not be comfortable with UI Toolkit’s web-like approach or IMGUI’s pure C# approach. |
| UI Designer | Yes | Partial | No | UI designers who are familiar with UI creation tools are likely to be comfortable with UI Toolkit’s document-based approach and can use the UI Builder to visually edit their UI.If they are not familiar with GameObject-based workflows, they might require help from programmers or level designers. |

## Innovation and development

UI Toolkit is in active development and releases new features frequently. uGUI and IMGUI are established and production-proven UI systems that are updated infrequently.

uGUI and IMGUI might be better choices if you need features that are not yet available in UI Toolkit, or you need to support or reuse older UI content.

## Runtime

UI Toolkit is an alternative to uGUI (Unity UI) if you create a screen overlay UI that runs on a wide variety of screen resolutions. Consider UI Toolkit to do the following:

- Produce work with a significant amount of user interfaces

- Require familiar authoring workflows for artists and designers

- Seek textureless UI rendering capabilities

- UI positioned and lit in a 3D world

uGUI is the recommended solution for the following:

- VFX with custom **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) and materials

- Easy referencing from `MonoBehaviours`

### Use Cases

The following table lists the recommended system for major runtime use cases:

| Unity 6.2 | Recommendation |
| --- | --- |
| Multi-resolution menus and HUD in intensive UI projects | UI Toolkit |
| World space UI and VRVirtual Reality More infoSee in Glossary | UI Toolkit |
| UI that requires customized shaders and materials | uGUI |

### In details

The following table lists the recommended system for detailed runtime features:

| Unity 6.2 | UI Toolkit | uGUI |
| --- | --- | --- |
| WYSIWYGWhat You See Is What You Get. A term used to describe a system where the user interface closely resembles the final output.See in Glossary authoring | Yes | Yes |
| Nesting reusable components | Yes | Yes |
| Global style management | Yes | No |
| Layout and Styling Debugger | Yes | Yes |
| SceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary integration | Yes | Yes |
| Rich text tags | Yes | Yes* |
| Scalable text | Yes | Yes* |
| Font fallbacks | Yes | Yes* |
| Adaptive layout | Yes | Yes |
| Input system support | Yes | Yes |
| Serialized events | No | Yes |
| Visual Scripting support | No | Yes |
| Compatible with Rendering pipelines | Yes | Yes |
| Screen-space (2D) rendering | Yes | Yes |
| World-space (3D) rendering | Yes | Yes |
| Custom materials and shaders | No | Yes |
| SpritesA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary / Sprite atlasA utility that packs several sprite textures tightly together within a single texture known as an atlas. More infoSee in Glossary support | Yes | Yes |
| Dynamic texture atlas | Yes | No |
| Textureless elements | Yes | No |
| UI anti-aliasing | Yes | No |
| Rectangle clipping | Yes | Yes |
| Mask clipping | No | Yes |
| Nested masking | Yes | Yes |
| UI transition animations | Yes | No |
| Integration with Animation ClipsAnimation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. More infoSee in Glossary and Timeline | No | Yes |

**Requires [the TextMesh Pro package](https://learn.unity.com/tutorial/textmesh-pro-importing-the-package#?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938355886)*

## Editor

UI Toolkit is recommended if you create complex editor tools. UI Toolkit is also recommended for the following reasons:

- Better reusability and decoupling

- Visual tools for authoring UI

- Better scalability for code maintenance and performance

IMGUI is an alternative to UI Toolkit for the following:

- Unrestricted access to editor extensible capabilities

- Light API to quickly render UI on screen

### Use Cases

The following table lists the recommended system for major Editor use cases:

| Unity 6.2 | Recommendation |
| --- | --- |
| Complex editor tool | UI Toolkit |
| Property drawersA Unity feature that allows you to customize the look of certain controls in the Inspector window by using attributes on your scripts, or by controlling how a specific Serializable class should look More infoSee in Glossary | UI Toolkit |
| Collaboration with designers | UI Toolkit |

### In details

The following table lists the recommended system for detailed Editor features:

| Unity 6.2 | UI Toolkit | IMGUI |
| --- | --- | --- |
| WYSIWYG authoring | Yes | No |
| Nesting reusable components | Yes | No |
| Global style management | Yes | Yes |
| Layout and Styling Debugger | Yes | No |
| Rich text tags | Yes | Yes |
| Scalable text | Yes | No |
| Font fallbacks | Yes | Yes |
| Adaptive layout | Yes | Yes |
| Default InspectorsA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary | Yes | Yes |
| Inspector: Edit custom object types | Yes | Yes |
| Inspector: Edit custom property types | Yes | Yes |
| Inspector: Mixed values (multi-editing) support | Yes | Yes |
| Array and list-view control | Yes | Yes |
| Data binding: Serialized properties | Yes | Yes |

## Additional resources

- [Migrate from uGUI to UI Toolkit](UIE-Transitioning-From-UGUI.html)

- [Migrate from IMGUI to UI Toolkit](UIE-IMGUI-migration.html)

UI systems

UI Toolkit
