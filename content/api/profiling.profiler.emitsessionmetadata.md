This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).EmitSessionMetaData




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

public static void EmitSessionMetaData(Guid id,
int tag,
Array data);






## Declaration

public static void EmitSessionMetaData(Guid id,
int tag,
List<T> data);






## Declaration

public static void EmitSessionMetaData(Guid id,
int tag,
NativeArray<T> data);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Unique identifier associated with the data. |
| tag | Data stream index. |
| data | Binary data. |





### Description



Write metadata associated with the whole Profiler session capture.





Use *EmitSessionMetaData* to write arbitrary binary data that should be available for all frames of this session. Data must contain only blittable types.

If the information you want to store in the Profiler meta data might change from frame to frame, consider using [EmitFrameMetaData](Profiling.Profiler.EmitFrameMetaData.html) instead.


              


```
using System;
using System.Diagnostics;
using Unity.Collections;
using UnityEngine;
using UnityEngine.Profiling;public class Example
{
    public struct TextureInfo
    {
        public int format;
        public int w;
        public int h;
    }    public static readonly Guid MyProjectId = new Guid("7E1DEA84-51F1-477A-82B5-B5C57AC1EBF7");
    public static readonly int TextureInfoTag = 0;
    public static readonly int TextureDataTag = 1;    [Conditional("ENABLE_PROFILER")]
    public void EmitTextureToProfilerStream(Texture2D t)
    {
        if (!Profiler.enabled)
            return;
        TextureInfo textureInfo = new TextureInfo() { format = (int)t.format, w = t.width, h = t.height };
        NativeArray<byte> textureData = t.GetRawTextureData<byte>();
        Profiler.EmitSessionMetaData(MyProjectId, TextureInfoTag, new[] { textureInfo });
        Profiler.EmitSessionMetaData(MyProjectId, TextureDataTag, textureData);
    }
}
```





**Note:**


Writing large chunks of data might increase the Profiler's overhead and memory usage. Always check if Profiler is [enabled](Profiling.Profiler-enabled.html) before generating data.
When possible, write data in small chunks to reduce memory usage.

Additional resources: [FrameDataView.GetSessionMetaData](Profiling.FrameDataView.GetSessionMetaData.html).


            
