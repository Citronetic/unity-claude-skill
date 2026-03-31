This version of Unity is unsupported.



# AreaScope





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



Disposable helper class for managing [BeginArea](GUILayout.BeginArea.html) / [EndArea](GUILayout.EndArea.html).





[BeginArea](GUILayout.BeginArea.html) is called at construction, and [EndArea](GUILayout.EndArea.html) is called when the instance is disposed.
By default, any GUI controls made using GUILayout are placed in the top-left corner of the screen.
If you want to place a series of automatically laid out controls in an arbitrary area, use [GUILayout.BeginArea](GUILayout.BeginArea.html) to define a new area for the automatic layouting system to use.

Additional resources: [BeginArea](GUILayout.BeginArea.html), [EndArea](GUILayout.EndArea.html)

[Image: image]

*Explained Area of the example.*


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        using (var areaScope = new GUILayout.AreaScope(new Rect(10, 10, 100, 100)))
        {
            GUILayout.Button("Click me");
            GUILayout.Button("Or me");
        }
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| GUILayout.AreaScope | Create a new AreaScope and begin the corresponding Area. |


            
