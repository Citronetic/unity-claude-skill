This version of Unity is unsupported.



# TextAsset Constructor




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

public TextAsset(string text);






### Parameters



| Parameter | Description |
| --- | --- |
| text | The text contents for the TextAsset. |





### Description



Creates a new [TextAsset](TextAsset.html) with specified text contents.





This constructor creates a [TextAsset](TextAsset.html), not a plain text file. To save a [TextAsset](TextAsset.html) to disk using the [AssetDatabase](AssetDatabase.html) class, save the [TextAsset](TextAsset.html) with the .asset extension.




---








## Declaration

public TextAsset(ReadOnlySpan<byte> bytes);






### Parameters



| Parameter | Description |
| --- | --- |
| bytes | The byte contents for the TextAsset. |





### Description



Creates a new [TextAsset](TextAsset.html) with specified byte contents.





This constructor creates a [TextAsset](TextAsset.html), not a plain text file. To save a [TextAsset](TextAsset.html) to disk using the [AssetDatabase](AssetDatabase.html) class, save the [TextAsset](TextAsset.html) with the .asset extension.

Use this form of the constructor to specify an arbitrary byte buffer to store in the TextAsset. Use the [TextAsset.bytes](TextAsset-bytes.html) property to access this data or use the [TextAsset.text](TextAsset-text.html) property to interpret the byte data as text.


            
