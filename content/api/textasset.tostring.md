This version of Unity is unsupported.



# [TextAsset](TextAsset.html).ToString




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

public string ToString();






### Returns



**string**
        The contents of the text asset as a read-only string.





### Description



Returns the contents of the TextAsset as a read-only string.





Encodings are detected and interpreted automatically. Supported encodings are:



          - UTF-32 big-endian or little-endian with a byte order mark.

          - UTF-16 big-endian or little-endian with a byte order mark.

          - UTF-8 with a byte order mark.

          - UTF-8 without a byte order mark. This encoding is used as a fallback, if the above encodings can't decode the file without missing characters.





To use a specific encoding to decode a file, use [TextAsset.bytes](TextAsset-bytes.html) and C# encoding classes.


              


```
using UnityEngine;public class ToStringExample : MonoBehaviour
{
    // Drag a .txt file onto this field and its contents log as a string.
    public TextAsset textFile;    void Start()
    {
        Debug.Log("Text file converted to string: " + textFile.ToString());
    }
}
```





Additional resources: [bytes](TextAsset-bytes.html), [GetData](TextAsset.GetData.html), [Text Assets](../Manual/class-TextAsset.html).


            
