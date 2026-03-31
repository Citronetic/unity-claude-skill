This version of Unity is unsupported.



# InitializeOnLoadAttribute





class in
          UnityEditor


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Allows you to initialize an Editor class when Unity loads, and when your scripts are recompiled.





Static constructors with this attribute are called when scripts in the project are recompiled, also known as a [Domain Reload](../Manual/domain-reloading.html)). This happens when:



          - Unity first loads your project.

          - Unity detects modifications to scripts, if **Auto Refresh** is enabled in the Asset Pipeline section of the [Preferences window](../Manual/Preferences.html)).

          - Entering Play mode, if domain reload is enabled in your [Play Mode configuration](../Manual/configurable-enter-play-mode.html)).





Avoid asset operations such as asset loading in `InitializeOnLoad` methods. `InitializeOnLoad` methods are called before asset import completes, which means asset loading from this context can fail, resulting in a null object. To do initialization after a domain reload that requires asset operations, use the [AssetPostprocessor.OnPostprocessAllAssets](AssetPostprocessor.OnPostprocessAllAssets.html) callback. This callback supports all asset operations and has a parameter that signals if there was a domain reload.

Additional resources: [InitializeOnLoadMethodAttribute](InitializeOnLoadMethodAttribute.html).


              


```
// The following code example defines a small custom class decorated with `[InitializeOnLoad]`
// and assigns a member method to the `EditorApplication.update` delegate so that it runs and begins
// printing to the console on Editor launch.
using UnityEditor;
using UnityEngine;// InitializeOnLoad ensures this code runs on Editor launch
[InitializeOnLoad]
class MyClass
{
    // Define a static constructor in which we assign the custom Update method to the delegate
    static MyClass ()
    {
        EditorApplication.update += Update;
    }    // Define a method with the required signature that performs work we want to do on launch
    static void Update ()
    {
        Debug.Log("Updating");
    }
}
```


            
