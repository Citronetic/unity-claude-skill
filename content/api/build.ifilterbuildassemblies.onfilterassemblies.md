This version of Unity is unsupported.



# [IFilterBuildAssemblies](Build.IFilterBuildAssemblies.html).OnFilterAssemblies




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

public string[] OnFilterAssemblies([BuildOptions](BuildOptions.html) buildOptions,
string[] assemblies);






### Parameters



| Parameter | Description |
| --- | --- |
| buildOptions | The current build options. |
| assemblies | The list of assemblies that will be included. |





### Returns



**string[]**
        Returns the filtered list of assemblies that are included in the build.





### Description



Will be called after building script assemblies, but makes it possible to filter away unwanted scripts to be included.





Each implementation will be called in the order sorted by callbackOrder. The result of each invocation is piped through on the next call to OnFilterAssemblies.
You are not allowed to add new assemblies.

Additional resources: [BuildPlayerProcessor](Build.BuildPlayerProcessor.html), [IPostBuildPlayerScriptDLLs](Build.IPostBuildPlayerScriptDLLs.html), [IUnityLinkerProcessor](Build.IUnityLinkerProcessor.html)


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;
using System.Linq;class MyCustomFilter : IFilterBuildAssemblies
{
    public int callbackOrder { get { return 0; } }
    public string[] OnFilterAssemblies(BuildOptions buildOptions, string[] assemblies)
    {
        return assemblies.Where(x => x == "some.dll").ToArray();
    }
}
```


            
