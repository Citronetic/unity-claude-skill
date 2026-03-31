This version of Unity is unsupported.



# [ProfilerUnsafeUtility](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.html).TimestampToNanosecondsConversionRatio




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












                    public static [Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.TimestampConversionRatio](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.TimestampConversionRatio.html) TimestampToNanosecondsConversionRatio;






### Description



Gets conversion ratio from Profiler timestamp to nanoseconds.





Use to convert profiler timestamp value obtained with [GetTimestamp](Unity.Profiling.LowLevel.Unsafe.ProfilerUnsafeUtility.GetTimestamp.html) to nanoseconds.


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


            
