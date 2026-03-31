This version of Unity is unsupported.



# [PropertyDatabase](Search.PropertyDatabase.html).filePath




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












                    public string filePath;






### Description



The file on which this [PropertyDatabase](Search.PropertyDatabase.html) is opened.





Multiple [PropertyDatabase](Search.PropertyDatabase.html)s can be opened on different files, but only a single [PropertyDatabase](Search.PropertyDatabase.html) can be opened on a single file. You can do concurrent operations on a single instance of a [PropertyDatabase](Search.PropertyDatabase.html), but for performance reasons you should use a view (see [PropertyDatabase.GetView](Search.PropertyDatabase.GetView.html) and [IPropertyDatabaseView](Search.IPropertyDatabaseView.html)).


            
