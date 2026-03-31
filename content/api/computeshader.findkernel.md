This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).FindKernel




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




                [Switch to Manual](../Manual/class-ComputeShader.html)










## Declaration

public int FindKernel(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Name of kernel function as defined in the compute shader source file. |





### Returns



**int**
        The Kernel index. If the kernel is not found, Unity logs a "FindKernel failed" error message and raises an ArgumentException.





### Description



Find [ComputeShader](ComputeShader.html) kernel index.





A single compute shader can contain many "kernels" (functions that do the computation);
FindKernel returns kernel index given the name.

Additional resources: [Dispatch](ComputeShader.Dispatch.html).


              


```
using UnityEngine;public class ComputeShaderExample : MonoBehaviour
{
    public ComputeShader computeShader;    void Start()
    {
        // Find the kernel named "CSMain" in the compute shader
        int kernelHandle = computeShader.FindKernel("CSMain");        // Log the kernel index
        Debug.Log($"Kernel 'CSMain' found at index: {kernelHandle}");
    }
}
```


            
