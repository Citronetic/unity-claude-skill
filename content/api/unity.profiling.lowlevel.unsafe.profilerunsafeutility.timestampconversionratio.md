This version of Unity is unsupported.



# TimestampConversionRatio





struct in
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



Fraction that converts the Profiler timestamp to nanoseconds.





Use to convert the Profiler timestamp value obtained with [GetTimestamp](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.GetTimestamp.html) to nanoseconds.


              


```
using Unity.Profiling.LowLevel.Unsafe;public class Example
{
    public static long ElapsedNanoseconds(long startTimestamp)
    {
        long now = ProfilerUnsafeUtility.Timestamp;
        var conversionRatio = ProfilerUnsafeUtility.TimestampToNanosecondsConversionRatio;
        return (now - startTimestamp) * conversionRatio.Numerator / conversionRatio.Denominator;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Denominator | Denominator of timestamp to nanoseconds conversion fraction. |
| Numerator | Numerator of timestamp to nanoseconds conversion fraction. |


            
