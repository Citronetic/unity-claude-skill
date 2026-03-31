This version of Unity is unsupported.



# [LineRenderer](LineRenderer.html).maskInteraction




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




                [Switch to Manual](../Manual/class-LineRenderer.html)







                    public [SpriteMaskInteraction](SpriteMaskInteraction.html) maskInteraction;






### Description



Specifies how the LineRenderer interacts with [SpriteMask](SpriteMask.html).





By default, lines do not interact with SpriteMasks and are visible regardless of whether you assign a SpriteMask or not.
You can make the LineRenderer visible either inside or outside a SpriteMask. To do the former, set this to [SpriteMaskInteraction.VisibleInsideMask](SpriteMaskInteraction.VisibleInsideMask.html). To do the latter, set this to [SpriteMaskInteraction.VisibleOutsideMask](SpriteMaskInteraction.VisibleOutsideMask.html).
Additional resources: [SpriteMaskInteraction](SpriteMaskInteraction.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(LineRenderer))]
public class ExampleClass : MonoBehaviour
{
    private LineRenderer r;
    public SpriteMaskInteraction maskInteraction;    void Start()
    {
        r = GetComponent<LineRenderer>();
    }    void Update()
    {
        r.maskInteraction = maskInteraction;
    }    void OnGUI()
    {
        maskInteraction = (SpriteMaskInteraction)GUI.SelectionGrid(new Rect(25, 25, 900, 30), (int)maskInteraction, new GUIContent[] { new GUIContent("No Masking"), new GUIContent("Visible Inside Mask"), new GUIContent("Visible Outside Mask") }, 3);
    }
}
```


            
