This version of Unity is unsupported.



# [IOrderedCallback](Build.IOrderedCallback.html).callbackOrder




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












                    public int callbackOrder;






### Description



Returns a numeric value that determines the order in which the build callback is invoked.





Callbacks with lower values are called before those with higher values, allowing you to control the execution order of build callbacks.
This mechanism is particularly useful for resolving conflicts between different callback implementations by specifying their relative order.

It is important to note that complete control over the callback order may not always be feasible, due to the use of callbacks by code that may be outside
your control, for example inside packages and inside the implementation of the Unity Editor.  For instance, even if you assign a large numeric value to
ensure your callback is the last to run, other implementations might specify the same or an even higher value.


              


```
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;// Example Usage:
// - Add this script to an Editor assembly within your Unity project.
// - Initiate a Player Build.
// - Observe the order of log messages in the Console.// A build callback that demonstrates the use of callback order in Player builds.
class BuildCallbackA : IPreprocessBuildWithReport
{
    public int callbackOrder { get { return 9999; } }
    public void OnPreprocessBuild(BuildReport report)
    {
        Debug.Log("BuildCallbackA: Called second");
    }
}// A build callback that runs before BuildCallbackA due to its lower callback order.
class BuildCallbackB : IPreprocessBuildWithReport
{
    public int callbackOrder { get { return 100; } }
    public void OnPreprocessBuild(BuildReport report)
    {
        Debug.Log("BuildCallbackB: Called first");
    }
}
```


            
