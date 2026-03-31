This version of Unity is unsupported.



# [NavMeshEditorHelpers](AI.NavMeshEditorHelpers.html).DrawBuildDebug




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

public static void DrawBuildDebug([AI.NavMeshData](AI.NavMeshData.html) navMeshData,
[AI.NavMeshBuildDebugFlags](AI.NavMeshBuildDebugFlags.html) flags = NavMeshBuildDebugFlags.All);






### Parameters



| Parameter | Description |
| --- | --- |
| navMeshData | NavMesh object for which debug data has been deliberately collected during the build process. |
| flags | Bitmask that designates the types of data to show at one time. |





### Description



Displays in the Editor the precise intermediate data used during the build process of the specified NavMesh.





Additional resources: [NavMeshBuildSettings.debug](AI.NavMeshBuildSettings-debug.html).


              


```
using System.Collections.Generic;
using UnityEditor.AI;
using UnityEngine;
using UnityEngine.AI;public class NavMeshBuildDebugDraw : MonoBehaviour
{
    NavMeshData m_NavMeshData;    void Start()
    {
        var bounds = new Bounds(transform.position, new Vector3(100.0f, 100.0f, 100.0f));
        var markups = new List<NavMeshBuildMarkup>();
        var sources = new List<NavMeshBuildSource>();
        NavMeshEditorHelpers.CollectSourcesInStage(
            bounds, ~0, NavMeshCollectGeometry.RenderMeshes, 0, markups, gameObject.scene, sources);        var settings = NavMesh.GetSettingsByID(0);
        var debug = new NavMeshBuildDebugSettings();
        debug.flags = NavMeshBuildDebugFlags.All;
        settings.debug = debug;        m_NavMeshData = new NavMeshData();
        UnityEngine.AI.NavMeshBuilder.UpdateNavMeshDataAsync(m_NavMeshData, settings, sources, bounds);
    }    void OnDrawGizmos()
    {
        NavMeshEditorHelpers.DrawBuildDebug(
            m_NavMeshData, NavMeshBuildDebugFlags.Regions | NavMeshBuildDebugFlags.SimplifiedContours);
    }
}
```


            
