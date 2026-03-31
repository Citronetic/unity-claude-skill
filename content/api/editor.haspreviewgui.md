This version of Unity is unsupported.



# [Editor](Editor.html).HasPreviewGUI




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

public bool HasPreviewGUI();






### Returns



**bool**
        True if this component can be Previewed in its current state.





### Description



Override this method in subclasses if you implement [OnPreviewGUI](Editor.OnPreviewGUI.html).





You can also use it to disable or enable preview depending on the target asset.
The default implementation simply returns false, so if you override [OnPreviewGUI](Editor.OnPreviewGUI.html) you have to override this method as well.

**Note:** Inspector previews are limited to the primary editor of persistent objects (assets), e.g., GameObjectInspector, MaterialEditor, TextureInspector.
This means that it is currently not possible for a component to have its own inspector preview.


              


```
using UnityEngine;
using UnityEditor;public class GameObjectEditorWindow: EditorWindow
{
    GameObject gameObject;
    Editor gameObjectEditor;    [MenuItem("Window/GameObject Editor")]
    static void ShowWindow()
    {
        GetWindow<GameObjectEditorWindow>("GameObject Editor");
    }    void OnGUI()
    {
        gameObject = (GameObject) EditorGUILayout.ObjectField(gameObject, typeof(GameObject), true);        if (gameObject != null)
        {
            if (gameObjectEditor == null)
                gameObjectEditor = Editor.CreateEditor(gameObject);            gameObjectEditor.OnPreviewGUI(GUILayoutUtility.GetRect(500, 500), EditorStyles.whiteLabel);
        }
    }
}
```


            
