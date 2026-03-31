This version of Unity is unsupported.



# [ContentFile](Unity.Loading.ContentFile.html).UnloadAsync




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

public [Unity.Loading.ContentFileUnloadHandle](Unity.Loading.ContentFileUnloadHandle.html) UnloadAsync();






### Returns



**ContentFileUnloadHandle**
        A handle that can be used to track the status of the unload operation.





### Description



Begin an asynchronous unload of the [ContentFile](Unity.Loading.ContentFile.html).





If you call this while a load is in progress, it will attempt to cancel the loading process.

This must be called in order to release resources, even when the [ContentFile](Unity.Loading.ContentFile.html) load operation was not successful.

An exception will be thrown if this [ContentFile](Unity.Loading.ContentFile.html) is being used as a dependency by another [ContentFile](Unity.Loading.ContentFile.html). In this case, the other file must be unloaded first.


            
