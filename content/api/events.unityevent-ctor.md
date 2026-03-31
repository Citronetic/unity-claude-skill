This version of Unity is unsupported.



# UnityEvent Constructor




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

public UnityEvent();






### Description



Initializes a new instance of the UnityEvent class.





Use the constructor without arguments to create a zero-argument event callback. If your event requires arguments, use the generic versions of UnityEvent.


              


```
using UnityEngine;
using UnityEngine.Events;public class ExampleClass : MonoBehaviour
{
    UnityEvent m_ZeroArgEvent;
    UnityEvent<int> m_OneArgEvent;
    UnityEvent<int, int> m_TwoArgEvent;
    UnityEvent<int, int, int> m_ThreeArgEvent;
    UnityEvent<int, int, int, int> m_FourArgEvent;    void Start()
    {
        //Construct simple UnityEvents from 0 up to 4 int arguments.
        if (m_ZeroArgEvent == null)
            m_ZeroArgEvent = new UnityEvent();        if (m_OneArgEvent == null)
            m_OneArgEvent = new UnityEvent<int>();

        if (m_TwoArgEvent == null)
            m_TwoArgEvent = new UnityEvent<int, int>();        if (m_ThreeArgEvent == null)
            m_ThreeArgEvent = new UnityEvent<int, int, int>();        if (m_FourArgEvent == null)
            m_FourArgEvent = new UnityEvent<int, int, int, int>();
    }
}
```


            
