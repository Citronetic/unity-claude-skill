This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).SetBooleanArrayElement




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

public static void SetBooleanArrayElement(IntPtr array,
int index,
bool val);






### Parameters



| Parameter | Description |
| --- | --- |
| array | The array of native booleans. |
| index | Index of the array element to set. |
| val | The value to set. |





### Description



Sets the boolean value of one element in a primitive array.





This function is a special case of SetBooleanArrayRegion(), called with region size set to 1.

Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)




---






                        **Obsolete**
                        AndroidJNI.SetBooleanArrayElement(IntPtr, int, byte) is obsolete. Use AndroidJNI.SetBooleanArrayElement(IntPtr, int, bool) method instead.




## Declaration

public static void SetBooleanArrayElement(IntPtr array,
int index,
byte val);






### Parameters



| Parameter | Description |
| --- | --- |
| array | The array of native booleans. |
| index | Index of the array element to set. |
| val | The value to set - for 'true' use 1, for 'false' use 0. |





### Description



Sets the boolean value of one element in a primitive array.





This function is a special case of SetBooleanArrayRegion(), called with region size set to 1.

This overload is obsolete. Use the overload that takes the bool `val` parameter instead.

Additional resources: [Java Native Interface Specification (Oracle)](http://download.oracle.com/javase/1.5.0/docs/guide/jni/spec/jniTOC.html)


            
