This version of Unity is unsupported.

Inspector-configurable custom events

Split tasks across frames with coroutines

# Optimizing per-frame updates with an update manager

Internally, Unity tracks lists of objects interested in its callbacks, such as `Update`, `FixedUpdate` and `LateUpdate`. Unity maintains these lists as intrusive linked lists to ensure that list updates happen in constant time. MonoBehaviour instances are added to or removed from these lists when they are enabled or disabled, respectively.

While it’s convenient to add the appropriate callbacks to the MonoBehaviour instances that require them, this becomes more inefficient as the number of callbacks grows. There is a small but significant overhead to invoking managed-code callbacks from native code. This results both in degraded frame times when invoking large numbers of [per-frame methods](time-per-frame-updates.html), and in degraded instantiation times when [instantiating prefabs](instantiating-prefabs.html) that contain large numbers of MonoBehaviours. The instantiation overhead is due to the performance overhead of invoking `Awake` and `OnEnable` callbacks on each component in a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab).

When the number of MonoBehaviour instances with per-frame callbacks grows into the hundreds or thousands, it’s advantageous to remove these callbacks and instead have MonoBehaviours (or even standard C# objects) attach to a global update manager singleton. This update manager singleton can then distribute `Update`, `LateUpdate`, and other callbacks to interested objects. This has the additional benefit of allowing code to unsubscribe from callbacks when they otherwise no-op, thereby reducing the number of functions that must be called each frame.

The greatest saving is usually realized by eliminating callbacks which rarely execute. Consider the following pseudo-code:

```cs
void Update() {
    if(!someVeryRareCondition) { return; }
// … some operation …
}
```

If there are large numbers of MonoBehaviours with `Update` callbacks similar to the previous, then a significant amount of the time consumed running `Update` callbacks is spent switching between native and managed code domains for MonoBehaviour execution that then exit immediately. If these classes instead subscribe to a global Update Manager only while `someVeryRareCondition` is true, and unsubscribe thereafter, then less time is spent both on switching code domains and evaluating the rare condition.

## Additional resources

- [Event functions](event-functions.html)

- [Execution order of event functions](execution-order.html)

Inspector-configurable custom events

Split tasks across frames with coroutines
