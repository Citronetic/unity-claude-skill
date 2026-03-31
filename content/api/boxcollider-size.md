This version of Unity is unsupported.



# [BoxCollider](BoxCollider.html).size




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




                [Switch to Manual](../Manual/class-BoxCollider.html)







                    public [Vector3](Vector3.html) size;






### Description



The size of the box, measured in the object's local space.





Use this to return or set the size of the BoxCollider component of a GameObject.  Unity measures the size in the GameObject's local space.
                    Changing the BoxCollider size scales it by the Transform’s scale. Note: BoxCollider.size represents full extents (width, height, depth), not half-extents.


              


```
//Attach this script to a GameObject. Make sure the GameObject has a BoxCollider component (Unity Cubes have these automatically as long as they weren’t removed).
//Create three Sliders ( Create>UI>Slider). These are for manipulating the x, y, and z values of the size.
//Click on the GameObject and attach each of the Sliders to the fields in the Inspector.
//In Play Mode, click the GameObject and enable Gizmos to visualize the BoxCollider.using UnityEngine;
using UnityEngine.UI;public class Example : MonoBehaviour
{
    //Make sure there is a BoxCollider component attached to your GameObject
    BoxCollider m_Collider;
    float m_ScaleX, m_ScaleY, m_ScaleZ;
    public Slider m_SliderX, m_SliderY, m_SliderZ;
    void Start()
    {
        //Fetch the Collider from the GameObject
        m_Collider = GetComponent<BoxCollider>();
        //These are the starting sizes for the Collider component
        m_ScaleX = 1.0f;
        m_ScaleY = 1.0f;
        m_ScaleZ = 1.0f;        //Set all the sliders max values to 20 so the size values don't go above 20
        m_SliderX.maxValue = 20;
        m_SliderY.maxValue = 20;
        m_SliderZ.maxValue = 20;        //Set all the sliders min values to 1 so the size don't go below 1
        m_SliderX.minValue = 1;
        m_SliderY.minValue = 1;
        m_SliderZ.minValue = 1;
    }    void Update()
    {
        m_ScaleX = m_SliderX.value;
        m_ScaleY = m_SliderY.value;
        m_ScaleZ = m_SliderZ.value;        m_Collider.size = new Vector3(m_ScaleX, m_ScaleY, m_ScaleZ);
        Debug.Log("Current BoxCollider Size : " + m_Collider.size);
    }
}
```


            
