This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).scalingMode




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







                    public [ParticleSystemScalingMode](ParticleSystemScalingMode.html) scalingMode;






### Description



Control how the Particle System applies its Transform component to the particles it emits.





Hierarchy: Scale according to its Transform and all its parents.
Local: Scale using only its own Transform, ignoring all parents.
Shape: Only apply scale to the source positions of the particles, but not their size. The source positions are defined by the Shape module.


              


```
using UnityEngine;
using System.Collections;// add this to a Particle System which has a parent game object, to see how each scaling mode works
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float sliderValue = 1.0F;
    public float parentSliderValue = 1.0F;
    public ParticleSystemScalingMode scaleMode;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        ps.transform.localScale = new Vector3(sliderValue, sliderValue, sliderValue);
        if (ps.transform.parent != null)
            ps.transform.parent.localScale = new Vector3(parentSliderValue, parentSliderValue, parentSliderValue);        var main = ps.main;
        main.scalingMode = scaleMode;
    }    void OnGUI()
    {
        scaleMode = (ParticleSystemScalingMode)GUI.SelectionGrid(new Rect(25, 25, 300, 30), (int)scaleMode, new GUIContent[] { new GUIContent("Hierarchy"), new GUIContent("Local"), new GUIContent("Shape") }, 3);
        GUI.Label(new Rect(25, 80, 100, 30), "Scale");
        sliderValue = GUI.HorizontalSlider(new Rect(125, 85, 100, 30), sliderValue, 0.0F, 5.0F);
        GUI.Label(new Rect(25, 120, 100, 30), "Parent Scale");
        parentSliderValue = GUI.HorizontalSlider(new Rect(125, 125, 100, 30), parentSliderValue, 0.0F, 5.0F);
    }
}
```


            
