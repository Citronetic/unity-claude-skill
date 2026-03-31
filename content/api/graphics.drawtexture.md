This version of Unity is unsupported.



# [Graphics](Graphics.html).DrawTexture




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

public static void DrawTexture([Rect](Rect.html) screenRect,
[Texture](Texture.html) texture,
[Material](Material.html) mat = null,
int pass = -1);






## Declaration

public static void DrawTexture([Rect](Rect.html) screenRect,
[Texture](Texture.html) texture,
int leftBorder,
int rightBorder,
int topBorder,
int bottomBorder,
[Material](Material.html) mat = null,
int pass = -1);






## Declaration

public static void DrawTexture([Rect](Rect.html) screenRect,
[Texture](Texture.html) texture,
[Rect](Rect.html) sourceRect,
int leftBorder,
int rightBorder,
int topBorder,
int bottomBorder,
[Material](Material.html) mat = null,
int pass = -1);






## Declaration

public static void DrawTexture([Rect](Rect.html) screenRect,
[Texture](Texture.html) texture,
[Rect](Rect.html) sourceRect,
int leftBorder,
int rightBorder,
int topBorder,
int bottomBorder,
[Color](Color.html) color,
[Material](Material.html) mat = null,
int pass = -1);






### Parameters



| Parameter | Description |
| --- | --- |
| screenRect | Rectangle on the screen to use for the texture. In pixel coordinates with (0,0) in the upper-left corner. |
| texture | Texture to draw. |
| sourceRect | Region of the texture to use. In normalized coordinates with (0,0) in the bottom-left corner. |
| leftBorder | Number of pixels from the left that are not affected by scale. |
| rightBorder | Number of pixels from the right that are not affected by scale. |
| topBorder | Number of pixels from the top that are not affected by scale. |
| bottomBorder | Number of pixels from the bottom that are not affected by scale. |
| color | Color that modulates the output. The neutral value is (0.5, 0.5, 0.5, 0.5). Set as vertex color for the shader. |
| mat | Custom Material that can be used to draw the texture. Unity passes the texture into the shader as _MainTex. If null is passed, a default material with the Internal-GUITexture.shader is used. |
| pass | If -1 (default), draws all passes in the material. Otherwise, draws given pass only. |





### Description



Draw a texture in screen coordinates.





If you want to draw a texture from inside of OnGUI code, you should only do that from [EventType.Repaint](EventType.Repaint.html)
events. It's probably better to use [GUI.DrawTexture](GUI.DrawTexture.html) for GUI code.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draws a texture on the screen at 10, 10 with 100 width, 100 height.    Texture aTexture;    void OnGUI()
    {
        if (Event.current.type.Equals(EventType.Repaint))
        {
            Graphics.DrawTexture(new Rect(10, 10, 100, 100), aTexture);
        }
    }
}
```


            
