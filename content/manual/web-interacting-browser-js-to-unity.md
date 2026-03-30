This version of Unity is unsupported.

Set up your JavaScript plug-in

Call Unity C# script functions from JavaScript

# Call JavaScript functions from Unity C# scripts

You can use functions from your JavaScript **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) in your Unity C# code. It can be useful to use JavaScript code in Unity because you might need to communicate with other elements on your web page or Web APIs.

To learn about the file types and how to set up a JavaScript plug-in for interaction with Unity **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts), refer to [Set up your JavaScript plug-in](web-interacting-browser-js.html). To learn how to interact with C/C++/C# plug-ins instead, refer to [Call C/C++/C# functions from Unity C# scripts](web-interacting-browsers-c-to-unity.html).

| Topic | Description |
| --- | --- |
| Pass different variables from JavaScript to Unity | Tips on how to pass different variables between Unity and JavaScript. |
| Execute build code in its own scope | Tips on how to improve visibility of code between Unity and JavaScript. |
| Example Unity C# code that calls JavaScript functions | This example code shows how to call JavaScript functions in Unity. |
| Use Unity plug-ins as a reference | Shows a list of plug-ins included with Unity you can use as a reference. |

## Pass different variables from JavaScript to Unity

To integrate JavaScript with Unity, you need efficient communication between the two. Use the following tips on how to pass various types of data from JavaScript to Unity.

### Numeric types

You can pass simple numeric types to JavaScript in function parameters without converting them.

For example, this function in JavaScript:
`lang-js
AddNumbers: function (x, y) {
    return x + y;
  },`

accepts the integer values from C# without conversions:

```cs
int result = AddNumbers(5, 7);
```

You can pass other data types as a pointer in the Emscripten heap. The Emscripten heap is just a large array in JavaScript memory.

### Strings

To convert a string to a JavaScript string, use the `UTF8ToString` helper function.

```js
var stringMessage = UTF8ToString("Hello World");
```

To return a string value, call `_malloc` to allocate some memory and the `stringToUTF8` helper function to write a JavaScript string to the memory. If the string is a return value, then the **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) runtime automatically frees up the memory for you.

```js
var returnStr = "Hello World";
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
```

### Arrays

For arrays of primitive types, Emscripten provides different `ArrayBufferViews` into its heap for different sizes of integer, unsigned integer or floating point representations of memory: `HEAP8`, `HEAPU8`, `HEAP16`, `HEAPU16`, `HEAP32`, `HEAPU32`, `HEAPF32`, `HEAPF64`.

The following function loops through the `HEAPF32` array and outputs the values at each index.

```js
PrintFloatArray: function (array, size) {
    for(var i = 0; i < size; i++)
    console.log(HEAPF32[(array >> 2) + i]);
  },
```

### Textures

To access a texture in **WebGL**A JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. [More info](webgl.html)
See in [Glossary](Glossary.html#WebGL), Emscripten provides the `GL.textures` array which maps native texture IDs from Unity to WebGL texture objects. You can call WebGL functions on Emscripten’s WebGL context, `GLctx`.

For example, the following function binds a WebGL texture from the GL texture array to a 2D texture.

```js
BindWebGLTexture: function (texture) {
    GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
  },
```

## Execute build code in its own scope

It is recommended that you execute all build code in its own scope. If you have your code in its own scope, you can embed your content on a page without causing conflicts with the embedding page code, and you can embed more than one build on the same page.

### Code in .jslib plug-ins

If you have all your JavaScript code in the form of `.jslib` plug-ins inside your project, then this JavaScript code will run inside the same scope as the compiled build and your code should work the same way as in previous versions of Unity. Some of the objects and functions directly visible from the JavaScript plug-in code include:
* `Module`
* `SendMessage`
* `HEAP8`
* `ccall`

### Call JavaScript functions from global scope

If you want to call the internal JavaScript functions from the global scope of the embedded page, in your Web template `index.html`, you must use the `unityInstance` variable.

Use `unityInstance` after the Unity engine instantiation succeeds, for example:

```js
var MyGameInstance = null;
  script.onload = () => {
    createUnityInstance(canvas, config, (progress) => { /*...*/ }).then((unityInstance) => {
      MyGameInstance = unityInstance;
```

Then, you can use `MyGameInstance.SendMessage()` to send a message to the build, or use `MyGameInstance.Module` to access the build module object.

## Example Unity C# code that calls JavaScript functions

The following JavaScript code creates a function named `Hello`. For this example, use this code in your JavaScript plug-in so you can call it in your Unity C# scripts.

```js
mergeInto(LibraryManager.library, {

  Hello: function () {
    window.alert("Hello, world!");
  },
});
```

Then, use this C# code in your Unity project to call the `Hello` function from your JavaScript code:

```cs
using UnityEngine;
using System.Runtime.InteropServices;

public class NewBehaviourScript : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern void Hello();

    void Start() {
        Hello();
    }
}
```

For a larger code example with varied function types, refer to [Code examples: Call JavaScript and C/C++/C# functions in Unity](web-interacting-code-example.html).

## Use Unity plug-ins as a reference

There are several plug-ins in the Unity installation folder that you can use as reference:

- `PlaybackEngines/WebGLSupport/BuildTools/lib`

- `PlaybackEngines/WebGLSupport/BuildTools/Emscripten/src/library*`

## Additional resources

- [Interaction with browser scripting](webgl-interactingwithbrowserscripting.html)

- [Set up your JavaScript plug-in](web-interacting-browser-js.html)

- [Call Unity C# script functions from JavaScript](web-interacting-browser-unity-to-js.html)

- [Call C/C++/C# functions from Unity C# scripts](web-interacting-browsers-c-to-unity.html)

- [Create callbacks between Unity C#, JavaScript, and C/C++/C# code](web-interacting-browser-example.html)

Set up your JavaScript plug-in

Call Unity C# script functions from JavaScript
