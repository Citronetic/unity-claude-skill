This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).processorType




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












                    public static string processorType;






### Description



Processor name (Read Only).





Will return [SystemInfo.unsupportedIdentifier](SystemInfo-unsupportedIdentifier.html) on platforms which don't support this property.


              


```
using UnityEngine;
using System;
using System.Globalization;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints using the following format - "Intel(R) Core(TM)2 Quad CPU Q6600 @ 2.40GHz"
        print(SystemInfo.processorType);        // Print out the architecture of the running process.
        // We can use the Environment property Is64BitProcess along with SystemInfo.processorType to figure it out.
        // Do a case insensitive string check.
        if (CultureInfo.InvariantCulture.CompareInfo.IndexOf(SystemInfo.processorType, "ARM", CompareOptions.IgnoreCase) >= 0)
        {
            if (Environment.Is64BitProcess)
                Debug.Log("ARM64");
            else
                Debug.Log("ARM");
        }
        else
        {
            // Must be in the x86 family.
            if (Environment.Is64BitProcess)
                Debug.Log("x86_64");
            else
                Debug.Log("x86");
        }
    }
}
```





Additional resources: [SystemInfo.processorCount](SystemInfo-processorCount.html), [SystemInfo.processorFrequency](SystemInfo-processorFrequency.html).  On Android prior to 2019.3 this property would return the process architecture rather than the CPU name.
                To determine the architecture of the running process see the example code.


            
