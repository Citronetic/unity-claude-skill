This version of Unity is unsupported.



# [GUI](GUI.html).Box




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

public static void Box([Rect](Rect.html) position,
string text);






## Declaration

public static void Box([Rect](Rect.html) position,
[Texture](Texture.html) image);






## Declaration

public static void Box([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content);






## Declaration

public static void Box([Rect](Rect.html) position,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static void Box([Rect](Rect.html) position,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static void Box([Rect](Rect.html) position,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the box. |
| text | Text to display on the box. |
| image | Texture to display on the box. |
| content | Text, image and tooltip for this box. |
| style | The style to use. If left out, the box style from the current GUISkin is used. |





### Description



Create a Box on the GUI Layer.





A Box can contain text, an image, or a combination of these along
        with an optional tooltip, through using a [GUIContent](GUIContent.html) parameter. You may also use
        a [GUIStyle](GUIStyle.html) to adjust the layout of items in a box, text colour and other properties.

Here is an example of a Box containing Text:


              


```
using UnityEngine;public class BoxExample : MonoBehaviour
{
    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), "This is a box");
    }
}
```





Here is an example of a Box containing a Texture:


              


```
using UnityEngine;public class BoxWithTextureExample : MonoBehaviour
{
    public Texture BoxTexture;      // Drag a Texture onto this item in the Inspector    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), BoxTexture);
    }
}
```





Here is an example of a Box containing a GUIContent, combining Text, Texture and Tooltip:


              


```
using UnityEngine;public class BoxWithContentExample : MonoBehaviour
{
    public Texture BoxTexture;      // Drag a Texture onto this item in the Inspector    GUIContent content;    void Start()
    {
        content = new GUIContent("This is a box", BoxTexture, "This is a tooltip");
    }    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), content);
    }
}
```





Here is an example of a Box containing Text, with options set in a GUIStyle to position the Text in the center of the Box.


              


```
using UnityEngine;public class BoxWithTextStyleExample : MonoBehaviour
{
    GUIStyle style = new GUIStyle();    void Start()
    {
        // Position the Text in the center of the Box
        style.alignment = TextAnchor.MiddleCenter;
    }    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), "This is a box", style);
    }
}
```





Here is an example of a Box containing a Texture, with options set in a GUIStyle to position the Texture in the center of the Box.


              


```
using UnityEngine;public class BoxWithTextureStyleExample : MonoBehaviour
{
    public Texture BoxTexture;              // Drag a Texture onto this item in the Inspector    GUIStyle style = new GUIStyle();
    void Start()
    {
        // Position the Texture in the center of the Box
        style.alignment = TextAnchor.MiddleCenter;
    }    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), BoxTexture, style);
    }
}
```





Finally, here is an example of a Box containing a GUIContent, combining Text, Texture and Tooltip, with positional information contained in the GUIStyle parameter:


              


```
using UnityEngine;public class BoxWithContentStyleExample : MonoBehaviour
{
    public Texture BoxTexture;              // Drag a Texture onto this item in the Inspector    GUIContent content;
    GUIStyle style = new GUIStyle();    void Start()
    {
        content = new GUIContent("This is a box", BoxTexture, "This is a tooltip");        // Position the Text and Texture in the center of the box
        style.alignment = TextAnchor.MiddleCenter;        // Position the Text below the Texture (rather than to the right of it)
        style.imagePosition = ImagePosition.ImageAbove;
    }    void OnGUI()
    {
        GUI.Box(new Rect(0, 0, Screen.width, Screen.height), content, style);
    }
}
```


            
