This version of Unity is unsupported.



# [GameObject](GameObject.html).AddComponent




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

public [Component](Component.html) AddComponent(Type componentType);






### Description



Adds a component of the specified type to the GameObject.





There is no corresponding method for removing a component from a GameObject. To remove a component, use
[Object.Destroy](Object.Destroy.html).


              


```
using UnityEngine;
using System.Collections;public class AddComponentExample : MonoBehaviour
{
    void Start()
    {
        SphereCollider sc = gameObject.AddComponent(typeof(SphereCollider)) as SphereCollider;
    }
}
```





Additional resources: [Component](Component.html), [Object.Destroy](Object.Destroy.html)




---








## Declaration

public T AddComponent();






### Description



Generic version of this method.


              


```
using UnityEngine;
using System.Collections;public class AddComponentExample : MonoBehaviour
{
    void Start()
    {
        SphereCollider sc = gameObject.AddComponent<SphereCollider>();
    }
}
```





Additional resources: [Component](Component.html), [Object.Destroy](Object.Destroy.html)




---






                        **Obsolete**
                        GameObject.AddComponent with string argument has been deprecated. Use GameObject.AddComponent<T>() instead.




## Declaration

public [Component](Component.html) AddComponent(string className);






### Description



Adds a component of the specified class name to the GameObject.





Deprecated: Use AddComponent(Type) or the generic version of this method instead.


            
