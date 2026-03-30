This version of Unity is unsupported.

Create meshes for text strings

Mesh components reference

# Text Mesh component reference

[Switch to Scripting](../ScriptReference/TextMesh.html)

The **Text **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh)** component generates 3D geometry that displays text strings.

**Note:** The **Text Mesh** component has limited functionality. For information on more recent, full-featured ways of displaying text, see [Creating user interfaces (UI)](UIToolkits.html).

To create a new Text Mesh, go to **Component > Mesh > Text Mesh**.

## Text Mesh properties

| Property: | Function: |
| --- | --- |
| Text | The text that will be rendered |
| Offset Z | How far should the text be offset from the transform.position.z when drawing |
| Character Size | The size of each character (This scales the whole text.) |
| Line Spacing | How much space will be in-between lines of text. |
| Anchor | Which point of the text shares the position of the Transform. |
| Alignment | How lines of text are aligned (Left, Right, Center). |
| Tab Size | How much space will be inserted for a tab ‘\t’ character. This is a multiplum of the ‘spacebar’ character offset. |
| Font Size | The size of the font. This can override the size of a dynamic font. |
| Font Style | The rendering style of the font. The font needs to be marked as dynamic. |
| Rich Text | When selected this will enable tag processing when the text is rendered. |
| Font | The TrueType Font to use when rendering the text. |
| Color | The global color to use when rendering the text. |

TextMesh

Create meshes for text strings

Mesh components reference
