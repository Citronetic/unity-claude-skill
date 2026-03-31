This version of Unity is unsupported.



# [Color](Color.html).b




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












                    public float b;






### Description



Blue component of the color.





The value ranges from 0 to 1.


              


```
//Attach this script to a GameObject with a Renderer attached to it
//Use the sliders in Play Mode to change the Color of the GameObject's Materialusing UnityEngine;public class Example : MonoBehaviour
{
    Renderer m_Renderer;
    //Set the Color to white to start off
    public Color color = Color.white;    void Start()
    {
        //Fetch the Renderer of the GameObject
        m_Renderer = GetComponent<Renderer>();
    }    private void OnGUI()
    {
        //Sliders for the red, green and blue components of the Color
        color.r = GUI.HorizontalSlider(new Rect(0, 00, 100, 30), color.r, 0, 1);
        color.g = GUI.HorizontalSlider(new Rect(0, 40, 100, 30), color.g, 0, 1);
        color.b = GUI.HorizontalSlider(new Rect(0, 80, 100, 30), color.b, 0, 1);        //Set the Color of the GameObject's Material to the new Color
        m_Renderer.material.color = color;
    }
}
```


            
