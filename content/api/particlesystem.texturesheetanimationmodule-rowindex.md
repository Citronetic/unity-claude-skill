This version of Unity is unsupported.



# [ParticleSystem.TextureSheetAnimationModule](ParticleSystem.TextureSheetAnimationModule.html).rowIndex




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







                    public int rowIndex;






### Description



Explicitly select which row of the Texture sheet to use. The system uses this property when [ParticleSystem.TextureSheetAnimationModule.rowMode](ParticleSystem.TextureSheetAnimationModule-rowMode.html) is set to Custom.


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool useRandomRow = true;
    public int row = 0;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startLifetimeMultiplier = 2.0f;        var tex = ps.textureSheetAnimation;
        tex.enabled = true;
        tex.numTilesX = 4;
        tex.numTilesY = 2;
        tex.animation = ParticleSystemAnimationType.SingleRow;
    }    void Update()
    {
        var tex = ps.textureSheetAnimation;
        tex.rowMode = ParticleSystemAnimationRowMode.Custom;
        tex.rowIndex = row;
    }    void OnGUI()
    {
        useRandomRow = GUI.Toggle(new Rect(25, 20, 100, 30), useRandomRow, "Use Random Row");        if (useRandomRow == false)
        {
            GUI.Label(new Rect(25, 60, 100, 30), "Row Index");
            row = (int)GUI.HorizontalSlider(new Rect(125, 65, 100, 30), (float)row, 0.0f, 1.0f);
        }
    }
}
```


            
