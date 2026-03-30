This version of Unity is unsupported.

Paint holes in the terrain

Stamp a shape onto the terrain

# Smooth the terrain’s height

The Smooth Height tool averages out nearby areas, which softens the landscape and reduces abrupt changes. Use the tool:

- After you paint with brushes that introduce sharp, jagged edges into a landscape.

- To create smooth transitions between **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain) tiles that start at different heights (refer to [Set the height of an area or tile](terrain-SetHeight.html)).

## Access the tool

To smooth the height, in the Terrain tile’s **Inspector** window, select the **Paint Terrain** tool > tool dropdown > **Smooth Height**.

## Tool options

The Smooth Height tool is brush-based. To learn about working with brushes, refer to [Brushes](class-Brush.html).

## Smooth Controls

| Property | Function |
| --- | --- |
| Blur Direction (built-in Terrain system) or Verticality (Terrain Tools package) | The direction in which to smooth the height. If the value is negative, the tool smooths down the highest points. If the value is positive, the tool pulls lower points up towards higher points. If the value is 0, the tool smooths high and low points toward their common denominator. |
| Blur Radius (only in the Terrain Tools package) | The sample size on which to base the average height for the smooth operation. The higher the value, the greater the tool’s impact. The minimum value is 1. The maximum value is half of the heightmapA greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.See in Glossary’s resolution (refer to Terrain Settings reference). The Blur Radius doesn’t change how much of the terrain is painted; to control the painted area size, use the Brush Size property. |

The **Brush Size** value determines the size of the Brush to use, and the **Opacity** value determines how quickly the tool smooths out the area you’re painting.

## Additional resources

- [Work with heightmaps](terrain-Heightmaps.html)

- [Primary sculpting tools](terrain-Basic-Sculpting.html)

- [Advanced sculpting tools](terrain-Sculpt.html)

- [Change existing height with effects](terrain-Effects.html)

- [Transform terrain features](terrain-Transform.html)

- [Erode the terrain](terrain-Erosion.html)

Paint holes in the terrain

Stamp a shape onto the terrain
