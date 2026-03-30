# MeshSync DCC Plugins

MeshSync DCC Plugins is package that contains plugin binaries of DCC tools for using [MeshSync](https://docs.unity3d.com/Packages/com.unity.meshsync@latest),
which is another package for synchronizing meshes/models editing in DCC tools into Unity in real time.
This allows devs to immediately see how things will look in-game while modelling.

## Features

|  | Maya | 3ds Max | MotionBuilder | Blender |
| --- | --- | --- | --- | --- |
| Polygon mesh sync | ✔️ | ✔️ | ✔️ | ✔️ |
| Camera sync | ✔️ | ✔️ | ✔️ | ✔️ |
| Light sync | ✔️ | ✔️ | ✔️ | ✔️ |
| Double-sided Mesh | ✔️ | ✔️ | ✔️ | ✔️ |
| Negative Scale | 🔺 | 🔺 | 🔺 | 🔺 |
| Multi UV |  | ✔️ |  | ✔️ |
| Scene Cache Export | ✔️ | ✔️ |  | ✔️ |
| Non-polygon shape |  |  |  |  |
| Bidirectional Sync |  |  |  | ✔️ |

### Caveats

- Negative Scale: partially supported on some DCC Tools.
If all XYZ values have negative values, the mesh will sync properly, however if only one axis has a negative value,
Unity will treat the mesh as though every axis has a negative value.
Certain DCC tools may have *Bake Transform* option which can sync the mesh in this case, but it will lose any
deformer information.

## Supported DCC Tools

|  | Windows | Mac | Linux |
| --- | --- | --- | --- |
| Maya 2018 | ✔️ | ✔️ | ✔️ |
| Maya 2019 | ✔️ | ✔️ | ✔️ |
| Maya 2020 | ✔️ | ✔️ | ✔️ |
| Maya 2022 | ✔️ | ✔️ | ✔️ |
| Maya 2023 | ✔️ | ✔️ | ✔️ |
| Maya LT 2019 + | ✔️ |  | ❌ |
| 3ds Max 2018 | ✔️ | ❌ | ❌ |
| 3ds Max 2019 | ✔️ | ❌ | ❌ |
| 3ds Max 2020 | ✔️ | ❌ | ❌ |
| 3ds Max 2021 | ✔️ | ❌ | ❌ |
| 3ds Max 2022 | ✔️ | ❌ | ❌ |
| 3ds Max 2023 | ✔️ | ❌ | ❌ |
| MotionBuilder 2017 | ✔️ | ❌ | ✔️ |
| MotionBuilder 2018 | ✔️ | ❌ | ✔️ |
| MotionBuilder 2019 | ✔️ | ❌ | ✔️ |
| MotionBuilder 2020 | ✔️ | ❌ | ✔️ |
| Blender 2.90 | ✅ | ✅ | ✅ |
| Blender 2.91 | ✅ | ✅ | ✅ |
| Blender 2.92 | ✅ | ✅ | ✅ |
| Blender 2.93 | ✅ | ✅ | ✅ |
| Blender 3.0 | ✅ | ✅ | ✅ |
| Blender 3.1 | ✅ | ✅ | ✅ |
| Blender 3.2 | ✅ | ✅ | ✅ |
| Blender 3.3 | ✅ | ✅ | ✅ |
| Blender 3.4 | ✅ | ✅ | ✅ |

Notes:

- ✅ : Supported

- ❌ : Impossible to support (platform unsupported by the DCC, etc)

- empty : May be supported in the future

# DCC Plugin Installation

[Image: MeshSyncPreferences]

[MeshSync](https://docs.unity3d.com/Packages/com.unity.meshsync@latest)'s Preferences page
provides easy installation on several DCC tools.
Alternatively, [Manual Installation](Installation.html) is also available.

## Usage in DCC Tools

1. [Maya](Maya.html)

2. [3ds Max](3dsMax.html)

3. [MotionBuilder](MotionBuilder.html)

4. [Blender](Blender.html)
