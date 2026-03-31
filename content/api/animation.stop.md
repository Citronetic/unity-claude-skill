This version of Unity is unsupported.



# [Animation](Animation.html).Stop




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




                [Switch to Manual](../Manual/class-Animation.html)










## Declaration

public void Stop();






### Description



Stops all playing animations that were started with this Animation.





Stopping an animation also Rewinds it to the Start.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    Animation anim;    void Start()
    {
        anim = GetComponent<Animation>();
    }    void Update()
    {
        if (Input.GetButtonDown("Jump") && anim.isPlaying)
        {
            anim.Stop();
        }
    }
}
```




---








## Declaration

public void Stop(string name);






### Description



Stops an animation named `name`.





Stopping an animation also Rewinds it to the Start.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    Animation anim;    void Start()
    {
        anim = GetComponent<Animation>();
    }    void Update()
    {
        if (Input.GetButtonDown("Jump") && anim.isPlaying)
        {
            anim.Stop("CubeJump");
        }
    }
}
```


            
