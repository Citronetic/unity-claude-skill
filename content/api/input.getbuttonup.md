This version of Unity is unsupported.



# [Input](Input.html).GetButtonUp




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

public static bool GetButtonUp(string buttonName);






### Description



Returns true the first frame the user releases the virtual button identified by `buttonName`.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

Call this function from the [MonoBehaviour.Update](MonoBehaviour.Update.html) function, since the state gets reset each frame.
It will not return true until the user has pressed the button and released it again.

Use this only when implementing action like events IE: shooting a weapon.

Use [Input.GetAxis](Input.GetAxis.html) for any kind of movement behaviour.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject projectile;
    void Update()
    {
        if (Input.GetButtonUp("Fire1"))
            Instantiate(projectile, transform.position, transform.rotation);
    }
}
```


            
