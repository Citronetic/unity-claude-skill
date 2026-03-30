This version of Unity is unsupported.



# MultipartFormFileSection





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



A helper object for adding file uploads to multipart forms via the [IMultipartFormSection] API.





This object is very similar to the [MultipartFormDataSection] object, but all constructors additionally accept (and require) a `fileName parameter`. If you omit the `fileName` parameter, this object will provide a default filename.





### Properties



| Property | Description |
| --- | --- |
| contentType | Returns the value of the section's Content-Type header. |
| fileName | Returns a string denoting the desired filename of this section on the destination server. |
| sectionData | Returns the raw binary data contained in this section. Will not return null or a zero-length array. |
| sectionName | Returns the name of this section, if any. |





### Constructors



| Constructor | Description |
| --- | --- |
| MultipartFormFileSection | Contains a named file section based on the raw bytes from data, with a custom Content-Type and file name. |


            
