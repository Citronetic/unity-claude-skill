This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).Clear




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

public void Clear();






### Description



Clear material property values.





[Graphics.RenderMesh](Graphics.RenderMesh.html) copies the passed property block, so the most efficient way of using it is
to create one block and reuse it for all DrawMesh calls. Use [Clear](MaterialPropertyBlock.Clear.html) to clear block's values,
and [SetFloat](MaterialPropertyBlock.SetFloat.html), [SetVector](MaterialPropertyBlock.SetVector.html), [SetColor](MaterialPropertyBlock.SetColor.html), [SetMatrix](MaterialPropertyBlock.SetMatrix.html) to add values.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Mesh aMesh;
    Material aMaterial = new Material(Shader.Find("VertexLit"));    void Update()
    {
        MaterialPropertyBlock materialProperty = new MaterialPropertyBlock();        // Clear any property and add a red color
        materialProperty.Clear();
        materialProperty.SetColor("_Color", Color.red);
        Graphics.DrawMesh(aMesh, new Vector3(5, 0, 0),
            Quaternion.identity, aMaterial, 0, null, 0, materialProperty);        // Clear any property and add a green color
        materialProperty.Clear();
        materialProperty.SetColor("_Color", Color.green);
        Graphics.DrawMesh(aMesh, new Vector3(-5, 0, 0),
            Quaternion.identity, aMaterial, 0, null, 0, materialProperty);
    }
}
```


            
