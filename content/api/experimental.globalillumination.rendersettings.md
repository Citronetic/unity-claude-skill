This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# RenderSettings





class in
          UnityEngine.Experimental.GlobalIllumination



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Render settings related to Global Illumination.





`RenderSettings` classes contain values for visual elements in your scene.

Adjust the properties of a `RenderSettings` class to change how a scene looks at runtime.

To change other render settings, use the UnityEngine.RenderSettings class.


              


```
using UnityEngine;
using static UnityEngine.Experimental.GlobalIllumination.RenderSettings;public class MonoBehaviourScript : MonoBehaviour
{
    [SerializeField]
    private bool enableRadianceAmbientProbe = true;    void Start()
    {
        useRadianceAmbientProbe = enableRadianceAmbientProbe; // Simply set true/false as needed        Debug.Log("Radiance Ambient Probe Enabled: " + useRadianceAmbientProbe);
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| useRadianceAmbientProbe | If enabled, ambient trilight will be sampled using the old radiance sampling method. |


            
