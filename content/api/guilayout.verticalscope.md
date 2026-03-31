This version of Unity is unsupported.



# VerticalScope





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



Disposable helper class for managing [BeginVertical](GUILayout.BeginVertical.html) / [EndVertical](GUILayout.EndVertical.html).





All controls rendered inside this element will be placed vertically below each other. The group is automatically closed when the scope ends.

[Image: image]

*Vertical Layout.*


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        // Starts a vertical group
        using (var verticalScope = new VerticalScope("box"))
        {
            GUILayout.Button("I'm the top button");
            GUILayout.Button("I'm the bottom button");
        }
        // The group is now ended
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| GUILayout.VerticalScope | Create a new VerticalScope and begin the corresponding vertical group. |


            
