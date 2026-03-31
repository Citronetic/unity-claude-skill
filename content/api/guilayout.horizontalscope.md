This version of Unity is unsupported.



# HorizontalScope





class in
          UnityEngine



/



Implemented in:[UnityEngine.IMGUIModule](UnityEngine.IMGUIModule.html)


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



Disposable helper class for managing [BeginHorizontal](GUILayout.BeginHorizontal.html) / [EndHorizontal](GUILayout.EndHorizontal.html).





All controls rendered inside this element will be placed horizontally next to each other.  The `using` statement means [BeginHorizontal](GUILayout.BeginHorizontal.html) and [EndHorizontal](GUILayout.EndHorizontal.html) are not needed.

[Image: image]

*Horizontal Layout.*


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        // Starts a horizontal group
        using (var horizontalScope = new GUILayout.HorizontalScope("box"))
        {
            GUILayout.Button("I'm the first button");
            GUILayout.Button("I'm to the right");
        }
        // Now the group is ended.
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| GUILayout.HorizontalScope | Create a new HorizontalScope and begin the corresponding horizontal group. |


            
