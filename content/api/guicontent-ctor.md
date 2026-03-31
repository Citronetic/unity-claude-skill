This version of Unity is unsupported.



# GUIContent Constructor




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

public GUIContent();






### Description



Constructor for GUIContent in all shapes and sizes.





Build an empty GUIContent.




---








## Declaration

public GUIContent(string text);






### Description



Build a GUIContent object containing only text.





When using the GUI, you don't need to create GUIContents for simple text strings - these two lines of code are functionally equivalent:


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void OnGUI()
    {
        GUI.Button(new Rect(0, 0, 100, 20), "Click Me");
        GUI.Button(new Rect(0, 30, 100, 20), new GUIContent("Click Me"));
    }
}
```




---








## Declaration

public GUIContent([Texture](Texture.html) image);






### Description



Build a GUIContent object containing only an image.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    public Texture icon;
    void OnGUI()
    {
        GUI.Button(new Rect(0, 30, 100, 20), new GUIContent(icon));
    }
}
```




---








## Declaration

public GUIContent(string text,
[Texture](Texture.html) image);






### Description



Build a GUIContent object containing both `text` and an image.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    public Texture icon;
    void OnGUI()
    {
        GUI.Button(new Rect(0, 30, 100, 20), new GUIContent("Click me", icon));
    }
}
```




---








## Declaration

public GUIContent(string text,
string tooltip);






### Description



Build a GUIContent containing some `text`. When the user hovers the mouse over it, the global [GUI.tooltip](GUI-tooltip.html) is set to the `tooltip`.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void OnGUI()
    {
        GUI.Button(new Rect(0, 0, 100, 20), new GUIContent("Click me", "This is the tooltip"));        // If the user hovers the mouse over the button, the global tooltip gets set
        GUI.Label(new Rect(0, 40, 100, 40), GUI.tooltip);
    }
}
```




---








## Declaration

public GUIContent([Texture](Texture.html) image,
string tooltip);






### Description



Build a GUIContent containing an image. When the user hovers the mouse over it, the global [GUI.tooltip](GUI-tooltip.html) is set to the `tooltip`.




---








## Declaration

public GUIContent(string text,
[Texture](Texture.html) image,
string tooltip);






### Description



Build a GUIContent that contains both `text`, an `image` and has a `tooltip` defined. When the user hovers the mouse over it, the global [GUI.tooltip](GUI-tooltip.html) is set to the `tooltip`.




---








## Declaration

public GUIContent([GUIContent](GUIContent.html) src);






### Description



Build a GUIContent as a copy of another GUIContent.


            
