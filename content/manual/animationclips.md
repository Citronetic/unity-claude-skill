This version of Unity is unsupported.

Mecanim Animation system

Animation from external sources

# Animation clips

Animation clips are one of the core elements of Unity’s animation system. Unity supports importing animation from external sources. You can create **animation clips**Animation data that can be used for animated characters or simple animations. It is a simple “unit” piece of motion, such as (one specific instance of) “Idle”, “Walk” or “Run”. [More info](class-AnimationClip.html)
See in [Glossary](Glossary.html#AnimationClip) with the Animation window.

## Animation from external sources

You can import the following types of Animation clips from external sources:

- **Humanoid animations**An animation using humanoid skeletons. Humanoid models generally have the same basic structure, representing the major articulate parts of the body, head and limbs. This makes it easy to map animations from one humanoid skeleton to another, allowing retargeting and inverse kinematics. [More info](ConfiguringtheAvatar.html)
See in [Glossary](Glossary.html#Humanoidanimation) captured at a motion capture studio.

- Animations created from scratch by an artist in an external 3D application (such as Autodesk® 3ds Max® or Autodesk® Maya®).

- Animation sets from third party libraries from Unity’s **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore).

- Multiple animation clips cut from a single imported motion file.

[Image: An example of an imported animation clip, viewed in Unitys Inspector window]
An example of an imported animation clip, viewed in Unity’s Inspector window

## Create and edit animation clips within Unity

You can also create and edit animation clips in Unity’s Animation window. These clips can animate:

- The position, rotation, and scale of **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

- Component properties such as material color, the intensity of a light, and the volume of a sound.

- Properties within your own **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) including float, integer, enum, vector, and Boolean variables.

- The timing of calling functions within your own scripts.

[Image: Unitys Animation window used to animate the intensity and range of a point light]
Unity’s Animation window used to animate the intensity and range of a point light

## Additional resources

- [Animation From External Sources](AnimationsImport.html)

- [Animation Window](AnimationEditorGuide.html)

---

Mecanim Animation system

Animation from external sources
