This version of Unity is unsupported.



# ProfilerUnsafeUtility





class in
          Unity.Profiling.LowLevel.Unsafe



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



Utility class which provides access to low level Profiler API.





Use *ProfilerUnsafeUtility* methods to build a high-level profiling primitive.

The low level Profiler API is included in a Release Build.





### Static Properties



| Property | Description |
| --- | --- |
| CategoryAi | AI and NavMesh Profiler category. |
| CategoryAllocation | Memory allocation Profiler category. |
| CategoryAnimation | Animation Profiler category. |
| CategoryAudio | Audio system Profiler category. |
| CategoryFileIO | File IO Profiler category. |
| CategoryGUI | UI Profiler category. |
| CategoryInput | Input system Profiler category. |
| CategoryInternal | Internal Unity systems Profiler category. |
| CategoryLighting | Global Illumination Profiler category. |
| CategoryLoading | Loading system Profiler category. |
| CategoryNetwork | Networking system Profiler category. |
| CategoryOther | Uncategorized Profiler category. |
| CategoryParticles | Particle system Profiler category. |
| CategoryPhysics | Physics system Profiler category. |
| CategoryPhysics2D | Physics 2D system Profiler category. |
| CategoryRender | Rendering system Profiler category. |
| CategoryScripts | Generic C# code Profiler category. |
| CategoryVideo | Video system Profiler category. |
| CategoryVirtualTexturing | Virtual Texturing system Profiler category. |
| CategoryVr | VR systen Profiler category. |
| Timestamp | Gets Profiler timestamp. |
| TimestampToNanosecondsConversionRatio | Gets conversion ratio from Profiler timestamp to nanoseconds. |





### Static Methods



| Method | Description |
| --- | --- |
| BeginSample | Starts profiling a piece of code marked with a custom name that the markerPtr handle has defined. |
| BeginSampleWithMetadata | Starts profiling a piece of code marked with a custom name that the markerPtr handle and metadata parameters has defined. |
| CreateFlow | Create a new Profiler flow identifier. |
| CreateMarker | Constructs a new Profiler marker handle for code instrumentation. |
| EndSample | End profiling a piece of code marked with a custom name defined by this instance of ProfilerMarker. |
| FlowEvent | Add flow event to a Profiler sample. |
| GetCategoryByName | Gets the Profiler category identifier. |
| GetCategoryDescription | Retrieves Profiler category information such as name or color. |
| SetMarkerMetadata | Set Profiler marker metadata name and type. |
| SingleSampleWithMetadata | Creates profiling sample with a custom name that the markerPtr handle and metadata parameters has defined. |


            
