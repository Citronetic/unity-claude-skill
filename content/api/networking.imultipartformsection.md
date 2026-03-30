This version of Unity is unsupported.



# IMultipartFormSection





interface in
          UnityEngine.Networking


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



















### Description



An interface for composition of data into multipart forms.





In order to provide a finer level of control for those wishing to generate multipart form data, but without forcing most users to refer to [RFC 2388](http://tools.ietf.org/html/rfc2388), Unity provides this simple interface which the UnityWebRequest API can use to serialize complex data into properly-formatted bytes.

For convenience, the two general types of form sections have been encapsulated into two stock implementations of IMultipartFormSection. Both stock implementations are simply controlled via their constructors.

IMultipartFormSection implementors are converted into bytes via [UnityWebRequest.SerializeFormSections].

Additional resources: [MultipartFormDataSection], [MultipartFormFileSection].





### Properties



| Property | Description |
| --- | --- |
| contentType | Returns the value to use in the Content-Type header for this form section. |
| fileName | Returns a string denoting the desired filename of this section on the destination server. |
| sectionData | Returns the raw binary data contained in this section. Must not return null or a zero-length array. |
| sectionName | Returns the name of this section, if any. |


            
