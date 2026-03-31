This version of Unity is unsupported.



# [SearchMonitorView](Search.SearchMonitorView.html).TryLoadProperty




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

public bool TryLoadProperty(ulong documentKey,
string propertyName,
out [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) recordKey,
out object value,
out string alias);






## Declaration

public bool TryLoadProperty([Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) recordKey,
out object data);






### Parameters



| Parameter | Description |
| --- | --- |
| documentKey | Document id. |
| propertyName | Property name. |
| recordKey | Computed property key that can be used to do other load or store accesses. |
| value | Decoded propety value. |
| alias | Property alias if any. |
| data | Decoded propety value. |





### Returns



**bool**
        Returns true if the property is found.





### Description



Loads a property if any.


            
