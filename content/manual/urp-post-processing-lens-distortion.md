This version of Unity is unsupported.

Film Grain Volume Override reference for URP

Lift Gamma Gain Volume Override reference for URP

# Lens Distortion Volume Override reference for URP

[Image: Scene with Lens Distortion effect turned off.]
Scene with Lens Distortion effect turned off.

[Image: Scene with Lens Distortion effect turned on.]
Scene with Lens Distortion effect turned on.

The **Lens Distortion** effect distorts the final rendered picture to simulate the shape of a real-world **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera) lens.

## Properties

| Property | Description |
| --- | --- |
| Intensity | Use the slider to set the overall strength of the distortion effectAn audio effect that modifies the sound by squashing and clipping the waveform to produce a rough, harsh result. More infoSee in Glossary. |
| X Multiplier | Use the slider to set the distortion intensity on the x-axis. This value acts as a multiplier so you can set this value to 0 to disable distortion on this axis, |
| Y Multiplier | Use the slider to set the distortion intensity on the y-axis. This value acts as a multiplier so you can set this value to 0 to disable distortion on this axis, |
| Center | Set the center point of the distortion effect on the screen. |
| Scale | Use the slider to set the value for global screen scaling. This zooms the render to hide the borders of the screen. When you use a high distortion, pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary on the borders of the screen can break because they rely on information from pixels outside the screen boundaries that don’t exist. This property is useful for hiding these broken pixels around the screen border. |

Film Grain Volume Override reference for URP

Lift Gamma Gain Volume Override reference for URP
