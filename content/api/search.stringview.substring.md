This version of Unity is unsupported.



# [StringView](Search.StringView.html).Substring




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

public stringView Substring(int start);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The starting index. |





### Returns



**stringView**
        A new [StringView](Search.StringView.html).





### Description



Returns a substring of the current [StringView](Search.StringView.html), starting at index **start** and until the end of the [StringView](Search.StringView.html).





This does not create another string. The substring is only a new [StringView](Search.StringView.html) with the same base string and its start and end indices modified. The starting index is an offset to the current [StringView](Search.StringView.html).




---








## Declaration

public stringView Substring(int start,
int length);






### Parameters



| Parameter | Description |
| --- | --- |
| start | The starting index. |
| length | The length of the substring. |





### Returns



**stringView**
        A new [StringView](Search.StringView.html).





### Description



Returns a substring of the current [StringView](Search.StringView.html), starting at index **start** and with the specified length.





This does not create another string. The substring is only a new [StringView](Search.StringView.html) with the same base string and its start and end indices modified. The starting index is an offset to the current [StringView](Search.StringView.html).


            
