This version of Unity is unsupported.



# [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html).HasGroup




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

public static bool HasGroup(string groupName);






### Parameters



| Parameter | Description |
| --- | --- |
| groupName | Name of the texture mipmap limit group to verify. |





### Returns



**bool**
        Returns `true` if a texture mipmap limit group named `groupName` exists in the project. If that is not the case, returns `false`.





### Description



Checks whether a texture mipmap limit group with the indicated `groupName` exists in the project. This operation fails and throws an exception if `groupName` is null.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Checks if the texture mipmap limit group "MyGroup" exists in the project and prints a message to the Unity Console.
    void Start()
    {
        const string textureMipmapLimitGroupName = "MyGroup";
        bool myGroupExists = TextureMipmapLimitGroups.HasGroup(textureMipmapLimitGroupName);
        Debug.Log($"Texture mipmap limit group '{textureMipmapLimitGroupName}' {(myGroupExists ? "exists" : "does not exist")} in this project.");
    }
}
```





Additional resources: [CreateGroup](TextureMipmapLimitGroups.CreateGroup.html), [RemoveGroup](TextureMipmapLimitGroups.RemoveGroup.html).


            
