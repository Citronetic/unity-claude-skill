This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).BeginDisabledGroup




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

public static void BeginDisabledGroup(bool disabled);






### Parameters



| Parameter | Description |
| --- | --- |
| disabled | Boolean specifying if the controls inside the group should be disabled. |





### Description



Create a group of controls that can be disabled.





If disabled is true, the controls inside the group will be disabled.
If false, the enabled/disabled state will not be changed.

Note: The use of [DisabledScope](EditorGUI.DisabledScope.html) is usually preferred over EditorGUI.BeginDisabledGroup()/EditorGUI.EndDisabledGroup(), as it provides a safer, scoped mechanism.  Please refer to the [DisabledScope](EditorGUI.DisabledScope.html) documentation for more information.


              


```
using UnityEditor;class ExampleClass
{
    bool canJump = false;
    float jumpHeight = 0f;    void Example()
    {
        canJump = EditorGUILayout.Toggle("Can Jump", canJump);        // Disable the jumping height control if canJump is false:
        EditorGUI.BeginDisabledGroup(canJump == false);
        jumpHeight = EditorGUILayout.FloatField("Jump Height", jumpHeight);
        EditorGUI.EndDisabledGroup();
    }
}
```





The group cannot be used to enable controls that would otherwise be disabled to begin with.
The groups can be nested and the controls within a child group will be disabled
both if that child group is itself disabled or if a parent group is.


            
