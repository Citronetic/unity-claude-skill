This version of Unity is unsupported.



# [Transform](Transform.html).Find




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

public [Transform](Transform.html) Find(string n);






### Parameters



| Parameter | Description |
| --- | --- |
| n | The search string, either the name of an immediate child or a hierarchy path for finding a descendent. |





### Returns



**Transform**
        The found child transform. Null if child with matching name isn't found.





### Description



Finds a child by name `n` and returns it.





If no child with name `n` can be found, null is returned.
If `n` contains a '/' character it will access the Transform in the hierarchy like a path name.

**Note:** [Find](Transform.Find.html) does not work properly if you have '/' in the name of a GameObject.

**Note:** [Find](Transform.Find.html) does not perform a recursive descend down a Transform hierarchy.

**Note:** [Find](Transform.Find.html) can find transform of disabled GameObject.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject player;
    public Transform gun;
    public Transform ammo;    //Invoked when a button is clicked.
    public void Example()
    {
        //Finds and assigns the child named "Gun".
        gun = player.transform.Find("Gun");        //If the child was found.
        if (gun != null)
        {
            //Find the child named "ammo" of the gameobject "magazine" (magazine is a child of "gun").
            ammo = gun.transform.Find("magazine/ammo");
        }
        else Debug.Log("No child with the name 'Gun' attached to the player");
    }
}
```





As described [Find](Transform.Find.html) does not descend the [Transform](Transform.html) hierarchy.  [Find](Transform.Find.html) will only search the given list of children looking for a named [Transform](Transform.html).  The following example shows the result of [Find](Transform.Find.html) searching for GameObjects.  The name of each GameObject is used in the [Find](Transform.Find.html).  This is why two GameObjects in the same level of the hierarchy are found and reported.

[Image: image]

*A GameObject with three children.  Find() does not find the third child.*


              


```
// ExampleClass has a GameObject with three spheres attached.
// Two of these are children of the GameObject.  The third
// transform, sphere3, is a child of sphere2.  Find() does
// not find this child.using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Transform result;        for (int i = 1; i < 4; i++)
        {
            string sph;            sph = "sphere" + i.ToString();
            result = gameObject.transform.Find(sph);            if (result)
            {
                Debug.Log("Found: " + sph);
            }
            else
            {
                //Find() does not find sphere3
                Debug.Log("Did not find: " + sph);                //But we can access it with '/' character or by using GetChild()
                Transform newresult;
                newresult = gameObject.transform.Find("sphere2/sphere3");                if (newresult)
                {
                    Debug.Log("But now found:" + sph);
                }
            }
        }
    }
}
```


            
