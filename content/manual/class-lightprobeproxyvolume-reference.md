This version of Unity is unsupported.

Configure a Light Probe Proxy Volume in the Built-In Render Pipeline

Add Light Probe Proxy Volume support to a custom shader in the Built-In Render Pipeline

# Light Probe Proxy Volume component reference for the Built-In Render Pipeline

There are three options available:

| Bounding Box Mode: | Function: |
| --- | --- |
| Automatic Local (default value) | A local-space bounding box is computed. The interpolated Light Probe positions are generated inside this bounding box. If a Renderer component isn’t attached to the GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary, then a default bounding box is generated. The bounding box computation encloses the current Renderer, and sets all the Renderers down the hierarchy that have the Light ProbesLight probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. More infoSee in Glossary property to Use Proxy Volume. |
| Automatic World | A bounding box is computed which encloses the current Renderer and all the Renderers down the hierarchy that have the Light Probes property set to Use Proxy Volume. The bounding box is world-aligned. |
| Custom | A custom bounding box is used. The bounding box is specified in the local-space of the GameObject. The bounding box editing tools are available. You can edit the bounding volumeA closed shape representing the edges and faces of a collider or trigger.See in Glossary manually by modifying the Size and Origin values in the UI (see below). |

Configure a Light Probe Proxy Volume in the Built-In Render Pipeline

Add Light Probe Proxy Volume support to a custom shader in the Built-In Render Pipeline
