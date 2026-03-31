This version of Unity is unsupported.



# [AndroidApplication](Android.AndroidApplication.html).currentConfiguration




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












                    public static [Android.AndroidConfiguration](Android.AndroidConfiguration.html) currentConfiguration;






### Description



Provides current configuration for the running application.





Additional resources: [AndroidApplication.onConfigurationChanged](Android.AndroidApplication-onConfigurationChanged.html).


              


```
using UnityEngine;
using UnityEngine.Android;public class ShowConfiguration : MonoBehaviour
{    public void Start()
    {
        var contents = new System.Text.StringBuilder();
        var c = AndroidApplication.currentConfiguration;
        contents.AppendLine($"* ColorMode, Hdr: {c.colorModeHdr}");
        contents.AppendLine($"* ColorMode, Gamut: {c.colorModeWideColorGamut}");
        contents.AppendLine($"* DensityDpi: {c.densityDpi}");
        contents.AppendLine($"* FontScale: {c.fontScale}");
        contents.AppendLine($"* FontWeightAdj: {c.fontWeightAdjustment}");
        contents.AppendLine($"* Keyboard: {c.keyboard}");
        contents.AppendLine($"* Keyboard Hidden, Hard: {c.hardKeyboardHidden}");
        contents.AppendLine($"* Keyboard Hidden, Normal: {c.keyboardHidden}");
        contents.AppendLine($"* Mcc: {c.mobileCountryCode}");
        contents.AppendLine($"* Mnc: {c.mobileNetworkCode}");
        contents.AppendLine($"* Navigation: {c.navigation}");
        contents.AppendLine($"* NavigationHidden: {c.navigationHidden}");
        contents.AppendLine($"* Orientation: {c.orientation}");
        contents.AppendLine($"* ScreenHeightDp: {c.screenHeightDp}");
        contents.AppendLine($"* ScreenWidthDp: {c.screenWidthDp}");
        contents.AppendLine($"* SmallestScreenWidthDp: {c.smallestScreenWidthDp}");
        contents.AppendLine($"* ScreenLayout, Direction: {c.screenLayoutDirection}");
        contents.AppendLine($"* ScreenLayout, Size: {c.screenLayoutSize}");
        contents.AppendLine($"* ScreenLayout, Long: {c.screenLayoutLong}");
        contents.AppendLine($"* ScreenLayout, Round: {c.screenLayoutRound}");
        contents.AppendLine($"* TouchScreen: {c.touchScreen}");
        contents.AppendLine($"* UiMode, Night: {c.uiModeNight}");
        contents.AppendLine($"* UiMode, Type: {c.uiModeType}");        contents.AppendLine($"* Locales ({c.locales.Length}):");
        for (int i = 0; i < c.locales.Length; i++)
        {
            var l = c.locales[i];
            contents.AppendLine($"* Locale[{i}] {l.country}-{l.language}");
        };        Debug.Log($"Current Config:\n{contents}");
    }
}
```


            
