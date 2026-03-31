This version of Unity is unsupported.



# NativeDisableContainerSafetyRestrictionAttribute





class in
          Unity.Collections.LowLevel.Unsafe



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



Explicitly disable the safety system for a NativeContainer.





By default, the safety system tracks native containers to avoid race conditions. The safety system catches many race condition bugs, but
sometimes you might need to use job and data access that doesn't fit into the safety system. This attribute lets you explicitly disable the safety system for a
specific NativeContainer and gives you full control. However, if for example you call `Dispose` on a NativeArray while a job is running, the safety system
can't give you any error messages and Unity will most likely crash in that situation.


              


```
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;
using Unity.Jobs;struct MyJob : IJob
{
    [NativeDisableContainerSafetyRestriction]
    NativeArray<int> unsafeArrayAccess;    public void Execute()
    {
        //...
    }
}
```


            
