This version of Unity is unsupported.

Recommended Player settings to optimize your Web build

Use C# code to enable optimization settings

# Recommended Quality settings to optimize your Web build

Use the following recommended **Quality** settings to optimize your builds for the Unity Web platform.

Configure the following recommended settings in **Edit** > **Project Settings** > **Quality**. For more information on these settings, refer to [Quality](class-QualitySettings.html).

## Quality Level

The **Quality** settings contain a group of possible **Quality Levels** for your build. If you set your **Quality Level** to a lower setting (**Very Low** or **Low**), it results in faster load times and better performance which is recommended for a Web application. However, lower quality can mean the visuals don’t look as good.

For more information about this setting, refer to [Quality](class-QualitySettings.html).

### Change the Quality Level via C# code

To change the **Quality Level** via script instead, add this code to one of your **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts):

```cs
QualitySettings.SetQualityLevel(0, true); // Use the index of your quality settings matrix (0 = Very Low, 1 =  Low).
```

## Additional resources

- [Optimize your Web build](web-optimization.html)

- [Recommended Graphics settings to optimize your Web build](web-optimization-graphics.html)

- [Recommended Player settings to optimize your Web build](web-optimization-player.html)

- [Remove unused resources from your Web build](web-optimization-remove-resources.html)

- [Optimize Web platform for mobile](web-optimization-mobile.html)

Recommended Player settings to optimize your Web build

Use C# code to enable optimization settings
