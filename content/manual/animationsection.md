This version of Unity is unsupported.

Create TreeView with IMGUI

Mecanim Animation system

# Animation

An animation system provides tools and processes to animate the properties of models and assets. For example, use an animation system to animate transform properties to move and rotate a model, or animate the intensity property to dim a light.

Common tools include importers that import animation and models, editors that create and modify animation, and real-time animation **state machines**The set of states in an Animator Controller that a character or animated GameObject can be in, along with a set of transitions between those states and a variable to remember the current state. The states available will depend on the type of gameplay, but typical states include things like idling, walking, running and jumping. [More info](StateMachineBasics.html)
See in [Glossary](Glossary.html#StateMachine) that determine which animation plays and when. Some animation systems also include specialized tools that define a humanoid model and retarget animation between models with the same definition.

Unity has two animation systems with different capabilities and performance characteristics:

| Animation system | Description |
| --- | --- |
| Mecanim animation system | The Mecanim animation system (Mecanim) is a rich and sophisticated animation system that uses the Animator componentA component on a model that animates that model using the Animation system. The component has a reference to an Animator Controller asset that controls the animation. More infoSee in Glossary, the Animation window, and the Animator windowThe window where the Animator Controller is visualized and edited. More infoSee in Glossary. Mecanim is the recommended animation system for most situations. It provides better performance for complex character animation with many animation curvesAllows you to add data to an imported clip so you can animate the timings of other items based on the state of an animator. For example, for a game set in icy conditions, you could use an extra animation curve to control the emission rate of a particle system to show the player’s condensing breath in the cold air. More infoSee in Glossary and blending. |
| Legacy animation system | Unity’s Legacy animation system (Legacy) has a limited feature setA feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. More infoSee in Glossary that predates Mecanim. Legacy uses the Animation component and the special Legacy import option in the Rig tab of the Import Settings window. Legacy is less complex for simple animation. Legacy is still available for backward compatibility with old Unity projects. |

## Additional resources and examples

- 👥 **Community**: [Join the conversation on Unity Discussions for Animation](https://discussions.unity.com/lists/animation?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📖 **E-Book**: [The definitive guide to animation in Unity](https://unity.com/resources/definitive-guide-animation-unity-2022-lts-ebook?isGated=false&ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📖 **E-Book**: [2D game art, animation, and lighting for artists](https://unity.com/resources/2d-game-art-animation-lighting-for-artists-ebook?isGated=false&ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📝 **How-to guide**: [How to troubleshoot imported animations in Unity](https://discussions.unity.com/t/how-to-troubleshoot-imported-animations-in-unity/371889?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📝 **How-to guide**: [Tips for building animator controllers in Unity](https://unity.com/how-to/build-animator-controllers?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📝 **How-to guide**: [How to animate 2D characters in Unity 2022 LTS](https://unity.com/how-to/2d-characters-and-animation-unity-2022-lts?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936565785)

- 📺 **Video**: [How to work with humanoid animations in Unity](https://youtu.be/s5lRq6-BVcw)

Create TreeView with IMGUI

Mecanim Animation system
