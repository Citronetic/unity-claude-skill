This version of Unity is unsupported.



# ProfilerCategory





struct in
          Unity.Profiling



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



Use to specify category for instrumentation Profiler markers.


              


```
using Unity.Profiling;public class MySystemClass
{
    static readonly ProfilerMarker s_SimulatePerfMarker = new ProfilerMarker(ProfilerCategory.Ai, "MySystem.Simulate");    public void UpdateLogic()
    {
        using (s_SimulatePerfMarker.Auto())
        {
            // ...
        }
    }
}
```





Additional resources: [ProfilerMarker](Unity.Profiling.ProfilerMarker.html).





### Static Properties



| Property | Description |
| --- | --- |
| Ai | AI and NavMesh Profiler category. |
| Animation | Animation Profiler category. |
| Audio | Audio system Profiler category. |
| FileIO | File IO Profiler category. |
| Gui | UI Profiler category. |
| Input | Input system Profiler category. |
| Internal | Internal Unity systems Profiler category. |
| Lighting | Global Illumination Profiler category. |
| Loading | Loading system Profiler category. |
| Memory | Memory allocation Profiler category. |
| Network | Networking system Profiler category. |
| Particles | Particle system Profiler category. |
| Physics | Physics system Profiler category. |
| Physics2D | The Physics 2D system category for the Profiler. |
| Render | Rendering system Profiler category. |
| Scripts | Generic C# code Profiler category. |
| Video | Video system Profiler category. |
| VirtualTexturing | Virtual Texturing system Profiler category. |
| Vr | VR systen Profiler category. |





### Properties



| Property | Description |
| --- | --- |
| Color | Gets Profiler category color. |
| Name | Gets Profiler category name. |





### Constructors



| Constructor | Description |
| --- | --- |
| ProfilerCategory | Use to construct ProfilerCategory by category name. |


            
