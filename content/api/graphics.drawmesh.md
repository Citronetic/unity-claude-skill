This version of Unity is unsupported.



# [Graphics](Graphics.html).DrawMesh




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
[Material](Material.html) material,
int layer,
[Camera](Camera.html) camera = null,
int submeshIndex = 0,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties = null,
bool castShadows = true,
bool receiveShadows = true,
bool useLightProbes = true);






## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
[Material](Material.html) material,
int layer,
[Camera](Camera.html) camera,
int submeshIndex,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows = true,
[Transform](Transform.html) probeAnchor = null,
bool useLightProbes = true);






## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix,
[Material](Material.html) material,
int layer,
[Camera](Camera.html) camera = null,
int submeshIndex = 0,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties = null,
bool castShadows = true,
bool receiveShadows = true,
bool useLightProbes = true);






## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix,
[Material](Material.html) material,
int layer,
[Camera](Camera.html) camera,
int submeshIndex,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows = true,
[Transform](Transform.html) probeAnchor = null,
bool useLightProbes = true);






## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix,
[Material](Material.html) material,
int layer,
[Camera](Camera.html) camera,
int submeshIndex,
[MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
[Rendering.ShadowCastingMode](Rendering.ShadowCastingMode.html) castShadows,
bool receiveShadows,
[Transform](Transform.html) probeAnchor,
[Rendering.LightProbeUsage](Rendering.LightProbeUsage.html) lightProbeUsage,
[LightProbeProxyVolume](LightProbeProxyVolume.html) lightProbeProxyVolume = null);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | The Mesh to draw. |
| position | Position of the mesh. |
| rotation | Rotation of the mesh. |
| matrix | Transformation matrix of the mesh (combines position, rotation and other transformations). |
| material | Material to use. |
| layer | Layer the mesh is drawn on. |
| camera | If null (default), the mesh will be drawn in all cameras. Otherwise it will be rendered in the given Camera only. |
| submeshIndex | Which subset of the mesh to draw. This applies only to meshes that are composed of several materials. |
| properties | Additional material properties to apply onto material just before this mesh will be drawn. See MaterialPropertyBlock. |
| castShadows | Determines whether the mesh can cast shadows. |
| receiveShadows | Determines whether the mesh can receive shadows. |
| useLightProbes | Should the mesh use light probes? |
| probeAnchor | If used, the mesh will use this Transform's position to sample light probes and find the matching reflection probe. |
| lightProbeUsage | LightProbeUsage for the mesh. |





### Description



Draw a mesh.





This function is now obsolete. Use [Graphics.RenderMesh](Graphics.RenderMesh.html) instead.

                DrawMesh draws a mesh for one frame. The mesh will be affected by the lights, can cast and receive shadows and be
affected by Projectors - just like it was part of some game object. It can be drawn for all cameras or just for
some specific camera.

Use DrawMesh in situations where you want to draw large amount of meshes, but don't want the overhead of creating and
managing game objects. Note that DrawMesh does not draw the mesh immediately; it merely "submits" it for rendering. The mesh
will be rendered as part of normal rendering process. If you want to draw a mesh immediately, use [Graphics.DrawMeshNow](Graphics.DrawMeshNow.html).

Because DrawMesh does not draw mesh immediately, modifying material properties between calls to this function won't make
the meshes pick them up. If you want to draw series of meshes with the same material, but slightly different
properties (e.g. change color of each mesh), use [MaterialPropertyBlock](MaterialPropertyBlock.html) parameter.

Note that this call will create some internal resources while the mesh is queued up for rendering. The allocation happens immediately and will be kept around until the end of frame (if the object was queued for all cameras) or until the specified camera renders itself.

Additional resources: [Graphics.RenderMesh](Graphics.RenderMesh.html), [MaterialPropertyBlock](MaterialPropertyBlock.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour {
    public Mesh mesh;
    public Material material;
    public void Update() {
        // will make the mesh appear in the Scene at origin position
        Graphics.DrawMesh(mesh, Vector3.zero, Quaternion.identity, material, 0);
    }
}
```


            
