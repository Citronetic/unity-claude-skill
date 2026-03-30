This version of Unity is unsupported.

2D Blending

Common Blend Tree Options

# Direct blending

Use a **Direct Blend Tree** to map animator parameters to the weight of a BlendTree child. This is useful when you want exact control over blending animations rather than the indirectly control provided by 1D blending or 2D blending.

[Image: A Direct Blend Tree with five animation clips assigned.]
A Direct Blend Tree with five animation clips assigned.

In direct blending, you use the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window to add motions and to also assign an [Animator Parameter](AnimationParameters.html) to each blend weight. This Direct mode bypasses 2D blending algorithms, such as Freeform Directional and Freeform Cartesian, and allows you to implement a scripting solution to control the mix of blended animations.

For example, you can use Direct mode to to mix blend shape animations for facial expressions or to blend additive animations.

[Image: Example of using Direct Blending for facial expressions]
Example of using Direct Blending for facial expressions

2D Blending

Common Blend Tree Options
