This version of Unity is unsupported.



# [GameObject](GameObject.html).Find




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




                [Switch to Manual](../Manual/class-GameObject.html)










## Declaration

public static [GameObject](GameObject.html) Find(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name or hierarchy path of the GameObject to find. |





### Description



Finds and returns a GameObject with the specified name or hierarchy path.





Only returns active GameObjects. Returns `null` if no GameObject with `name` exists. If `name` contains a `/` character, it is treated as a path to the GameObject in the Hierarchy window.

If a path starts with `/`, the first object in the path must not have any parents in the Hierarchy view. Paths that don't start with a `/` can start from a child GameObject. For example, if there is a GameObject named Hand which is a child of Arm which is a child of Monster, you can find it with `/Monster/Arm/Hand` or `Arm/Hand` but not `/Arm/Hand`.

`GameObject.Find` causes significant performance degradation at scale and is not recommended for performance-critical code, especially in [MonoBehaviour.Update](MonoBehaviour.Update.html). `Find` searches the entire scene and if the game is running with multiple scenes, it searches all of them. The search is linear, checking each GameObject one by one and, in the case of a path, traversing the hierarchy. The result is not cached automatically and every call performs the full search again.

The more GameObjects you have and the more frequently you call `GameObject.Find`, the greater the impact on your application's performance. Instead, cache the result in a member variable at startup, or use [GameObject.FindWithTag](GameObject.FindWithTag.html).

To find a child GameObject, it's often preferable to use [Transform.Find](Transform.Find.html), which only searches the children of the specific transform rather than the whole scene.


              


```
using UnityEngine;
using System.Collections;// This returns the GameObject named Hand in one of the Scenes.public class ExampleClass : MonoBehaviour
{
    public GameObject hand;    void Example()
    {
        // This returns the GameObject named Hand.
        hand = GameObject.Find("Hand");        // This returns the GameObject named Hand.
        // Hand must not have a parent in the Hierarchy view.
        hand = GameObject.Find("/Hand");        // This returns the GameObject named Hand,
        // which is a child of Arm > Monster.
        // Monster must not have a parent in the Hierarchy view.
        hand = GameObject.Find("/Monster/Arm/Hand");        // This returns the GameObject named Hand,
        // which is a child of Arm > Monster.
        // Monster can have a parent in the Hierarchy view.
        hand = GameObject.Find("Monster/Arm/Hand");
    }
}
```





`GameObject.Find` is useful for automatically connecting references to other objects at load time; for example, inside [MonoBehaviour.Awake](MonoBehaviour.Awake.html) or [MonoBehaviour.Start](MonoBehaviour.Start.html).

A common pattern is to assign a GameObject to a variable inside [MonoBehaviour.Start](MonoBehaviour.Start.html), and use the variable in [MonoBehaviour.Update](MonoBehaviour.Update.html).


              


```
using UnityEngine;
using System.Collections;// Find the GameObject named Hand and rotate it every framepublic class ExampleClass : MonoBehaviour
{
    private GameObject hand;    void Start()
    {
        hand = GameObject.Find("/Monster/Arm/Hand");
    }    void Update()
    {
        hand.transform.Rotate(0, 100 * Time.deltaTime, 0);
    }
}
```





Additional resources: [GameObject.FindGameObjectsWithTag](GameObject.FindGameObjectsWithTag.html)


            
