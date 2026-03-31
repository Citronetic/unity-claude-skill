This version of Unity is unsupported.



# StringView Constructor




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

public StringView(string baseString);






### Parameters



| Parameter | Description |
| --- | --- |
| baseString | The base string. |





### Description



Constructs a [StringView](Search.StringView.html) over an entire string.




---








## Declaration

public StringView(string baseString,
int startIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| baseString | The base string. |
| startIndex | The starting index of the view. |





### Description



Constructs a [StringView](Search.StringView.html) from a string, starting at index **startIndex**.




---








## Declaration

public StringView(string baseString,
int startIndex,
int endIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| baseString | The base string. |
| startIndex | The starting index of the view. |
| endIndex | The exclusive ending index of the view. |





### Description



Constructs a [StringView](Search.StringView.html) from a string, starting at index **startIndex** and ending at, but not including, index **endIndex**.


            
