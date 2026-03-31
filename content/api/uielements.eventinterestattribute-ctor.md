This version of Unity is unsupported.



# EventInterestAttribute Constructor




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

public EventInterestAttribute(params Type[] eventTypes);






### Parameters



| Parameter | Description |
| --- | --- |
| eventTypes | The affected method is guaranteed to be invoked if the incoming event has any of the specified types
 in this argument. |





### Description



Use this constructor when the affected method uses only specific event types that can easily be determined
 at compile time.
 Multiple [EventInterestAttribute](UIElements.EventInterestAttribute.html) can be used on the same method to add more type interests.




---








## Declaration

public EventInterestAttribute([UIElements.EventInterestOptions](UIElements.EventInterestOptions.html) interests);






### Parameters



| Parameter | Description |
| --- | --- |
| interests | The affected method is guaranteed to be invoked if the incoming event has any of the specified types
 in this argument. |





### Description



Use this constructor when the affected method treats events in a general, non type-specific manner.
 See [EventInterestOptions](UIElements.EventInterestOptions.html) for more information on the available argument values.


            
