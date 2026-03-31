This version of Unity is unsupported.



# [Vector2](Vector2.html).Angle




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

public static float Angle([Vector2](Vector2.html) from,
[Vector2](Vector2.html) to);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The vector from which the angular difference is measured. |
| to | The vector to which the angular difference is measured. |





### Returns



**float**
        The unsigned angle in degrees between the two vectors.





### Description



Gets the unsigned angle in degrees between `from` and `to`.





The angle returned is the unsigned angle between the two vectors.

Note: The angle returned will always be between 0 and 180 degrees, because the method returns the smallest angle between the vectors. That is, it will never return a reflex angle. Angles are calculated from world origin point (0,0,0) as the vertex.

Additional resources: [SignedAngle](Vector2.SignedAngle.html) function.


              


```
using UnityEngine;public class Vector : MonoBehaviour
{
    //Use these to get the GameObject's positions
    Vector2 m_MyFirstVector;
    Vector2 m_MySecondVector;    float m_Angle;    //You must assign to these two GameObjects in the Inspector
    public GameObject m_MyObject;
    public GameObject m_MyOtherObject;    void Start()
    {
        //Initialise the Vector
        m_MyFirstVector = Vector2.zero;
        m_MySecondVector = Vector2.zero;
        m_Angle = 0.0f;
    }    void Update()
    {
        //Fetch the first GameObject's position
        m_MyFirstVector = new Vector2(m_MyObject.transform.position.x, m_MyObject.transform.position.y);
        //Fetch the second GameObject's position
        m_MySecondVector = new Vector2(m_MyOtherObject.transform.position.x, m_MyOtherObject.transform.position.y);
        //Find the angle for the two Vectors
        m_Angle = Vector2.Angle(m_MyFirstVector, m_MySecondVector);        //Draw lines from origin point to Vectors
        Debug.DrawLine(Vector2.zero, m_MyFirstVector, Color.magenta);
        Debug.DrawLine(Vector2.zero, m_MySecondVector, Color.blue);        //Log values of Vectors and angle in Console
        Debug.Log("MyFirstVector: " + m_MyFirstVector);
        Debug.Log("MySecondVector: "  + m_MySecondVector);
        Debug.Log("Angle Between Objects: " + m_Angle);
    }    void OnGUI()
    {
        //Output the angle found above
        GUI.Label(new Rect(25, 25, 200, 40), "Angle Between Objects" + m_Angle);
    }
}
```


            
