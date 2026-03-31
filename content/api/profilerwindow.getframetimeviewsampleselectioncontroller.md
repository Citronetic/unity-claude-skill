This version of Unity is unsupported.



# [ProfilerWindow](ProfilerWindow.html).GetFrameTimeViewSampleSelectionController




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

public [Profiling.IProfilerFrameTimeViewSampleSelectionController](Profiling.IProfilerFrameTimeViewSampleSelectionController.html) GetFrameTimeViewSampleSelectionController(string moduleIdentifier);






### Parameters



| Parameter | Description |
| --- | --- |
| moduleIdentifier | The identifier of the Profiler module whose selection controller you want to retrieve. Only ProfilerWindow.cpuModuleIdentifier and ProfilerWindow.gpuModuleIdentifier are currently valid, other options will throw and ArgumentException. |





### Returns



**IProfilerFrameTimeViewSampleSelectionController**
        An [IProfilerFrameTimeViewSampleSelectionController](Profiling.IProfilerFrameTimeViewSampleSelectionController.html) object with which you can use to control the selection of the specified Profiler module.





### Description



Retrieves an [IProfilerFrameTimeViewSampleSelectionController](Profiling.IProfilerFrameTimeViewSampleSelectionController.html) object that you can use to control the selection in [Profiler modules](../Manual/ProfilerWindow#modules.html) that are displaying timing information of Profiler Samples, such as the [CPU Usage module](../Manual/ProfilerCPU.html) and the [GPU Usage Profiler module](../Manual/ProfilerGPU.html).


              


```
using UnityEditor;
using UnityEditor.Profiling;
using UnityEngine;public class Example : EditorWindow
{
    ProfilerWindow m_Profiler = null;
    [MenuItem("Window/Analysis/Profiler Extension")]
    public static void ShowExampleWindow()
    {
        var window = GetWindow<Example>();
        window.m_Profiler = EditorWindow.GetWindow<ProfilerWindow>();
    }    void OnGUI()
    {
        // First make sure there is an open Profiler Window
        if (m_Profiler == null)
            m_Profiler = EditorWindow.GetWindow<ProfilerWindow>();
        // If the currently selected Module is not the CPU Usage module, setting the selection will not be visible to the user immediately
        if (m_Profiler.selectedModuleIdentifier == ProfilerWindow.cpuModuleIdentifier)
        {
            // Get the CPU Usage Profiler module's selection controller interface to interact with the selection
            var cpuSampleSelectionController = m_Profiler.GetFrameTimeViewSampleSelectionController(ProfilerWindow.cpuModuleIdentifier);
            // If the current selection object is null, there is no selection to print out.
            using (new EditorGUI.DisabledScope(cpuSampleSelectionController.selection == null))
            {
                if (GUILayout.Button("Print current Selection"))
                {
                    // Get the currently shown selection and log out some of its details
                    var selection = cpuSampleSelectionController.selection;
                    Debug.Log($"The sample currently selected in the CPU Usage Profiler module is {selection.sampleDisplayName} at a depth of {selection.markerPathDepth}.");
                }
            }
        }
    }
}
```


            
