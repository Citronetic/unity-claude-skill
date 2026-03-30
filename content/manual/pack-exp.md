This version of Unity is unsupported.

XR

Packages by keywords

# Experimental packages

Experimental packages are new packages or experimental modifications made to mature packages. Unity doesn’t support Experimental packages because they’re in the early stages of development.

**Note:** Before Unity Editor version 2021.1, the Package Manager used the “Preview” state to describe packages that are experimental or risky but otherwise mature. The Package Manager used the “Preview” state to describe packages that had not yet been fully validated as safe to use in production. Starting with 2021.1, the “Preview” state no longer exists, and packages can either be “Experimental” or “Pre-release.” This provides a clearer distinction between packages that are mature but risky to use, and packages that are almost fully mature.

Experimental packages can go through many changes before they’re ready for release in a specific version of Unity. At some point in the future, they might pass [the verification requirements](pack-safe.html) but they might also become deprecated instead. Because there is no guarantee for future support, you shouldn’t use experimental packages in production.

Packages in experimental state don’t usually appear in the [Unity Registry](upm-ui-nav.html#contexts) context of the Package Manager, even though they’re on Unity’s official package registry server. These packages aren’t discoverable in the Package Manager window because:

- They’re too risky to use in production. Some of these packages require a lot of training and expertise and are recommended only in specific circumstances.

- They provide shared or additional functionality to existing packages. You shouldn’t use them on their own because they’re “support” packages only.

Experimental packages that aren’t discoverable can still appear in the Package Manager window if you already installed them in your project or installed them as dependencies of supported packages. However, they’re hidden so that you don’t discover them by accident and use them without realizing the risks. If they do appear in the Editor, they’re always marked in the Package Manager window with the [Image: Experimental] label (details view) and the [Image: Exp] label (list view). Also, the following menu appears as a warning in the Editor:

[Image: The Experimental Packages In Use menu appears as a warning in the toolbar]
The **Experimental Packages In Use** menu appears as a warning in the toolbar

If you have experimental packages in your project, the **Experimental Packages In Use** menu appears in the Editor. From this menu, you can select **Show Experimental Packages** to view them in the Package Manager, or **Dismiss** to hide this warning for this project.

For a list of stable packages verified for this release, refer to [Released packages](pack-safe.html).

For more information about package states, see [Package states and lifecycle](upm-lifecycle.html).

XR

Packages by keywords
