This version of Unity is unsupported.



# [PropertyContainer](Unity.Properties.PropertyContainer.html).TryGetValue




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

public static bool TryGetValue(TContainer container,
string name,
out TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property value will be returned. |
| name | The name of the property to get. |
| value | When this method returns, contains the value associated with the specified name, if the property is found. otherwise the default value for the <typeparamref name="TValue" />. |





### Returns



**bool**

          `true` if the value exists for the specified name; otherwise, `false`.





### Description



Gets the value of a property by name.




---








## Declaration

public static bool TryGetValue(TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
out TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property value will be returned. |
| path | The path of the property to get. |
| value | When this method returns, contains the value associated with the specified path, if the property is found. otherwise the default value for the <typeparamref name="TValue" />. |





### Returns



**bool**

          `true` if the value exists at the specified path; otherwise, `false`.





### Description



Gets the value of a property by path.




---








## Declaration

public static bool TryGetValue(ref TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
out TValue value,
out [Unity.Properties.VisitReturnCode](Unity.Properties.VisitReturnCode.html) returnCode);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container whose property value will be returned. |
| path | The path of the property to get. |
| value | When this method returns, contains the value associated with the specified path, if the property is found. otherwise the default value for the <typeparamref name="TValue" />. |
| returnCode | When this method returns, contains the return code. |





### Returns



**bool**

          `true` if the value exists at the specified path; otherwise, `false`.





### Description



Gets the value of a property by path.


            
