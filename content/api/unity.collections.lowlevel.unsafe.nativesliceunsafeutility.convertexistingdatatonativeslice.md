This version of Unity is unsupported.



# [NativeSliceUnsafeUtility](Unity.Collections.LowLevel.Unsafe.NativeSliceUnsafeUtility.html).ConvertExistingDataToNativeSlice




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

public static NativeSlice<T> ConvertExistingDataToNativeSlice(void* dataPointer,
int stride,
int length);






### Parameters



| Parameter | Description |
| --- | --- |
| length | Number of elements in the data set. |
| dataPointer | Memory pointer to the data. |
| stride | Stride in bytes. |





### Returns



**NativeSlice<T>**
        The created NativeSlice.





### Description



Creates a new NativeSlice from existing data.


            
