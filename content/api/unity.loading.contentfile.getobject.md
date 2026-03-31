This version of Unity is unsupported.



# [ContentFile](Unity.Loading.ContentFile.html).GetObject




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

public Object GetObject(ulong localIdentifierInFile);






### Parameters



| Parameter | Description |
| --- | --- |
| lfid | The local file identifier. |





### Returns



**Object**
        The loaded Object from the [ContentFile](Unity.Loading.ContentFile.html).





### Description



Used to access objects within the [ContentFile](Unity.Loading.ContentFile.html) by local file identifier.





This method will raise an exception if when called [ContentFile.LoadingStatus](Unity.Loading.ContentFile.LoadingStatus.html) is not [LoadingStatus.Completed](Unity.Loading.LoadingStatus.Completed.html).


            
