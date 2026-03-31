This version of Unity is unsupported.



# [Coverage](TestTools.Coverage.html).GetStatsForAllCoveredMethods




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

public static CoveredMethodStats[] GetStatsForAllCoveredMethods();






### Returns



**CoveredMethodStats[]**
        Array of coverage summaries.





### Description



Returns the coverage summary for all methods that have been called since either the Unity process was started or Coverage.ResetAll() has been called.


              


```
using UnityEngine;
using UnityEngine.TestTools;// A simple test class to get coverage information for.
public class CoverageClass
{
    public bool CoveredMethod1()
    {
        return true;
    }    public bool CoveredMethod2()
    {
        return false;
    }
}public class CoverageExample : MonoBehaviour
{
    void Start()
    {
        // Reset coverage
        Coverage.ResetAll();        // Create an instance of the test class and call both test methods
        // to make sure the class has had some coverage.
        CoverageClass coverageClasss = new CoverageClass();
        coverageClasss.CoveredMethod1();
        coverageClasss.CoveredMethod2();        // Now get coverage statistics for all covered methods. Note that this
        // will return statistics for all methods that have executed since Coverage.ResetAll()
        // was last called, i.e. this method (CoverageExample.Start()), CoverageClass.CoveredMethod1(),
        // and CoverageClass.CoveredMethod2().
        CoveredMethodStats[] stats = Coverage.GetStatsForAllCoveredMethods();        for (int i = 0; i < stats.Length; i++)
        {
            Debug.Log("Method Name: " + stats[i].method.ToString());
            Debug.Log("Method has " + stats[i].totalSequencePoints + " sequence points");
            int coveredSequencePoints = stats[i].totalSequencePoints - stats[i].uncoveredSequencePoints;
            Debug.Log("of which " + coveredSequencePoints + " were covered.");
        }
    }
}
```


            
