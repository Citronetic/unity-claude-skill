This version of Unity is unsupported.

Delete an asset package from the cache

Perform an action on multiple packages

# Disable a built-in package

You can disable a **Built-in package***Built-in* packages allow users to toggle Unity features on or off through the Package Manager. Enabling or disabling a package reduces the run-time build size. For example, most projects don’t use the legacy Particle System. By removing the abstracted package of this feature, the related code and resources are not part of the final built product. Typically, these packages contain only the package manifest and are bundled with Unity (rather than available on the package registry).
See in [Glossary](Glossary.html#Built-inpackage) if you don’t need some modules and you want to save resources. However, when you disable a built-in package, the corresponding Unity functionality is no longer available.

Disabling a built-in package results in the following:

- If you use a Scripting API implemented by a disabled package, you get compiler errors.

- Components implemented by the disabled built-in package are also disabled, which means you can’t add them to any GameObjects. If you have a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) that already has one of these components, Unity ignores them in Play mode. You can view them in the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window but they’re grayed out to indicate that they’re not available.

- When building a game, Unity strips all disabled components. For build targets which support engine code stripping (like Web, iOS, and Android), Unity doesn’t add any code from a disabled built-in package.

To disable a built-in package:

1. Open the **Package Manager** window select **Built-in packages** from the [navigation panel](upm-ui-nav.html).

[Image: Switch the list context to Built-in packages]
Switch the list context to **Built-in** packages

2. Select the built-in package you want to disable. Its information appears in the [details panel](upm-ui-details.html).

3. Click **Disable**.

[Image: Disable button in the corner of the details panel]
**Disable** button in the corner of the details panel

When the progress bar finishes, the check mark no longer appears next to the built-in package and the **Disable** button becomes an **Enable** button.

4. If you want to re-enable a disabled built-in package, click the **Enable** button.

**Note**: You can disable multiple built-in packages with one click by using the multiple select feature. For more information, refer [Perform an action on multiple packages or feature sets](upm-ui-multi.html).

Delete an asset package from the cache

Perform an action on multiple packages
