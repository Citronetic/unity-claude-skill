This version of Unity is unsupported.

Light Modes

Set the Mode of a Light

# Choose a Light Mode

You can choose whether lighting is pre-calculated (baked), updated in real-time, or a combination (mixed), depending on the performance and visual quality you aim for:

- Baked: Provides essential illumination without significant performance impact.

- Mixed: Ensures a stable lighting setup and preserves shadows.

- Realtime: Adds dynamic effects and realism, often in more advanced or interactive environments.

The following table compares **light modes**A Light property that defines the use of the Light. Can be set to Realtime, Baked and Mixed. [More info](LightModes.html)
See in [Glossary](Glossary.html#LightMode):

| Light Mode | Baked | Mixed | Realtime |
| --- | --- | --- | --- |
| Typical use case | Background and ambient lightsLight that doesn’t come from any specific direction, and contributes equal light in all directions to the Scene. More infoSee in Glossary | Fixed lights | Moving, destructible, or flickering lights |
| Performance impact at runtime | None | High | Highest |
| Iteration time | Slowest, due to Unity baking both direct and indirect lighting | Slow, due to Unity baking indirect lighting | Fast |
| Direct lighting | Baked | Real-time | Real-time |
| Indirect lighting | Baked | Baked | No, unless you use EnlightenA lighting system by Geomerics used in Unity for Enlighten Realtime Global Illumination. More infoSee in Glossary Realtime Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary. |
| Specular highlights | No | Real-time | Real-time |
| Shadows from dynamic GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary | Baked | Real-time | Real-time |
| Shadows from static GameObjects, up to Shadow Distance | Baked | Real-time, or baked into shadow mask textures | Real-time |
| Casts shadows from static GameObjects, beyond Shadow Distance | Baked | No shadows, or baked into shadow maps if you use the optional Shadowmask Lighting Mode. | No shadow |
| Contributes to Enlighten Realtime Global Illumination | Yes | Yes | Yes |

## Additional resources

- [Enable shadows](shadow-configuration.html)

Light Modes

Set the Mode of a Light
