This version of Unity is unsupported.



# ScrollViewScope





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



Disposable helper class for managing [BeginScrollView](GUILayout.BeginScrollView.html) / [EndScrollView](GUILayout.EndScrollView.html).





Automatically laid out scrollviews will take whatever content you have inside them and display normally. If it doesn't fit, scrollbars will appear. A call to BeginScrollView must always be matched with a call to EndScrollView.

[Image: image]

*Scroll View in the Game View..*


              


```
using UnityEngine;
using UnityEditor;
public class ExampleClass : MonoBehaviour
{
    // The variable to control where the scrollview 'looks' into its child elements.
    public Vector2 scrollPosition;    // The string to display inside the scrollview. 2 buttons below add & clear this string.
    public string longString = "This is a long-ish string";    void OnGUI()
    {
        // Begin a scroll view. All rects are calculated automatically -
        // it will use up any available screen space and make sure contents flow correctly.
        // This is kept small with the last two parameters to force scrollbars to appear.
        using (var scrollViewScope = new ScrollViewScope(scrollPosition, GUILayout.Width(100), GUILayout.Height(100)))
        {
            scrollPosition = scrollViewScope.scrollPosition;            // We just add a single label to go inside the scroll view. Note how the
            // scrollbars will work correctly with wordwrap.
            GUILayout.Label(longString);            // Add a button to clear the string. This is inside the scroll area, so it
            // will be scrolled as well. Note how the button becomes narrower to make room
            // for the vertical scrollbar
            if (GUILayout.Button("Clear"))
                longString = "";
        }        // Now we add a button outside the scrollview - this will be shown below
        // the scrolling area.
        if (GUILayout.Button("Add More Text"))
            longString += "\nHere is another line";
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| handleScrollWheel | Whether this ScrollView should handle scroll wheel events. (default: true). |
| scrollPosition | The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example. |





### Constructors



| Constructor | Description |
| --- | --- |
| GUILayout.ScrollViewScope | Create a new ScrollViewScope and begin the corresponding ScrollView. |


            
