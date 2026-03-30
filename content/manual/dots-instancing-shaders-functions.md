This version of Unity is unsupported.

DOTS Instancing shader macros reference for URP

Rendering Debugger in URP

# DOTS Instancing shader functions reference for URP

Alongside the access macros, Unity provides **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) functions that load the values of constants directly from the draw command data. Shaders that Unity provides use these functions.

Unity provides the following shader functions:

| Shader function | Description |
| --- | --- |
| LoadDOTSInstancedData_RenderingLayer | Returns the renderingLayerMask for the draw command. |
| LoadDOTSInstancedData_MotionVectorsParams | Returns the motion vector generation mode for the draw command. This is formatted as a float4, which is what Unity shaders expect. |
| LoadDOTSInstancedData_WorldTransformParams | Returns whether to draw the instance with a flipped triangle winding. See FlipWinding. |
| LoadDOTSInstancedData_LightData | Returns whether the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary’s main Directional Light is active for the instance. The main light can be deactivated for multiple reasons, for example if the light already included in light maps. |
| LoadDOTSInstancedData_LODFade | Returns the 8 bit crossfade value you set if the LODCrossFade flag is set. If the flag is not set, the return value is undefined. |

DOTS Instancing shader macros reference for URP

Rendering Debugger in URP
