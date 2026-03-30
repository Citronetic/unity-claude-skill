This version of Unity is unsupported.

Isometric brush shortcut Reference

Tilemap component reference

# Tilemap Collider 2D

The **Tilemap **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](../../CollidersOverview.html)
See in [Glossary](../../Glossary.html#Collider) 2D** component generates collider shapes for [tiles](../tiles-for-tilemaps/tile-asset-reference.html)A simple class that allows a sprite to be rendered on a Tilemap. [More info](../../tilemaps/tiles-for-tilemaps/scriptable-tiles/scriptable-tiles-landing.html)
See in [Glossary](../../Glossary.html#Tile) on a [Tilemap](./tilemap-reference.html)A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../Glossary.html#Tilemap) component on the same **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject). When you add or remove tiles on the Tilemap component, the Tilemap Collider 2D updates the collider shapes during `LateUpdate`. It batches multiple tile changes together to minimize the impact on performance.

## Collider Type’s effect on collider generation

The collider shapes generated for each tile in the tilemap depend on the **Collider Type** set in the tile’s properties. For more information on how this component’s shape generation behavior corresponds to the **Collider Types**, refer to [Tile asset reference](../tiles-for-tilemaps/tile-asset-reference.html).

## Tilemap and Composite Colliders

You can use the Tilemap Collider 2D component together with the [Composite Collider 2D](../../2d-physics/collider/composite-collider/composite-collider-2d-reference.html) component. When you add both components to the same tilemap, Unity composites the collider shapes of neighboring tiles together. This smoothens the corners and edges between collider shapes in neighboring tiles.

Using both components together reduces the number of individual collider shapes involved in a physics update, which reduces the amount of calculations required, and minimizes the impact on performance.

## Tilemap collider 2D API

If you require immediate changes to happen to the collider, use [Tilemaps.TilemapCollider2D.ProcessTilemapChanges](../../../ScriptReference/Tilemaps.TilemapCollider2D.ProcessTilemapChanges.html) to process them immediately. You can use [Tilemaps.TilemapCollider2D-hasTilemapChanges](../../../ScriptReference/Tilemaps.TilemapCollider2D-hasTilemapChanges.html) to check if any processing is required.

Isometric brush shortcut Reference

Tilemap component reference
