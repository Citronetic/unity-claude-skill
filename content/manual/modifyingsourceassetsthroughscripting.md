This version of Unity is unsupported.

Scripting with assets

Distribute assets as packages

# Modify source assets from code

You can modify assets from your runtime code. Depending on the asset type and method you use, the modifications can either be temporary or permanent. Temporary modifications reset on exiting Play mode, and permanent modifications persist on exiting Play mode.

## Temporary modification

Modifications to assets at application runtime are usually temporary. For example, you might want to modify the **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) component of the material for a character to represent a temporary invincibility power-up. The shader modification in this case is not permanent and does not persist on exiting Play mode.

The following example demonstrates this by changing the `shader` property of the `material` component:

```cs
using UnityEngine;

public class ExampleScript : MonoBehaviour
{
    private Shader invincibleShader;

    void Start()
    {
        invincibleShader = Shader.Find("Specular");
    }

    public void StartInvincibility()
    {
        if (TryGetComponent<Renderer>(out Renderer renderer))
        {
            renderer.material.shader = invincibleShader;
        }
    }
}
```

On exiting Play mode, the state of the [Material](../ScriptReference/Material.html)An asset that defines how a surface should be rendered. [More info](class-Material.html)
See in [Glossary](Glossary.html#Material) resets to whatever it was before entering Play mode. Accessing `renderer.material` automatically instantiates the material and returns the instance. This instance is simultaneously and automatically applied to the renderer, so any changes you make aren’t permanent.

**Note:** If you declare a public variable that holds a reference to the material and modify that instead of modifying the `renderer.material.shader` class member directly, you won’t get the benefits of automatic instantiation before the modifications are applied.

## Permanent modification

**Important**: The method presented here modifies actual source asset files used within Unity. You can’t undo these modifications. Use them with caution.

To avoid the material resetting on exiting Play mode, you can use [Renderer.sharedMaterial](../ScriptReference/Renderer-sharedMaterial.html). The `sharedMaterial` property returns the actual asset used by the renderer.

The following example permanently changes the material to use the Specular shader and does not reset the material to the state it was in before Play mode:

```cs
using UnityEngine;

public class ExampleScript : MonoBehaviour
{
    private Shader invincibleShader;

    void Start()
    {
        invincibleShader = Shader.Find("Specular");
    }

    public void StartInvincibility()
    {
        if (TryGetComponent<Renderer>(out Renderer renderer))
        {
            renderer.sharedMaterial.shader = invincibleShader;
        }
    }
}
```

## Applicable classes and properties

The previously described programming pattern of using local or shared properties for temporary or permanent changes respectively applies for the following asset types:

| Asset type | Property for temporary changes | Property for permanent changes |
| --- | --- | --- |
| Material | Renderer.material | Renderer.sharedMaterial |
| MeshThe main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. More infoSee in Glossary | MeshFilter.mesh | MeshFilter.sharedMesh |
| Physics MaterialsA physics asset for adjusting the friction and bouncing effects of colliding objects. More infoSee in Glossary | Collider.material | Collider.sharedMaterial |

**Note**: If you declare a public variable of any of these classes and make modifications to the asset using that variable instead of using the relevant class member, you won’t get the benefits of automatic instantiation before the modifications are applied.

## Assets that are not automatically instantiated

The following asset types are not automatically instantiated when modified:

- [Texture2D](../ScriptReference/Texture2D.html)

- [TerrainData](../ScriptReference/TerrainData.html)

Any modifications made to these assets from code are always permanent, and can’t be undone. If, for example, you change a **terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain)’s **heightmap**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap) or the **pixels**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) of a texture file from code, you’ll need to account for instantiating and assigning values manually.

## Additional resources

- [Loading resources at runtime](LoadingResourcesatRuntime.html)

- [Streaming assets directly into a build](StreamingAssets.html)

Scripting with assets

Distribute assets as packages
