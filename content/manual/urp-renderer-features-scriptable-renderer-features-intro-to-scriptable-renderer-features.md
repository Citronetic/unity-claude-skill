This version of Unity is unsupported.

Injecting a render pass via a Scriptable Renderer Feature in URP

Inject a render pass with a Scriptable Renderer Feature in URP

# Introduction to Scriptable Renderer Features in URP

Scriptable Renderer Features are components you can add to a renderer to alter how URP renders a project.

The following sections explain the fundamentals of Scriptable Renderer Features:

- [What is a Scriptable Renderer Feature?](#scriptable-renderer-feature)

- [Scriptable Renderer Feature or Scriptable Render Pass?](#renderer-feature-or-render-pass)

Scriptable Render Passes are a fundamental part of Scriptable Renderer Features. For more information, refer to [Scriptable Render Pass Fundamentals](../intro-to-scriptable-render-passes.html).

## What is a Scriptable Renderer Feature

A Scriptable Renderer Feature is a customizable type of [Renderer Feature](../../urp-renderer-feature.html), which is a scriptable component you can add to a renderer to alter how Unity renders a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../CreatingScenes.html)
See in [Glossary](../../../Glossary.html#Scene) or the objects within a scene. The Scriptable Renderer Feature manages and applies Scriptable Render Passes to create custom effects.

Scriptable Renderer Features control when and how the Scriptable Render Passes apply to a particular renderer or **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../../CamerasOverview.html)
See in [Glossary](../../../Glossary.html#Camera), and can also manage multiple Scriptable Render Passes at once. This makes it easier to create complex effects which require multiple render passes with a Scriptable Renderer Feature than by injecting individual Scriptable Render Passes.

## Scriptable Renderer Feature or Scriptable Render Pass?

Scriptable Renderer Features and Scriptable Render Passes can both achieve similar outcomes but some scenarios suit the use of one over the other. The key difference is in the workflow for the two methods, a Scriptable Renderer Feature must be added to a renderer in order to run, while Scriptable Render Passes offer more flexibility but require additional work to apply across multiple scenes.

Scriptable Renderer Features are useful for effects you want to apply to multiple cameras, scenes, or across your entire project. When you add the Scriptable Renderer Feature to a renderer, everything that uses that renderer uses the Scriptable Renderer Feature. This means you can make a change to the Scriptable Renderer Feature once and apply it everywhere that effect is in use.

Alternately, the injection of individual Scriptable Render Passes offers the ability to add an effect at a single point within a scene or project. This avoids the need for complex **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](../../../creating-scripts.html)
See in [Glossary](../../../Glossary.html#Scripts) such as a renderer feature that works with volumes, and also helps to minimize the possible performance impact of adding such effects. For more information on this, refer to [Scriptable Render Passes in Scenes](../../customize/inject-render-pass-via-script.html).

## Additional resources

- [Introduction to Scriptable Render Passes](../intro-to-scriptable-render-passes.html)

Injecting a render pass via a Scriptable Renderer Feature in URP

Inject a render pass with a Scriptable Renderer Feature in URP
