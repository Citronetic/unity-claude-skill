This version of Unity is unsupported.



# [AndroidProjectFilesModifierContext](Android.AndroidProjectFilesModifierContext.html).SetData




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

public void SetData(string key,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Data key. |
| value | Data value as string. |





### Description



Sets data for the OnModifyAndroidProjectFiles callback.





This method is used to set data from the Unity Editor and it is passed to the `OnModifyAndroidProjectFiles` callback.

                    If data with the same key already exists, Unity throws an error.




---








## Declaration

public void SetData(string key,
T value);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Data key. |
| value | Serializable object. |





### Description



Sets data as serializable object.





This method is used to set data from the Unity Editor and it is passed to the `OnModifyAndroidProjectFiles` callback.

                    If data with the same key already exists, Unity throws an error.


            
