This version of Unity is unsupported.



# CullingGroup





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Describes a set of bounding spheres that should have their visibility and distances maintained.





### Properties



| Property | Description |
| --- | --- |
| enabled | Pauses culling group execution. |
| onStateChanged | Sets the callback that will be called when a sphere's visibility and/or distance state has changed. |
| targetCamera | Locks the CullingGroup to a specific camera. |





### Constructors



| Constructor | Description |
| --- | --- |
| CullingGroup | Create a CullingGroup. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Clean up all memory used by the CullingGroup immediately. |
| EraseSwapBack | Erase a given bounding sphere by moving the final sphere on top of it. |
| GetDistance | Get the current distance band index of a given sphere. |
| IsVisible | Returns true if the bounding sphere at index is currently visible from any of the contributing cameras. |
| QueryIndices | Retrieve the indices of spheres that have particular visibility and/or distance states. |
| SetBoundingDistances | Set bounding distances for 'distance bands' the group should compute, as well as options for how spheres falling into each distance band should be treated. |
| SetBoundingSphereCount | Sets the number of bounding spheres in the bounding spheres array that are actually being used. |
| SetBoundingSpheres | Sets the array of bounding sphere definitions that the CullingGroup should compute culling for. |
| SetDistanceReferencePoint | Set the reference point from which distance bands are measured. |





### Delegates



| Delegate | Description |
| --- | --- |
| StateChanged | This delegate is used for recieving a callback when a sphere's distance or visibility state has changed. |


            
