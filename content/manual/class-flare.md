This version of Unity is unsupported.

Configuring Flare elements

Lens Flare component reference

# Flare asset reference

[Switch to Scripting](../ScriptReference/Flare.html)

Explore the properties in the Flare asset to create and configure a Flare.

| Property | Function |
| --- | --- |
| Elements | The number of Flare images included in the Flare. |
| Image Index | Which Flare image to use from the Flare Texture for this Element. |
| Position | The Element’s offset along a line running from the containing GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary’s position through the screen center. 0 = GameObject position, 1 = screen center. |
| Size | The size of the element. |
| Color | Color tint of the element. |
| Use Light Color | If the Flare is attached to a Light, enabling this will tint the Flare with the Light’s color. |
| Rotate | If enabled, bottom of the Element will always face the center of the screen, making the Element spin as the Lens FlareA component that simulates the effect of lights refracting inside a camera lens. Use a Lens Flare to represent very bright lights or add atmosphere to your scene. More infoSee in Glossary moves around on the screen. |
| ZoomA camera control that lets you scale the view on your screen. To zoom a camera in the Unity Editor, press Alt + right click and drag. More infoSee in Glossary | If enabled, the Element will scale up when it becomes visible and scale down again when it isn’t. |
| Fade | If enabled, the Element will fade in to full strength when it becomes visible and fade out when it isn’t. |
| Flare Texture | A texture containing images used by this Flare’s Elements. It must be arranged according to one of the TextureLayout options. |
| Texture Layout | How the individual Flare Element images are laid out inside the Flare Texture (see Configuring Flare Elements: Understand texture layouts for further details). |
| Use Fog | If enabled, the Flare will fade away with distance fog. This is used commonly for small Flares. |

Configuring Flare elements

Lens Flare component reference
