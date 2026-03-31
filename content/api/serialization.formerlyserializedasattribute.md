This version of Unity is unsupported.



# FormerlySerializedAsAttribute





class in
          UnityEngine.Serialization



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Use this attribute to rename a field without losing its serialized value.





This is an Editor-only attribute and can't be used at runtime. For example, if you have a class like this:


              


```
using UnityEngine;public class MyMonster : MonoBehaviour
{
    public int hitpoints;
}
```





And you would now like to rename this field. You can achieve that by using this attribute:


              


```
using UnityEngine;
using UnityEngine.Serialization;public class MyMonster : MonoBehaviour
{
    [FormerlySerializedAs("hitpoints")]
    public int health;
}
```





Unity serializes public variables by default. To serialize private variables, use the SerializeField attribute. For more information, see the [Script Serialization documentation](../Manual/script-serialization.html).





### Properties



| Property | Description |
| --- | --- |
| oldName | The name of the field before the rename. |





### Constructors



| Constructor | Description |
| --- | --- |
| FormerlySerializedAsAttribute |  |


            
