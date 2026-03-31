This version of Unity is unsupported.



# [Material](Material.html).GetMatrixArray




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public Matrix4x4[] GetMatrixArray(string name);






## Declaration

public Matrix4x4[] GetMatrixArray(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |





### Description



Get a named matrix array.





Additional resources: [SetMatrixArray](Material.SetMatrixArray.html).




---








## Declaration

public void GetMatrixArray(string name,
List<Matrix4x4> values);






## Declaration

public void GetMatrixArray(int nameID,
List<Matrix4x4> values);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| values | The list to hold the returned array. |





### Description



Fetch a named matrix array into a list.





The list will be resized to the array size, or cleared if such property doesn't exist. Memory allocation is guaranteed not to happen during the function call.


            
