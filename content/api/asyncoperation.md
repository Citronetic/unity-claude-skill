This version of Unity is unsupported.



# AsyncOperation





class in
          UnityEngine



/



Inherits from:[YieldInstruction](YieldInstruction.html)



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



Suspends a coroutine until an asynchronous operation completes.





`WaitForSecondsRealtime` can only be used with a `yield` statement in coroutines.

You can `yield` until the `AsyncOperation` completes, check whether it's done with [AsyncOperation.isDone](AsyncOperation-isDone.html), or check on its progress with [AsyncOperation.progress](AsyncOperation-progress.html).

Additional resources: [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html), [AssetBundle.LoadAssetAsync](AssetBundle.LoadAssetAsync.html), [Resources.LoadAsync](Resources.LoadAsync.html).


              


```
using System.Collections;
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public void Start()
    {
        StartCoroutine(Example_AsyncTests());
    }    public IEnumerator Example_AsyncTests()
    {
        Debug.Log("Start of AsyncLoad Example");

        var load = UnityEngine.Resources.LoadAsync("");
        yield return load;
        yield return null;

        Debug.Log("End of AsyncLoad Example");
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| allowSceneActivation | Allow Scenes to be activated as soon as it is ready. |
| isDone | Has the operation finished? (Read Only) |
| priority | Priority lets you tweak in which order async operation calls will be performed. |
| progress | What's the operation's progress. (Read Only) |





### Events



| Event | Description |
| --- | --- |
| completed | Raised when this AsyncOperation operation has completed. |





### Inherited Members














            
