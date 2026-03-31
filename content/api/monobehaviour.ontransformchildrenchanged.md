This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnTransformChildrenChanged()




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



Called when the list of direct children of a GameObject's Transform changes.





The following changes to direct children of a GameObject invoke `OnTransformChildrenChanged`:



          - Adding a new child object to the GameObject's Transform.

          - Removing a child object.

          - Moving a child to a different parent.

          - Changing the order of the direct children.





It makes no difference whether these actions are performed in the Hierarchy window or from code with APIs such as [Transform.SetParent](Transform.SetParent.html), [Object.Destroy](Object.Destroy.html), or [Transform.SetSiblingIndex](Transform.SetSiblingIndex.html).

`OnTransformChildrenChanged` is only triggered by changes to the immediate (direct) children of the Transform. Changes to grandchildren or deeper descendants do not invoke this method on the parent.

`OnTransformChildrenChanged` is called at runtime when a GameObject's direct children change. It can also be called in Edit mode if scripts use [ExecuteInEditMode](ExecuteInEditMode.html) or [ExecuteAlways](ExecuteAlways.html).

Use this callback to respond to changes in your GameObject's immediate child hierarchy, such as updating UI elements, managing child object lists, or refreshing cached references.

Additional resources: [MonoBehaviour.OnTransformParentChanged](MonoBehaviour.OnTransformParentChanged.html).


              


```
// Attach this script to any GameObject (for example, an empty "Parent" object).
// Assign a UI Text component to the countText field in the Inspector.
// Add or remove children from the GameObject at runtime or in the Editor.using UnityEngine;
using UnityEngine.UI;public class ChildrenCounter : MonoBehaviour
{
    public Text countText;    private void Start()
    {
        UpdateChildrenCount();
    }    // Called by Unity when a child is added or removed
    private void OnTransformChildrenChanged()
    {
        UpdateChildrenCount();
    }    private void UpdateChildrenCount()
    {
        int childrenCount = transform.childCount;
        if (countText != null)
        {
            countText.text = $"Children: {childrenCount}";
        }
    }
}
```


            
