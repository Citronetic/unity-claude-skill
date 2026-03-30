This version of Unity is unsupported.

Inspector-configurable custom events

Per-frame updates

# Managing time and frame rate

It’s important to understand how Unity handles time to ensure your gameplay remains stable. Updates occur at regular time intervals to capture changes to character positions, health status, scores, and so on. If your code makes changes in the wrong update loop or doesn’t allow for variations in time, effects like movement might be too fast, too slow, or jumpy instead of smooth.

The `Time` class contains properties through which you can get and in some cases set various time-related measurements and settings. Refer to [Time](../ScriptReference/Time.html) in the Scripting API reference for a complete list of the properties and their meanings.

| Topic | Description |
| --- | --- |
| Per-frame updates | Updates which happen once per frame and whose frequency therefore depends on frame rate. |
| Fixed updates | Updates which happen at a configurable fixed time interval. |
| In-game time and real time | The configurable relationship between in-game time and real time and the potential effects. |
| Handling variation in time | Techniques Unity uses to compensate for variations in time and frame rate and to limit the effects of one-time delays. |
| Capture frame rate | Compensating for frame rate when recording video of gameplay. |
| Simulate hitches for testing | Simulate hitches to test how your game handles time variation caused by performance issues. |

## Additional resources

- [Time API reference](../ScriptReference/Time.html)

- [Time settings in the Editor](class-TimeManager.html)

Inspector-configurable custom events

Per-frame updates
