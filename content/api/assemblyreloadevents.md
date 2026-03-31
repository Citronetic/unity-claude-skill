This version of Unity is unsupported.



# AssemblyReloadEvents





class in
          UnityEditor


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



This class has event dispatchers for assembly reload events.


              


```
using UnityEditor;
using UnityEngine;public class MyWindow : EditorWindow
{
    [MenuItem("Test/Show My Window")]
    static void Init()
    {
        GetWindow<MyWindow>();
    }    void OnEnable()
    {
        AssemblyReloadEvents.beforeAssemblyReload += OnBeforeAssemblyReload;
        AssemblyReloadEvents.afterAssemblyReload += OnAfterAssemblyReload;
    }    void OnDisable()
    {
        AssemblyReloadEvents.beforeAssemblyReload -= OnBeforeAssemblyReload;
        AssemblyReloadEvents.afterAssemblyReload -= OnAfterAssemblyReload;
    }    public void OnBeforeAssemblyReload()
    {
        Debug.Log("Before Assembly Reload");
    }    public void OnAfterAssemblyReload()
    {
        Debug.Log("After Assembly Reload");
    }
}
```





### Events



| Event | Description |
| --- | --- |
| afterAssemblyReload | This event is dispatched just after Unity have reloaded all assemblies. |
| beforeAssemblyReload | This event is dispatched just before Unity reloads all assemblies. |





### Delegates



| Delegate | Description |
| --- | --- |
| AssemblyReloadCallback | Delegate used for assembly reload events. |


            
