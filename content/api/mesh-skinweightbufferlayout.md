This version of Unity is unsupported.



# [Mesh](Mesh.html).skinWeightBufferLayout




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




                [Switch to Manual](../Manual/class-Mesh.html)







                    public [SkinWeights](SkinWeights.html) skinWeightBufferLayout;






### Description



The dimension of data in the bone weight buffer.





This value describes the layout of data in the mesh's bone weight buffer. It depends on how many bones that affect each vertex in the mesh.


              


```
using UnityEngine;
public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        if(mesh.skinWeightBufferLayout == SkinWeights.FourBones)
        {
            Debug.Log("Mesh is using four bones per vertex");
        }
    }
}
```





Additional resources: [Mesh.GetBoneWeightBuffer](Mesh.GetBoneWeightBuffer.html).


            
