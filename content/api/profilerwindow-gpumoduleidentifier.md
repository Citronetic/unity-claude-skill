This version of Unity is unsupported.



# [ProfilerWindow](ProfilerWindow.html).gpuModuleIdentifier




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












                    public static string gpuModuleIdentifier;






### Description



The identifier of the [GPU Usage Profiler module](../Manual/ProfilerGPU.html).





Compare this constant to [ProfilerWindow.selectedModuleIdentifier](ProfilerWindow-selectedModuleIdentifier.html) to check if the currently selected [Profiler module](../Manual/ProfilerWindow#modules.html) is the [CPU Usage Profiler module](../Manual/ProfilerCPU.html).


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
        // If the currently selected Module is not the GPU Usage module, setting the selection will not be visible to the user immediately
        if (m_Profiler.selectedModuleIdentifier == ProfilerWindow.gpuModuleIdentifier)
        {
            // Get the GPU Usage Profiler module's selection controller interface to interact with the selection
            var gpuSampleSelectionController = m_Profiler.GetFrameTimeViewSampleSelectionController(ProfilerWindow.gpuModuleIdentifier);
            // If the current selection object is null, there is no selection to print out.
            using (new EditorGUI.DisabledScope(gpuSampleSelectionController.selection != null))
            {
                if (GUILayout.Button("Print current Selection"))
                {
                    // Get the currently shown selection and log out some of its details
                    var selection = gpuSampleSelectionController.selection;
                    Debug.Log($"The sample currently selected in the GPU Usage Profiler module is {selection.sampleDisplayName} at a depth of {selection.markerPathDepth}.");
                }
            }
        }
    }
}
```


            
