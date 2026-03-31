This version of Unity is unsupported.



# [Material](Material.html).GetFloatArray




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

public float[] GetFloatArray(string name);






## Declaration

public float[] GetFloatArray(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |





### Description



Get a named float array.





Additional resources: [SetFloatArray](Material.SetFloatArray.html).




---








## Declaration

public void GetFloatArray(string name,
List<float> values);






## Declaration

public void GetFloatArray(int nameID,
List<float> values);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |
| values | The list to hold the returned array. |





### Description



Fetch a named float array into a list.





The list will be resized to the array size, or cleared if such property doesn't exist. Memory allocation is guaranteed not to happen during the function call.


            
