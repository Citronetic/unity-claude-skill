This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).SetFloat




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















## Declaration

public void SetFloat(int nameID,
float f);






## Declaration

public void SetFloat(string name,
float f);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |
| f | The new float value. |





### Description



Sets the value of a float property exposed in the blackboard.





Automatically changes overridden state for this property to true.


              


```
using UnityEngine;
using UnityEngine.VFX;

class SetFloatExample : MonoBehaviour
{
    [SerializeField] VisualEffect m_Vfx;
    [SerializeField] float m_Frequency = 1f;
    [SerializeField] float m_Phase = 0f;

    static readonly int k_MyValuePropertyNameID = Shader.PropertyToID("MyValueProperty");

    void Update()
    {
        m_Vfx.SetFloat(k_MyValuePropertyNameID, Mathf.Cos(Time.time * m_Frequency + m_Phase));
    }
}
```


            
