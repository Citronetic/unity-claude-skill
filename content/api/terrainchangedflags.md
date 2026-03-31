This version of Unity is unsupported.



# TerrainChangedFlags





enumeration


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



Indicate the types of changes to the terrain in OnTerrainChanged callback.





Use bitwise AND to detect multiple changes.


              


```
using UnityEngine;[ExecuteInEditMode]
public class DetectTerrainChanges : MonoBehaviour
{
    void OnTerrainChanged(TerrainChangedFlags flags)
    {
        if ((flags & TerrainChangedFlags.Heightmap) != 0)
        {
            Debug.Log("Heightmap changes");
        }        if ((flags & TerrainChangedFlags.DelayedHeightmapUpdate) != 0)
        {
            Debug.Log("Heightmap painting");
        }        if ((flags & TerrainChangedFlags.TreeInstances) != 0)
        {
            Debug.Log("Tree changes");
        }
    }
}
```





The above example shows how you can detect terrain changes by using OnTerrainChanged callback and TerrainChangedFlags enum.





### Properties



| Property | Description |
| --- | --- |
| Heightmap | Indicates a change to the heightmap data. |
| TreeInstances | Indicates a change to the tree data. |
| DelayedHeightmapUpdate | Indicates a change to the heightmap data without computing LOD. |
| FlushEverythingImmediately | Indicates that a change was made to the terrain that was so significant that the internal rendering data need to be flushed and recreated. |
| RemoveDirtyDetailsImmediately | Indicates a change to the detail data. |
| HeightmapResolution | Indicates a change to the heightmap resolution. |
| Holes | Indicates a change to the Terrain holes data. |
| DelayedHolesUpdate | Indicates a change to the Terrain holes data, which doesn't include LOD calculations and tree/vegetation updates. |
| WillBeDestroyed | Indicates that the TerrainData object is about to be destroyed. |


            
