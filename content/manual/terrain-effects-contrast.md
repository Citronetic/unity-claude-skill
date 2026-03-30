This version of Unity is unsupported.

Change peak sharpness

Transform terrain features

# Add contrast to features

**Note:** This tool is only available in the [Terrain Tools package](https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest/).

Use the Contrast tool to make low features lower and high features higher. This is distinct from the [Sharpen Peaks](terrain-Effects-Sharpen.html) and [Slope Flatten](terrain-Effects-Flatten.html) tools, which can keep the average height of the feature.

[Image: Contrast added to a hill side, creating more distinct gullies]
Contrast added to a hill side, creating more distinct gullies

## Access the tool

To add contrast to the terrain, in the Terrain tile’s **Inspector** window, select the **Paint Terrain** tool > tool dropdown > **Effects** > **Contrast**.

## Tool options

The Contrast tool is brush-based. To learn about working with brushes, refer to [Brushes](class-Brush.html).

## Tool controls

The **Feature Size** property controls how large a feature needs to be to have contrast applied to it. The range is from 1 to 100. A low value adds details to smaller features. A high value adds details only to large features.

[Image: Showing the difference between the brush strokes for Feature Size values of 15 and 95]
Showing the difference between the brush strokes for Feature Size values of 15 and 95

## Additional resources

- [Flatten terrain features](terrain-Effects-Flatten.html)

- [Change peak sharpness](terrain-Effects-Sharpen.html)

Change peak sharpness

Transform terrain features
