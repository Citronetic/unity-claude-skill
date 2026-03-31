This version of Unity is unsupported.



# DynamicAtlasCustomFilter




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

public delegate bool DynamicAtlasCustomFilter([Texture2D](Texture2D.html) texture,
ref [UIElements.DynamicAtlasFilters](UIElements.DynamicAtlasFilters.html) filtersToApply);






### Parameters



| Parameter | Description |
| --- | --- |
| texture | The texture to filter. |
| filtersToApply | The filters the dynamic atlas applies when the delegate returns <c>true</c>.
 by default, this value is equal to <see cref="DynamicAtlasSettings.activeFilters" />. |





### Returns



**bool**

 When `false`, the texture cannot be added to the atlas. When `true` the texture is added to the atlas,
 as long as it is not excluded by filtersToApply.





### Description



Delegate that can be used as a custom filter for the dynamic atlas.


            
