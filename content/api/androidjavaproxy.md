This version of Unity is unsupported.



# AndroidJavaProxy





class in
          UnityEngine



/



Implemented in:[UnityEngine.AndroidJNIModule](UnityEngine.AndroidJNIModule.html)


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



This class can be used to implement any java interface. Any java vm method invocation matching the interface on the proxy object will automatically be passed to the c# implementation.





**Note**: this API can be used from custom thread, but requires that thread to be attached to JVM first, see [AndroidJNI.AttachCurrentThread](AndroidJNI.AttachCurrentThread.html).


              


```
// Opens an android date picker dialog and grabs the result using a callback.
using UnityEngine;
using System;class ExampleClass : MonoBehaviour
{
    private static DateTime selectedDate = DateTime.Now;    class DateCallback : AndroidJavaProxy
    {
        public DateCallback() : base("android.app.DatePickerDialog$OnDateSetListener") {}
        void onDateSet(AndroidJavaObject view, int year, int monthOfYear, int dayOfMonth)
        {
            selectedDate = new DateTime(year, monthOfYear + 1, dayOfMonth);
            // If you have no longer any uses for the object, it must be disposed to prevent a leak
            view.Dispose();
        }
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(15, 15, 450, 75), string.Format("{0:yyyy-MM-dd}", selectedDate)))
        {
            var activity = new AndroidJavaClass("com.unity3d.player.UnityPlayer").GetStatic<AndroidJavaObject>("currentActivity");
            activity.Call("runOnUiThread", new AndroidJavaRunnable(() =>
            {
                new AndroidJavaObject("android.app.DatePickerDialog", activity, new DateCallback(), selectedDate.Year, selectedDate.Month - 1, selectedDate.Day).Call("show");
            }));
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| javaInterface | Java interface implemented by the proxy. |





### Constructors



| Constructor | Description |
| --- | --- |
| AndroidJavaProxy |  |





### Public Methods



| Method | Description |
| --- | --- |
| equals | The equivalent of the java.lang.Object equals() method. |
| hashCode | The equivalent of the java.lang.Object hashCode() method. |
| Invoke | Called by the java vm whenever a method is invoked on the java proxy interface. You can override this to run special code on method invocation, or you can leave the implementation as is, and leave the default behavior which is to look for c# methods matching the signature of the java method. |
| toString | The equivalent of the java.lang.Object toString() method. |


            
