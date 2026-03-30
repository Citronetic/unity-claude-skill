This version of Unity is unsupported.



# [AndroidJNIHelper](AndroidJNIHelper.html).Box




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

public static IntPtr Box(sbyte value);






## Declaration

public static IntPtr Box(short value);






## Declaration

public static IntPtr Box(int value);






## Declaration

public static IntPtr Box(long value);






## Declaration

public static IntPtr Box(float value);






## Declaration

public static IntPtr Box(double value);






## Declaration

public static IntPtr Box(char value);






## Declaration

public static IntPtr Box(bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | Primitive value to be boxed. |





### Returns



**IntPtr**
        A local reference to Java object.





### Description



Convert primitive to it's object counterpart.





Each primitive type in Java has a counterpart class, for example java.lang.Integer class is a counterpart for primitive type int.


            
