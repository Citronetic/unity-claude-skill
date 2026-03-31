This version of Unity is unsupported.



# [Object](Object.html).ToString




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




                [Switch to Manual](../Manual/class-Object.html)










## Declaration

public string ToString();






### Returns



**string**
        The name returned by ToString.





### Description



Returns the name of the object.


              


```
//This script changes Text to the name of the GameObject with the script attached
//Attach this script to a GameObject
//Attach a Text GameObject in the Inspector (Create>UI>Text)using UnityEngine;
using UnityEngine.UI;public class Example : MonoBehaviour
{
    public Text m_Text;    private void Start()
    {
        //Check that the Text is attached in the Inspector
        if (m_Text != null)
            //Change the Text to show the GameObject's name
            m_Text.text = "GameObject Name : " + gameObject.ToString();
    }
}
```


            
