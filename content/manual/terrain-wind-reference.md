This version of Unity is unsupported.

Animate trees with Wind Zones

Grass and other details

# Wind reference

| Property | Function |
| --- | --- |
| Mode: Directional | The Wind ZoneA GameObject that adds the effect of wind to your terrain. For instance, Trees within a wind zone will bend in a realistic animated fashion and the wind itself will move in pulses to create natural patterns of movement among the tree. More infoSee in Glossary affects the entire sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary and blows in one direction. This is the default mode. |
| Mode: Spherical | The Wind Zone only has an effect inside the radius, and has a falloff from the center towards the edge. |
| Radius | Wind Zone size (active only if the mode is Spherical). |
| Main | The primary force applied to all objects the Wind Zone affects. The numerical value is the wind speed; the plus and minus signs are the direction. If the value is 0, but Turbulence has a value other than 0, the trees still move. If both Main and Turbulence are 0, the trees bend, but they don’t move - they stay in a static bent position. |
| Turbulence | Represents the noise applied to the wind speed. A greater value creates higher variation in wind speed. If Turbulence isn’t 0, there’s wind even if Main is 0. If Turbulence is 0, there’s no wind even if Main has a value other than 0. |
| Pulse Magnitude | Pulses create the appearance of gusts of wind that are stronger than the main wind. Magnitude is a multiplier of Main, meaning if Main and Turbulence are both 0 the pulses are also 0. |
| Pulse Frequency | How frequent pulses are, and how long they last. More frequent pulses are shorter. |

## Additional resources

- [Animate trees with Wind Zones](class-WindZone.html)

- [Terrain Settings reference](terrain-OtherSettings.html)

Animate trees with Wind Zones

Grass and other details
