This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [ScriptableBakedReflectionSystemSettings](Experimental.Rendering.ScriptableBakedReflectionSystemSettings.html).system




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












                    public static [Experimental.Rendering.IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html) system;






### Description



The currently active ScriptableBakedReflectionSystem, see [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html).





Set this property in a class with [InitializeOnLoadAttribute](InitializeOnLoadAttribute.html) or a method with [InitializeOnLoadMethodAttribute](InitializeOnLoadMethodAttribute.html) with your own implementation.


              


```
using UnityEditor;
using UnityEditor.Experimental.Rendering;// Empty ScriptableBakedReflectionSystem for the exemple
class CustomScriptableBakedReflectionSystem : ScriptableBakedReflectionSystem
{
    public CustomScriptableBakedReflectionSystem()
        : base(1)
    {
    }
}class CustomScriptableBakedReflectionSystemIntegration
{
    [InitializeOnLoadMethod]
    static void Initialize()
    {
        ScriptableBakedReflectionSystemSettings.system = new CustomScriptableBakedReflectionSystem();
    }
}
```


            
