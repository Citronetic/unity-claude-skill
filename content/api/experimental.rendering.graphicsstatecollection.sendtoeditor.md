This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [GraphicsStateCollection](Experimental.Rendering.GraphicsStateCollection.html).SendToEditor




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

public bool SendToEditor(string fileName);






### Parameters



| Parameter | Description |
| --- | --- |
| fileName | Name of the GraphicsStateCollection file saved by the Editor. |





### Returns



**bool**
        Returns true if successfully sent, false otherwise.





### Description



Send GraphicsStateCollection to the Editor using PlayerConnection.





This method sends serialized GraphicsStateCollection data to a connected Editor instance on-demand.

The Editor instance will save the GraphicsStateCollection to disk in the open project's Assets folder.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using UnityEngine.Networking.PlayerConnection;public class SendToEditorExample : MonoBehaviour
{
    public GraphicsStateCollection graphicsStateCollection;
    public string fileName;    void Start()
    {
        graphicsStateCollection = new GraphicsStateCollection();
        graphicsStateCollection.BeginTrace();
    }    void OnDestroy()
    {
        graphicsStateCollection.EndTrace();
        if (PlayerConnection.instance.isConnected)
        {
            graphicsStateCollection.SendToEditor(fileName);
        }
        else
        {
             Debug.Log("No PlayerConnection found! Collection not sent to Editor.");
        }
    }
}
```


            
