This version of Unity is unsupported.



# UnityEvent<T0,T1>





class in
          UnityEngine.Events



/



Inherits from:[Events.UnityEventBase](Events.UnityEventBase.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Two argument version of [UnityEvent](Events.UnityEvent.html).





Generics are supported, specify type parameters on initialization as shown in the example. Refer to [Configure callbacks in the Inspector](../Manual/UnityEvents.html) for details on configuring callbacks in the Inspector window.


              


```
using UnityEngine;
using UnityEngine.Events;public class ExampleClass : MonoBehaviour
{
    UnityEvent<int, int> m_MyEvent;    void Start()
    {
        if (m_MyEvent == null)
            m_MyEvent = new UnityEvent<int, int>();        m_MyEvent.AddListener(DoSomething);
    }    void Update()
    {
        if (Input.anyKeyDown && m_MyEvent != null)
        {
            m_MyEvent.Invoke(5, 6);
        }
    }    void DoSomething(int i, int j)
    {
        Debug.Log("Callback called " + i + ", " + j);
    }
}
```





Note: UnityEvent can also be awaited in any async method.





### Inherited Members








### Public Methods

| Method | Description |
| --- | --- |
| GetPersistentEventCount | Get the number of registered persistent listeners. |
| GetPersistentListenerState | Returns the execution state of a persistent listener. |
| GetPersistentMethodName | Get the target method name of the listener at index index. |
| GetPersistentTarget | Get the target component of the listener at index index. |
| RemoveAllListeners | Remove all non-persistent (ie created from script) listeners  from the event. |
| SetPersistentListenerState | Modify the execution state of a persistent listener. |




### Static Methods

| Method | Description |
| --- | --- |
| GetValidMethodInfo | Given an object, function name, and a list of argument types; find the method that matches. |






            
