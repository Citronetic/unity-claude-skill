This version of Unity is unsupported.



# ProfilerMarkerDataUnit





enumeration


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



Options for Profiler marker data unit types.





Use unit types to define how Unity visualizes a particular value in the Profiler. A unit type represents dimensionality. For example, a unit type for time is represented as seconds, and a unit type for data size is represented as bytes.





### Properties



| Property | Description |
| --- | --- |
| Undefined | Use to display data value as string if ProfilerMarkerDataTypes.String16 or as a simple number without any unit abbreviations. Also use Undefined in combination with ProfilerMarkerDataTypes.Blob8 which won't be visualized. |
| TimeNanoseconds | Display data value as a time, specified in nanoseconds. |
| Bytes | Display data value as a size, specified in bytes. |
| Count | Display data value as a simple number without any unit abbreviations. |
| Percent | Display data value as a percentage value with % postfix. |
| FrequencyHz | Display data value as a frequency, specified in hertz. |


            
