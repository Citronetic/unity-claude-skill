This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).StopCoroutine




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)










## Declaration

public void StopCoroutine(string methodName);






## Declaration

public void StopCoroutine(IEnumerator routine);






## Declaration

public void StopCoroutine([Coroutine](Coroutine.html) routine);






### Parameters



| Parameter | Description |
| --- | --- |
| methodName | Name of coroutine. |
| routine | Name of the function in code, including coroutines. |





### Description



Stops the first coroutine named `methodName`, or the coroutine stored in `routine` running on this behaviour.





`StopCoroutine` takes one of three arguments that specify which coroutine to stop:



          - A string function naming the active coroutine.

          - The `IEnumerator` variable used earlier to create the coroutine.

          - The `Coroutine` to stop the manually created `Coroutine`.





You must use the same parameter type to stop a coroutine with `StopCoroutine` as was used to start it with [StartCoroutine](MonoBehaviour.StartCoroutine.html).

Coroutines also stop if:



          - The value of [GameObject.activeSelf](GameObject-activeSelf.html) becomes `false` for the GameObject the script is attached to.

          - The MonoBehaviour script is destroyed with a call to [Object.Destroy](Object.Destroy.html).





**Note**: Disabling the MonoBehaviour script by setting [Behaviour.enabled](Behaviour-enabled.html) to `false` doesn't stop coroutines.

`StopCoroutine(null)` throws a NullReferenceException. Add checks to your code to ensure the argument is not null before calling `StopCoroutine`.

The following example uses the [IEnumerator](https://msdn.microsoft.com/en-us/library/system.collections.ienumerator(v=vs.110).aspx) to stop a coroutine.


              


```
using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    // keep a copy of the executing script
    private IEnumerator coroutine;    // Use this for initialization
    void Start()
    {
        print("Starting " + Time.time);
        coroutine = WaitAndPrint(3.0f);
        StartCoroutine(coroutine);
        print("Done " + Time.time);
    }    // print to the console every 3 seconds.
    // yield is causing WaitAndPrint to pause every 3 seconds
    public IEnumerator WaitAndPrint(float waitTime)
    {
        while (true)
        {
            yield return new WaitForSeconds(waitTime);
            print("WaitAndPrint " + Time.time);
        }
    }    void Update()
    {
        if (Input.GetKeyDown("space"))
        {
            StopCoroutine(coroutine);
            print("Stopped " + Time.time);
        }
    }
}
```





The following example uses the [Coroutine](Coroutine.html) parameter to stop a coroutine.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(coroutineA());
    }    IEnumerator coroutineA()
    {
        // wait for 1 second
        yield return new WaitForSeconds(1.0f);
        Debug.Log("coroutineA() started: " + Time.time);        // wait for another 1 second and then create b
        yield return new WaitForSeconds(1.0f);
        Coroutine b = StartCoroutine(coroutineB());        yield return new WaitForSeconds(2.0f);
        Debug.Log("coroutineA() finished " + Time.time);        // B() was expected to run for 10 seconds
        // but was shut down here after 3.0f
        StopCoroutine(b);
        yield return null;
    }    IEnumerator coroutineB()
    {
        float f = 0.0f;
        float start = Time.time;        Debug.Log("coroutineB() started " + start);        while (f < 10.0f)
        {
            Debug.Log("coroutineB(): " + f);
            yield return new WaitForSeconds(1.0f);
            f = f + 1.0f;
        }        // Intended to handling exit of the this coroutine.
        // However coroutineA() shuts coroutineB() down. This
        // means the following lines are not called.
        float t = Time.time - start;
        Debug.Log("coroutineB() finished " + t);
        yield return null;
    }
}
```


            
