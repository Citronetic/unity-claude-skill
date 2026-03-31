This version of Unity is unsupported.



# CustomSampler





class in
          UnityEngine.Profiling



/



Inherits from:[Profiling.Sampler](Profiling.Sampler.html)



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



Custom CPU Profiler label used for profiling arbitrary code blocks.





Use CustomSampler to measure execution time of script code blocks. Produced information is displayed in the [CPU Profiler](../Manual/ProfilerCPU.html) and can be captured with [Recorder](Profiling.Recorder.html).

Using CustomSampler is more efficient than using [Profiler.BeginSample](Profiling.Profiler.BeginSample.html) to profile your code. This is because CustomSamplers that have been created in advance have very low [Begin](Profiling.CustomSampler.Begin.html) call overhead compared to [Profiler.BeginSample](Profiling.Profiler.BeginSample.html).


              


```
using UnityEngine;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    CustomSampler sampler;
    void Start()
    {
        sampler = CustomSampler.Create("MyCustomSampler");
    }    void Update()
    {
        sampler.Begin();
        // do something that takes a lot of time
        sampler.End();
    }
}
```





CustomSampler.Begin is conditionally compiled away using ConditionalAttribute.
Thus it will have zero overhead, when it is deployed in non-Development Build.

Additional resources: [Sampler](Profiling.Sampler.html), [CustomSampler.Create](Profiling.CustomSampler.Create.html), [CustomSampler.Begin](Profiling.CustomSampler.Begin.html).





### Public Methods



| Method | Description |
| --- | --- |
| Begin | Begin profiling a piece of code with a custom label defined by this instance of CustomSampler. |
| End | End profiling a piece of code with a custom label. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates a new CustomSampler for profiling parts of your code. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| isValid | Returns true if Sampler is valid. (Read Only) |
| name | Sampler name. (Read Only) |






### Public Methods

| Method | Description |
| --- | --- |
| GetRecorder | Returns Recorder associated with the Sampler. |




### Static Methods

| Method | Description |
| --- | --- |
| Get | Returns Sampler object for the specific CPU Profiler label. |
| GetNames | Returns number and names of all registered Profiler labels. |






            
