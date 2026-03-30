This version of Unity is unsupported.



# [IMultipartFormSection](Networking.IMultipartFormSection.html).fileName




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












                    public string fileName;






### Returns



**string**
        The desired file name of this section, or `null` if this is not a file section.





### Description



Returns a string denoting the desired filename of this section on the destination server.





If this property returns a non-null string, then this is assumed to be a file section, and the file's name will be defined by the returned string.

If you do not wish your section to be a file section, simply return `null` from this property.


            
