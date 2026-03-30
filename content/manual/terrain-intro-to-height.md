This version of Unity is unsupported.

Height

Primary sculpting tools

# Before you start

Before you start working on height, consider the following options and settings.

## Maximum height and depth

Each Terrain tile has a maximum height. When you reach that height, the top of your mountain flattens. You can’t raise it anymore or add any detail. To go higher, change the value of the tile’s **Terrain Height** property in **Terrain Settings** > **Mesh Resolution**. For more information, refer to [Terrain Settings reference](terrain-OtherSettings.html).

You can’t lower the **terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain) below the Terrain tile’s surface (the GameObject’s y-axis position). If you want to sculpt sunken features, such as lakes or rivers, use the Set Height tool to set a starting height for sculpting. For more information, refer to [Set the height of an area or tile](terrain-SetHeight.html).

## Heightmap resolution

If your terrain’s sculpting doesn’t look detailed enough, you can raise the **heightmap**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap)’s resolution. For more information, refer to [Terrain Settings reference](terrain-OtherSettings.html).

## Start sculpting with an imported heightmap

If you have a heightmap from a 3D modeling program, you can import it for use on one or more tiles. For more information, refer to [**Work with heightmaps**](terrain-Heightmaps.html). You can then sculpt the heightmap to add detail.

## Additional resources

- [Create and edit Terrains](terrain-UsingTerrains.html)

- [The Terrain Tools package](https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest/)

- [Terrain colliders](terrain-colliders.html)A terrain-shaped collider component that handles collisions for collision surface with the same shape as the Terrain object it is attached to. [More info](class-TerrainCollider.html)
See in [Glossary](Glossary.html#TerrainCollider)

Height

Primary sculpting tools
