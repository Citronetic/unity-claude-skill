This version of Unity is unsupported.


                  **Method group is Obsolete**





# [NavMeshBuilder](AI.NavMeshBuilder.html).BuildNavMeshForMultipleScenes




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













                        **Obsolete**
                        UnityEditor NavMeshBuilder has been deprecated. Use UnityEngine.AI.NavMeshBuilder instead.




## Declaration

public static void BuildNavMeshForMultipleScenes(string[] paths);






### Parameters



| Parameter | Description |
| --- | --- |
| paths | Array of paths to Scenes that are used for building the navmesh. |





### Description



Builds the combined NavMesh for the contents of multiple Scenes.





Loads all the Scenes by path and then builds the combined navmesh data.

The resulting navmesh data is stored in a single file. The navmesh file path is identical to the default path for the first Scene in the array – e.g. "Assets/Scene1/NavMesh.asset".

The navmesh data is shared between all the Scenes specified.

Note that your current Scene will be saved before, and restored after, the build process. Additionally all Scenes passed to this method will be saved in order to reference the combined navmesh data.


              


```
using UnityEditor;
using UnityEngine;public class BuildNavMeshFor3Scenes
{
    [MenuItem("NavMesh/BuildNavMeshFor3Scenes")]
    public static void Build()
    {
        string[] sceneNames = { "Assets/Scene1.unity", "Assets/Scene2.unity", "Assets/Scene3.unity" };
        UnityEditor.AI.NavMeshBuilder.BuildNavMeshForMultipleScenes(sceneNames);
    }
}
```


            
