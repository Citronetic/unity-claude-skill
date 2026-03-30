This version of Unity is unsupported.

Package Manifest window reference

Packages

# Inspect packages

The Project view displays the list of packages currently installed in your project from all sources. This means that **immutable**You cannot change the contents of an immutable (read-only) package. This is the opposite of **mutable**. Most packages are immutable, including packages downloaded from the package registry or by Git URL.
See in [Glossary](Glossary.html#Immutable) packages that you installed from a package registry are visible, as well as **mutable**You can change the contents of a mutable package. This is the opposite of **immutable**. Only **Local package****s** and **Embedded package****s** are mutable.
See in [Glossary](Glossary.html#Mutable) packages (such as embedded and local packages).

[Image: Registry package (immutable) on the left and an embedded package (mutable) on the right]
Registry package (immutable) on the left and an embedded package (mutable) on the right

You can inspect the contents of any package that appears in the Project view. You can also inspect the **package manifest**Each package has a *manifest*, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. [More info](upm-manifestPkg.html)
See in [Glossary](Glossary.html#Packagemanifest) through a dedicated **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector).

To inspect a package manifest, click on it in the Project view.

[Image: Inspecting a package manifest]
Inspecting a package manifest

For [embedded](upm-concepts.html#Embedded) or [local](upm-concepts.html#Local) packages, you can change the package contents and [edit the package manifest](class-PackageManifestImporter.html).

Package Manifest window reference

Packages
