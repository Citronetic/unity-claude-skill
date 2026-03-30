This version of Unity is unsupported.

Set a shader to require a package

Set when Unity runs a shader pass via a LightMode tag

# Set the render queue of a shader

The `Queue` tag tells Unity which render queue to use for geometry that it renders. The render queue is one of the factors that determines the order that Unity renders geometry in.

You can use the `Queue` tag in two ways: you can tell Unity to use a named render queue, or an unnamed render queue that it renders after a named render queue.

## Examples

This example code creates a SubShader that renders geometry as part of the Transparent render queue:

```hlsl
Shader "ExampleShader" {
    SubShader {
        Tags { "Queue" = "Transparent" }
        Pass {
            …
        }
    }
}
```

This example code creates a SubShader that renders geometry in an unnamed queue, after the Geometry queue.

```hlsl
Shader "ExampleShader" {
    SubShader {
        Tags { "Queue" = "Geometry+1" }
        Pass {
            …
        }
    }
}
```

Set a shader to require a package

Set when Unity runs a shader pass via a LightMode tag
