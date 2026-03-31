This version of Unity is unsupported.



# [Light](Light.html).intensity




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




                [Switch to Manual](../Manual/class-Light.html)







                    public float intensity;






### Description



The Intensity of a light is multiplied with the Light color.





The value can be between 0 and 8. This allows you to create over bright lights.


              


```
using UnityEngine;public class example : MonoBehaviour
{
    Light myLight;    void Start()
    {
        myLight = GetComponent<Light>();
    }    void Update()
    {
        myLight.intensity = Mathf.PingPong(Time.time, 8);
    }
}
```


            
