This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CollectDeepHierarchy




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

public static Object[] CollectDeepHierarchy(Object[] roots);






### Parameters



| Parameter | Description |
| --- | --- |
| roots | Array of objects where the search will start. |





### Returns



**Object[]**
        Array of objects heirarchically attached to the search array.





### Description



Collect all objects in the hierarchy rooted at each of the given objects.





This is most useful for linearizing entire GameObject hierarchies including all their components.

Note that the traversal will not include assets referenced from within the hierarchy. For example, having a MeshFilter component in the hierarchy will not cause the referenced Mesh to be included in the resulting list.


              


```
using UnityEngine;
using UnityEditor;public class CollectHierarchyExample : MonoBehaviour
{
    void Start()
    {
        // Create two GameObjects
        GameObject  parent = new GameObject();
        GameObject  child = new GameObject();
        Object[]    roots = new Object[] { parent };        // Name them
        parent.name = "Parent";
        child.name = "Child";        // Make one a child of the other.
        child.transform.parent = parent.transform;        // Collect entire hierarchy
        Object[] result = EditorUtility.CollectDeepHierarchy(roots);        // Dump results.  Will log four objects to the console;
        // two GameObjects ("Parent" and "Child") and two Transform
        // components (one belonging to "Parent" and one belonging to
        // "Child")
        foreach (Object obj in result)
            Debug.Log(obj);
    }
}
```


            
