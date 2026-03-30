This version of Unity is unsupported.

Example of changing per-instance data at runtime in the Built-In Render Pipeline

GPU instancing shader reference for the Built-In Render Pipeline

# Prevent Unity stripping GPU instancing shaders in the Built-In Render Pipeline

Unity generates Surface **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) with instancing [variants](SL-MultipleProgramVariants.html) by default, unless you specify `noinstancing` in the `#pragma` directive. Unity ignores uses of #pragma multi_compile_instancing in a **surface shader**A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader).

Unity’s Standard and StandardSpecular shaders have instancing support by default, but with no per-instance properties other than the transform.

If your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) contains no **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) with GPU instancing enabled, then Unity strips instancing shader variants. To override the stripping behaviour:

1. Open Project Settings (menu: **Edit** > **Project Settings**).

2. Go to **Graphics**.

3. In the **Shader Stripping** section, set **Instancing Variants** to **Keep All**.

Example of changing per-instance data at runtime in the Built-In Render Pipeline

GPU instancing shader reference for the Built-In Render Pipeline
