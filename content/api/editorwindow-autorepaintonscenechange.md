This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).autoRepaintOnSceneChange




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












                    public bool autoRepaintOnSceneChange;






### Description



Enable this property to automatically repaint the window when the [SceneView](SceneView.html) is modified.





[Image: image]


*Editor Window that renders what the main camera is "seeing".*


              


```
// Simple script that lets you render the main camera in an Editor Window.

using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class CameraViewer : EditorWindow
{
    Camera camera;
    RenderTexture renderTexture;
    Image image;

    [MenuItem("Examples/Camera Viewer")]
    static void Init()
    {
        EditorWindow editorWindow = GetWindow(typeof(CameraViewer));
        editorWindow.autoRepaintOnSceneChange = true;
        editorWindow.Show();
    }

    public void Awake()
    {
        renderTexture = new RenderTexture((int)position.width,
            (int)position.height,
            (int)RenderTextureFormat.ARGB32);
    }

    public void OnEnable()
    {
        camera = Camera.main;
    }

    void CreateGUI()
    {
        image = new Image();
        image.image = renderTexture;
        image.style.width = Length.Percent(100);
        image.style.height = Length.Percent(100);
        rootVisualElement.Add(image);
    }

    public void Update()
    {
        if (renderTexture.width != position.width ||
            renderTexture.height != position.height)
            renderTexture = new RenderTexture((int)position.width,
                (int)position.height,
                (int)RenderTextureFormat.ARGB32);
            image.image = renderTexture;

        if (camera != null)
        {
            camera.targetTexture = renderTexture;
            camera.Render();
            camera.targetTexture = null;
        }
    }
}
```


            
