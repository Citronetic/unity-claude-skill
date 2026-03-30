This version of Unity is unsupported.

Post-processing

Post-processing effect availability reference

# Introduction to post-processing

Unity provides a number of ****post-processing**** effects and full-screen effects that can greatly improve the appearance of your application with little set-up time. You can use these effects to simulate physical **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) and film properties, or to create stylised visuals.

This page contains the following information:

- [Render pipeline compatibility](#render-pipeline-compatibility)

- [Effect availability and location](#effect-availability-and-location)

The images below demonstrate a **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) with and without post-processing.

[Image: Scene with no post-processing]
Scene with no post-processing

[Image: Scene with post-processing]
Scene with post-processing

## Render pipeline compatibility

Which post-processing effects are available and how you apply them depend on which [render pipeline](render-pipelines.html)A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) you are using. A post-processing solution from one render pipeline is not compatible with other render pipelines.

This table contains information about which of Unity’s post-processing solutions are compatible with each of Unity’s render pipelines.

| Render pipeline | Post-processing support |
| --- | --- |
| Universal Render Pipeline (URP) | URP includes its own post-processing solution, which Unity installs when you create a Project using a URP Template. For information on using post-processing effects in URP, see the URP post-processing documentation. |
| High Definition Render Pipeline (HDRP) | HDRP includes its own post-processing solution, which Unity installs when you create a Project using an HDRP Template. For information on using post-processing effects in HDRP, see the HDRP post-processing documentation. |
| Built-in Render Pipeline | The Built-in Render Pipeline does not include a post-processing solution by default. To use post-processing effects with the Built-in Render Pipeline, download the Post-Processing Version 2 package. For information on using post-processing effects in the Built-in Render Pipeline, see the Post-Processing Version 2 documentation. |

**Note:** Post processing stack version 1 is now deprecated and should not be used.

## Effect availability and location

For information on the specific post-processing effects each render pipeline supports, refer to [Post-processing effect availability reference](post-processing-effect-availability-reference.html).

Post-processing

Post-processing effect availability reference
