This version of Unity is unsupported.



# [ContentBuildInterface](Build.Content.ContentBuildInterface.html).CalculateBuildUsageTags




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

public static void CalculateBuildUsageTags(ObjectIdentifier[] objectIDs,
ObjectIdentifier[] dependentObjectIDs,
[Build.Content.BuildUsageTagGlobal](Build.Content.BuildUsageTagGlobal.html) globalUsage,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet);






## Declaration

public static void CalculateBuildUsageTags(ObjectIdentifier[] objectIDs,
ObjectIdentifier[] dependentObjectIDs,
[Build.Content.BuildUsageTagGlobal](Build.Content.BuildUsageTagGlobal.html) globalUsage,
[Build.Content.BuildUsageTagSet](Build.Content.BuildUsageTagSet.html) usageSet,
[Build.Content.BuildUsageCache](Build.Content.BuildUsageCache.html) usageCache);






### Parameters



| Parameter | Description |
| --- | --- |
| objectIDs | Objects that will have their build usage calculated. |
| dependentObjectIDs | Objects that reference the Objects being calculated. |
| globalUsage | Lighting information used by the build. |
| usageSet | The BuildUsageTagSet where the calculated usage information will be stored. |
| usageCache | Optional cache object to use for improving performance with multiple calls to this api. |





### Description



Calculates the build usage of a set of objects.





Internal use only. See note on [ContentBuildInterface](Build.Content.ContentBuildInterface.html).

To calculate how any given Object is being used in a build, we need two pieces of information. First, we need to know that Object's dependents, or in other words, what references that Object. For example, for a Shader, we would need to know the list Materials that reference that shader. Second, we need the combined lighting information for Scenes where the Object can be used. Using these two pieces of information, we calculate the correct usage information for an Object, and then store that information in the [BuildUsageTagSet](Build.Content.BuildUsageTagSet.html).


            
