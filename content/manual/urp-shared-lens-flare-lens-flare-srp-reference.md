This version of Unity is unsupported.

Add screen space lens flares in URP

Lens Flare (SRP) Data Asset in URP

# Lens Flare (SRP) component reference for URP

Refer to [Add lens flares](lens-flare-component.html) for information on how to use the **Lens Flare**A component that simulates the effect of lights refracting inside a camera lens. Use a Lens Flare to represent very bright lights or add atmosphere to your scene. [More info](../../../class-LensFlare.html)
See in [Glossary](../../../Glossary.html#LensFlare) (SRP) component.

## General

| Property | Description |
| --- | --- |
| Lens Flare Data | Select the Lens Flare (SRP) Data asset this component controls. |
| Intensity | Multiplies the intensity of the lens flare. |
| Scale | Multiplies the scale of the lens flare. |
| Light Override | Specifies the light component Unity gets the color and shape values from, if you enable Modulate By Light Color or Attenuation By Light Shape. If you don’t specify a light component, Unity uses the Light component from this GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
| Attenuation by Light Shape | Enable this property to automatically change the appearance of the lens flare based on the type of light you attached this component to.For example, if this component is attached to a spot light and the camera is looking at this light from behind, the lens flare is not visible. This property is only available when this component is attached to a light. |
| Attenuation Distance | The distance between the start and the end of the Attenuation Distance Curve.This value operates between 0 and 1 in world space. |
| Attenuation Distance Curve | Fades out the appearance of the lens flare over the distance between the GameObject this asset is attached to, and the CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary. |
| Scale Distance | The distance between the start and the end of the Scale Distance Curve.This value operates between 0 and 1 in world space. |
| Scale Distance Curve | Changes the size of the lens flare over the distance between the GameObject this asset is attached to, and the Camera. |
| Screen Attenuation Curve | Reduces the effect of the lens flare based on its distance from the edge of the screen. You can use this to display a lens flare at the edge of your screen |

## Occlusion

| Property | Description |
| --- | --- |
| Enable | Enable this property to partially obscure the lens flare based on the depth bufferA memory store that holds the z-value depth of each pixel in an image, where the z-value is the depth for each rendered pixel from the projection plane. More infoSee in Glossary |
| Occlusion Radius | Defines how far from the light source Unity occludes the lens flare. This value is in world space. |
| Sample Count | The number of random samples the CPU uses to generate the Occlusion Radius. |
| Occlusion Offset | Offsets the plane that the occlusion operates on. A higher value moves this plane closer to Camera. This value is in world space. For example, if a lens flare is inside the light bulb, you can use this to sample occlusion outside the light bulb. |
| Occlusion Remap Curve | Allow the occlusion [from 0 to 1] to be remap with any desired shape. |
| Allow Off Screen | Enable this property to allow lens flares outside the Camera’s view to affect the current field of view. |

Add screen space lens flares in URP

Lens Flare (SRP) Data Asset in URP
