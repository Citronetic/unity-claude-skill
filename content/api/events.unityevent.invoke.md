This version of Unity is unsupported.



# [UnityEvent](Events.UnityEvent.html).Invoke




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

public void Invoke();






### Description



Invoke all registered callbacks both runtime and persistent.





All registered callbacks will trigger when the event is invoked. A listener is invoked only once per event. The order of execution of the registered callbacks is not guaranteed.


              


```
using UnityEngine;
using UnityEngine.Events;public class ExampleClass : MonoBehaviour
{
    UnityEvent m_MyEvent;    void Start()
    {
        if (m_MyEvent == null)
            m_MyEvent = new UnityEvent();        m_MyEvent.AddListener(OnEventTriggered);
    }    void Update()
    {
        if (Input.anyKeyDown && m_MyEvent != null)
        {
            //Invoke the event, triggering all registered callbacks.
            m_MyEvent.Invoke();
        }
    }    void OnEventTriggered()
    {
        Debug.Log("Callback executed");
    }
}
```


            
