This version of Unity is unsupported.



# DownloadHandlerFile Constructor




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

public DownloadHandlerFile(string path);






## Declaration

public DownloadHandlerFile(string path,
bool append);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path to file to be written. |
| append | When true, appends data to the given file instead of overwriting. |





### Description



Creates a new instance and a file on disk where downloaded data will be written to.





Throws an ArgumentException if a file cannot be created.
If a path to a file in a non-existent directory is given, all required directories are created. If a file exists, it will be overwritten, unless in append mode. If a file doesn't exist, it is created regardless of append flag.


            
