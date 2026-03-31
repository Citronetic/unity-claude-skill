This version of Unity is unsupported.



# [Input](Input.html).GetKey




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

public static bool GetKey(string name);






### Description



Returns true while the user holds down the key identified by `name`.





**Note**: This API is part of the legacy Input Manager. The recommended best practice is that you don't use this API in new projects. For new projects, use the Input System package. To learn more about input, refer to [Input](../Manual/Input.html).

[GetKey](Input.GetKey.html) will report the status of the named key.  This might be
                used to confirm a key is used for auto fire.  For the list of key identifiers
                see [Input Manager](../Manual/ConventionalGameInput.html).
When dealing with input it is recommended to use Input.GetAxis and Input.GetButton instead
since it allows end-users to configure the keys.

**iOS, tvOS**: Due platform limitations,  [GetKeyUp](Input.GetKeyUp.html) event for keyboard events is delayed by about half a second, see UnityView+Keyboard.mm in the generated Xcode project for more information.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKey("up"))
        {
            print("up arrow key is held down");
        }        if (Input.GetKey("down"))
        {
            print("down arrow key is held down");
        }
    }
}
```




---








## Declaration

public static bool GetKey([KeyCode](KeyCode.html) key);






### Description



Returns true while the user holds down the key identified by the `key` [KeyCode](KeyCode.html) enum parameter.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            print("up arrow key is held down");
        }        if (Input.GetKey(KeyCode.DownArrow))
        {
            print("down arrow key is held down");
        }
    }
}
```


            
