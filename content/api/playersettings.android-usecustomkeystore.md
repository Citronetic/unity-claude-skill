This version of Unity is unsupported.



# [PlayerSettings.Android](PlayerSettings.Android.html).useCustomKeystore




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool useCustomKeystore;






### Description



Enable application signing with a custom keystore.





When enabled, the Android application is signed with the key specified in [keyaliasName](PlayerSettings.Android-keyaliasName.html) from the keystore specified in [keystoreName](PlayerSettings.Android-keystoreName.html). When disabled, the application is signed with a debug key.

The following code example demonstrates how to enable application signing with a custom keystore and configure keystore-specific settings.


              


```
using UnityEngine;
using UnityEditor;public class CustomKeystoreSample : MonoBehaviour
{
    [MenuItem("Build/Custom Keystore Sample")]
    public static void UseCustomKeystoreSample()
    {
        // Set useCustomKeystore value to true
        PlayerSettings.Android.useCustomKeystore = true;
        // Log the useCustomKeystore value
        Debug.Log($"useCustomKeystore: {PlayerSettings.Android.useCustomKeystore}");

        // Sign in settings
        // Set keyaliasName
        PlayerSettings.Android.keyaliasName = "keyalias";
        // Log the keyalias name
        Debug.Log($"keyaliasName: {PlayerSettings.Android.keyaliasName}");

        // Set keyaliasPass
        PlayerSettings.Android.keyaliasPass = "keyAliasPass";
        // Log the keyalias password
        Debug.Log($"keyaliasPass: {PlayerSettings.Android.keyaliasPass}");

        // Set keystoreName
        PlayerSettings.Android.keystoreName = "keystoreName";
        // Log the keystore name
        Debug.Log($"keystoreName: {PlayerSettings.Android.keystoreName}");

        // Set keystorePass
        PlayerSettings.Android.keystorePass = "keyStorePass";
        // Log the keystore password
        Debug.Log($"keystorePass: {PlayerSettings.Android.keystorePass}");
    }
}
```


            
