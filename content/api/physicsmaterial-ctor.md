This version of Unity is unsupported.



# PhysicsMaterial Constructor




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




                [Switch to Manual](../Manual/class-PhysicsMaterial.html)










## Declaration

public PhysicsMaterial();






### Description



Creates a new material.





Note that although this function lets you create a new physics material from a script, it is generally easier to create and assign the material from the editor.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Collider coll;    void Start()
    {
        coll = GetComponent<Collider>();        PhysicsMaterial material = new PhysicsMaterial();
        material.dynamicFriction = 1;
        coll.material = material;
    }
}
```




---








## Declaration

public PhysicsMaterial(string name);






### Description



Creates a new material named `name`.


            
