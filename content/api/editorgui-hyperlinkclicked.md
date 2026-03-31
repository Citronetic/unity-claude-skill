This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).hyperLinkClicked




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | The first parameter of type EditorWindow corresponds to the window that contains the text that was clicked. The second parameter of type HyperLinkClickedEventArgs  contains the hyperlink data. |





### Description



Event used to react on clicks on a text hyperlink part.





On a rich text string, a hyperlink is defined with the <a> tag.


              


```
<a href="https://docs.unity3d.com">Documentation link</a>
```





The hyperlink parameters are returned in the [HyperLinkClickedEventArgs](HyperLinkClickedEventArgs.html).

In the example above, the [HyperLinkClickedEventArgs.hyperLinkData](HyperLinkClickedEventArgs-hyperLinkData.html) dictionary will have one element of key "href" and of value "https://docs.unity3d.com".

Do note that this parameter is already covered  by default to open uri. It also handles paths and you can add the line parameter to open the file directly on a specific line.

It is possible to have only part of a string in a hyperlink or even multiple hyperlinks per string.


              


```
This is the <a href=\"https://unity.com/\">unity website</a> and this is the <a href=\"https://docs.unity3d.com\">unity documentation website</a>
```





The event contains information only on the hyperlink part that is clicked.

Use the window parameter in order to react only on hyperlinks that were clicked in that window. If you don't filter on the window, you might react to other hyperlinks like the ones in the Console or the Profiler.


              


```
using System;
using UnityEditor;
using UnityEngine;

class EditorGUIHyperLinkClicked : EditorWindow
{
    [MenuItem("Examples/EditorGUIHyperLinkClicked")]
    static void Init()
    {
        var window = GetWindow<EditorGUIHyperLinkClicked>();
        window.Show();
    }

    void OnGUI()
    {
        GUIStyle style = new GUIStyle() { richText = true };
        EditorGUILayout.TextField("<a data=\"some data\" otherData=\"some other data\">displayed string</a>", style);
    }

    static EditorGUIHyperLinkClicked()
    {
        EditorGUI.hyperLinkClicked += EditorGUI_hyperLinkClicked;
    }

    private static void EditorGUI_hyperLinkClicked(EditorWindow window, HyperLinkClickedEventArgs args)
    {
        if (window.titleContent.text == "EditorGUIHyperLinkClicked")
        {
            var hyperLinkData = args.hyperLinkData;
            var data = hyperLinkData["data"];
            var otherData = hyperLinkData["otherData"];

            Debug.Log($"data: {data}, otherData: {otherData}");
        }
    }
}
```


            
