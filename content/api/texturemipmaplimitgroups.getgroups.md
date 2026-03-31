This version of Unity is unsupported.



# [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html).GetGroups




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

public static string[] GetGroups();






### Returns



**string[]**
        String array of texture mipmap limit group names.





### Description



Retrieves a string array containing the name of all texture mipmap limit groups available in the project.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Writes the name of all texture mipmap limit groups available in the project to the Unity Console.
    void Start()
    {
        string[] textureMipmapLimitGroupNames = TextureMipmapLimitGroups.GetGroups();        if (textureMipmapLimitGroupNames.Length == 0)
        {
            Debug.Log("No texture mipmap limit groups have been created in this project.");
        }
        else
        {
            Debug.Log(string.Join(" -- ", textureMipmapLimitGroupNames));
        }
    }
}
```





Additional resources: [RemoveGroup](TextureMipmapLimitGroups.RemoveGroup.html).


            
