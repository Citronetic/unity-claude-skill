This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetSessionMetaData




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

public NativeArray<T> GetSessionMetaData(Guid id,
int tag);






## Declaration

public NativeArray<T> GetSessionMetaData(Guid id,
int tag,
int index);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Unique identifier associated with the data. |
| tag | Data stream index. |
| index | Chunk index. |





### Returns



**NativeArray<T>**
        Returns the session metadata as a NativeArray.





### Description



Retrieves the metadata of the session this frame occurred in as a NativeArray.





Use *GetSessionMetaData* to retrieve the data that the [Profiler.EmitSessionMetaData](Profiling.Profiler.EmitSessionMetaData.html) method wrote to the Profiler stream.
Profiler data can contain frames from different sessions.

Use *id* to identify the metadata from your Project or package.

Use *tag* to distinguish between different data streams.

Use *index* to retrieve separate data chunks for each [Profiler.EmitSessionMetaData](Profiling.Profiler.EmitSessionMetaData.html) called during the profiling session.


              


```
using System;
using Unity.Collections;
using UnityEditor.Profiling;
using UnityEditorInternal;
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
    public static readonly int TextureDataTag = 1;    public void EmitTextureToProfilerStream(Texture2D t)
    {
        TextureInfo textureInfo = new TextureInfo() { format = (int)t.format, w = t.width, h = t.height };
        NativeArray<byte> textureData = t.GetRawTextureData<byte>();
        Profiler.EmitSessionMetaData(MyProjectId, TextureInfoTag, new[] { textureInfo });
        Profiler.EmitSessionMetaData(MyProjectId, TextureDataTag, textureData);
    }    public Texture2D GetSessionTextureFromProfilerStream(int frame)
    {
        using (var frameData = ProfilerDriver.GetRawFrameDataView(frame, 0))
        {
            NativeArray<TextureInfo> textureInfos = frameData.GetSessionMetaData<TextureInfo>(MyProjectId, TextureInfoTag);
            if (textureInfos.Length == 0)
                return null;            NativeArray<byte> textureData = frameData.GetSessionMetaData<byte>(MyProjectId, TextureDataTag);
            if (textureData.Length == 0)
                return null;            TextureInfo textureInfo = textureInfos[0];
            Texture2D texture = new Texture2D(textureInfo.w, textureInfo.h, (TextureFormat)textureInfo.format, false);
            texture.LoadRawTextureData(textureData);            return texture;
        }
    }
}
```





**Note:**


The *FrameDataView* instance defines the lifetime of the returned ''NativeArray'. As such, if *FrameDataView* is disposed, all returned metadata becomes invalid and cannot be used. Copy data to a new *NativeArray* if you need it for longer duration.

Additional resources: [Profiler.EmitSessionMetaData](Profiling.Profiler.EmitSessionMetaData.html).


            
