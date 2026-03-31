This version of Unity is unsupported.



# SessionState





class in
          UnityEditor


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



















### Description



SessionState is a Key-Value Store intended for storing and retrieving Editor session state that should survive assembly reloading.





The state information stored in SessionState is cleared when Unity exits. For storing state information that should be persistent across Unity Editor sessions use [EditorPrefs](EditorPrefs.html).





### Static Methods



| Method | Description |
| --- | --- |
| EraseBool | Erase a Boolean entry in the key-value store. |
| EraseFloat | Erase a Float entry in the key-value store. |
| EraseInt | Erase an Integer entry in the key-value store. |
| EraseIntArray | Erase an Integer array entry in the key-value store. |
| EraseString | Erase a String entry in the key-value store. |
| EraseVector3 | Erase a Vector3 entry in the key-value store. |
| GetBool | Retrieve a Boolean value. |
| GetFloat | Retrieve a Float value. |
| GetInt | Retrieve an Integer value. |
| GetIntArray | Retrieve an Integer array. |
| GetString | Retrieve a String value. |
| GetVector3 | Retrieve a Vector3. |
| SetBool | Store a Boolean value. |
| SetFloat | Store a Float value. |
| SetInt | Store an Integer value. |
| SetIntArray | Store an Integer array. |
| SetString | Store a String value. |
| SetVector3 | Store a Vector3. |


            
