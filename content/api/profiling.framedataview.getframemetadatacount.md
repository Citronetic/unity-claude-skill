This version of Unity is unsupported.



# [FrameDataView](Profiling.FrameDataView.html).GetFrameMetaDataCount




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

public int GetFrameMetaDataCount(Guid id,
int tag);






### Parameters



| Parameter | Description |
| --- | --- |
| id | Project or package identifier. |
| tag | Data stream index. |





### Returns



**int**
        Returns count of metadata chunks.





### Description



Gets the total number of metadata chunks for each *id* and *tag* pair in the frame.





Use the *GetSessionMetaDataCount* method to retrieve the total number of metadata arrays available in this session.

When there are multiple [Profiler.EmitFrameMetaData](Profiling.Profiler.EmitFrameMetaData.html) calls in the same frame, it results in multiple metadata arrays that are associated with the frame for a given *id*, *tag* pair. This information can be used to write data to the stream in small portions, which reduces the amount of memory needed to hold generated data.

Use *id* to identify the metadata from your project or package.

Use *tag* to distinguish between different data streams.

Additional resources: [GetFrameMetaData](Profiling.FrameDataView.GetFrameMetaData.html), [Profiler.EmitFrameMetaData](Profiling.Profiler.EmitFrameMetaData.html).


            
