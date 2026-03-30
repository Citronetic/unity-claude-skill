This version of Unity is unsupported.

Handling variation in time

Capturing frame rate

# In-game time and real time

The [Time.timeScale](../ScriptReference/Time-timeScale.html) property defines the rate at which time passes in your game world relative to real time. A `Time.timeScale` value of 1.0 means your in-game time matches real time. A value of 2.0 makes time pass twice as quickly in your game as in the real world, which speeds up the action in your game. A value of 0.5 slows gameplay down to half speed. A value of zero makes your in-game time stop completely.

`Time.timeScale` doesn’t actually slow execution but instead changes the time step reported to the `Update` and `FixedUpdate` functions with [Time.deltaTime](../ScriptReference/Time-deltaTime.html) and [Time.fixedDeltaTime](../ScriptReference/Time-fixedDeltaTime.html).

Your `Update` function may be called just as often when you reduce the time scale, but the value of `Time.deltaTime` each frame will be less. Other script functions aren’t affected by the time scale, so you can for example display a GUI with normal interaction when the game is paused.

For special time effects such as slow-motion, it’s sometimes useful to slow the passage of game time so that animations and time-based calculations in your code happen at a slower pace. Furthermore, you may sometimes want to freeze game time completely, as when the game is paused.

The [Time](class-TimeManager.html) window has a property to let you set the time scale globally but it’s usually more useful to set the value from a script using the [Time-timeScale](../ScriptReference/Time-timeScale.html) property:

```cs
//C# script example
using UnityEngine;
using System.Collections;

public class ExampleScript : MonoBehaviour {
    void Pause() {
        Time.timeScale = 0;
    }

    void Resume() {
        Time.timeScale = 1;
    }
}
```

## Additional resources

- [Per-frame updates](time-per-frame-updates.html)

- [Capture frame rate](time-capture-frame-rate.html)

Handling variation in time

Capturing frame rate
