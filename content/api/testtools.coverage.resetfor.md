This version of Unity is unsupported.



# [Coverage](TestTools.Coverage.html).ResetFor




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

public static void ResetFor(MethodBase method);






### Parameters



| Parameter | Description |
| --- | --- |
| method | The method. |





### Description



Resets the coverage data for the specified method.


              


```
using UnityEngine;
using UnityEngine.TestTools;
using System.Reflection;
using System;// A simple test class to get coverage information for.
public class CoverageClass
{
    public bool CoveredMethod1()
    {
        return true;
    }    public bool CoveredMethod2()
    {
        return false;
    }
}
public class CoverageExample : MonoBehaviour
{
    void Start()
    {
        // Create an instance of the test class and call the test methods
        // to make sure the class has had some coverage.
        CoverageClass coverageClasss = new CoverageClass();
        coverageClasss.CoveredMethod1();
        coverageClasss.CoveredMethod2();        // Use reflection to get the MethodBase for CoverageClass.CoveredMethod2
        MethodBase coveredMethodBase = typeof(CoverageClass).GetMethod("CoveredMethod2");        // Reset the coverage for CoveredMethod2
        Coverage.ResetFor(coveredMethodBase);        // Now get the coverage stats for the CoveredMethod2.
        // Because coverage for CoveredMethod2 has been reset, the log
        // will show that the none of the method's sequence points
        // have been covered.
        CoveredMethodStats stats = Coverage.GetStatsFor(coveredMethodBase);        Debug.Log("Method Name: " + stats.method.ToString());
        Debug.Log("Method has " + stats.totalSequencePoints + " sequence points");
        int coveredSequencePoints = stats.totalSequencePoints - stats.uncoveredSequencePoints;
        Debug.Log("of which " + coveredSequencePoints + " were covered.");
    }
}
```


            
