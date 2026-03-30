This version of Unity is unsupported.

Introduction to Rendering Layers in URP

Enable Rendering Layers for Decals in URP

# Enable Rendering Layers for Lights in URP

To enable Rendering Layers for Lights in your project:

1. In the [URP Asset](../universalrp-asset.html), in the **Lighting** section, open the **More** (⋮) menu and select **Advanced Properties**.

2. In the [URP Asset](../universalrp-asset.html), in the **Lighting** section, select **Use Rendering Layers**.

## How to edit Rendering Layer names

To edit the names of Rendering Layers:

1. Go to **Project Settings** > **Tags and Layers**.

2. Edit the Rendering Layer names in the **Rendering Layers** section.

## How to use Rendering Layers with Lights

This section describes how to configure the following application example:

- The **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) contains two Point Lights (marked `A` and `B` in the illustration) and two Sphere **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) (`C` and `D` in the illustration).

- Light `A` affects Sphere `D`, but not Sphere `C`. Light `B` affects Sphere `C`, but not Sphere `D`.

The following illustration shows the example:

[Image: Light A affects Sphere D, but not Sphere C. Light B affects Sphere C, but not Sphere D.]
*Light `A` affects Sphere `D`, but not Sphere `C`. Light `B` affects Sphere `C`, but not Sphere `D`.*

To implement the example:

1. [Enable Rendering Layers](rendering-layers-decals.html) in your project.

2. Create two Point Lights (call them `A`, and `B`) and two Spheres (call them `C`, and `D`). Position the objects so that both Spheres are within the emission range of Lights.

3. Go to **Project Settings** > **Tags and Layers**. Rename Rendering Layer 1 to `Red`, and Layer 2 to `Green`.

4. Select Light `A`, change its color to green. Select Light `B`, change its color to red. With this setup, both Lights affect both Spheres.

[Image: Both Lights affect both Spheres.]
Both Lights affect both Spheres.

5. Make the following settings on Lights and Spheres:

Light `A`: in the property **Light > Rendering > Rendering Layers**, clear all options, and select `Green`.

Light `B`: in the property **Light > Rendering > Rendering Layers**, clear all options, and select `Red`.

Sphere `C`: in the property **Mesh Renderer > Additional Settings > Rendering Layer Mask**, select all options, clear `Green`.

Sphere `D`: in the property **Mesh Renderer > Additional Settings > Rendering Layer Mask**, select all options, clear `Red`.

Now Point Light `A` affects Sphere `D`, but not Sphere `C`. Point Light `B` affects Sphere `C`, but not Sphere `D`.

[Image: Point Light A affects Sphere D, but not Sphere C. Point Light B affects Sphere C, but not Sphere D.]
Point Light A affects Sphere D, but not Sphere C. Point Light B affects Sphere C, but not Sphere D.

## How to use Custom Shadow Layers

In the illustration above, Light `A` does not affect Sphere `C`, and the Sphere does not cast shadow from Light `A`.

The **Custom Shadow Layers** property lets you configure the scene so that Sphere `C` casts the shadow from Light `A`.

1. Select Light `A`.

2. In **Light > Shadows**, select the **Custom Shadow Layers** property. Unity shows the **Layer** property.

3. In the **Layer** property, select the Rendering Layer that Sphere C belongs to.

Now Light `A` does not affect Sphere `C`, but Sphere `C` casts shadow from Light `A`.

The following illustrations show the scene with the **Custom Shadow Layers** property off and on.

[Image: Custom Shadow Layers property off]
Custom Shadow Layers property off

[Image: Custom Shadow Layers property on]
Custom Shadow Layers property on

## Additional resources

- [`RenderingLayerMask` API](../../../ScriptReference/RenderingLayerMask.html)

Introduction to Rendering Layers in URP

Enable Rendering Layers for Decals in URP
