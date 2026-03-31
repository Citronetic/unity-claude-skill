This version of Unity is unsupported.



# [GameObject](GameObject.html).GetComponentAtIndex




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

public [Component](Component.html) GetComponentAtIndex(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index position in the array of components at which to find the requested object. |





### Returns



**Component**
        A reference to a component at the specified index. If no component is found at the specified index, returns `null`.





### Description



Retrieves a reference to a component at a specified index of the GameObject's array of components.





Using `GetComponentAtIndex` is a stable way to access components on a GameObject because the index of a component stays the same unless components are added or removed.

An example use case for this is during UI development. This method throws an exception if the index is out of bounds. Refer to [GameObject.GetComponentCount](GameObject.GetComponentCount.html) for more information.


              


```
using UnityEngine;public class GetComponentAtIndexExample : MonoBehaviour
{
    public GameObject otherGameObject;    void Start()
    {
        HingeJoint hinge = otherGameObject.GetComponentAtIndex(5) as HingeJoint;        if (hinge != null)
        {
            hinge.useSpring = false;
        }
    }
}
```





Additional resources: [Component](Component.html), [GameObject.GetComponents](GameObject.GetComponents.html)




---








## Declaration

public T GetComponentAtIndex(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index position in the array of components at which to find the requested object. |





### Returns



**T**
        A reference to a component of type `T` at the specified index. If no component is found at the specified index, returns `null`.





### Description



Retrieves a reference to a component of type T at a specific index on the specified GameObject.





Using `GetComponentAtIndex` is a stable way to access components on a GameObject because the index of a component stays the same unless components are added or removed.

An example use case for this is during UI development. This method throws an exception if the index is out of bounds.

Additional resources: [GameObject.GetComponentCount](GameObject.GetComponentCount.html)


              


```
using UnityEngine;public class GetTComponentAtIndexExample : MonoBehaviour
{
    public GameObject otherGameObject;    void Start()
    {
        HingeJoint hinge = otherGameObject.GetComponentAtIndex<HingeJoint>(5);        if (hinge != null)
        {
            hinge.useSpring = false;
        }
    }
}
```





Additional resources: [Component](Component.html), [GameObject.GetComponents](GameObject.GetComponents.html)


            
