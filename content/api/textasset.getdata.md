This version of Unity is unsupported.



# [TextAsset](TextAsset.html).GetData




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




                [Switch to Manual](../Manual/class-TextAsset.html)










## Declaration

public NativeArray<T> GetData();






### Returns



**NativeArray<T>**
        A reference to an array in native code that provides access to the raw asset data.





### Description



Gets raw text asset data.





It works similarly to the [bytes](TextAsset-bytes.html) property, but TextAsset.GetData doesn't
allocate any memory; the `NativeArray` the function returns points directly to the asset data buffer.

Because this array doesn't represent a new allocation, you don't need to call `Dispose` on it and the
TextAsset.GetData function is the fastest way to access raw asset bytes as a result.

If the text asset is modified or destroyed, the array becomes invalid since it now points to invalid memory.

If the asset data size (see [dataSize](TextAsset-dataSize.html)) isn't a multiple of the size of the `T` struct, Unity throws an exception.

Additional resources: [bytes](TextAsset-bytes.html), [text](TextAsset-text.html), [dataSize](TextAsset-dataSize.html), [Text Assets](../Manual/class-TextAsset.html).


            
