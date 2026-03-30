This version of Unity is unsupported.

Unity attributes

Script execution order

# Managing update and execution order

Unity runtime applications run in a loop, where the engine repeatedly processes input, updates game state, and renders frames. This is commonly called the game or Player loop. Traditional component-based Unity projects use [MonoBehaviour](class-MonoBehaviour.html) script [components](Components.html)A functional part of a GameObject. A GameObject can contain any number of components. Unity has many built-in components, and you can create your own by writing scripts that inherit from MonoBehaviour. [More info](UsingComponents.html)
See in [Glossary](Glossary.html#component) to hook into the Player loop through a series of built-in callbacks called [event functions](event-functions.html), which provide the opportunity to update your **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) every frame, or in response to specific events.

Knowing the execution order can help you customize and optimize your project. For example, you might need to ensure some setup work always happens before the first [frame update](time-per-frame-updates.html), or that **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) controlling the engine of a vehicle always run before those that control its steering.

| Topic | Description |
| --- | --- |
| Script execution order | Understand how Unity prioritizes execution of individual MonoBehaviour scripts. |
| Event functions | Event functions are a set of built-in callbacks which you can implement on your MonoBehaviour-derived scripts to respond to core Engine events related to physics, rendering, input, sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary loading, and object lifecycles. |
| Event function execution order | Understand the execution order of Unity’s built-in event functions so you can respond to events and update the state of your game in the right order. |
| Customizing the Player loop | Customize the Player loop to change the order in which Unity updates systems in each iteration of the loop. |
| Using a custom update manager | Create an update manager to handle many per-frame updates. |
| Inspector-configurable custom events | Create your own custom events to configure persistent (lasting between Edit mode and Play mode) callbacks in the InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary window. |

## Additional resources

- [Per frame updates](time-per-frame-updates.html)

- [PlayerLoop API reference](../ScriptReference/LowLevel.PlayerLoop.html)

Unity attributes

Script execution order
