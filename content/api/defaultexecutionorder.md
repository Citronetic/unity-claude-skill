This version of Unity is unsupported.



# DefaultExecutionOrder





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Specifies the script execution order for a MonoBehaviour-derived class relative to other MonoBehaviour-derived types.





The `DefaultExecutionOrder` attribute offers a way to specify the execution order between different MonoBehaviour scripts from code, rather than through the [Project settings](../Manual/comp-ManagerGroup.html) window in the Unity Editor. For more information on script execution order and configuring it in the Editor, refer to [Script Execution Order](../Manual/class-MonoManager.html) in the Manual.

This attribute targets classes, but it only has an effect on classes that inherit from [MonoBehaviour](MonoBehaviour.html). The default execution order between script components applies only for the [event functions](../Manual/event-functions.html) Unity calls in a determined order on all active GameObjects as part of their lifecycle, such as [MonoBehaviour.Awake](MonoBehaviour.Awake.html) and [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html). It does not guarantee the relative execution order of callbacks for events that can happen at any time in the running application and that usually apply to a smaller subset of GameObjects, such as [MonoBehaviour.OnTriggerEnter](MonoBehaviour.OnTriggerEnter.html).

The integer value supplied as a parameter is equivalent to the integer values set in the **Script Execution Order** section of the **Project settings** window. The integer value assigned to a MonoBehaviour-derived type determines the execution order priority for script components of that type relative to the other MonoBehaviour scripts. Scripts are executed in order from lowest first to highest last, for example: -200, -100, -50, 50, 100, 200.

**Note**: Use this attribute with caution. Execution order defined in code with `DefaultExecutionOrder` does not show in the **Script Execution Order** section of the Editor's **Project settings**. If you define an execution order for a MonoBehaviour-derived type in code with `DefaultExecutionOrder` but define a different value for the same type in the Editor's **Project settings** window, Unity uses the value defined in the Editor UI.

See Also: [MonoBehaviour](MonoBehaviour.html)


              


```
using UnityEngine;
// Add this script to a GameObject
[DefaultExecutionOrder(50)]
public class ExampleClass : MonoBehaviour
{
// This Start function will execute after the Start functions of any other MonoBehaviour scripts that
// have an execution order < 50 and before any with an execution order > 50. If you define a different
// execution order value for this ExampleClass in the Editor's Script Execution Order settings, the
// value defined in Script Execution Order settings is the one applied at runtime.
    void Start()
    {
        Debug.Log("Execution order 50");
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| order | Integer which defines the execution priority order for a MonoBehaviour-derived class. |





### Constructors



| Constructor | Description |
| --- | --- |
| DefaultExecutionOrder | Sets the script execution order for a MonoBehaviour-derived class to the value of the supplied integer parameter. |


            
