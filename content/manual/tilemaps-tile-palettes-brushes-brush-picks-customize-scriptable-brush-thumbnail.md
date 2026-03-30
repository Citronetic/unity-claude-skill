This version of Unity is unsupported.

Work with Brush Picks

Brush Picks overlay reference

# Customize a scriptable Brush’s thumbnail

Unity determines the preview image displayed in a Brush Pick’s thumbnail by the [Asset Preview](../../../../../ScriptReference/AssetPreview.html) utility. To customize the thumbnail image of your [scriptable brush](../create-scriptable-brush.html), you will need to implement the [RenderStaticPreview](../../../../../ScriptReference/Editor.RenderStaticPreview.html) method for the [editor](../../../../../ScriptReference/Editor.html) of your scriptable brush.

[Image: Example of Brush Pick thumbnail.]
Example of Brush Pick thumbnail.

The icon in the lower right of the thumbnail preview displays the [Brush type](../brush-inspector-reference.html) of the Brush Pick. The icon is determined by the `icon` property of the editor for the Brush. Override this property to provide your own icon for your Brush type.

[Image: This message appears when a compatible Brush isnt present.]
This message appears when a compatible Brush isn’t present.

Unity stores Brush Picks as serialized values based on the active Brush. If you change the script or remove your custom scriptable brush, Unity might not be able to load saved Brush Picks as the Brush has changed. A message appears if Unity isn’t able to find a compatible Brush for the Brush Pick.

## Additional resources

- [Scriptable Brushes](../create-scriptable-brush.html)

- [Scriptable Tiles](../../../tiles-for-tilemaps/scriptable-tiles/scriptable-tiles.html)

Work with Brush Picks

Brush Picks overlay reference
