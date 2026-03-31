This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).startSize3D




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







                    public bool startSize3D;






### Description



A flag to enable specifying particle size individually for each axis.





Additional resources: [MinMaxCurve](ParticleSystem.MinMaxCurve.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValueX = 1.0F;
    public float hSliderValueY = 1.0F;
    public float hSliderValueZ = 1.0F;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startSize3D = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.renderMode = ParticleSystemRenderMode.Mesh;
        psr.mesh = Resources.GetBuiltinResource<Mesh>("Cube.fbx");// use a mesh, because billboards have no Z axis size
        psr.material = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var main = ps.main;
        main.startSizeXMultiplier = hSliderValueX;
        main.startSizeYMultiplier = hSliderValueY;
        main.startSizeZMultiplier = hSliderValueZ;
    }    void OnGUI()
    {
        hSliderValueX = GUI.HorizontalSlider(new Rect(25, 45, 100, 30), hSliderValueX, 0.0F, 360.0F * Mathf.Deg2Rad);
        hSliderValueY = GUI.HorizontalSlider(new Rect(25, 75, 100, 30), hSliderValueY, 0.0F, 360.0F * Mathf.Deg2Rad);
        hSliderValueZ = GUI.HorizontalSlider(new Rect(25, 105, 100, 30), hSliderValueZ, 0.0F, 360.0F * Mathf.Deg2Rad);
    }
}
```


            
