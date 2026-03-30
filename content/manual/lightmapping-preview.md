This version of Unity is unsupported.

Set up your scene and lights for baking

Bake lighting

# Preview baked lighting

You can edit a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) and preview changes to **lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) and lighting without affecting the baked lightmaps.

To preview, do the following in a scene that uses lightmapping:

1. In the [Scene view View Options toolbar](ViewModes.html), select **Debug Draw Mode**.

2. Select a [Global Illumination](GIVis.html#global-illumination)A group of techniques that model both direct and indirect lighting to provide realistic lighting results.
See in [Glossary](Glossary.html#globalillumination) Draw Mode.

3. In the **Lighting Visualization** overlay, set **Lighting Data** to **Preview**.

4. Make changes to the scene that affect lightmaps.

Unity creates temporary lightmaps and uses them in the **Scene view**An interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. [More info](UsingTheSceneView.html)
See in [Glossary](Glossary.html#SceneView). To check the temporary lightmaps, go to the [Lighting window](lighting-window.html) and select **Baked Lightmaps**.

To use the baked lightmaps without your changes, set **Lighting Data** to **Baked**.

Set up your scene and lights for baking

Bake lighting
