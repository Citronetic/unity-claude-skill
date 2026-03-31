This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).logFile




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












                    public static string logFile;






### Description



Specifies the file to use when writing profiling data.





In addition to specifying a valid file path, you must set both [Profiler.enabled](Profiling.Profiler-enabled.html) and [Profiler.enableBinaryLog](Profiling.Profiler-enableBinaryLog.html) to `true` in order to save profiling information. Specifying a new valid file path while [Profiler.enableBinaryLog](Profiling.Profiler-enableBinaryLog.html) is `true` will save profiling information to that file instead. If a `null` or an empty path is passed [Profiler.enableBinaryLog](Profiling.Profiler-enableBinaryLog.html) will automatically be set to `false`.

When using the relative log file path, the directory on each platform is set to [Application.dataPath](Application-dataPath.html), apart from WebGL, which uses [Application.persistentDataPath](Application-persistentDataPath.html).

If the buffer is too small to output the profiler data you will see a message in the debug log "Skipping profile frame. Receiver can not keep up with the amount of data sent".
Use [Profiler.maxUsedMemory](Profiling.Profiler-maxUsedMemory.html) to raise the buffer memory.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Profiler.logFile = "mylog"; //Also supports passing "myLog.raw"
        Profiler.enableBinaryLog = true;
        Profiler.enabled = true;        // Optional, if more memory is needed for the buffer
        Profiler.maxUsedMemory = 256 * 1024 * 1024;        // ...        // Optional, to close the file when done
        Profiler.enabled = false;
        Profiler.logFile = "";        // To start writing to a new log file
        Profiler.logFile = "myOtherLog";
        Profiler.enabled = true;
        // ...
    }
}
```


            
