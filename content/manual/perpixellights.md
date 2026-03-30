This version of Unity is unsupported.

Types of Light component

Place Light components

# Per-pixel and per-vertex lights

If you use the default [Forward rendering path](rendering-paths-introduction.html#forward), each realtime Light component can be one of the following types:

- A per-pixel light, which lights each **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) of an object accurately.

- A per-vertex light, which lights each vertex of an object accurately. Unity interpolates lighting for the pixels between vertices.

Per-pixel lights give more accurate results but reduce performance.

The Built-In **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) also sets some lights as Spherical Harmonic (SH) per-vertex lights, which are the least accurate but render the fastest.

For more information, refer to the following:

- [Light limits in the Universal Render Pipeline (URP)](urp/lighting/light-limits-in-urp.html)

- [Per-pixel and per-vertex lights in the Built-In Render Pipeline](PerPixelLights-BuiltIn.html)

## Additional resources

- [Choose a lighting setup](choose-a-lighting-setup.html)

- [Introduction to rendering paths](rendering-paths-introduction.html)

Types of Light component

Place Light components
