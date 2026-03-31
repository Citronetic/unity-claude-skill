This version of Unity is unsupported.



# [PropertyContainer](Unity.Properties.PropertyContainer.html).TrySetValue




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

public static bool TrySetValue(TContainer container,
string name,
TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property will be set. |
| name | The name of the property to set. |
| value | The value to assign to the property. |





### Returns



**bool**

          `true` if the value was set correctly; `false` otherwise.





### Description



Tries to set the value of a property at the given path to the given value.





This method is NOT thread safe.




---








## Declaration

public static bool TrySetValue(TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property will be set. |
| path | The path of the property to set. |
| value | The value to assign to the property. |





### Returns



**bool**

          `true` if the value was set correctly; `false` otherwise.





### Description



Tries to set the value of a property at the given path to the given value.





This method is NOT thread safe.




---








## Declaration

public static bool TrySetValue(ref TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
TValue value,
out [Unity.Properties.VisitReturnCode](Unity.Properties.VisitReturnCode.html) returnCode);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property will be set. |
| path | The path of the property to set. |
| value | The value to assign to the property. |
| returnCode | When this method returns, contains the return code. |





### Returns



**bool**

          `true` if the value was set correctly; `false` otherwise.





### Description



Tries to set the value of a property at the given path to the given value.





This method is NOT thread safe.


            
