This version of Unity is unsupported.



# [EventService](MPE.EventService.html).RegisterEventHandler




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

public static [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) RegisterEventHandler(string eventType,
Action<string,object[]> handler);






## Declaration

public static [Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) RegisterEventHandler(string eventType,
Func<string,object[],object> handler);






### Parameters



| Parameter | Description |
| --- | --- |
| eventType | The event type name. |
| handler | The handler. |





### Returns



**Action**
        An action that, when invoked, unregisters the handler (see EventService.Off).





### Description



Registers a handler for a specific event type. The handler is called whenever a message of the specified type is sent. Messages are sent using [EventService.Emit](MPE.EventService.Emit.html) or [EventService.Request](MPE.EventService.Request.html).


            
