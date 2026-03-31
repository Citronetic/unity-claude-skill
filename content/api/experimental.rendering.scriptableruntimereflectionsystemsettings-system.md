This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [ScriptableRuntimeReflectionSystemSettings](Experimental.Rendering.ScriptableRuntimeReflectionSystemSettings.html).system




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












                    public static [Experimental.Rendering.IScriptableRuntimeReflectionSystem](Experimental.Rendering.IScriptableRuntimeReflectionSystem.html) system;






### Description



The current scriptable runtime reflection system instance.





Set this property in a method with [RuntimeInitializeOnLoadMethodAttribute](RuntimeInitializeOnLoadMethodAttribute.html) with your own implementation.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;// Empty ScriptableRuntimeReflectionSystem for the exemple
class CustomScriptableRuntimeReflectionSystem : ScriptableRuntimeReflectionSystem {}class CustomScriptableRuntimeReflectionSystemIntegration
{
    [RuntimeInitializeOnLoadMethod]
    static void Initialize()
    {
        ScriptableRuntimeReflectionSystemSettings.system = new CustomScriptableRuntimeReflectionSystem();
    }
}
```


            
