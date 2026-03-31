This version of Unity is unsupported.



# IPropertyDatabaseRecordValue





interface in
          UnityEditor.Search


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



Interface of a record value.





A record value contains the property value that is stored in the record. If the data is serializable (see [PropertyDatabase.IsPersistedType](Search.PropertyDatabase.IsPersistedType.html)), the record value contains the serialized data, otherwise it contains the C# object. To get the actual data from the record value, you need to use [PropertyDatabase.GetObjectFromRecordValue](Search.PropertyDatabase.GetObjectFromRecordValue.html) or [IPropertyDatabaseView.GetObjectFromRecordValue](Search.IPropertyDatabaseView.GetObjectFromRecordValue.html).

Additional resources: [IPropertyDatabaseRecord](Search.IPropertyDatabaseRecord.html)





### Properties



| Property | Description |
| --- | --- |
| type | The type of record value. |


            
