This version of Unity is unsupported.

Example of a shader that supports GPU Instancing in the Built-In Render Pipeline

Prevent Unity stripping GPU instancing shaders in the Built-In Render Pipeline

# Example of changing per-instance data at runtime in the Built-In Render Pipeline

The following example demonstrates how to use MaterialPropertyBlock objects to set per-instance data for a group of **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) at runtime. It sets the `_Color` property from the above **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) examples to a random color.

**Important**: MaterialPropertyBlocks break SRP Batcher compatibility. For more information, see [GPU instancing: Requirements and Compatibility](GPUInstancing.html#requirements-and-compatibility).

```cs
using UnityEngine;

public class MaterialPropertyBlockExample : MonoBehaviour
{
    public GameObject[] objects;

    void Start()
    {
        MaterialPropertyBlock props = new MaterialPropertyBlock();
        MeshRenderer renderer;

        foreach (GameObject obj in objects)
        {
            float r = Random.Range(0.0f, 1.0f);
            float g = Random.Range(0.0f, 1.0f);
            float b = Random.Range(0.0f, 1.0f);
            props.SetColor("_Color", new Color(r, g, b));

            renderer = obj.GetComponent<MeshRenderer>();
            renderer.SetPropertyBlock(props);
        }
    }
}
```

Example of a shader that supports GPU Instancing in the Built-In Render Pipeline

Prevent Unity stripping GPU instancing shaders in the Built-In Render Pipeline
