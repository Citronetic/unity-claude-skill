This version of Unity is unsupported.



# SceneSearch





class in
          UnityEditor.SearchService


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



Use this API to perform searches in the Scene. Engines for this type of search implement the [ISceneSearchEngine](SearchService.ISceneSearchEngine.html) interface.





Registered Scene search engines are called during searches in the Scene hierarchy. When the default object selector is used, they are also called for GameObject searches.

The following example creates a Scene search engine:


              


```
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.SearchService;
using UnityEngine;
using Object = UnityEngine.Object;[SceneSearchEngine]
class TestSceneFilterEngine : ISceneSearchEngine
{
    public string name => "My Custom Engine";    public void BeginSession(ISearchContext context)
    {
    }    public void EndSession(ISearchContext context)
    {
    }    public void BeginSearch(ISearchContext context, string query)
    {
    }    public void EndSearch(ISearchContext context)
    {
    }    public bool Filter(ISearchContext context, string query, HierarchyProperty objectToFilter)
    {
        var instanceId = objectToFilter.instanceID;
        var obj = Object.FindObjectsOfType<GameObject>().FirstOrDefault(o => o.GetInstanceID() == instanceId);
        return obj != null && obj.name.IndexOf(query, StringComparison.InvariantCultureIgnoreCase) >= 0;
    }
}
```





Additional resources: [SceneSearchEngineAttribute](SearchService.SceneSearchEngineAttribute.html), [ISceneSearchEngine](SearchService.ISceneSearchEngine.html).





### Static Properties



| Property | Description |
| --- | --- |
| EngineScope | A enum that indicates the search scope for SceneSearch engines. It is used by SceneSearchContext. |





### Static Methods



| Method | Description |
| --- | --- |
| RegisterEngine | Registers a Scene search engine dynamically. |
| UnregisterEngine | Unregisters a dynamically registered engine. |


            
