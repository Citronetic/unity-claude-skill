This version of Unity is unsupported.



# [WWWForm](WWWForm.html).data




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












                    public byte[] data;






### Description



(Read Only) The raw data to pass as the POST request body when sending the form.





Usually, you just pass the WWWForm object directly to the WWW constructor, but you will
need this variable if you want to change the request headers sent to the web server.

Additional resources: [headers](WWWForm-headers.html) variable.


              


```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;public class ExampleClass : MonoBehaviour
{
    IEnumerator Start()
    {
        WWWForm form = new WWWForm();
        form.AddField( "name", "value" );
        Dictionary<string, string> headers = form.headers;
        byte[] rawData = form.data;
        string url = "www.myurl.com";        // Add a custom header to the request.
        // In this case a basic authentication to access a password protected resource.
        headers["Authorization"] = "Basic " + System.Convert.ToBase64String(
            System.Text.Encoding.ASCII.GetBytes("username:password"));        // Post a request to an URL with our custom headers
        using (WWW www = new WWW(url, rawData, headers))
        {
            yield return www;
            //.. process results from WWW request here...
        }
    }
}
```


            
