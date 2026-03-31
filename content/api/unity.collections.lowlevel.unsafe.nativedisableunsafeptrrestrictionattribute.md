This version of Unity is unsupported.



# NativeDisableUnsafePtrRestrictionAttribute





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



Enable the use of unsafe pointers in jobs.





By default, unsafe pointers aren't allowed in jobs because it isn't possible for the Job Debugger to gurantee race condition free
behavior. This attribute lets you explicitly disable the restriction on a job.


              


```
struct MyJob : IJob
{
    [NativeDisableUnsafePtrRestriction]
    int* myCustomPointer;
    void Execute()
    {
        ...
    }
}
```


            
