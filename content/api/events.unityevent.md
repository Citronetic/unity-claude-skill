This version of Unity is unsupported.



# UnityEvent





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



A zero-argument event callback that persists with the Scene and allows the registration of runtime and persistent listeners.





You can use this class to add runtime listeners or define persistent listeners in the Unity Editor. You can also use this class to manage callbacks for game events or UI interactions.
                This is particularly useful for game components to communicate without tight coupling.
                UnityEvent can also be awaited in any async method.


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
            m_MyEvent.Invoke();
        }
    }    void OnEventTriggered()
    {
        Debug.Log("Callback executed");
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| UnityEvent | Initializes a new instance of the UnityEvent class. |





### Public Methods



| Method | Description |
| --- | --- |
| AddListener | Adds a runtime listener to the UnityEvent. |
| Invoke | Invoke all registered callbacks both runtime and persistent. |
| RemoveListener | Removes a runtime listener from the UnityEvent. |





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






            
