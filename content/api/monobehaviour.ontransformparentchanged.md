This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnTransformParentChanged()




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



Called when a direct or indirect parent of a GameObject's Transform changes.





Changes to the parent includes both direct and indirect changes to the hierarchy: whether the GameObject is reparented to a new Transform, or if any ancestor in its hierarchy is reparented.

`OnTransformParentChanged` is called at runtime when a GameObject's direct children change. It can also be called in Edit mode if scripts use [ExecuteInEditMode](ExecuteInEditMode.html) or [ExecuteAlways](ExecuteAlways.html). It's called after the parent change has occurred, allowing you to react to the new hierarchy in your script.

Use this callback to:



          - Update or reconfigure components and logic that depend on the GameObject's position in the scene hierarchy.

          - Refresh cached references to parent objects or components when the parent changes.

          - Synchronize state or properties with the new parent, such as inheriting settings, updating UI layouts, or recalculating world-space properties.

          - Perform cleanup related to the old parent or initialization tasks relevant to the new parent.

          - In custom Editor scripts, to maintain correct relationships in tools that manipulate the hierarchy at Edit time.





Additional resources: [MonoBehaviour.OnTransformChildrenChanged](MonoBehaviour.OnTransformChildrenChanged.html).


              


```
// Attach this script to any GameObject (for example, an empty "Parent" object).
// Assign a Text UI element to the infoText field in the Inspector (optional, for UI feedback).
// At runtime, change the object's parent in the hierarchy (via script or by dragging in the Editor).
// You'll see a log message, and the UI text will update whenever the parent changes.using UnityEngine;
using UnityEngine.UI; // For UI Textpublic class ParentChangeWatcher : MonoBehaviour
{
    public Text infoText; // Assign in inspector    void Start()
    {
        UpdateInfoText();
    }    // Called automatically by Unity when the parent changes
    void OnTransformParentChanged()
    {
        Debug.Log($"{gameObject.name} parent changed to: {transform.parent?.name ?? "None"}");
        UpdateInfoText();
    }    void UpdateInfoText()
    {
        if (infoText != null)
        {
            string parentName = transform.parent ? transform.parent.name : "None";
            infoText.text = $"{gameObject.name} is now child of: {parentName}";
        }
    }
}
```


            
