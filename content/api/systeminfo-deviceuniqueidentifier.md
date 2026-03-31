This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).deviceUniqueIdentifier




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












                    public static string deviceUniqueIdentifier;






### Description



A unique device identifier. It's guaranteed to be unique for every device (Read Only).





**iOS**: Uses [UIDevice.identifierForVendor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) to generate a unique device identifier.

                **macOS**: Uses [kIOPlatformUUIDKey](https://developer.apple.com/documentation/iokit/kioplatformuuidkey) to generate a unique device identifier.

**Android:** `SystemInfo.deviceUniqueIdentifier` always returns the MD5 hash of [ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).

**Note:** Android 8.0 (API level 26) `ANDROID_ID` depends on the app signing key. The unsigned builds that are by default signed with a debug keystore typically have a different value than signed builds signed with a key provided in the Player settings. In addtion, when allowing [Google Play to sign your app](https://developer.android.com/studio/publish/app-signing#app-signing-google-play), this value will be different depending on whether the built app is built locally (signed with the upload key) or downloaded from the Google Play (signed with the final key).

**Linux Standalone**: Reads the unique device identifier value from:



          - /etc/machine-id

          - /var/lib/dbus/machine-id





If both files are present, the value from `/var/lib/dbus/machine-id` is used.

 **Note:** Both files contain the same unique ID. Unity reads `/etc/machine-id` location as a fallback, if a linux distribution doesn't have dbus installed, that is, `/var/lib/dbus/machine-id` path isn't available.

**Windows Store Apps**: Uses `AdvertisingManager::AdvertisingId` for returning unique device identifier. If this option in **PC Settings** > **Privacy** > **Let apps use my advertising ID for experiences across apps** is disabled, Unity will fall back to `HardwareIdentification::GetPackageSpecificToken().Id`. **Note:** Turning this setting off will reset your ID.

**Windows Standalone**: Returns a hash from the concatenation of strings taken from the following [Computer System Hardware Classes](https://msdn.microsoft.com/en-us/library/windows/desktop/aa389273(v=vs.85).aspx):



          - Win32_BaseBoard::SerialNumber

          - Win32_BIOS::SerialNumber

          - Win32_OperatingSystem::SerialNumber





Platforms that don't support this property, Unity will return [SystemInfo.unsupportedIdentifier](SystemInfo-unsupportedIdentifier.html).


            
