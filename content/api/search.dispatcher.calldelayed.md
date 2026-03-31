This version of Unity is unsupported.



# [Dispatcher](Search.Dispatcher.html).CallDelayed




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

public static [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) CallDelayed([EditorApplication.CallbackFunction](EditorApplication.CallbackFunction.html) callback,
double seconds);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | Callback to be executed later in the main thread. |
| seconds | Number of seconds to wait until the main thread executes the user callback. |





### Returns



**Action**
        Returns an off handler that can be used to unregister the callback before it gets executed in the main thread later.





### Description



Register a callback to be executed later in the main thread.


            
