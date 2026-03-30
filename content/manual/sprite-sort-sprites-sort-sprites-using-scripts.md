This version of Unity is unsupported.

Sort sprites

Sprites sorting reference

# Sort sprites using scripts

You can sort **sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) per **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) through **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../creating-scripts.html)
See in [Glossary](../../Glossary.html#Scripts), by modifying the following properties in Camera:

- [TransparencySortMode](../../../ScriptReference/Camera-transparencySortMode.html) (corresponds with **Transparency Sort Mode**)

- [TransparencySortAxis](../../../ScriptReference/Camera-transparencySortAxis.html) (corresponds with **Transparency Sort Axis**)

For example:

```cs
var camera = GetComponent<Camera>();

camera.transparencySortMode = TransparencySortMode.CustomAxis;

camera.transparencySortAxis = new Vector3(0.0f, 1.0f, 0.0f);
```

Sort sprites

Sprites sorting reference
