This version of Unity is unsupported.

Sorting groups

Sort renderers within a sorting group

# Set up a sorting group

To place a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject) into a Sorting Group, add the Sorting Group component to it:

1. Select the GameObject and go to **Component > Rendering > Sorting Group**, or select the [Add Component](../../UsingComponents.html) button in the Inspector window of the GameObject.

When you add a Sorting Group component to a GameObject, Unity applies the same [Sorting Group](sorting-group-reference.html) to all child GameObjects of the GameObject the component is attached to.

Unity uses the Sorting Group’s settings to determine how to sort its Renderers among other Renderers and Sorting Groups in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene). See [2D sorting](../../2d-renderer-sorting.html) for more information.

To sort Renderers within a Sorting Group, Unity uses the individual sort settings of the Renderers in the Sorting Group. See [Sorting Renderers within a Sorting Group](sort-renderers-within-sorting-group.html) for more information.

SortingGroup

Sorting groups

Sort renderers within a sorting group
