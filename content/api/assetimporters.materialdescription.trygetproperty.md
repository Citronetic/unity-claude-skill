This version of Unity is unsupported.



# [MaterialDescription](AssetImporters.MaterialDescription.html).TryGetProperty




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

public bool TryGetProperty(string propertyName,
out float value);






## Declaration

public bool TryGetProperty(string propertyName,
out [Vector4](Vector4.html) value);






## Declaration

public bool TryGetProperty(string propertyName,
out string value);






## Declaration

public bool TryGetProperty(string propertyName,
out [AssetImporters.TexturePropertyDescription](AssetImporters.TexturePropertyDescription.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyName | Name of the property. |
| value | The retrieved value. |





### Returns



**bool**
        Returns true if the property exists on the material. Returns false otherwise.





### Description



Retrieves the value of a specified material property.


            
