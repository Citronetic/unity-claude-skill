This version of Unity is unsupported.



# [INotificationReceiver](Playables.INotificationReceiver.html).OnNotify




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

public void OnNotify([Playables.Playable](Playables.Playable.html) origin,
[Playables.INotification](Playables.INotification.html) notification,
object context);






### Parameters



| Parameter | Description |
| --- | --- |
| origin | The playable that sent the notification. |
| notification | The received notification. |
| context | User defined data that depends on the type of notification. Uses this to pass necessary information that can change with each invocation. |





### Description



The method called when a notification is raised.





[PlayableOutputExtensions.PushNotification](Playables.PlayableOutputExtensions.PushNotification.html) contains an example on how to send a notification.


              


```
using UnityEngine;
using UnityEngine.Playables;
class NotificationLogger : MonoBehaviour, INotificationReceiver
{
    public void OnNotify(Playable origin, INotification notification, object context)
    {
        Debug.Log(notification.id);
    }
}
```


            
