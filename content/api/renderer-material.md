This version of Unity is unsupported.



# [Renderer](Renderer.html).material




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












                    public [Material](Material.html) material;






### Description



Returns the first instantiated [Material](Material.html) assigned to the renderer.





Modifying `material` will change the material for this object only.

If the material is used by any other renderers,
this will clone the shared material and start using it from now on.

**Note:**

This function automatically instantiates the materials and makes them unique to this renderer.
It is your responsibility to destroy the materials when the game object is being destroyed. [Resources.UnloadUnusedAssets](Resources.UnloadUnusedAssets.html)
also destroys the materials but it is usually only called when loading a new level.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    Material m_Material;    void Start()
    {
        //Fetch the Material from the Renderer of the GameObject
        m_Material = GetComponent<Renderer>().material;
        print("Materials " + Resources.FindObjectsOfTypeAll(typeof(Material)).Length);
    }    void Update()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            //Output the amount of materials before GameObject is destroyed
            print("Materials " + Resources.FindObjectsOfTypeAll(typeof(Material)).Length);
            //Destroy GameObject
            Destroy(gameObject);
        }
    }    void OnMouseOver()
    {
        // Change the Color of the GameObject when the mouse hovers over it
        m_Material.color = Color.red;
    }    void OnMouseExit()
    {
        //Change the Color back to white when the mouse exits the GameObject
        m_Material.color = Color.white;
    }    void OnDestroy()
    {
        //Destroy the instance
        Destroy(m_Material);
        //Output the amount of materials to show if the instance was deleted
        print("Materials " + Resources.FindObjectsOfTypeAll(typeof(Material)).Length);
    }
}
```


            
