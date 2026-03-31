This version of Unity is unsupported.



# [AssetSettingsProvider](AssetSettingsProvider.html).CreateProviderFromResourcePath




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

public static [AssetSettingsProvider](AssetSettingsProvider.html) CreateProviderFromResourcePath(string settingsWindowPath,
string resourcePath,
IEnumerable<string> keywords);






### Parameters



| Parameter | Description |
| --- | --- |
| settingsWindowPath | Path of the settings in the Settings window. Uses "/" as separator. The last token becomes the settings label if none is provided. |
| resourcePath | Path of the resource on disk. |
| keywords | List of keywords to compare against what the user is searching for. When the user enters values in the search box on the Settings window, SettingsProvider.HasSearchInterest tries to match those keywords to this list. |





### Returns



**AssetSettingsProvider**
        Returns an AssetSettingsProvider that will create an [Editor](Editor.html) for this particular asset.





### Description



Create an [AssetSettingsProvider](AssetSettingsProvider.html) from an asset resource path.


            
