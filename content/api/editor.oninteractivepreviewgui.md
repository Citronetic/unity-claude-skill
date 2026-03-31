This version of Unity is unsupported.



# [Editor](Editor.html).OnInteractivePreviewGUI




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

public void OnInteractivePreviewGUI([Rect](Rect.html) r,
[GUIStyle](GUIStyle.html) background);






### Parameters



| Parameter | Description |
| --- | --- |
| r | Rectangle in which to draw the preview. |
| background | Background image. |





### Description



Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.





Implement this method, instead of [OnPreviewGUI](Editor.OnPreviewGUI.html), to display interactive custom previews. You can implement both methods when some previews are interactive and others are not.
The overidden method should use the rectangle passed in and render a preview of the asset.
The default implementation is a no-op.

**Note:** Inspector previews are limited to the primary editor of persistent objects (assets). For example, GameObjectInspector, MaterialEditor, TextureInspector, and so on.
This means that it is currently not possible for a component to have its own inspector preview.


              


```
using UnityEngine;
using UnityEditor;// Create an editor window which can display a chosen GameObject.
// Use OnInteractivePreviewGUI to display the GameObject and
// allow it to be interactive.public class ExampleClass: EditorWindow
{
    GameObject gameObject;
    Editor gameObjectEditor;    [MenuItem("Example/GameObject Editor")]
    static void ShowWindow()
    {
        GetWindowWithRect<ExampleClass>(new Rect(0, 0, 256, 256));
    }    void OnGUI()
    {
        gameObject = (GameObject) EditorGUILayout.ObjectField(gameObject, typeof(GameObject), true);        GUIStyle bgColor = new GUIStyle();
        bgColor.normal.background = EditorGUIUtility.whiteTexture;        if (gameObject != null)
        {
            if (gameObjectEditor == null)
                gameObjectEditor = Editor.CreateEditor(gameObject);            gameObjectEditor.OnInteractivePreviewGUI(GUILayoutUtility.GetRect(256, 256), bgColor);
        }
    }
}
```


            
