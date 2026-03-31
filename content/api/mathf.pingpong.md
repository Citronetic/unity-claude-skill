This version of Unity is unsupported.



# [Mathf](Mathf.html).PingPong




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




                [Switch to Manual](../Manual/class-Mathf.html)










## Declaration

public static float PingPong(float t,
float length);






### Description



PingPong returns a value that increments and decrements between zero and the length. It follows the triangle wave formula where the bottom is set to zero and the peak is set to `length`.





PingPong requires the value `t` to be a self-incrementing value. For example, Time.time and Time.unscaledTime.

The example below shows a simple use case with the light intensity going from 0 to 8 to 0 continuously.


              


```
using UnityEngine;public class PingPongExample : MonoBehaviour
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





The example below shows some outputs as example.


              


```
using UnityEngine;public class OutputExample : MonoBehaviour
{
    void Start()
    {
        // Prints 2
        Debug.Log(Mathf.PingPong(2, 5));        // Prints 3
        Debug.Log(Mathf.PingPong(7, 5));

        // Prints 1
        Debug.Log(Mathf.PingPong(11, 5));
    }
}
```


            
