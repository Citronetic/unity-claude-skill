This version of Unity is unsupported.



# MultipartFormDataSection





class in
          UnityEngine.Networking



/



Implemented in:[UnityEngine.UnityWebRequestModule](UnityEngine.UnityWebRequestModule.html)


                  Leave feedback





Implements interfaces:[IMultipartFormSection](Networking.IMultipartFormSection.html)




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



















### Description



A helper object for form sections containing generic, non-file data.





This helper object is used similarly to the [WWWForm](WWWForm.html) method WWWForm.AddData. It is used to define non-file form sections.





### Properties



| Property | Description |
| --- | --- |
| contentType | Returns the value to use in this section's Content-Type header. |
| fileName | Returns a string denoting the desired filename of this section on the destination server. |
| sectionData | Returns the raw binary data contained in this section. Will not return null or a zero-length array. |
| sectionName | Returns the name of this section, if any. |





### Constructors



| Constructor | Description |
| --- | --- |
| MultipartFormDataSection | Raw data section, unnamed and no Content-Type header. |


            
