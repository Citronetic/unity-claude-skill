This version of Unity is unsupported.



# [NavMeshBuildSettings](AI.NavMeshBuildSettings.html).ValidationReport




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

public string[] ValidationReport([Bounds](Bounds.html) buildBounds);






### Parameters



| Parameter | Description |
| --- | --- |
| buildBounds | Describes the volume to build NavMesh for. |





### Returns



**string[]**
        The list of violated constraints.





### Description



Validates the properties of NavMeshBuildSettings.





Returns a string of violated constraints. - and suggestions for changes for the current values in the build settings and the provided bounds for building the NavMesh.

An empty array is returned if all internal constraints are satisfied.

Some of the settings which you can specify in the [NavMeshBuildSettings](AI.NavMeshBuildSettings.html) struct are coupled to each other, meaning there are constraints on the values based on other values. For example, it’s not valid for [agentClimb](AI.NavMeshBuildSettings-agentClimb.html) to be larger than [agentHeight](AI.NavMeshBuildSettings-agentHeight.html). Another invalid case is when the vertical size of the buildBounds exceeds the height of 65535 voxel units.

You can use this function to check if the values in [NavMeshBuildSettings](AI.NavMeshBuildSettings.html) violate any of the constraints, before starting the NavMesh building process.

Ignoring the violated constraints might give unexpected results when building a NavMesh, but will still produce a NavMesh.


            
