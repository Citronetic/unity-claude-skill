This version of Unity is unsupported.



# [IPropertyDatabaseView](Search.IPropertyDatabaseView.html).Sync




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

public void Sync();






### Description



Synchronizes the views so they have access to the same content.





This flushes the internal filestream of the view, so the data is written on disk and available to the other views. When [PropertyDatabase.GetView](Search.PropertyDatabase.GetView.html) is called with **delayedSync** set to true, the view is only synced when disposed. Otherwise the view is synced each time a store or invalidate happens. This allows you to sync the view whenever you need before disposing it.


            
