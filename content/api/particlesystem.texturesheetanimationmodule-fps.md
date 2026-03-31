This version of Unity is unsupported.



# [ParticleSystem.TextureSheetAnimationModule](ParticleSystem.TextureSheetAnimationModule.html).fps




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




                [Switch to Manual](../Manual/class-ParticleSystem.html)







                    public float fps;






### Description



Control how quickly the animation plays.





The system uses this property when [ParticleSystem.TextureSheetAnimationModule.timeMode](ParticleSystem.TextureSheetAnimationModule-timeMode.html) is set to FPS.


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float fps = 30.0f;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startLifetimeMultiplier = 2.0f;        var tex = ps.textureSheetAnimation;
        tex.enabled = true;
        tex.timeMode = ParticleSystemAnimationTimeMode.FPS;
        tex.numTilesX = 4;
        tex.numTilesY = 2;
    }    void Update()
    {
        var tex = ps.textureSheetAnimation;
        tex.fps = fps;
    }    void OnGUI()
    {
        GUI.Label(new Rect(25, 20, 100, 30), "FPS");        fps = GUI.HorizontalSlider(new Rect(125, 25, 100, 30), fps, 1.0f, 60.0f);
    }
}
```


            
