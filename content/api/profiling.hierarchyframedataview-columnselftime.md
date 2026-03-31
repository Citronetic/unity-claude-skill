This version of Unity is unsupported.



# [HierarchyFrameDataView](Profiling.HierarchyFrameDataView.html).columnSelfTime




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












                    public static int columnSelfTime;






### Description



The CPU time in milliseconds that Unity spends in a sample itself, excluding the time from child samples.





This value is the [columnTotalTime](Profiling.HierarchyFrameDataView-columnTotalTime.html) value of the sample minus the [columnTotalTime](Profiling.HierarchyFrameDataView-columnTotalTime.html) values of child samples.

**Note:** If [inverted mode](Profiling.HierarchyFrameDataView.ViewModes.InvertHierarchy.html) is active, for non-root items, this value represents the part of their parent's `columnSelfTime` that their sample stacks contain.


            
