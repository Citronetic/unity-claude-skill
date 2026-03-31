This version of Unity is unsupported.



# [Space](Space.html).World




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



















### Description



World coordinate space, relative to the origin point (0,0,0) of the x-, y-, and z-axes of the scene.





Use `Space.World` to transform a GameObject relative to its [Transform.position](Transform-position.html) and the scene axes, ignoring the GameObject's own orientation. For example, `Transform.Translate(Vector3.forward, Space.World)` adds one unit to the object's [Transform.position](Transform-position.html) on the z-axis of the scene.

                    To transform a GameObject relative to its [Transform.localPosition](Transform-localPosition.html) and along the object's own axes, use [Space.Self](Space.Self.html).


              


```
//Attach this script to a GameObject.
//This example demonstrates the difference between Space.World and Space.Self in rotation.
//The m_WorldSpace field will be automatically exposed as a checkbox in the Inspector window labelled World Space. Enable or disable the checkbox in the Inspector to start in world or self respectively.
//Press play to see the GameObject rotating appropriately. Press space or toggle the World Space checkbox to switch between World and Self.using UnityEngine;public class Example : MonoBehaviour
{
    float m_Speed;
    public bool m_WorldSpace;    void Start()
    {
        //Set the speed of the rotation
        m_Speed = 20.0f;
        //Rotate the GameObject a little at the start to show the difference between Space and Local
        transform.Rotate(60, 0, 60);
    }    void Update()
    {
        //Rotate the GameObject in World Space if in the m_WorldSpace state
        if (m_WorldSpace)
            transform.Rotate(Vector3.up * m_Speed * Time.deltaTime, Space.World);
        //Otherwise, rotate the GameObject in local space
        else
            transform.Rotate(Vector3.up * m_Speed * Time.deltaTime, Space.Self);        //Press the Space button to switch between world and local space states
        if (Input.GetKeyDown(KeyCode.Space))
        {
            //Make the current state switch to the other state
            m_WorldSpace = !m_WorldSpace;
            //Output the Current state to the console
            Debug.Log("World Space : " + m_WorldSpace.ToString());
        }
    }
}
```


            
