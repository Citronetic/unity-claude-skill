This version of Unity is unsupported.

Search performance trackers

Search logs

# Search profiler markers

The **Profiler**A window that helps you to optimize your game. It shows how much time is spent in the various areas of your game. For example, it can report the percentage of time spent rendering, animating, or in your game logic. [More info](Profiler.html)
See in [Glossary](Glossary.html#Profiler) Markers search provider searches the Profiler data of **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) that use the `ProfilerMarker` API.

You can use the Profiler Markers search provider in two windows:

- In a dedicated window. From the main menu, select **Window** > **Analysis** > **Performance Markers**.

- In the **Search** window, using a visual or textual query with the provider token. However, the recommended best practice is using the dedicated window for profiler markers, as it provides a better experience.

## Query syntax

Provider token: `profile:`

Query example: Searches the profiler markers for the text `active` and a sample count of over `1000`.

```
profile: count>1000 active
```

## Provider filters

The Profiler Markers provider has additional filters in the [visual query builder](search-visual-query.html), using standard [search query operators](search-query-operators.html).

| Filter | Search token | Query example | Description |
| --- | --- | --- | --- |
| Average (avg) | perf: avg=<value> | perf: avg<512kb | Searches for performance trackers with an average value smaller than 512kb. |
| Last time | perf: lastTime=<value> | perf: lastTime<1ms | Searches for performance trackers that have been updated in the last millisecond. |
| Peak | perf: peak=<value> | perf: peak=0.5 | Searches for performance trackers with a peak value of 0.5. |
| Sample count | perf: count=<value> | perf: count=0.5 | Searches for performance trackers with a sample count of 0.5. This filter can’t use a unit. |
| Total | perf: total=<value> | perf: total=0.5 | Searches for performance trackers with a total value of 0.5. |

To match the unit the performance tracker logs, use different unit types with the filters. For example:

- To search all trackers that report an average time greater than `1ms`, use `avg>1ms`.

- To search for trackers that report an average memory consumption smaller than `512kb`, use `avg<512kb`.

If you don’t specify the unit, the search returns trackers that report hits.

**Note:** The Sample Count filter never uses units.

## Results

To learn more about these markers, refer to the [Profiler markers reference](profiler-markers.html).

## Results

**Search** window tab: **Profile Markers**.

The recommended best practice is to use the table view for these results.

## Actions

The context menu for the Profiler Markers search provider includes the following actions:

| Action | Description |
| --- | --- |
| Profile | Runs the profiler on the selected item. This is the default double-click action. To change the default action, refer to Preferences. |
| Enable Deep Profiling or Disable Deep Profiling | Toggles deep profiling for the selected item. |
| Reset | Resets all results to 0 and starts profiling again. |

## Additional resources

- [Profiler markers reference](profiler-markers.html)

- [Profiler markers](profiler-adding-information-code-intro.html#profiler-markers)Placed in code to describe a CPU or GPU event that is then displayed in the Unity Profiler window. Added to Unity code by default, or you can use [ProfilerMarker API](https://docs.unity3d.com/Packages/com.unity.profiling.core@latest/index.html?subfolder=/manual/profilermarker-guide.html) to add your own custom markers. [More info](profiler-markers.html)
See in [Glossary](Glossary.html#Profilermarker)

- [ProfilerMarker API reference](../ScriptReference/Unity.Profiling.ProfilerMarker.html)

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Activate and deactivate search providers](search-manage-providers.html)

- [Search query operators](search-query-operators.html)

Search performance trackers

Search logs
