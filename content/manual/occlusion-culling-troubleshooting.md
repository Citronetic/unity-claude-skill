This version of Unity is unsupported.

Get culling results

Simulating real-world cameras with Physical Cameras

# Troubleshooting occlusion culling

Solve common problems when using occlusion culling, such as incorrect culling and slow processing.

## Hidden objects aren’t being culled

### Symptom

Objects are reported as visible in the occlusion data but are visibly occluded.

### Cause

Occlusion data represents a conservatively simplified version of the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)’s occluders, meaning some of the occlusion erodes and loses detail. Precise occlusion culling costs significant time and resources, so Unity doesn’t try to be 100% accurate with culling by default. Unity tries to cull as much as possible in the minimum amount of time, which can cause false positives.

### Resolution

Decrease the value of the **Smallest Occluder** parameter. This will produce higher-resolution data that’s less conservative. However, culling will decrease in speed and occlusion data will increase in size.

## Visible objects are being culled

### Symptom

Objects are occluded incorrectly.

### Cause

Visible objects can be culled if the **Smallest Hole** value is too high compared to the actual size of the holes in your scene. A hole in your scene can range from an actual hole in a **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) to a small gap between two objects. If visible objects are being culled incorrectly, the hole is being incorrectly interpreted as full and acting as an occluder.

### Resolution

- Decrease the value of the **Smallest Hole** parameter.

- Set the **Backface Threshold** to 100.

- Remove the **Static Occluder** flag from **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) that you don’t want occluded.

## Occlusion leaks

### Symptom

Objects are not occluded correctly.

### Cause

Unintentional holes in your occluding geometry are retained by voxelization and magnified in the occlusion data.

### Resolution

Make sure your geometry is modeled to be as watertight as possible.

## Slow occlusion culling

### Symptom

The culling process is too slow.

### Cause

Occlusion culling can take a lot of time if your occlusion data resolution is very high.

### Resolution

Increase the value of the **Smallest Occluder** parameter.

## Slow baking

### Symptom

The baking process is too slow.

### Cause

The occlusion culling parameters can have a large impact on baking time. The higher the resolution of your occlusion culling data, the longer it will take to bake them.

### Resolution

Increase the value of the **Smallest Hole** parameter.

## Large occlusion data

### Symptom

The size of the occlusion data is too large.

### Cause

Occlusion culling can take a lot of data if your occlusion data resolution is very high.

### Resolution

- Decrease the value of the **Backface Threshold**.

- Increase the value of the **Smallest Occluder** parameter.

## Baking fails

### Symptom

Baking fails with the `Failure in split phase` error.

### Cause

The initial step of the bake tries to subdivide the scene into computation tiles. The subdivision is based on the **Smallest Occluder** parameter and when the scene is large in size, too many computation tiles can be created, resulting in an out of memory error.

### Resolution

Increase the value of the **Smallest Occluder** parameter and split up the scene into smaller chunks.

## Additional resources

- [Occlusion culling](OcclusionCulling.html)A process that disables rendering GameObjects that are hidden (occluded) from the view of the camera. [More info](OcclusionCulling.html)
See in [Glossary](Glossary.html#Occlusionculling)

- [Occlusion culling window reference](occlusion-culling-window.html)

- [Troubleshooting cameras](CameraTroubleshooting.html)

Get culling results

Simulating real-world cameras with Physical Cameras
