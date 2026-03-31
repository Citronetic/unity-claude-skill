This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).enabled




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












                    public static bool enabled;






### Description



Enables the Profiler.





When enabled along with [Profiler.enableBinaryLog](Profiling.Profiler-enableBinaryLog.html), the Unity player saves profiling data to the file specified in the [Profiler.logFile](Profiling.Profiler-logFile.html) file. The player automatically assigns the file extension, “.raw” to this log file. You can load this file in the Unity Editor Profile window to view the data.

If the buffer is too small to output the profiler data you will see a message in the debug log "Skipping profile frame. Receiver can not keep up with the amount of data sent".
Use [Profiler.maxUsedMemory](Profiling.Profiler-maxUsedMemory.html) to raise the buffer memory.

**Note:** In the following example, on the WebGL platform, the log file is outputted to a path like the following: `/idbfs/some-hash/profiler.raw`. To find this file, use your browser's developer tools. You can also
use `File.Open` with the same path that you used to load the data, and use [UnityWebRequest.Post](Networking.UnityWebRequest.Post.html) to send it to a web server.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;
using System.IO;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(RunProfiler());
    }    IEnumerator RunProfiler()
    {
        // Specify the profiler output file
        Profiler.logFile = Path.Join(Application.persistentDataPath, "mylog.raw");
        Profiler.enableBinaryLog = true;
        // Start profiler
        Profiler.enabled = true;
        // Optional, if more memory is needed for the buffer
        Profiler.maxUsedMemory = 256 * 1024 * 1024;        // Run profiling for 5 seconds
        yield return new WaitForSeconds(5.0f);        // Stop profiler
        Profiler.enabled = false;
        // It is important to clear the log file so it is closed by Unity and can be opened by other applications
        Profiler.logFile = "";
    }
}
```


            
