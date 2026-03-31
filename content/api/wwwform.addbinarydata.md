This version of Unity is unsupported.



# [WWWForm](WWWForm.html).AddBinaryData




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

public void AddBinaryData(string fieldName,
byte[] contents,
string fileName = null,
string mimeType = null);






### Description



Add binary data to the form.





Use this function to upload files and images to a web server application.
Note that the data is read from the contents of byte array and not from a file.
The fileName parameter is for telling the server what filename to use when saving the uploaded file.

If `mimeType` is not given and first 8 bytes of the data match PNG format header, then the
data is sent with "`image/png`" mimetype. Otherwise it is sent with "`application/octet-stream`"
mimetype.


            
