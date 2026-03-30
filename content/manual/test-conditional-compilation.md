This version of Unity is unsupported.

Custom scripting symbols

Organizing scripts into assemblies

# Test conditional compilation

The following example shows how to test your conditionally compiled code. It also prints a message based on the platform selected for the target build.

## Sample code

```cs
using UnityEngine;
  using System.Collections;
  public class PlatformDefines : MonoBehaviour {
  void Start () {

    #if UNITY_EDITOR
      Debug.Log("Unity Editor");
    #endif

    #if UNITY_IOS
      Debug.Log("Unity iOS");
    #endif

    #if UNITY_STANDALONE_OSX
        Debug.Log("Standalone OSX");
    #endif

    #if UNITY_STANDALONE_WIN
      Debug.Log("Standalone Windows");
    #endif

  }
  }
```

## Test instructions

1. Open the **Build Profiles** window (menu: **File** > **Build Profiles**).

2. Check that the platform you want to test your code on is the Active platform profile. If it isn’t, select your preferred platform and click **Switch Profile**.

3. Create a [script](creating-scripts.html) and copy and paste the [sample code](#Sample).

4. In the [Game view](GameView.html) **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar), click the Play button to enter Play mode. Confirm that the code works by checking for messages relevant to the platform selected in the Unity console. For example, if you choose iOS, the messages `Unity Editor` and `Unity iOS` appear in the console.

## Additional resources

- [Unity scripting symbol reference](scripting-symbol-reference.html)

- [Custom scripting symbols](custom-scripting-symbols.html)

Custom scripting symbols

Organizing scripts into assemblies
