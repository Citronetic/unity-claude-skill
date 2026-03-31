This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).sortMode




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












                    public [ParticleSystemSortMode](ParticleSystemSortMode.html) sortMode;






### Description



Specifies how to sort particles within a system.





The sorting behavior is determined by the ParticleSystemSortMode enum. This property controls the order in which particles are sorted for rendering. Sorting modes affect the visual appearance, as particles can be rendered based on attributes like distance, age, or depth.

To learn more about the available sorting modes, refer to the [ParticleSystemSortMode](ParticleSystemSortMode.html) enum.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour {    private ParticleSystem ps;
    private ParticleSystemRenderer psr;
    public ParticleSystemSortMode sortMode;    void Start() {        ps = GetComponent<ParticleSystem>();
        psr = GetComponent<ParticleSystemRenderer>();        // set a slow start speed and high emission rate, to cause more overlap, to show sorting
        var main = ps.main;
        main.startSpeedMultiplier = 0.2f;
        var emission = ps.emission;
        emission.rateOverTimeMultiplier = 100.0f;        // set color over life, so we can see the sorting more easily
        var colorOverLifetime = ps.colorOverLifetime;
        colorOverLifetime.enabled = true;        Gradient gradient = new Gradient();
        gradient.SetKeys(
            new GradientColorKey[] { new GradientColorKey(Color.green, 0.0f), new GradientColorKey(Color.red, 1.0f) },
            new GradientAlphaKey[] { new GradientAlphaKey(1.0f, 0.0f), new GradientAlphaKey(1.0f, 1.0f) }
            );        colorOverLifetime.color = new ParticleSystem.MinMaxGradient(gradient);
    }    void Update() {        psr.sortMode = sortMode;
    }    void OnGUI() {        sortMode = (ParticleSystemSortMode)GUI.SelectionGrid(new Rect(25, 25, 900, 30), (int)sortMode, new GUIContent[] { new GUIContent("None"), new GUIContent("Distance"), new GUIContent("OldestInFront"), new GUIContent("YoungestInFront"), new GUIContent("Depth"), new GUIContent("DistanceReverse"), new GUIContent("DepthReverse") }, 7);
    }
}
```


            
