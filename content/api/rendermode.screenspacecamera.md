This version of Unity is unsupported.



# [RenderMode](RenderMode.html).ScreenSpaceCamera




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



Render using the [Camera](Camera.html) configured on the Canvas.


              


```
//Attach this script to your Canvas GameObjectusing UnityEngine;public class Example : MonoBehaviour
{
    enum RenderModeStates { camera, overlay, world };
    RenderModeStates m_RenderModeStates;    Canvas m_Canvas;    // Use this for initialization
    void Start()
    {
        m_Canvas = GetComponent<Canvas>();
    }    // Update is called once per frame
    void Update()
    {
        //Press the space key to switch between render mode states
        if (Input.GetKeyDown(KeyCode.Space))
        {
            ChangeState();
        }
    }    void ChangeState()
    {
        switch (m_RenderModeStates)
        {
            case RenderModeStates.camera:
                m_Canvas.renderMode = RenderMode.ScreenSpaceCamera;
                m_RenderModeStates = RenderModeStates.overlay;
                break;            case RenderModeStates.overlay:
                m_Canvas.renderMode = RenderMode.ScreenSpaceOverlay;
                m_RenderModeStates = RenderModeStates.world;
                break;
            case RenderModeStates.world:
                m_Canvas.renderMode = RenderMode.WorldSpace;
                m_RenderModeStates = RenderModeStates.camera;                break;
        }
    }
}
```


            
