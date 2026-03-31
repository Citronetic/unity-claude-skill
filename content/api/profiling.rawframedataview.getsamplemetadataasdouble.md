This version of Unity is unsupported.



# [RawFrameDataView](Profiling.RawFrameDataView.html).GetSampleMetadataAsDouble




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

public double GetSampleMetadataAsDouble(int sampleIndex,
int metadataIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| sampleIndex | Index of the Profiler sample. |
| metadataIndex | Metadata index. |





### Returns



**double**
        Returns double representation of sample metadata value.





### Description



Gets sample metadata value as double.





Use to obtain additional data associated with the sample. *metadataIndex* must be between 0 and [GetSampleMetadataCount](Profiling.RawFrameDataView.GetSampleMetadataCount.html).


            
