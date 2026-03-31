This version of Unity is unsupported.



# [Transform](Transform.html).position




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







                    public [Vector3](Vector3.html) position;






### Description



The world space position of the Transform.





The [position](Transform-position.html) property of a [GameObject](GameObject.html)’s [Transform](Transform.html), which is accessible in the Unity Editor and through scripts. Alter this value to move a [GameObject](GameObject.html). Get this value to locate the [GameObject](GameObject.html) in 3D world space.

For more information about the position and axis, refer to [class-Transform](../Manual/class-Transform.html).

You need to instantiate the object in the scene so that it can move on change. Prefab assets are still [GameObject](GameObject.html), but they are not instantiated. For this reason, Unity doesn't use the data from the [Transform](Transform.html) [position](Transform-position.html) of the root asset of the Prefab hierarchy.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    //movement speed in units per second
    private float movementSpeed = 5f;    void Update()
    {
        //get the Input from Horizontal axis
        float horizontalInput = Input.GetAxis("Horizontal");
        //get the Input from Vertical axis
        float verticalInput = Input.GetAxis("Vertical");        //update the position
        transform.position = transform.position + new Vector3(horizontalInput * movementSpeed * Time.deltaTime, verticalInput * movementSpeed * Time.deltaTime, 0);        //output to log the position change
        Debug.Log(transform.position);
    }
}
```





This example gets the Input from Horizontal and Vertical axes and moves the GameObject up/down or left/right by changing its position.

Another example:


              


```
using UnityEngine;public class ExampleClass2 : MonoBehaviour
{
    //movement speed in units per second
    private float distance = 5f;
    public GameObject prefabToInstantiate;    void Start()
    {
        if (prefabToInstantiate != null)
            InstantiateAbove(prefabToInstantiate);
    }    void InstantiateAbove(GameObject prefab)
    {
        //instantiate above at the given distance
        Vector3 offset = new Vector3(0, distance, 0);
        GameObject.Instantiate(prefab, transform.position + offset, Quaternion.identity);
    }
}
```





This example instantiates the given prefab 5 units above the position of the GameObject using this script.


            
