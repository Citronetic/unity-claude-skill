This version of Unity is unsupported.



# [ColorUtility](ColorUtility.html).TryParseHtmlString




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

public static bool TryParseHtmlString(string htmlString,
out [Color](Color.html) color);






### Parameters



| Parameter | Description |
| --- | --- |
| htmlString | Case insensitive html string to be converted into a color. |
| color | The converted color. |





### Returns



**bool**
        True if the string was successfully converted else false.





### Description



Attempts to convert a html color string.





**Strings that begin with '#' will be parsed as hexadecimal in the following way:**


#RGB (becomes RRGGBB)

#RRGGBB

#RGBA (becomes RRGGBBAA)

#RRGGBBAA

When not specified alpha will default to FF.

**Strings that do not begin with '#' will be parsed as literal colors, with the following supported:**

red, cyan, blue, darkblue, lightblue, purple, yellow, lime, fuchsia, white, silver, grey, black, orange, brown, maroon, green, olive, navy, teal, aqua, magenta..

The following example creates a custom PropertyDrawer that allows the user to input html colors. This property drawer can be shown in the inspector when a color property has the attribute ColorHtmlProperty.

[Image: image]

*our custom property drawer.*


              


```
// This is not an editor script.
using UnityEngine;public class ColorHtmlPropertyAttribute : PropertyAttribute
{
}
```


              


```
// This is an editor script and should be placed in an 'Editor' directory.
using UnityEngine;
using UnityEditor;[CustomPropertyDrawer(typeof(ColorHtmlPropertyAttribute))]
public class ColorHtmlPropertyDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        Rect htmlField = new Rect(position.x, position.y, position.width - 100, position.height);
        Rect colorField = new Rect(position.x + htmlField.width, position.y, position.width - htmlField.width, position.height);        string htmlValue = EditorGUI.TextField(htmlField, label, "#" + ColorUtility.ToHtmlStringRGBA(property.colorValue));        Color newCol;
        if (ColorUtility.TryParseHtmlString(htmlValue, out newCol))
            property.colorValue = newCol;        property.colorValue = EditorGUI.ColorField(colorField, property.colorValue);
    }
}
```


              


```
// This shows how we would use the PropertyDrawer.
using UnityEngine;public class Example : MonoBehaviour
{
    [ColorHtmlProperty]
    public Color htmlColor = Color.green;    public Color standardColor = Color.green;
}
```


            
