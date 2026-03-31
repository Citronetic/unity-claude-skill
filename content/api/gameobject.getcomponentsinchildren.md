This version of Unity is unsupported.



# [GameObject](GameObject.html).GetComponentsInChildren




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

public T[] GetComponentsInChildren();






## Declaration

public T[] GetComponentsInChildren(bool includeInactive);






### Parameters



| Parameter | Description |
| --- | --- |
| includeInactive | Whether to include inactive child GameObjects in the search. |





### Returns



**T[]**
        An array containing all matching components of type `T`.





### Description



Retrieves references to all components of type T on the specified GameObject, and any child of the GameObject.





The typical usage for this method is to call it on a reference to a different GameObject than the one your script is on. For example:

`myResults = otherGameObject.GetComponentsInChildren<ComponentType>()`

However, if you're writing code inside a MonoBehaviour class, you can omit the preceding GameObject reference to perform the search on the same GameObject your script is attached to. In this instance, you're actually calling [Component.GetComponentsInChildren](Component.GetComponentsInChildren.html) because the script itself is a type of component, but the result is the same as if you'd referenced the GameObject itself. For example:

`myResults = GetComponentsInChildren<ComponentType>()`

`GetComponentsInChildren` checks the GameObject on which it is called first, then recurses downwards through all child GameObjects using a depth-first search, until it finds a matching Component of the type `T` specified.

Only active child GameObjects are included in the search, unless you call the method with the `includeInactive` parameter set to `true`, in which case inactive child GameObjects are also included. The GameObject on which the method is called is always searched regardless of this parameter.

To find components attached to other GameObjects, you need a [reference to that other GameObject](../Manual/class-GameObject.html#AccessingOtherGameObjects) (or any component attached to that GameObject). You can then call `GetComponentsInChildren` on that reference.

**Note**: If the type you request is a derivative of MonoBehaviour and the associated script can't be loaded then this function will return `null` for that component.

The following example gets a reference to all hinge joint components on the same GameObject as the script, or any of its children, and if found, sets a property on those components.


              


```
using UnityEngine;public class GetComponentsInChildrenExample : MonoBehaviour
{
    // Disable the spring on all HingeJoints in the referenced GameObject and its children    public GameObject objectToCheck;    void Start()
    {
        HingeJoint[] hingeJoints;        hingeJoints = objectToCheck.GetComponentsInChildren<HingeJoint>();        if (hingeJoints != null)
        {
            foreach (HingeJoint joint in hingeJoints)
            {
                joint.useSpring = false;
            }
        }
        else
        {
            // Try again, looking for inactive GameObjects
            HingeJoint[] hingesInactive = objectToCheck.GetComponentsInChildren<HingeJoint>(true);            foreach (HingeJoint joint in hingesInactive)
            {
                joint.useSpring = false;
            }
        }
    }
}
```





Additional resources: [Component](Component.html), [GameObject.GetComponentsInParent](GameObject.GetComponentsInParent.html)




---








## Declaration

public void GetComponentsInChildren(List<T> results);






## Declaration

public void GetComponentsInChildren(bool includeInactive,
List<T> results);






### Parameters



| Parameter | Description |
| --- | --- |
| results | List to receive found Components. |
| includeInactive | Whether to include inactive child GameObjects in the search. |





### Description



A variation of the `GetComponentsInChildren` method which allows you to supply your own List to be filled with results.





This allows you to avoid allocating new List objects for each call to the method. The list you supply is resized to match the number of results found, and any existing values in the list are overritten.


              


```
using UnityEngine;
using System.Collections.Generic;public class GetComponentsInChildrenExample : MonoBehaviour
{
    // Disable the spring on all HingeJoints in the referenced GameObject and its children    public GameObject objectToCheck;    void Start()
    {
        List<HingeJoint> hingeJoints = new List<HingeJoint>();        objectToCheck.GetComponentsInChildren<HingeJoint>(false, hingeJoints);        if (hingeJoints != null)
        {
            foreach (HingeJoint joint in hingeJoints)
            {
                joint.useSpring = false;
            }
        }
        else
        {
            // Try again, looking for inactive GameObjects
            List<HingeJoint> hingesInactive = new List<HingeJoint>();            objectToCheck.GetComponentsInChildren<HingeJoint>(true, hingesInactive);            foreach (HingeJoint joint in hingesInactive)
            {
                joint.useSpring = false;
            }
        }
    }
}
```





Additional resources: [Component](Component.html), [GameObject.GetComponentsInParent](GameObject.GetComponentsInParent.html)




---








## Declaration

public Component[] GetComponentsInChildren(Type type,
bool includeInactive = false);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of component to search for. |
| includeInactive | Whether to include inactive child GameObjects in the search. |





### Returns



**Component[]**
        An array of all found components matching the specified `type`.





### Description



The non-generic version of this method.





This version of `GetComponentsInChildren` is not as efficient as the Generic version (above), so you should only use it if necessary.


            
