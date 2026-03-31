This version of Unity is unsupported.



# AsyncReadManagerRequestMetric





struct in
          Unity.IO.LowLevel.Unsafe



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Metrics for an individual read request.





Get metrics records by calling AsyncReadManager.GetMetrics.





### Properties



| Property | Description |
| --- | --- |
| AssetName | The name of the asset being read. |
| AssetTypeId | The type ID of the asset being read in the read request. |
| BatchReadCount | The number of batch read commands contained in the read request. |
| CurrentBytesRead | Total number of bytes of the read request read so far. |
| FileName | The filename the read request is reading from. |
| IsBatchRead | Returns whether this read request contained batch read commands. |
| OffsetBytes | The offset of the read request from the start of the file, in bytes. |
| PriorityLevel | The priority level of the read request. |
| ReadType | The read type (sync or async) of the read request. |
| RequestTimeMicroseconds | The time at which the read request was made, in microseconds elapsed since application startup. |
| SizeBytes | The size of the read request, in bytes. |
| State | The state of the read request at the time of retrieving the metrics. |
| Subsystem | The Subsystem tag assigned to the read operation. |
| TimeInQueueMicroseconds | The amount of time the read request waited in the AsyncReadManager queue, in microseconds. |
| TotalTimeMicroseconds | The total time in microseconds from the read request being added until its completion, or the time of metrics retrieval, depending whether the read has completed or not. |


            
