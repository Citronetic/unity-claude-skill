This version of Unity is unsupported.



# Dispatcher





class in
          UnityEditor.Search


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



The search dispatcher is used to synchronize events from the search provider threads and the main UI threads.





### Static Methods



| Method | Description |
| --- | --- |
| CallDelayed | Register a callback to be executed later in the main thread. |
| Enqueue | This function can be used in a thread to enqueue an action that will be executed later in the main thread. |
| ProcessOne | This function can called in the main thread to force the execution of one enqueued action. |


            
