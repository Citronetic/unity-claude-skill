This version of Unity is unsupported.

Introduction to Gate Fit

Camera output

# Configure Gate Fit

The **Gate Fit** mode you choose determines how Unity resizes the resolution gate (and consequently, the camera’s view frustum). The film gate always stays the same size.

The following sections provide more details on each Gate Fit mode.

### Vertical

When **Gate Fit** is set to **Vertical**, Unity fits the resolution gate to the height (Y axis) of the film gate. Any change you make to the sensor width (**Sensor Size > X**) has no effect on the rendered image.

If the sensor **aspect ratio**The relationship of an image’s proportional dimensions, such as its width and height.
See in [Glossary](Glossary.html#AspectRatio) is larger than the game view aspect ratio, Unity crops the rendered image at the sides:

[Image: Gate Fit set to Vertical: Resolution gate aspect ratio is 0.66:1 (600 x 900 px). Film gate aspect ratio is 1.37:1 (16mm). The red areas indicate where Unity crops the image in the Game view.]
**Gate Fit** set to **Vertical**: Resolution gate aspect ratio is 0.66:1 (600 x 900 px). Film gate aspect ratio is 1.37:1 (16mm). The red areas indicate where Unity crops the image in the Game view.

If the sensor aspect ratio is smaller than the game view aspect ratio, Unity overscans the rendered image at the sides:

[Image: Gate Fit set to Vertical: Resolution gate aspect ratio is 16:9. Film gate aspect ratio is 1.37:1 (16mm). The green areas indicate where Unity overscans the image in the Game view.]
**Gate Fit** set to **Vertical**: Resolution gate aspect ratio is 16:9. Film gate aspect ratio is 1.37:1 (16mm). The green areas indicate where Unity overscans the image in the Game view.

### Horizontal

When **Gate Fit** is set to **Horizontal**, Unity fits the resolution gate to the width (X axis) of the film gate. Any change you make to the sensor height (Sensor Size > Y) has no effect on the rendered image.

If the sensor aspect ratio is larger than the Game view aspect ratio, Unity overscans the rendered image on the top and bottom:

[Image: Gate Fit is set to Horizontal: Resolution gate aspect ratio is 0.66:1 (600 x 900 px). Film gate aspect ratio is 1.37:1 (16mm). The green areas indicate where Unity overscans the image in the Game view.]
**Gate Fit** is set to **Horizontal**: Resolution gate aspect ratio is 0.66:1 (600 x 900 px). Film gate aspect ratio is 1.37:1 (16mm). The green areas indicate where Unity overscans the image in the Game view.

If the sensor aspect ratio is smaller than the game view aspect ratio, the rendered image is cropped on the top and bottom.

[Image: Gate Fit set to Horizontal: Resolution gate aspect ratio is 16:9. Film gate aspect ratio is 1.37:1 (16mm). The red areas indicate where Unity crops the image in the Game view.]
**Gate Fit** set to **Horizontal**: Resolution gate aspect ratio is 16:9. Film gate aspect ratio is 1.37:1 (16mm). The red areas indicate where Unity crops the image in the Game view.

### None

When Gate Fit is set to None, Unity fits the resolution gate to the width and height (X and Y axes) of the film gate. Unity stretches the rendered image to fit the Game view aspect ratio.

[Image: No gate fit. The camera uses the film gate aspect ratio of 1.37:1 (16mm), and stretches the image horizontally to fit a Game view aspect ratio of 16:9 (left) and vertically to fit a game view aspect ratio of 0.66:1 (right)]
No gate fit. The camera uses the film gate aspect ratio of 1.37:1 (16mm), and stretches the image horizontally to fit a Game view aspect ratio of 16:9 (left) and vertically to fit a game view aspect ratio of 0.66:1 (right)

### Fill and Overscan

When **Gate Fit** is set to **Fill** or **Overscan**, Unity automatically performs either a vertical or horizontal fit, depending on the resolution gate and film gate aspect ratios.

- **Fill** fits the resolution gate to the film gate’s smaller axis, and crops the rest of the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) image.

- **Overscan** fits the resolution gate to the film gate’s larger axis and overscans the area outside of the camera image’s boundaries.

Introduction to Gate Fit

Camera output
