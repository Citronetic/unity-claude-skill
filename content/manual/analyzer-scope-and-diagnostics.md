This version of Unity is unsupported.

Create rule set files

Safe Mode

# Analyzer scope and diagnostics

## Analyzer scope

You can limit the scope of analyzers in your project by using assembly definitions, so that they only analyze certain portions of your code.

Unity applies analyzers to all assemblies in your project’s Assets folder, or in any subfolder whose parent folder doesn’t contain an [assembly definition file](assembly-definition-files.html). If an analyzer is in a folder that contains an assembly definition, or a subfolder of such a folder, the analyzer only applies to the assembly generated from that assembly definition, and to any other assembly that references it.

This means, for example, that a [package](PackagesList.html)A container that stores various types of features and assets for Unity, including Editor or Runtime tools and libraries, Asset collections, and project templates. Packages are self-contained units that the Unity Package Manager can share across Unity projects. Most of the time these are called *packages*, but occasionally they are called **Unity Package Manager (UPM) packages**. [More info](Packages.html)
See in [Glossary](Glossary.html#Package) can supply analyzers that only analyze code related to the package, which can help package users to use the package API correctly.

## Report analyzer diagnostics

To view information such as the total execution time of your analyzers and source generators or the relative execution times of each analyzer or source generator, go to **Edit** > **Preferences** (macOS: **Unity** > **Settings**) > **Diagnostic Switches** and enable **EnableDomainReloadTimings**. When enabled, the information is displayed in the console window.

## Additional resources

- [Special folders and script compilation order](script-compile-order-folders.html)

- [Organizing scripts into assemblies](assembly-definition-files.html)

Create rule set files

Safe Mode
