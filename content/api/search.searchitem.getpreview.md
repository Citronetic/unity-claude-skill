This version of Unity is unsupported.



# [SearchItem](Search.SearchItem.html).GetPreview




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

public [Texture2D](Texture2D.html) GetPreview([Search.SearchContext](Search.SearchContext.html) context,
[Vector2](Vector2.html) size,
[Search.FetchPreviewOptions](Search.FetchPreviewOptions.html) options,
bool cacheThumbnail);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Search context used to fetch the preview. |
| size | Indicates the size of the desired preview. |
| options | Indicates the options used to fetch various preview types. |
| cacheThumbnail | Indicates if the preview thumbnail should be cached for next time. |





### Returns



**Texture2D**
        Returns the generated preview 2D texture.





### Description



Gets the search item preview if available, otherwise the preview is fetched at this time.


            
