This version of Unity is unsupported.

JavaScript interface in Unity Web builds

Web native plug-ins for Emscripten

# Replace deprecated browser interaction code

Some code involved with web browser script interactions is deprecated and has been replaced with alternative code.

If your code contains any of the deprecated code, you need to update the code with the replacement code to prevent unexpected behavior or broken code.

## Deprecated code quick reference

The following code is deprecated and you need to replace it with the replacement code.

| Deprecated code | Replacement code |
| --- | --- |
| dynCall() | makeDynCall() |
| Pointer_stringify() | UTF8ToString() |
| unity.Instance() | CreateUnityInstance() |
| gameInstance | unityInstance |

## Change dynCall to makeDynCall

The `dynCall` function is deprecated. If you have any code that uses `dynCall`, replace it with `makeDynCall`. Make this change whether you have `WebAssembly.Table` enabled or not.

For example, change:

```js
dynCall('vii', callback, [1, 2])
```

to:

```js
{{{ makeDynCall('vii', 'callback') }}}(1, 2)
```

## Change Pointer_stringify() to UTF8ToString

The `Pointer_stringify()` function is deprecated. If your code contains calls to `Pointer_stringify()`, replace the calls with `UTF8ToString()`.

For example, change:

```js
var stringMessage = Pointer_stringify(message);
```

to:

```js
var stringMessage = UTF8ToString(message);
```

## Change unity.Instance to CreateUnityInstance

`unity.Instance` is deprecated. If your code uses `unity.Instance`, use `CreateUnityInstance` instead.

For example, change:

```js
var MyGameInstance = null;
  script.onload = () => {
    unity.Instance(canvas, config, (progress) => { /*...*/ }).then((unityInstance) => {
```

to:

```js
var MyGameInstance = null;
  script.onload = () => {
    createUnityInstance(canvas, config, (progress) => { /*...*/ }).then((unityInstance) => {
```

## Change gameInstance to unityInstance

The `gameInstance` property is deprecated. If your code uses `gameInstance`, use `unityInstance` instead.

For example, change:

```js
MyGameInstance = gameInstance;
```

to:

```js
MyGameInstance = unityInstance;
```

## Additional resources

- [Interaction with browser scripting](webgl-interactingwithbrowserscripting.html)

- [Set up your JavaScript plug-in](web-interacting-browser-js.html)

- [Call JavaScript functions from Unity C# scripts](web-interacting-browser-js-to-unity.html)

- [Call Unity C# script functions from JavaScript](web-interacting-browser-unity-to-js.html)

- [Call C/C++/C# functions from Unity C# scripts](web-interacting-browsers-c-to-unity.html)

JavaScript interface in Unity Web builds

Web native plug-ins for Emscripten
