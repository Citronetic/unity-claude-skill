This version of Unity is unsupported.



# [Editor](Editor.html).DrawDefaultInspector




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

public bool DrawDefaultInspector();






### Returns



**bool**
        Returns true if any GUI controls in the default Inspector changed the value of the input data, otherwise returns false.





### Description



Draws the built-in Inspector.





Call this method, within the OnInspectorGUI method, to automatically draw the Inspector.
This is useful if you want to add a few buttons without having to redo the entire Inspector.
Additional resources: [OnInspectorGUI](Editor.OnInspectorGUI.html).


              


```
// This example shows a custom inspector for an
// object "MyPlayer", which has a variable speed.
using UnityEngine;
using UnityEditor;class MyPlayer : MonoBehaviour
{
    // Hide this field so that it is not shown twice when drawing the default Inspector.
    [HideInInspector]
    public float speed;    public int gear;
}[CustomEditor(typeof(MyPlayer))]
public class Example : Editor
{
    public override void OnInspectorGUI()
    {
        MyPlayer targetPlayer = (MyPlayer)target;
        EditorGUILayout.LabelField ("Some help", "Some other text");        targetPlayer.speed = EditorGUILayout.Slider ("Speed", targetPlayer.speed, 0, 100);        // Show default inspector property editor
        if(DrawDefaultInspector())
            Debug.Log("Gear was changed!");
    }
}
```


            
