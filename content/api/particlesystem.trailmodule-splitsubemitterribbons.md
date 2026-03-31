This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).splitSubEmitterRibbons




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







                    public bool splitSubEmitterRibbons;






### Description



Specifies whether, if you use this system as a sub-emitter, ribbons connect particles from each parent particle independently.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    private ParticleSystem sps;
    public bool splitSubEmitterRibbons = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = new ParticleSystem.MinMaxCurve(0.01f, 1.0f);
        main.startLifetime = 1.5f;        sps = new GameObject("SubEmitter", typeof(ParticleSystem)).GetComponent<ParticleSystem>();
        sps.transform.parent = ps.transform;        var sub = ps.subEmitters;
        sub.enabled = true;
        sub.AddSubEmitter(sps, ParticleSystemSubEmitterType.Birth, ParticleSystemSubEmitterProperties.InheritColor);        var smain = sps.main;
        smain.startSpeed = 0.0f;        var sshape = sps.shape;
        sshape.enabled = false;        var strails = sps.trails;
        strails.enabled = true;
        strails.mode = ParticleSystemTrailMode.Ribbon;
        strails.widthOverTrail = 0.1f;        var spsr = sps.GetComponent<ParticleSystemRenderer>();
        spsr.renderMode = ParticleSystemRenderMode.None;
        spsr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var strails = sps.trails;
        strails.splitSubEmitterRibbons = splitSubEmitterRibbons;
    }    void OnGUI()
    {
        splitSubEmitterRibbons = GUI.Toggle(new Rect(25, 25, 200, 30), splitSubEmitterRibbons, "Split Sub Emitter Ribbons");
    }
}
```


            
