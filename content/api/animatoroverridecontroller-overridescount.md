This version of Unity is unsupported.



# [AnimatorOverrideController](AnimatorOverrideController.html).overridesCount




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












                    public int overridesCount;






### Description



Returns the count of overrides.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class ResetOverrides : MonoBehaviour
{
    public AnimatorOverrideController overrideController;
    protected List<KeyValuePair<AnimationClip, AnimationClip>> overrides;    public void ResetAllOverrides()
    {
        overrides = new List<KeyValuePair<AnimationClip, AnimationClip>>(overrideController.overridesCount);
        overrideController.GetOverrides(overrides);
        for (int i = 0; i < overrides.Count; ++i)
            overrides[i] = new KeyValuePair<AnimationClip, AnimationClip>(overrides[i].Key, null);
        overrideController.ApplyOverrides(overrides);
    }
}
```


            
