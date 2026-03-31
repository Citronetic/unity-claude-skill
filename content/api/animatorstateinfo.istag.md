This version of Unity is unsupported.



# [AnimatorStateInfo](AnimatorStateInfo.html).IsTag




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















## Declaration

public bool IsTag(string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | The tag to check. |





### Returns



**bool**
        True if the animation state has the specified tag, false otherwise.





### Description



Checks whether the animation state has the specified tag.





You can manually set a tag for each state in the [Animator State inspector](../Manual/class-State.html) or with the [AnimatorState.tag](Animations.AnimatorState-tag.html) property. Use [AnimatorStateInfo.IsTag](AnimatorStateInfo.IsTag.html) to query if an activate state in the [Animator](Animator.html) component has a tag that matches a specific string.
[AnimatorStateInfo.IsTag](AnimatorStateInfo.IsTag.html) calls [Animator.StringToHash](Animator.StringToHash.html) on the tag parameter and compares it to [AnimatorStateInfo.tagHash](AnimatorStateInfo-tagHash.html) internally; if you call that method often, consider precomputing the hash of the tag for a gain in performance.

Additional resources: [AnimatorStateInfo.IsName](AnimatorStateInfo.IsName.html), [AnimatorState.tag](Animations.AnimatorState-tag.html).


              


```
// This script demonstrates how to check if the current state of an Animator is tagged with a specific tag.

using UnityEngine;

[RequireComponent(typeof(Animator))]
public class AnimatorStateInfoIsTagExample : MonoBehaviour
{
    // The tag to check for.
    public string tagName = "Jump";

    // The Animator component on the GameObject this script is attached to.
    Animator m_Animator;

    void Start()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update()
    {
        // If the current state is tagged with the specified tag, log a message.
        var stateInfo = m_Animator.GetCurrentAnimatorStateInfo(0);
        if (stateInfo.IsTag(tagName))
        {
            Debug.Log($"Current state is tagged as {tagName}");
        }
    }
}
```


            
