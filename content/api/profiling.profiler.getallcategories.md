This version of Unity is unsupported.



# [Profiler](Profiling.Profiler.html).GetAllCategories




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

public static void GetAllCategories(ProfilerCategory[] categories);






## Declaration

public static void GetAllCategories(NativeArray<ProfilerCategory> categories);






### Description



Returns all [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) registered in Profiler.





Fills the provided array with a list of [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) registered in the Profiler. It is a user's responsibility to provide an array with enough space. Returns first N [ProfilerCategory](Unity.Profiling.ProfilerCategory.html) where N is the size of the provided array if the size isn't enough. Use together with [Profiler.GetCategoriesCount](Profiling.Profiler.GetCategoriesCount.html) to get the required size.


            
