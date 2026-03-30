This version of Unity is unsupported.

Mesh data for deformable meshes

Creating and accessing meshes via script

# View mesh data visualizations

Use the **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) asset Preview window to view and explore visualizations of a mesh and its data.

## Interact with the Preview window

Use the Mesh asset **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) Preview to preview different elements of a Mesh.

You can use the following mouse and keyboard controls to navigate the mesh view:

- Rotate the view: left-click and drag.

- Rotate the light source: right-click and drag. A light source is present only in the “Shaded” and “Blendshapes” views.

- Pan the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera): middle-click and drag.

- Zoom the camera in and out: scroll the mouse wheel.

- Reset the zoom and pan settings: hover the mouse cursor inside the preview and press the “F” key. This does not reset the rotation.

The “UV Layout” view displays the UV layout of your mesh as a 2D image. Unity disables rotation in this view. To pan the camera, click and drag any of the left, right, or middle mouse buttons.

## View mesh data

The Preview window displays the following data about the mesh:

- The name of the mesh.

- The number of vertices in the mesh.

- The type and number of faces in the mesh. Most meshes use triangles to define faces.

- The number of blend shapes in the mesh, if any.

- The number of sub-meshes in the mesh, if there is more than one.

- The names of all UV channels in the mesh.

- For skinned meshes, the name of the skin weights property.

## Change View Mode

The **View Mode** provides different ways of visualizing the mesh.

### Shaded view

[Image: The Mesh Preview in Shaded view, with the wireframe setting disabled]
The Mesh Preview in Shaded view, with the wireframe setting disabled

The Shaded view provides a visualization of the mesh with a basic light. When you import a mesh from a 3D modelling application, Unity separates the mesh into sub-meshes for each material on the mesh. Unity applies a different color to each sub-mesh in this view. You can find the legend for these colors under the Indices section of the Mesh Inspector. The following screenshot shows an example of this legend for a mesh with three sub-meshes, with the wireframe setting enabled.

[Image: The Shaded view, displaying a mesh with three submeshes and the legend that shows their colors]
The Shaded view, displaying a mesh with three submeshes and the legend that shows their colors

### UV Checker view

[Image: The UV Checker view with the wireframe setting enabled]
The UV Checker view with the wireframe setting enabled

This view applies a checkerboard texture to the mesh to visualize how the mesh’s UV map applies textures. It also adds another dropdown menu next to the view picker menu. In the above screenshot, this new menu displays “Channel 0”. This dropdown allows you to check different UV channels when your UV map uses more than one channel.

To change the size of the checkerboard texture in this view, use the slider next to the channel picker dropdown menu. Changes to this slider don’t affect the settings in your UV map, only the texture size within this view. Use the slider to explore how different texture sizes look on the mesh.

### UV Layout view

[Image: The UV Layout view]
The UV Layout view

The UV Layout view view displays how the vertices of your mesh are organized in the unwrapped UV map. The wireframe toggle isn’t active in this view, because it already deals with vertices. Unity disables all camera controls except camera pan and zoom in this view.

By default, the UV Layout view displays the 0..1 UV range. You can access different UV channels with the channel picker dropdown menu.

### Vertex Color view

[Image: The Vertex Color view with the wireframe setting disabled]
The Vertex Color view with the wireframe setting disabled

The Vertex Color view displays vertex colors in your mesh. Vertex colors are separate from any Materials the mesh has. For more information on vertex colors, see [Mesh.colors](https://docs.unity3d.com/ScriptReference/Mesh-colors.html).

### Normals view

[Image: The Normals view with the wireframe setting enabled]
The Normals view with the wireframe setting enabled

The Normals view uses color to visualize which direction the normals in the mesh face. The direction of a normal vector affects how light interacts with that part of the mesh.

### Tangents view

[Image: The Tangents view with the wireframe setting enabled]
The Tangents view with the wireframe setting enabled

The Tangents view uses color to visualize tangent data in the mesh. Unity uses tangents as part of the workflow for bump-mapped **Shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

### Blendshapes view

[Image: The Blendshapes view with the wireframe setting disabled.]
The Blendshapes view with the wireframe setting disabled.

The Blendshapes view applies blend shape deformations to your mesh and displays the result in the preview window. You can preview one blend shape at a time; the view shows each blend shape at its highest value. This means that a preview of a blend shape that curves a character’s smile, for example, displays the curve at its maximum.

This view adds a new dropdown menu to select a blend shape next to the view picker dropdown. The dropdown menu lists all blend shapes in the current mesh. If the list cannot fit into a single screen, use the arrows at the top and bottom of the list to navigate through the full list.

Mesh

Mesh data for deformable meshes

Creating and accessing meshes via script
