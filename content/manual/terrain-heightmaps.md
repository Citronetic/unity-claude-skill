This version of Unity is unsupported.

Grass and other details

Terrain Settings reference

# Working with Heightmaps

Terrain tools that affect height, such as [Raise or Lower Terrain](terrain-RaiseLowerTerrain.html) and [Set the height of an area or tile](terrain-SetHeight.html), use a grayscale texture called a heightmap. Unity represents the height of each point on the **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain) as a value in a rectangular array. It represents this array using a grayscale [heightmap](texture-types.html#TerrainHeightmaps)A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap). Heightmaps are built into the Terrain, and the values stored in a heightmap define the height of each point or vertex on the Terrain.

[Image: Example heightmap]
Example heightmap

## Importing and exporting heightmaps

You can import and export heightmaps into the Unity Editor. This is useful when you want to use real world height data to replicate a landmark such as Mount Everest, or work on a heightmap image in an external image editor. You can also use 3D modelling applications, such as Houdini and World Machine, to generate Terrain, then import your Terrain into Unity as a heightmap.

It’s good practice to store heightmaps as RAW files. A RAW file uses a 16-bit grayscale format that’s compatible with most image and landscape editors. The Unity Editor enables you to import and export RAW heightmap files for a Terrain.

To access the import and export settings into the Editor, select the Terrain component in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector), and click the **Terrain Settings** button (gear icon in the toolbar).

[Image: Import Raw and Export Raw buttons in the Terrain Settings Inspector]
Import Raw and Export Raw buttons in the Terrain Settings Inspector

Under **Texture Resolutions (On Terrain Data)**, there are two buttons labelled **Import Raw** and **Export Raw**.

- **Import Raw** allows Unity to read a heightmap from the RAW file format, and generate it in the Editor.

[Image: Import Heightmap window]

- **Export Raw** allows Unity to write a heightmap from the Editor to the RAW file format.

[Image: Export Heightmap window]

### Import and export options

| Property | Description |
| --- | --- |
| Depth | Determines how many bits Unity uses per pixel in the imported or exported heightmap.• Bit 16: Uses 16 bits (2 bytes)• Bit 8: Uses 8 bits (1 byte) |
| Resolution | The texture resolution (width and height) of the imported heightmap. |
| Byte Order | Determines how Unity orders the bytes for each pixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary in the imported or exported heightmap. This mainly applies to bit–16 depth heightmaps, and is platform-dependent. |
| Flip Vertically | Determines whether Unity flips the exported heightmap vertically across the x-axis. |
| Terrain Size | The size of Terrain that Unity will apply the imported heightmap to. |

---

- 2020–06–30 Page amended

- Updated content to reflect new UI and options

Grass and other details

Terrain Settings reference
