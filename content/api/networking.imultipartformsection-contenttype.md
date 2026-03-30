This version of Unity is unsupported.



# [IMultipartFormSection](Networking.IMultipartFormSection.html).contentType




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












                    public string contentType;






### Returns



**string**
        The value to use in the `Content-Type` header, or `null`.





### Description



Returns the value to use in the `Content-Type` header for this form section.





If this property returns a non-null, non-empty string, then the returned string will be set as the `Content-Type` of this form section.

If this property returns null or an empty string, then the `Content-Type` header will be omitted from this form section. How the server will handle this data is left up to the individual server.


            
