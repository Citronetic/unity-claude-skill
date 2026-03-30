This version of Unity is unsupported.

Profiler modules

Activating and enabling Profiler modules

# Profiler modules introduction

Collect specific performance data about your application with **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) modules.

The top area of the [Profiler window](ProfilerWindow.html) contains Profiler modules that profile specific areas of your application. When you profile your application, Unity displays the data related to each module in corresponding charts.

[Image: Profiler window with a frame in the CPU Usage Profiler module selected. The Timeline view is selected in the details pane.]
Profiler window with a frame in the CPU Usage Profiler module selected. The Timeline view is selected in the details pane.

## Module types

The [CPU Usage module](ProfilerCPU.html) provides an overview of how much time your application spends on each frame. The other modules collect data which you can use to inspect specific areas or to monitor the vitals of your application, such as memory consumption, rendering, or audio statistics.

Each module has its own chart. When you select a module, the details panel in the bottom section of the Profiler window displays detailed data that the module collects. You can then use this data to identify areas of improvement in your application.

For a full list of available Profiler modules refer to the [Profiler window reference](ProfilerWindow.html).

## Custom Profiler modules

You can add your own Profiler modules to the Profiler window to capture and visualize specific performance data in your application. You can either use the [Profiler Module Editor](profiler-module-editor.html) or use **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) to automatically create and populate modules.

The following image of a customized Profiler window contains:

- **A**: A [custom Profiler module](profiler-creating-custom-modules.html) named **Tank Effects**.

- **B**: A [custom module details panel](profiler-customizing-details-view.html) that visualizes the data in the Tank Effects profiler module.

- **C**: [Custom Profiler counters](profiler-adding-information-code-intro.html) which track particle data.

[Image: A custom Profiler module with custom game data displayed]
A custom Profiler module with custom game data displayed

For more information, refer to [Customizing Profiler modules](profiler-customizing.html).

## Additional resources

- [Using the Profiler window](ProfilerWindow.html)

- [Profiling your application](profiler-profiling-applications.html)

- [Profiler window reference](ProfilerWindow.html)

- [Customizing Profiler modules](profiler-customizing.html)

Profiler modules

Activating and enabling Profiler modules
