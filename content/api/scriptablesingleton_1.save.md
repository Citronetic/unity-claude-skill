This version of Unity is unsupported.



# [ScriptableSingleton<T0>](ScriptableSingleton_1.html).Save




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

protected void Save(bool saveAsText);






### Parameters



| Parameter | Description |
| --- | --- |
| saveAsText | If true then the file is saved as text, if false it is saved as binary. |





### Description



Saves the current state of the ScriptableSingleton.





Call `Save` to save the current state of the ScriptableSingleton to disk for persistence. If you call this function and your class has no [FilePathAttribute](FilePathAttribute.html), then saving has no effect.

**Note**: Don't call this method from [ScriptableObject.OnValidate](ScriptableObject.OnValidate.html) because the singleton can be in the process of reading its data from a file, which causes an error.

Additional resources: [GetFilePath](ScriptableSingleton_1.GetFilePath.html).


            
