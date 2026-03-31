This version of Unity is unsupported.



# [Graphics](Graphics.html).CopyBuffer




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

public static void CopyBuffer([GraphicsBuffer](GraphicsBuffer.html) source,
[GraphicsBuffer](GraphicsBuffer.html) dest);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The source buffer. |
| dest | The destination buffer. |





### Description



Copies the contents of one [GraphicsBuffer](GraphicsBuffer.html) into another.





The GPU copies the buffer contents efficiently.

Total buffer sizes (i.e. [GraphicsBuffer.count](GraphicsBuffer-count.html) multiplied by [GraphicsBuffer.stride](GraphicsBuffer-stride.html)) must match between source and destination buffers. The source buffer must have a [GraphicsBuffer.Target.CopySource](GraphicsBuffer.Target.CopySource.html) target flag, and the destination buffer must have a [GraphicsBuffer.Target.CopyDestination](GraphicsBuffer.Target.CopyDestination.html) target flag.


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
        src.SetData(new ushort[]{1, 10, 100});
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





Additional resources: [GraphicsBuffer](GraphicsBuffer.html), [CommandBuffer.CopyBuffer](Rendering.CommandBuffer.CopyBuffer.html), [Graphics.CopyTexture](Graphics.CopyTexture.html).


            
