This version of Unity is unsupported.



# [Renderer](Renderer.html).isVisible




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












                    public bool isVisible;






### Description



Is this renderer visible in any camera? (Read Only)





Note that the object is considered visible when it needs to be rendered in the Scene. For example, it
might not actually be visible by any camera but still need to be rendered for shadows.
When running in the editor, the Scene view cameras will also cause this value to be true.

Additional resources: [OnBecameVisible](Renderer.OnBecameVisible.html), [OnBecameInvisible](Renderer.OnBecameInvisible.html).


              


```
//Attach this script to a GameObject with a Renderer component attached
//If the GameObject is visible to the camera, the message is output to the consoleusing UnityEngine;public class IsVisible : MonoBehaviour
{
    Renderer m_Renderer;
    // Use this for initialization
    void Start()
    {
        m_Renderer = GetComponent<Renderer>();
    }    // Update is called once per frame
    void Update()
    {
        if (m_Renderer.isVisible)
        {
            Debug.Log("Object is visible");
        }
        else Debug.Log("Object is no longer visible");
    }
}
```


            
