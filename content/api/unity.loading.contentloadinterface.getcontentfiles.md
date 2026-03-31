This version of Unity is unsupported.



# [ContentLoadInterface](Unity.Loading.ContentLoadInterface.html).GetContentFiles




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

public static ContentFile[] GetContentFiles([Unity.Content.ContentNamespace](Unity.Content.ContentNamespace.html) nameSpace);






### Parameters



| Parameter | Description |
| --- | --- |
| nameSpace | The ContentNamespace used to filter the results. |





### Returns



**ContentFile[]**
        Returns an array of all the [ContentFile](Unity.Loading.ContentFile.html)s belonging to the [ContentNamespace](Unity.Content.ContentNamespace.html).





### Description



Returns all the [ContentFile](Unity.Loading.ContentFile.html) handles associated with the provided [ContentNamespace](Unity.Content.ContentNamespace.html).





The results will include all [ContentFile](Unity.Loading.ContentFile.html)s regardless of their [ContentFile.LoadingStatus](Unity.Loading.ContentFile.LoadingStatus.html).


            
