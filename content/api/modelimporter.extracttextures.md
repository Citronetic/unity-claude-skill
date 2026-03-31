This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).ExtractTextures




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

public bool ExtractTextures(string folderPath);






### Parameters



| Parameter | Description |
| --- | --- |
| folderPath | The directory where the textures will be extracted. |





### Returns



**bool**
        Returns true if the textures are extracted successfully, otherwise false.





### Description



Extracts the embedded textures from a model file (such as FBX or SketchUp).





Throws **ArgumentException** if the folder path is *null* or empty.


            
