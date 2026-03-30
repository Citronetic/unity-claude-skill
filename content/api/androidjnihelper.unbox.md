This version of Unity is unsupported.



# [AndroidJNIHelper](AndroidJNIHelper.html).Unbox




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

public static void Unbox(IntPtr obj,
out sbyte value);






## Declaration

public static void Unbox(IntPtr obj,
out short value);






## Declaration

public static void Unbox(IntPtr obj,
out int value);






## Declaration

public static void Unbox(IntPtr obj,
out long value);






## Declaration

public static void Unbox(IntPtr obj,
out float value);






## Declaration

public static void Unbox(IntPtr obj,
out double value);






## Declaration

public static void Unbox(IntPtr obj,
out char value);






## Declaration

public static void Unbox(IntPtr obj,
out bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | A Java object that is a counterpart of a primitive type of the value parameter. |
| value | Destination for the primitive value of obj. |





### Description



Converts Java object of a boxed type to its primitive counterpart.





Each primitive type in Java has a counterpart class, for example java.lang.Integer class is a counterpart for primitive type int.
Note, that this methods is designed Java object to be of the correct type depending of the value you want to get. Fix example, if value is short, then obj is expected to be of type java.lang.Short, though in practice any descendant of java.lang.Number should work for any numeric destination, possibly with rounding or loss.


            
