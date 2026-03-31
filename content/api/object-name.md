This version of Unity is unsupported.



# [Object](Object.html).name




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







                    public string name;






### Description



The name of the object.





Components share the same name with the game object and all attached components. If a class derives from MonoBehaviour it inherits the "name" field from [MonoBehaviour](MonoBehaviour.html). If this class is also attached to GameObject, then "name" field is set to the name of that GameObject.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject exampleOne;
    public GameObject exampleTwo;
    public GameObject exampleThree;    void Start()
    {
        //Sets the name of GameObject One.
        exampleOne.name = "Ben";
        //Sets the name of GameObject Two.
        exampleTwo.name = "Ryan";
        //Sets the name of GameObject Three.
        exampleThree.name = "Oscar";        //Displays their names in the console.
        Debug.Log("The names of these three objects are " + exampleOne.name + exampleTwo.name + exampleThree.name);
    }
}
```


            
