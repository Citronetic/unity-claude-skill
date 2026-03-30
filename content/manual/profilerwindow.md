This version of Unity is unsupported.

Profiler counters reference

Profiler Preferences reference

# Profiler window reference

The **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) window has the following areas:

- [Profiler modules](#profiler-modules): Add and remove modules to the window which collect different types of data related to your application. Each module has its own chart in the top half of the window.

- [Profiler controls](#profiler-controls): At the top of the window there are controls which you can use to stop, start, and navigate profiling sessions

- Module details pane: The bottom half of the Profiler window displays detailed information about the selected frame, depending on the selected module.

[Image: Profiler window with a frame in the CPU Usage Profiler module selected.]
Profiler window with a frame in the CPU Usage Profiler module selected.

## Profiler modules

Use the dropdown to add or remove modules to the Profiler. Profiler modules display performance data over time on a frame-by-frame basis in the charts in the top half of the window.

When you select a profiler module its chart displays in the top half of the profiler window. The bottom half of the window contains a module details panel which displays information related to the Profiler module selected. This area is blank when you open the Profiler for the first time, and fills with information when you start profiling your application.

For more information refer to [Profiler modules introduction](profiler-modules-introduction.html).

| Module | Description |
| --- | --- |
| Highlights | Displays information on whether your application is meeting its target frame rate and if its performance is bound by the CPU or the GPU. For more information, refer to the Highlights Profiler module. |
| CPU Usage | Displays an overview of where your application spends the most time, in areas such as physics, scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary, animation, and garbage collection. This module contains broad profiling information about your application, and you can use it to decide which further modules to use to investigate more specific issues in your application. This module is always active, even if you close it. For more information, refer to CPU Usage Profiler module. |
| GPU Usage | Displays information related to graphics processing. By default this module isn’t active, because it has a high overhead. For more information, refer to GPU Usage Profiler module. |
| Rendering | Displays information on how Unity renders graphics in your application. For more information, refer to Rendering Profiler module. |
| Memory | Displays information on how Unity allocates memory in your application. This module is useful to investigate how scripting allocations lead to garbage collection, or how your application’s asset memory usage trends over time. For more information, refer to Memory Profiler module. |
| Audio | Displays information related to the audio in your application, such as how much CPU usage the audio system requires, and how much memory Unity allocates to it. For more information, refer to Audio Profiler module. |
| Video | Displays information related to video in your application. For more information, refer Video Profiler module. |
| Physics | Displays information about the physics in your application that the physics system has processed. For more information, refer to Physics Profiler module. |
| Physics (2D) | Displays information about where the physics system has processed 2D physics in your application. For more information, refer to 2D Physics Profiler module. |
| UI | Displays information about how Unity handles UI batching for your application, including why and how Unity batches items. For more information, refer to UI and UI Details Profiler module. |
| UI Details | This module’s chart adds data about batch and vertices count, and markers which include information about user input events that trigger UI changes. For more information, refer to UI and UI Details Profiler module. |
| Realtime GI | Displays information on how much CPU resource Unity spends on the Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary lighting subsystem in your application. For more information, refer to Global Illumination Profiler window. |
| Virtual Texturing | Displays statistics about Streaming Virtual Texturing in your application. For more information, refer to Virtual Texturing Profiler module. |
| File Access | Displays information about file accesses in your application. For more information, refer to File Access Profiler module. |
| Asset Loading | Displays information about how your application loads assets. For more information, refer to Asset Loading Profiler module. |
| Profiler module editor (⚙) | Open the Profiler module editor to customize the Profiler modules in the list. |
| Restore defaults | Select Restore Defaults to remove any custom Profiler modules and reorder the module list to its default ordering. |

## Profiler controls

The Profiler controls are in the **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar) at the top of the Profiler window. Use these to start or stop recording profiler data, and to navigate through profiled frames.

| Property | Description |
| --- | --- |
| Target Selection dropdown | Use the Target Selection dropdown to select a platform or player for the Profiler to collect data for:
Search: Use the search bar to find a player. You can search by its name or device category, for example Remote. When you search by category, the result displays all devices in that category.
Player Name: Displays any running players that Unity detects through the network or by direct connection. You can identify these players by their name and the platform that’s running the player, for example iPhonePlayer (My iPhone). You can override this name in the Profiler Preferences window.

Play Mode (default): Profile your application in Play mode. This is the default mode, but you can change this behavior in the Preferences window. For more information, refer to Collect performance data in Play mode.

Edit Mode: Profile the Unity Editor and display the resources that the Editor is currently using. For more information, refer to Collect performance data about the Unity Editor.
Direct Connection: Displays any devices directly connected to your computer. Select Enter IP to manually enter the IP address of the device you want to profile your application on. For more information, refer to Collect performance data on a target platform. |
| Record (⏺) | Enable this setting to record profiling information for the active modules when you run your application. If Record is disabled, the Profiler doesn’t collect any data when you run your application. |
| Previous frame (back arrow) | Navigate one frame back. |
| Next frame (forward arrow) | Navigate one frame forward. |
| Current frame (⏭) | When you select the Current Frame button, the frame indicator line jumps to the last recorded frame, and the Profiler enters Current Frame mode. While the Profiler collects data in this mode, it stays on the current frame and displays the data it collects in real-time. Select the button again to exit Current Frame mode. |
| Frame number | Indicates the selected frame’s number. The number on the left is the current frame selected, and the number on the right is the total number of frames combined that the Profiler collected during your entire profiling session. |
| Clear | Erase all data from the Profiler window. |
| Clear on Play | Enable this setting to erase all data from the Profiler window next time you click Play in the Player window, or when you connect to a new target device. |
| Deep Profile | Enable this setting to profile all C# methods. When you enable this setting, Unity adds instrumentation to all mono calls, which then allows for a more detailed investigation of your scripts. For more information, refer to Deep Profiling. |
| Call Stacks | Select samples to record full call stacks for scripting memory allocations. Frames that the Profiler records when you enable this option have information about the selected samples on the full call stack that lead to a managed scripting allocation, even when the Deep Profiling setting isn’t active. You can select the following values, and have more than one selection active at once:

GC.Alloc: Enables call stacks for all managed memory allocations. Unity emits GC.Alloc samples any time it makes a managed memory allocation.

UnsafeUtility.Malloc (Persistent): Enables call stacks for native memory allocations that are made with Allocator.Persistent. While the Temp and TempJop allocators are faster, they only allow for short lived allocations and to keep them as fast as possible, Unity doesn’t instrument them with call stacks.

JobHandle.Complete: Enables call stacks for jobs completed with JobHandle.Complete. Whenever a job uses Complete it results in idle time on the thread, so to optimize the code, you can enable call stacks to discover where in your code the sync point happened. |
| Load (square and arrow) | Load saved Profiler data into the Profiler window. You can also load binary profile data that the Player has written out to file via the Profiler.logFile API.Hold down the Shift button and click the Load button to append the file contents to the current profile frames. |
| Save (💾) | Save the Profiler data into a .data file in your Project folder. |

## More (⋮) menu settings

The More menu contains the following settings:

| Setting | Description |
| --- | --- |
| Color Blind Mode | Enable this setting to make the Profiler use higher contrast colors in its graphs. This enhances visibility for users with red-green color blindness (such as deuteranopia, protanopia, or tritanopia). |
| Show stats for “current” frame | By default, when you select the Current Frame button and enter Current Frame mode, the frame indicator line doesn’t have annotations with the stats for the current frame. This is because the stats annotations might make it difficult to view data in real-time. To display the annotations, enable this setting. |
| Preferences | Open the Preferences window to adjust Profiler-specific properties. |

## Additional resources

- [Navigating the Profiler window](profiler-window-navigating.html)

- [Profiler Preferences reference](profiler-preferences-reference.html)

- [Profiling your application](profiler-profiling-applications.html)

Profiler counters reference

Profiler Preferences reference
