# 2D Tilemap Extras

The 2D Tilemap Extras package contains reusable 2D and Tilemap editor scripts which you can use for your own Projects,
and as the basis for your own custom Brushes and Tiles. You can freely customize the behavior of the scripts to create
new Brushes that suit different uses or scenarios. To find these additional Brushes, open the Tile Palette window (menu:
**Window > 2D > Tile Palette**) and open the Brush drop-down menu near the bottom of the editor. Select from the
available Brush options for different effects.

[Image: Brush drop-down menu.]

The source code for these scripts can be found in the
repository [2d-extras](https://github.com/Unity-Technologies/2d-extras), and
examples of the implemented scripts can be found in the sister
repository [2d-techdemos](https://github.com/Unity-Technologies/2d-techdemos).

## Scriptable Brushes

- [GameObject](GameObjectBrush.html): This Brush instances, places and manipulates GameObjects onto the Scene. Use this as
an example to create Brushes which targets GameObjects, other than Tiles, for instancing and manipulation.

- [Group](GroupBrush.html): This Brush picks groups of Tiles based on their positions relative to each other. Adjust the
size of groups the Brush picks by setting the Gap and Limit properties. Use this Brush as an example to create Brushes
that pick Tiles based on specific criteria.

- [Line](LineBrush.html): This Brush draws a line of Tiles between two points onto a Tilemap. Use this as an example to
modify Brush painting behavior to make painting more efficient.

- [Random](RandomBrush.html): This Brush places random Tiles onto a Tilemap. Use this as an example to create Brushes
which store specific data per Brush and to make Brushes which randomize behavior.

## Scriptable Tiles

The following are the [Scriptable Tiles](Tiles.html) included in this package. You can create (menu: **Create > Tiles** )
the following additional Tile types that are included with this package.

- [Animated](AnimatedTile.html): This Tile runs through and displays a list of Sprites in sequence to create a
frame-by-frame animation.

- [Rule Tile](RuleTile.html): This is a generic visual Tile that accepts rules you create with the **Tiling Rules** editor
to create different Tilesets. Rule Tiles are the basis of the Terrain, Pipeline, Random or Animated Tiles. There are
different types of Rule Tiles for each of the [Tilemap grid types](https://docs.unity3d.com/Manual/class-Grid.html).
The default Rule Tile is only used with the Rectangle Grid type Tilemap, while the Hexagonal and Isometric Rule Tiles
are used with their respective Grid types.

- **Hexagonal Rule Tile**: A Rule Tile
for [Hexagonal Grids](https://docs.unity3d.com/Documentation/Manual/Tilemap-Hexagonal.html). Enable the **Flat Top**
property for a Flat Top Hexagonal Grid, or clear it for a Pointed Top Hexagonal Grid.

- **Isometric Rule Tile**: A Rule Tile for use
with [Isometric Grids](https://docs.unity3d.com/Documentation/Manual/Tilemap-Isometric-CreateIso.html).

- [Rule Override Tile](RuleOverrideTile.html): This Tile can override Sprites and GameObjects for a
given [Rule Tile](RuleTile.html) to provide different behaviour without changing the original Rules.

- [Advanced Rule Override Tile](AdvancedRuleOverrideTile.html): This Tile can override a subset of Rules for a
given [Rule Tile](RuleTile.html) to provide specialized behavior, while keeping the rest of the original Rules intact.

- [Auto Tile](AutoTile.html): This Tile match themselves based on the mask set on Textures to generate the AutoTile
ruleset.

## Other

- [GridInformation](GridInformation.html): A simple MonoBehavior that stores and provides information based on Grid
positions and keywords.

- [Custom Rules for RuleTile](CustomRulesForRuleTile.html): This helps to create new custom Rules for the Rule Tile with
more options.
