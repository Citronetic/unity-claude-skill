This version of Unity is unsupported.



# [Coverage](TestTools.Coverage.html).GetSequencePointsFor




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

public static CoveredSequencePoint[] GetSequencePointsFor(MethodBase method);






### Parameters



| Parameter | Description |
| --- | --- |
| method | The method to get the sequence points for. |





### Returns



**CoveredSequencePoint[]**
        Array of sequence points.





### Description



Returns the coverage sequence points for the method you specify. See [CoveredSequencePoint](TestTools.CoveredSequencePoint.html) for more information about the coverage data this method returns.


              


```
using UnityEngine;
using UnityEngine.TestTools;
using System.Reflection;public class CoverageClass
{
    // A simple test method to get coverage information from.
    // If the method is called with incrementValue set to true,
    // the method will have complete coverage. If incrementValue
    // is false, the coverage will be incomplete.
    public int CoveredMethod(bool incrementValue)
    {
        int value = 0;
        if (incrementValue)
        {
            value++;
        }        return value;
    }
}public class CoverageExample : MonoBehaviour
{
    void Start()
    {
        // Create an instance of the test class and call the test method
        // to make sure the method has had some coverage. Note in this example,
        // we're passing false into the method to make sure the coverage
        // is incomplete.
        CoverageClass coverageClasss = new CoverageClass();
        int value = coverageClasss.CoveredMethod(false);        // Use reflection to get the MethodBase for CoverageClass.CoveredMethod
        MethodBase coveredMethodBase = typeof(CoverageClass).GetMethod("CoveredMethod");
        // And get the sequence points for the method.
        CoveredSequencePoint[] sequencePoints = Coverage.GetSequencePointsFor(coveredMethodBase);        for (int i = 0; i < sequencePoints.Length; i++)
        {
            Debug.Log("File: " + sequencePoints[i].filename);
            Debug.Log("Method Name: " + sequencePoints[i].method.ToString());
            Debug.Log("Line: " + sequencePoints[i].line + " Column: " + sequencePoints[i].column);
            Debug.Log(" IL Offset: " + sequencePoints[i].ilOffset + " Hit Count: " + sequencePoints[i].hitCount);
        }
    }
}
```


            
