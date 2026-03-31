This version of Unity is unsupported.



# [IIconOverlayExtension](VersionControl.IIconOverlayExtension.html).DrawOverlay




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

public void DrawOverlay(string assetPath,
[VersionControl.IconOverlayType](VersionControl.IconOverlayType.html) type,
[Rect](Rect.html) rect);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Asset path. |
| type | Icon overlay type. |
| rect | Icon bounding box. |





### Description



Draws icon overlay.





Unity calls this method after drawing an asset icon.


              


```
using UnityEditor.VersionControl;
using UnityEngine;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject, IIconOverlayExtension
{
    static Texture2D s_Icon;    static Texture2D GetIcon()
    {
        if (s_Icon == null)
        {
            s_Icon = new Texture2D(8, 8);
            for (var y = 0; y < s_Icon.height; ++y)
            {
                for (var x = 0; x < s_Icon.width; ++x)
                {
                    var border = y == 0 || y == s_Icon.height - 1 || x == 0 || x == s_Icon.width - 1;
                    var color = border ? Color.white : Color.red;
                    s_Icon.SetPixel(x, y, color);
                }
            }
            s_Icon.Apply();
        }
        return s_Icon;
    }    public void DrawOverlay(string assetPath, IconOverlayType type, Rect rect)
    {
        var topLeft = new Rect(rect.x, rect.y, 8, 8);
        var icon = GetIcon();
        GUI.DrawTexture(topLeft, icon);
    }
}
```





Additional resources: [IIconOverlayExtension](VersionControl.IIconOverlayExtension.html), [VersionControlObject](VersionControl.VersionControlObject.html), [IconOverlayType](VersionControl.IconOverlayType.html).


            
