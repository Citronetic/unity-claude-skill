This version of Unity is unsupported.

Get tag values in a script

Compute shaders

# Troubleshooting package requirement definitions

If you define package requirements that can never be satisfied, the **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) import process fails with an error. This section provides examples of the most common invalid package requirement definitions.

## Malformed versions or empty package name

```hlsl
PackageRequirements {
  "com.some.package.x": "[10.2.1,9.0]"        // Error, empty version range
  "com.some.package.y": "[10.2.1.9,11.0]"     // Error, incorrect version format
  "com.some.package.z": "[2.3,3.5],[3.0,4.0]" // Error, ranges intersect
  "com.some.package.z" : "[10.2.1,11.0]"      // Error, extra whitespace after the package name
  "" : "[2.3.4,3.4.5]"                        // Error, no package name provided
}
```

## Multiple dependencies on the same package

```hlsl
PackageRequirements {
  "com.some.package.x": "[10.2.1,11.0]"
  "com.some.package.x": "[11.2.1,12.0]" // Error, dependency on "com.some.package.x" declared twice
  "unity" : "2021.2"
  "unity" : "2021.3" // Error, dependency on Unity version declared twice
}
```

## Conflicting dependency declarations

```hlsl
PackageRequirements {
  "com.some.package.x": "unity=[2021.2.1,2021.3.3]"
  "unity" : "2021.2"    // Error: Unity version requirement cannot be declared on a package and on its own simultaneously
}
```

## Conflicting dependency declarations between SubShaders and Passes

```hlsl
SubShader {
  PackageRequirements {
    "com.some.package.x": "[2.3.4,3.4.5]"
    "com.some.package.z": "[1.1,3.2]"
    "unity": "2021.2"
  }
  Pass {
    PackageRequirements {
      "com.some.package.y": "[1.2.2,2.5]"               // Fine, SubShader doesn’t declare a dependency on "com.some.package.y"
      "com.some.package.z": "[2.0,3.1]"                 // Fine, SubShader dependency intersects the provided version range
      "com.some.package.x": "[1.1.1, 2.2.2]"            // Error, SubShader version range for "com.some.package.x" does not intersect the provided range
      "com.some.package.w": "unity=[2021.2.1,2021.2.5]" // Fine, SubShader dependency intersects the provided version range
      "com.some.package.u": "unity=[2020.2.1,2020.2.5]" // Error, SubShader Unity version range does not intersect the provided range
    }
  }
}
```

## Additional resources

- [Set a shader to require a package](writing-shader-tags-require-package.html)

Get tag values in a script

Compute shaders
