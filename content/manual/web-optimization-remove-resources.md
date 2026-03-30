This version of Unity is unsupported.

Use C# code to enable optimization settings

Optimize Web platform for mobile

# Remove unused resources from your Web build

Remove unused packages and **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) from a project to make the build smaller. A smaller build reduces application load times and improves the performance of your application.

## Remove or disable unused packages

Unused packages might affect the final output size of the build. Remove or disable all packages the project doesn’t use. This includes **built-in packages***Built-in* packages allow users to toggle Unity features on or off through the Package Manager. Enabling or disabling a package reduces the run-time build size. For example, most projects don’t use the legacy Particle System. By removing the abstracted package of this feature, the related code and resources are not part of the final built product. Typically, these packages contain only the package manifest and are bundled with Unity (rather than available on the package registry).
See in [Glossary](Glossary.html#Built-inpackage) and packages enabled by default, such as the [Input System package](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest?subfolder=/manual/index.html), which can double the build size if it’s not removed.

To remove a package, refer to [Remove a UPM package from a project](upm-ui-remove.html).

To disable a built-in package, refer to [Disable a built-in package](upm-ui-disable.html).

## Remove unused shader variants

Enable shader stripping to remove shader variants that aren’t used in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). Shader stripping can reduce your build file size.

**Important**: Test your application to make sure your unused shaders aren’t referenced by other shaders.

To enable shader stripping, refer to [Graphics](class-GraphicsSettings.html#stripping).

## Additional resources

- [Optimize your Web build](web-optimization.html)

- [Recommended Graphics settings to optimize your Web build](web-optimization-graphics.html)

- [Recommended Quality settings to optimize your Web build](web-optimization-quality.html)

- [Recommended Player settings to optimize your Web build](web-optimization-player.html)

- [Optimize Web platform for mobile](web-optimization-mobile.html)

Use C# code to enable optimization settings

Optimize Web platform for mobile
