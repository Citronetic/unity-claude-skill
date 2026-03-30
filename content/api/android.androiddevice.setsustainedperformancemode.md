This version of Unity is unsupported.



# [AndroidDevice](Android.AndroidDevice.html).SetSustainedPerformanceMode




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

public static void SetSustainedPerformanceMode(bool enabled);






### Description



Set sustained performance mode. When enabled, sustained performance mode is intended to provide a consistent level of performance for a prolonged amount of time.





Internally, this method calls the [Android sustained performance API](https://developer.android.com/reference/android/view/Window#setSustainedPerformanceMode(boolean)). It is not reset when the window loses focus.


            
