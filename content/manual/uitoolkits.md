This version of Unity is unsupported.

IME in Unity

Comparison of UI systems in Unity

# UI systems

Unity provides three UI systems: UI Toolkit, uGUI, and IMGUI. You can use these systems to create user interfaces (UI) for the Unity Editor and applications made in the Unity Editor.

| Topic | Description |
| --- | --- |
| Comparison of UI systems in Unity | Unity intends for UI Toolkit to become the recommended UI system for new UI development projects, but it still lacks some features available in uGUI and IMGUI. These legacy systems are better suited for certain use cases and are required to support legacy projects. Choose a UI system based on the type of UI you need to develop and the features it requires. |
| UI Toolkit | The latest UI system, designed for optimized performance across platforms and inspired by standard web technologies. Use UI Toolkit to create extensions for the Unity Editor, and to create runtime UI for games and applications. |
| uGUI (Unity UI) | A legacy, GameObject-based UI system for developing runtime UI for games and applications. uGUI uses components and the Game view to arrange, position, and style the UI. |
| IMGUI (Immediate Mode GUI) | A legacy, code-driven UI system that uses the OnGUI function to draw and manage UI. Use IMGUI to create custom InspectorsA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary for script components, extensions for the Unity Editor, and in-game debugging displays. It’s not recommended for runtime UI. |

## Additional resources

- 📚 **Documentation**: [Get started with UI Toolkit](UIE-simple-ui-toolkit-workflow.html)

- 📚 **Documentation**: [uGUI API reference](https://docs.unity3d.com/Packages/com.unity.ugui@latest/index.html?subfolder=/api/index.html)

- 👥 **Community**: [Join the conversation on Unity Discussions](https://discussions.unity.com/lists/ui?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938779024)

IME in Unity

Comparison of UI systems in Unity
