This version of Unity is unsupported.



# [WWWForm](WWWForm.html).headers




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












                    public Dictionary<string,string> headers;






### Description



(Read Only) Returns the correct request headers for posting the form using the WWW class.





This field only contains one header, /"Content-Type"/,
which is set to the correct mime type for the form: "`application/x-www-form-urlencoded`" for normal
forms and "`multipart/form-data`" for forms containing data added using [AddBinaryData](WWWForm.AddBinaryData.html).


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class Example : MonoBehaviour {    IEnumerator Start () {
        Dictionary<string, string> headers = new Dictionary<string,string>();
        headers.Add("header-name", "header content");
        WWW www = new WWW("https://example.com", null, headers);
        yield return www;
        Debug.Log (www.text);
    }}
```


            
