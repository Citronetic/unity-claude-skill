This version of Unity is unsupported.

Crop or stretch the view with Gate Fit

Configure Gate Fit

# Introduction to Gate Fit

The **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) component’s **Gate Fit** property determines what happens when the Game view and the physical camera sensor have different **aspect ratios**The relationship of an image’s proportional dimensions, such as its width and height.
See in [Glossary](Glossary.html#AspectRatio).

In **Physical Camera** mode, a camera has two “gates.”

- The area rendered in the Game view, according to the resolution you set in the **Aspect** drop-down menu, is called the “resolution gate”.

- The area that the camera actually sees, as defined by the **Sensor Size** properties, is called the “film gate”.

[Image: An example of resolution gate vs. film gate when the two gates have different aspect ratios]
An example of resolution gate vs. film gate when the two gates have different aspect ratios

When the two gates have different aspect ratios, Unity “fits” the resolution gate to the film gate. There are several fit modes, but they all yield one of three results.

- **Cropping:** When the film gate exceeds the resolution gate after fitting, the Game view renders as much of the camera image as fits within its aspect ratio, and cuts off the rest.

- **Overscanning:** When the film gate exceeds the resolution gate after fitting, the Game view still performs rendering calculations for parts of the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) that fall outside the camera’s field of view.

- **Stretching:** The Game view renders the full camera image, stretched either horizontally or vertically to fit its aspect ratio.

To view the gates in the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView), and see how they fit together, select the camera and look at its view frustum. The resolution gate is the camera’s far **clipping plane**A plane that limits how far or close a camera can see from its current position. A camera’s viewable range is between the far and near clipping planes. See far clipping plane and near clipping plane. [More info](class-Camera.html)
See in [Glossary](Glossary.html#clippingplane). The film gate is the second rectangle at the base of the frustum.

[Image: In the example above, the outer rectangle (A) at the base of the camera’s view frustum is the resolution gate. The inner rectangle (B) is the film gate]
In the example above, the outer rectangle (A) at the base of the camera’s view frustum is the resolution gate. The inner rectangle (B) is the film gate

Crop or stretch the view with Gate Fit

Configure Gate Fit
