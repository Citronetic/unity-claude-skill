This version of Unity is unsupported.

HDR emulation scale

Create 2D lit shader with Shader Graph

# Create shadows with Shadow Caster 2D in URP

Learn how the **Shadow Caster 2D** component defines the shape and properties that a Light uses to determine its cast shadows.

Add the **Shadow Caster 2D** component to a GameObject by going to menu: **Component > Rendering > 2D > Shadow Caster 2D**.

| Property | Function |
| --- | --- |
| Use Renderer Silhouette | Enable this and Self Shadows to include the GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary Renderer’s silhouette as part of the shadow. Enable this and disable Self Shadows to exclude the Renderer’s silhouette from the shadow. This option is only available when a valid Renderer is present. |
| Casts Shadows | Enable this to have the Renderer cast shadows. |
| Self Shadows | Enable this to have the Renderer cast shadows on itself. |

[Image: Left: Use Renderer Silhouette disabled, Self Shadow disabled. Right: Use Renderer Silhouette enabled, Self Shadow disabled.]
Left: **Use Renderer Silhouette** disabled, **Self Shadow** disabled. Right: **Use Renderer Silhouette** enabled, **Self Shadow** disabled.

[Image: Left: Use Renderer Silhouette disabled, Self Shadows enabled. Right: Use Renderer Silhouette enabled, Self Shadows enabled.]
Left: **Use Renderer Silhouette** disabled, **Self Shadows** enabled. Right: **Use Renderer Silhouette** enabled, **Self Shadows** enabled.

## Composite Shadow Caster 2D

The Composite Shadow Caster 2D component merges the shape of multiple Shadow Caster 2D components together as a single shadow caster 2D.

Follow these steps:

1. To add a **Composite Shadow Caster 2D** component to a GameObject, go to **Component** > **Rendering** > **2D** > **Composite Shadow Caster 2D**.

2. Add GameObjects with the Shadow Caster 2D component as children of the GameObject from step 1.

The Composite Shadow Caster 2D component merges all Shadow Caster 2D components within this hierarchy, including any Shadow Caster 2D components on the parent.

[Image: Left: Without Composite Shadow Caster 2D. Right: With Composite Shadow Caster 2D]
Left: Without **Composite Shadow Caster 2D**. Right: With **Composite Shadow Caster 2D**

HDR emulation scale

Create 2D lit shader with Shader Graph
