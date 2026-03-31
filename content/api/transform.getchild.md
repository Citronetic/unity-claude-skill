This version of Unity is unsupported.



# [Transform](Transform.html).GetChild




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




                [Switch to Manual](../Manual/class-Transform.html)










## Declaration

public [Transform](Transform.html) GetChild(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index of the child transform to return. Must be smaller than Transform.childCount. |





### Returns



**Transform**
        Transform child by index.





### Description



Returns a transform child by index.





If the transform has no child, or the index argument has a value greater than the number of children then an error will be generated. In this case "Transform child out of bounds" error will be given.  The number of children can be provided by [childCount](Transform-childCount.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform meeple;
    public GameObject grandChild;    public void Example()
    {
        //Assigns the transform of the first child of the Game Object this script is attached to.
        meeple = this.gameObject.transform.GetChild(0);        //Assigns the first child of the first child of the Game Object this script is attached to.
        grandChild = this.gameObject.transform.GetChild(0).GetChild(0).gameObject;
    }
}
```


            
