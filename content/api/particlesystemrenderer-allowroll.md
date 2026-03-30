This version of Unity is unsupported.



# [ParticleSystemRenderer](ParticleSystemRenderer.html).allowRoll




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












                    public bool allowRoll;






### Description



Allow billboard particles to roll around their z-axis.





Allows billboards to roll with the Camera. It is often useful to disable this option when using VR, to give particles a more believable grounding in the world.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{    private ParticleSystemRenderer psr;
    public bool allowRoll = true;    void Start()
    {
        psr = GetComponent<ParticleSystemRenderer>();
        psr.material = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        var psr = GetComponent<ParticleSystemRenderer>();
        psr.allowRoll = allowRoll;        Camera.main.transform.rotation = Quaternion.Euler(0.0f, 0.0f, Mathf.Sin(Time.time * 0.2f) * 90.0f);
    }    void OnGUI()
    {
        allowRoll = GUI.Toggle(new Rect(25, 45, 200, 30), allowRoll, "Allow Roll");
    }
}
```


            
