This version of Unity is unsupported.



# [Input](Input.html).GetKeyUp




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

public static bool GetKeyUp(string name);






### Description



Returns true during the frame the user releases the key identified by `name`.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

Call this function from the [MonoBehaviour.Update](MonoBehaviour.Update.html) function, since the state gets reset each frame.
It will not return true until the user has pressed the key and released it again.

For the list of key identifiers see [Conventional Game Input](../Manual/ConventionalGameInput.html).
When dealing with input it is recommended to use [Input.GetAxis](Input.GetAxis.html) and [Input.GetButton](Input.GetButton.html) instead since it allows end-users to configure the keys.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyUp("space"))
        {
            print("Space key was released");
        }
    }
}
```




---








## Declaration

public static bool GetKeyUp([KeyCode](KeyCode.html) key);






### Description



Returns true during the frame the user releases the key identified by the `key` [KeyCode](KeyCode.html) enum parameter.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyUp(KeyCode.Space))
        {
            print("space key was released");
        }
    }
}
```


            
