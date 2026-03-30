This version of Unity is unsupported.

Supporting input devices on tvOS

Debugging your tvOS application

# Setting up app navigation from the Unity UI

You must provide custom visual resources to the Apple Game Center for its native leaderboard **UI**. Here’s how to set them up in Xcode:

1. Open the [Input](class-InputManager.html) window in the Unity Editor. Find the first occurrence of the **Submit** virtual input, expand it, and change its **Alt Positive Button** to [**joystick button 14**](ios-handle-game-controller-input.html#InputMapping).

2. Select the EventSystem appObject in your ****Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)**. In the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)**, find the EventSystem component, and set a reference to the UI appObject that should receive initial focus in the **First Selected** property. You might need to enable the **Force input module** property in the **Standalone Input Module** component.#

**Note**: Apple TV Remote navigation doesn’t work while your app is running in the TV Simulator.

Supporting input devices on tvOS

Debugging your tvOS application
