This version of Unity is unsupported.

Profiler window reference

Profiler command line arguments

# Profiler Preferences reference

The Preferences window contains additional Profiler window settings. To open the Preferences window go to menu: **Unity > Settings > Analysis > Profiler**.

## Profiler settings

Adjust the settings to customize how the **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) collects and displays data.

| Setting | Description |
| --- | --- |
| Frame count | Set the maximum number of frames for the Profiler to capture. You can set this number between 300 and 2,000. |
| Show stats for ‘current frame’ | Set whether to display annotations on the frame line when you select the Current Frame button (⏭) on the Profiler controls. This setting is disabled by default, because the annotations might make it difficult to view data in real-time. To display the annotations, enable this setting. |
| Default recording state | Select which recording state the Profiler opens in:

Enabled: Keeps the Record button enabled between profiling sessions.

Disabled: Disables the Record button, regardless of whether you turn it on or off during your profiling session.

Remember: Remembers whether you enabled or disabled the Record button during your session and keeps it at its last state the next time you open the Profiler window. |
| Default editor target mode on start | Select what mode the Target Selection dropdown targets by default:

Play mode (default): Targets Play mode profiling by default.

Edit mode: Targets Edit mode profiling by default. |
| Custom connection ID | Change the name of your application as it appears in the Target Selection dropdown. |
| Target Frames Per SecondThe frequency at which consecutive frames are displayed in a running game. More infoSee in Glossary (Highlights Module) | Set the target frames per second that the Highlights Profiler module uses. The Highlights Profiler module flags any frames which exceed this target frame rate. |

## Additional resources

- [Profiler window reference](ProfilerWindow.html)

- [Profiler modules introduction](profiler-modules-introduction.html)

- [Connecting the Profiler to a data source](profiler-profiling-applications.html)

Profiler window reference

Profiler command line arguments
