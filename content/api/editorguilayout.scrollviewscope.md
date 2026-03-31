This version of Unity is unsupported.



# ScrollViewScope





class in
          UnityEditor


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



Disposable helper class for managing [BeginScrollView](EditorGUILayout.BeginScrollView.html) / [EndScrollView](EditorGUILayout.EndScrollView.html).





These work just like [ScrollViewScope](GUILayout.ScrollViewScope.html) but feel more application-like and should be used in the editor

[Image: image]

*Label inside a scroll view.*


              


```
using UnityEngine;
using UnityEditor;// Simple Editor Window that creates a scroll view with a Label inside
class BeginEndScrollView : EditorWindow
{
    Vector2 scrollPos;
    string t = "This is a string inside a Scroll view!";    [MenuItem("Examples/Write text on ScrollView")]
    static void Init()
    {
        var window = GetWindow<BeginEndScrollView>();
        window.Show();
    }    void OnGUI()
    {
        using (var h = new EditorGUILayout.HorizontalScope())
        {
            using (var scrollView = new EditorGUILayout.ScrollViewScope(scrollPos, GUILayout.Width(100), GUILayout.Height(100)))
            {
                scrollPos = scrollView.scrollPosition;
                GUILayout.Label(t);
            }
            if (GUILayout.Button("Add More Text", GUILayout.Width(100), GUILayout.Height(100)))
                t += " \nAnd this is more text!";
        }
        if (GUILayout.Button("Clear"))
            t = "";
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
| EditorGUILayout.ScrollViewScope | Create a new ScrollViewScope and begin the corresponding ScrollView. |


            
