This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).AddFramesFromFile




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

public static void AddFramesFromFile(string file);






### Parameters



| Parameter | Description |
| --- | --- |
| file | The name of the file containing the frame data, including extension. |





### Description



Displays the recorded profile data in the profiler.





The Profiler appends the loaded data after the last frame in its buffer.


              


```
using UnityEngine;
using System.Collections;
using UnityEngine.Profiling;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        Profiler.AddFramesFromFile("mylog.raw"); // or mylog.data
    }
}
```





Additional resources: [Profiler](../Manual/Profiler.html).


            
