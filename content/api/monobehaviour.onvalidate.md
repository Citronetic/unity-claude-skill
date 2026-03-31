This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnValidate()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



Editor-only function that Unity calls when the script is loaded or a value changes in the Inspector.





Use this to perform an action after a value changes in the Inspector; for example, making sure that data stays within a certain range.

`OnValidate` is called at various stages during the Editor's normal operation, such as loading scenes, building a Player, and entering Play mode.

`OnValidate` can be called often when the user interacts with an Inspector in the Editor. It can also be called from threads other than Unity's main thread, such as the loading thread. For these reasons, only use `OnValidate` to validate the data that changed. Don't use it to do other tasks such as creating objects or calling other non-thread-safe Unity API.

You can't reliably perform Camera rendering operations from `OnValidate`. Instead, add a listener to [EditorApplication.update](EditorApplication-update.html), and perform the rendering during the next Editor Update call.

Additional resources: [EditorApplication.update](EditorApplication-update.html), [EditorApplication.delayCall](EditorApplication-delayCall.html).


              


```
using UnityEngine;public class Health : MonoBehaviour
{
    [SerializeField]
    private int maxHealth = 100;    [SerializeField]
    private int currentHealth = 100;    // Called in editor when values are changed in Inspector
    private void OnValidate()
    {
        // Ensure maxHealth is at least 1
        if (maxHealth < 1)
            maxHealth = 1;        // Clamp currentHealth between 0 and maxHealth
        currentHealth = Mathf.Clamp(currentHealth, 0, maxHealth);
    }
}
```


            
