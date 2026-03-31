This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).enabled




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



Specifies whether the CustomDataModule is enabled or disabled.





Additional resources: [ParticleSystem.customData](ParticleSystem-customData.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool moduleEnabled;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var customData = ps.customData;
        customData.enabled = moduleEnabled;
    }    void OnGUI()
    {
        moduleEnabled = GUI.Toggle(new Rect(25, 45, 100, 30), moduleEnabled, "Enabled");
    }
}
```


            
