This version of Unity is unsupported.

Legacy Animation system

Audio

# Legacy Animation component

[Switch to Scripting](../ScriptReference/Animation.html)

This is the Legacy Animation component, which was used on **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) for animation purposes prior to the introduction of the Mecanim Animation system.
This component is retained in Unity for backwards compatibility. For new projects, use the [Animator component](class-Animator.html)A component on a model that animates that model using the Animation system. The component has a reference to an Animator Controller asset that controls the animation. [More info](class-AnimatorController.html)
See in [Glossary](Glossary.html#AnimatorComponent).

[Image: The Animation Inspector]
The Animation Inspector

## Properties

| Property | Function |
| --- | --- |
| Animation | The default animation to play when Play Automatically is enabled. |
| Animations | A list of animations that you can access from scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary. |
| Play Automatically | Enable this option to play animation automatically when the game starts. |
| Animate Physics | Enable this option to have the animation interact with Physics. |
| Culling Type | Determine when not to play the animation.

Always Animate: Always animate.

Based on Renderers: Cull based on the default animation pose. |

Consult the [Animation Window Guide](AnimationEditorGuide.html) for more information on how to create animations inside Unity.
Consult [Model import workflows](ImportingModelFiles.html) page on how to import animated characters.

Legacy Animation system

Audio
