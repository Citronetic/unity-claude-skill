This version of Unity is unsupported.



# [Behaviour](Behaviour.html).isActiveAndEnabled




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












                    public bool isActiveAndEnabled;






### Description



Checks whether a component is enabled, attached to a GameObject that is active in the hierarchy, and the component's OnEnable has been called.





`Behaviour.isActiveAndEnabled` returns `true` only if all the following conditions are met:



          - The GameObject that the Behaviour is attached to is active in the hierarchy ([GameObject.activeInHierarchy](GameObject-activeInHierarchy.html) == `true`).

          - The Behaviour is enabled ([Behaviour.enabled](Behaviour-enabled.html) == `true`).

          - The component's [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html) method has been called.





**Important:** Even if a component is enabled and its GameObject is active, `isActiveAndEnabled` still returns `false` until `OnEnable` is called on the component. This is by design in Unity's scripting lifecyle. For more information, refer to [Event function execution order](../Manual/execution-order.html) in the User Manual.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.UI;public class Example : MonoBehaviour
{
    public Image pauseMenu;    public void Update()
    {
        //Checks if the GameObject and Image are active and enabled.
        if (pauseMenu.isActiveAndEnabled)
        {
            //If the Image is enabled, print "Enabled" in the console. Stops when the image or GameObject is disabled.
            Debug.Log("Enabled");
        }
    }
}
```


            
