This version of Unity is unsupported.



# [GraphicsBuffer.Target](GraphicsBuffer.Target.html).CopyDestination




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



















### Description



GraphicsBuffer can be used as a destination for CopyBuffer.





The destination buffer for [Graphics.CopyBuffer](Graphics.CopyBuffer.html) or [CommandBuffer.CopyBuffer](Rendering.CommandBuffer.CopyBuffer.html) must have `CopyDestination` target set.
This target is most often combined with other target flags.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // create a source index buffer and set data for it
        var src = new GraphicsBuffer(
            GraphicsBuffer.Target.Index | GraphicsBuffer.Target.CopySource,
            3, 2);
        src.SetData(new ushort[] {1, 10, 100});
        // create a destination index buffer and copy source into it
        var dst = new GraphicsBuffer(
            GraphicsBuffer.Target.Index | GraphicsBuffer.Target.CopyDestination,
            3, 2);
        Graphics.CopyBuffer(src, dst);        // check the copied data
        var got = new ushort[3];
        dst.GetData(got);
        Debug.Log($"copied data: {got[0]}, {got[1]}, {got[2]}");        // release the buffers
        src.Release();
        dst.Release();
    }
}
```





Additional resources: [Graphics.CopyBuffer](Graphics.CopyBuffer.html), [CommandBuffer.CopyBuffer](Rendering.CommandBuffer.CopyBuffer.html), [GraphicsBuffer.Target.CopySource](GraphicsBuffer.Target.CopySource.html).


            
