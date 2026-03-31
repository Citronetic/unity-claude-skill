This version of Unity is unsupported.



# [ParticleSystem.TextureSheetAnimationModule](ParticleSystem.TextureSheetAnimationModule.html).enabled




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







                    public bool enabled;






### Description



Specifies whether the TextureSheetAnimationModule is enabled or disabled.





Additional resources: [ParticleSystem.textureSheetAnimation](ParticleSystem-textureSheetAnimation.html).


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public ParticleSystemAnimationType animType;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startLifetimeMultiplier = 2.0f;        var tex = ps.textureSheetAnimation;
        tex.enabled = true;
        tex.numTilesX = 4;
        tex.numTilesY = 2;
    }    void Update()
    {
        var tex = ps.textureSheetAnimation;
        tex.animation = animType;
    }    void OnGUI()
    {
        animType = (ParticleSystemAnimationType)GUI.SelectionGrid(new Rect(25, 25, 300, 30), (int)animType, new GUIContent[] { new GUIContent("WholeSheet"), new GUIContent("SingleRow") }, 2);
    }
}
```


            
