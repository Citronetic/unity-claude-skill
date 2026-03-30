This version of Unity is unsupported.



# [CertificateHandler](Networking.CertificateHandler.html).ValidateCertificate




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

protected bool ValidateCertificate(byte[] certificateData);






### Parameters



| Parameter | Description |
| --- | --- |
| certificateData | Certificate data in PEM or DER format. If certificate data contains multiple certificates, the first one is the leaf certificate. |





### Returns



**bool**

          `true` if the certificate should be accepted, `false` if not.





### Description



Callback, invoked for each leaf certificate sent by the remote server.





Override this to implement a custom certificate validation scheme.


              


```
using UnityEngine.Networking;
using System.Security.Cryptography.X509Certificates;// Based on https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning#.Net
class AcceptAllCertificatesSignedWithASpecificKeyPublicKey : CertificateHandler
{
    // Encoded RSAPublicKey
    private static string PUB_KEY = "30818902818100C4A06B7B52F8D17DC1CCB47362" +
        "C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764E" +
        "D913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2" +
        "9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE" +
        "2C3F4CBED9460129C72B0203010001";    protected override bool ValidateCertificate(byte[] certificateData)
    {
        X509Certificate2 certificate = new X509Certificate2(certificateData);
        string pk = certificate.GetPublicKeyString();
        if (pk.Equals(PUB_KEY))
            return true;        // Bad dog
        return false;
    }
}
```


            
