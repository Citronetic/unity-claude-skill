This version of Unity is unsupported.



# [LODGroup](LODGroup.html).SetLODs




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




                [Switch to Manual](../Manual/class-LODGroup.html)










## Declaration

public void SetLODs(LOD[] lods);






### Parameters



| Parameter | Description |
| --- | --- |
| lods | The LODs to use for this group. |





### Description



Set the LODs for the LOD group. This removes any existing LODs configured on the LODGroup.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public LODGroup group;    void Start()
    {
        // Programmatically create a LOD group and add LOD levels.
        // Create a GUI that allows for forcing a specific LOD level.
        group = gameObject.AddComponent<LODGroup>();        // Add 4 LOD levels
        LOD[] lods = new LOD[4];
        for (int i = 0; i < 4; i++)
        {
            PrimitiveType primType = PrimitiveType.Cube;
            switch (i)
            {
                case 1:
                    primType = PrimitiveType.Capsule;
                    break;
                case 2:
                    primType = PrimitiveType.Sphere;
                    break;
                case 3:
                    primType = PrimitiveType.Cylinder;
                    break;
            }
            GameObject go = GameObject.CreatePrimitive(primType);
            go.transform.parent = gameObject.transform;
            Renderer[] renderers = new Renderer[1];
            renderers[0] = go.GetComponent<Renderer>();
            lods[i] = new LOD(1.0F / (i + 2), renderers);
        }
        group.SetLODs(lods);
        group.RecalculateBounds();
    }    void OnGUI()
    {
        if (GUILayout.Button("Enable / Disable"))
            group.enabled = !group.enabled;        if (GUILayout.Button("Default"))
            group.ForceLOD(-1);        if (GUILayout.Button("Force 0"))
            group.ForceLOD(0);        if (GUILayout.Button("Force 1"))
            group.ForceLOD(1);        if (GUILayout.Button("Force 2"))
            group.ForceLOD(2);        if (GUILayout.Button("Force 3"))
            group.ForceLOD(3);        if (GUILayout.Button("Force 4"))
            group.ForceLOD(4);        if (GUILayout.Button("Force 5"))
            group.ForceLOD(5);        if (GUILayout.Button("Force 6"))
            group.ForceLOD(6);
    }
}
```





Additional resources: [LOD](LOD.html), [GetLODs](LODGroup.GetLODs.html)


            
