This version of Unity is unsupported.



# [Handles](Handles.html).color




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












                    public static [Color](Color.html) color;






### Description



Sets the color of handles. Color is a persistent state and affects any handles drawn after it is set. Use [DrawingScope](Handles.DrawingScope.html) to set the color for a block of handles without affecting the color of other handles.





[Image: image]


*White cone that points to 0,0,0.*


              


```
// Name this script "SliderHandleEditor"
using UnityEngine;
using System.Collections;
using UnityEditor;[CustomEditor(typeof(SliderHandle))]
public class SliderHandleEditor : Editor
{
    // Simple script that creates a Slide Handle that
    // allows you to drag a 'look at' point along the X axis    void OnSceneGUI()
    {
        SliderHandle t = (target as SliderHandle);        // Set the colour of the next handle to be drawn:
        Handles.color = Color.magenta;        EditorGUI.BeginChangeCheck();
        Vector3 lookTarget = Handles.Slider(t.lookTarget, new Vector3(1, 0, 0), 2, Handles.ConeHandleCap, 0.1f);
        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(target, "Changed Slider Look Target");
            t.lookTarget = lookTarget;
            t.Update();
        }
    }
}
```





And the script attached to this GameObject:


              


```
// Name this script "SliderHandle"
using UnityEngine;
using System.Collections;[ExecuteInEditMode]
public class SliderHandle : MonoBehaviour
{
    public Vector3 lookTarget = new Vector3(0, 0, 0);    public void Update()
    {
        transform.LookAt(lookTarget);
    }
}
```


            
