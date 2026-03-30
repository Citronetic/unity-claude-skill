This version of Unity is unsupported.

Managing update and execution order

Event functions

# Script execution order

In addition to the [execution order of functions within scripts](execution-order.html), another important consideration for your application is the order in which Unity executes different script components. For example, if you have two **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts), `EngineBehaviour` and `SteeringBehaviour`, you might want to ensure that `EngineBehaviour` always updates before `SteeringBehaviour`.

You can configure script execution order in the following ways:

- In the Unity Editor, by using the [**Script Execution Order**](class-MonoManager.html) settings in the ****Project Settings**A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings)** window.

- In code, by applying the [`[DefaultExecutionOrder]`](../ScriptReference/DefaultExecutionOrder.html) attribute to your MonoBehaviour-derived classes.

## Important considerations and limitations

- Execution order defined in code with [`[DefaultExecutionOrder]`](../ScriptReference/DefaultExecutionOrder.html) does not show in the [**Script Execution Order**](class-MonoManager.html) settings window. If you define an execution order for a MonoBehaviour-derived type in code with `[DefaultExecutionOrder]` but define a different value for the same type in the Editor’s Project settings window, Unity uses the value defined in the Editor UI.

- If you assign multiple instances of the same scripts to different GameObjects, all instances of a script with a lower execution order value are executed before any instances of a script with a higher execution order value, regardless of which **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) they’re attached to.

- When multiple **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) are [loaded additively](../ScriptReference/SceneManagement.LoadSceneMode.Additive.html), the configured script execution order is applied in full for one scene at a time rather than partially across scenes. In the previously cited example of an `EngineBehaviour` script configured to execute before a `SteeringBehaviour` script, both would update on one scene before they updated on the next one.

- When multiple scripts have either the same configured execution order or the default execution order, the order of execution between them is not deterministic. While the order might appear consistent during testing, you should never rely on this behavior, because it isn’t guaranteed across builds, machines, or Unity versions. For more information, refer to [Event function execution order](execution-order.html).

- The execution order specified in the **Script Execution Order** settings window doesn’t affect:

- The order of functions marked with the [`[RuntimeInitializeOnLoadMethod]`](../ScriptReference/RuntimeInitializeOnLoadMethodAttribute.html) attribute.

- [`OnDisable`](../ScriptReference/MonoBehaviour.OnDisable.html) and [`OnDestroy`](../ScriptReference/MonoBehaviour.OnDestroy.html) functions.

## Additional resources

- [Event function execution order](execution-order.html)

- [`[DefaultExecutionOrder]` API reference](../ScriptReference/DefaultExecutionOrder.html)

Managing update and execution order

Event functions
