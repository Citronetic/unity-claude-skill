This version of Unity is unsupported.

Simulating real-world cameras with Physical Cameras

Widen the view with Lens Shift

# Introduction to Physical Cameras

The Physical **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) properties of the Camera component simulate real-world camera formats on a Unity camera. This is useful for importing camera information from 3D modeling applications that also mimic real-world cameras.

Unity provides the same settings as those in most 3D modeling application’s physical camera settings. The two main properties that control what the camera sees are **Focal Length** and **Sensor Size**.

- **Focal Length:** The distance between the sensor and the camera lens. This determines the vertical field of view. When a Unity camera is in Physical Camera mode, changing the Focal Length also changes the field of view accordingly. Smaller focal lengths result in a larger field of view, and vice versa.

[Image: The relationship between a cameras focal length, field of view, and sensor size]
The relationship between a camera’s focal length, field of view, and sensor size

- **Sensor Size:** The width and height of the sensor that captures the image. These determine the physical camera’s **aspect ratio**The relationship of an image’s proportional dimensions, such as its width and height.
See in [Glossary](Glossary.html#AspectRatio). You can choose from several preset sensor sizes that correspond to real-world camera formats, or set a custom size. When the sensor aspect ratio is different to the rendered aspect ratio, as set in the Game view, you can control how Unity fits the camera image to the rendered image (see information on [Gate Fit](PhysicalCameras-GateFit.html)).

## Additional resources

- [Camera Inspector windows reference for URP](urp/camera-components-reference-landing.html)

- [Camera Inspector window reference for the Built-In Render Pipeline](class-Camera.html)

Simulating real-world cameras with Physical Cameras

Widen the view with Lens Shift
