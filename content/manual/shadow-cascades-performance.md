This version of Unity is unsupported.

Configure shadow cascades

Implementation details of shadow cascades

# Performance impact of shadow cascades

Increasing the number of shadow cascades increases the number of draw calls in the shadow rendering pass, which has a negative impact on rendering performance.

Reducing the number of shadow cascades lets you significantly reduce the number of shadow rendering draw calls.

A lower number of shadow cascades might reduce the visual quality of shadows in the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). Choose the number of cascades based on the performance and visual quality requirements of your project on a scene-by-scene basis.

You can configure different shadow cascade settings and shadow resolution settings for different quality levels using multiple URP Assets.

Configure shadow cascades

Implementation details of shadow cascades
