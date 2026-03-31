This version of Unity is unsupported.



# JNINativeMethod





struct in
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



Defines a single method to register with a Java class using [AndroidJNI.RegisterNatives](AndroidJNI.RegisterNatives.html).





This struct stores information about the Java method, such as its name, JNI signature, and the pointer to its corresponding native function. Registering this information using the [AndroidJNI.RegisterNatives](AndroidJNI.RegisterNatives.html) allows you to integrate Android-specific capabilities in your Unity application.

**Note**: Use of this struct requires knowledge of Android Java Native Interface (JNI) concepts. For more information, refer to [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)


              


```
// Delegate definition
delegate void JavaToCs(IntPtr jniEnv, IntPtr klass, int x);// Method definition
[MonoPInvokeCallback(typeof(JavaToCs))]
static void CsMethod(IntPtr jniEnv, IntPtr klass, int x)
{
    Debug.Log("From Java: " + x);
}// Array to be passed to AndroidJNI.RegisterNative
var methods = new JNINativeMethod[]
{
    new JNINativeMethod
    {
        name = "csMethod",
        signature = "(I)V",
        fnPtr = System.Runtime.InteropServices.Marshal.GetFunctionPointerForDelegate(new JavaToCs(CsMethod)),
    }
};// Register method with the specified Java class
AndroidJNI.RegisterNatives(clazz, methods);
```





### Properties



| Property | Description |
| --- | --- |
| fnPtr | The pointer to the native function that is called from the Java code. |
| name | The name of the Java method implemented by the corresponding native function. |
| signature | The JNI method signature string that represents the parameters and return type of the Java method. |


            
