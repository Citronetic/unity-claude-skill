This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).GetResponseHeaders




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

public Dictionary<string,string> GetResponseHeaders();






### Returns



**Dictionary<string,string>**
        A dictionary containing all the response headers received in the latest HTTP response. If no responses have been received, returns `null`.





### Description



Retrieves a dictionary containing all the response headers received by this UnityWebRequest in the latest HTTP response.





In the case that the UnityWebRequest has received multiple responses (such as during redirects), only headers from the latest/final response will be included.

**Note:** This method allocates a new Dictionary object each time it is called. You may wish to cache the return value from this call if you are retrieving it multiple times.


            
