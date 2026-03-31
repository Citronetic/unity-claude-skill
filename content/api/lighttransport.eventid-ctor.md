This version of Unity is unsupported.



# EventID Constructor




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

public EventID(ulong value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The value is used by the implementation and can be interpreted as a memory pointer or other implementation specific data. |





### Description



Construct a new EventID object.





Creates an EventID from a raw value. This constructor is primarily used to create EventIDs from internal handles.

The value is implementation-specific and can represent:



          - Event handles or fences in GPU implementations.

          - Thread synchronization objects in CPU implementations.

          - Other implementation-defined identifiers.





**Note:** User code should typically obtain EventIDs through [IDeviceContext.CreateEvent](LightTransport.IDeviceContext.CreateEvent.html) rather than constructing them manually.


            
