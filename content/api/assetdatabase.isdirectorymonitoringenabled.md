This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsDirectoryMonitoringEnabled




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

public static bool IsDirectoryMonitoringEnabled();






### Returns



**bool**
        Returns true when Directory Monitoring is enabled. Returns false otherwise.





### Description



Reports whether Directory Monitoring is enabled.





Turn Directory Monitoring on or off in Preferences settings or in script with EditorPrefs.SetBool("DirectoryMonitoring", boolValue).

Directory Monitoring can be disabled with command line flag [[-DisableDirectoryMonitor]] and Directory Monitoring is automatically disabled when Unity detects symlinks in the project.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.Profiling;
using System.IO;public class DirectoryMonitoringTest
{
    [MenuItem("AssetDatabase/Directory Monitoring Test")]
    static void DirectoryMonitoringBenchmark()
    {
        var BenchmarkCount = 1;        //Disabling the Directory Monitoring will use a brute force scanning method to evaluate which files in the project have been changed, and is much slower
        EditorPrefs.SetBool("DirectoryMonitoring", false);
        Debug.Log("Is Directory Monitoring Enabled? - " + AssetDatabase.IsDirectoryMonitoringEnabled());        Benchmark(BenchmarkCount);
        BenchmarkCount++;        EditorPrefs.SetBool("DirectoryMonitoring", true);
        Debug.Log("Is Directory Monitoring Enabled? - " + AssetDatabase.IsDirectoryMonitoringEnabled());
        Benchmark(BenchmarkCount);
    }    //This test will show faster scan time when using Directory Monitoring
    static void Benchmark(int BenchmarkCount)
    {
        var relativePath = "Assets/test_file01.txt";
        if (!File.Exists(relativePath))
        {
            using (StreamWriter sw = File.CreateText(relativePath))
            {
                sw.WriteLine("Hello");
                sw.WriteLine("And");
                sw.WriteLine("Welcome");
            }
        }        Profiler.BeginSample("Benchmark " + BenchmarkCount); ;
        AssetDatabase.ImportAsset(relativePath);
        Profiler.EndSample();        AssetDatabase.DeleteAsset(relativePath);
        AssetDatabase.Refresh();
    }
}
```


            
