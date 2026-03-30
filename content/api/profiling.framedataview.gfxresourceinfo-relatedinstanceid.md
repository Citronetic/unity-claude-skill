This version of Unity is unsupported.



# [FrameDataView.GfxResourceInfo](Profiling.FrameDataView.GfxResourceInfo.html).relatedInstanceId




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












                    public int relatedInstanceId;






### Description



Related instance ID of Unity Object.





Graphics resource might be related to the specific Unity Object such as Texture2D, RenderTexture.
If *relatedInstanceId* isn't zero use FrameData.GetUnityObjectInfo to obtain further information about Unity Object.


              


```
using UnityEditorInternal;
using UnityEditor.Profiling;public class Example
{
    public static string GetGfxResourceName(int frame, ulong gfxResourceId)
    {
        using (var frameData = ProfilerDriver.GetRawFrameDataView(frame, 0))
        {
            if (frameData.GetGfxResourceInfo(gfxResourceId, out var info))
            {
                if (frameData.GetUnityObjectInfo(info.relatedInstanceId, out var objectInfo))
                    return objectInfo.name;
            }
            return "N/A";
        }
    }
}
```


            
