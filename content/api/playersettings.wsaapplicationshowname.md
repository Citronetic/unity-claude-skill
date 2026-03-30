This version of Unity is unsupported.



# WSAApplicationShowName





enumeration


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














### Description



Options for which [tile types](PlayerSettings.WSAImageType.html) to display the application name on.





Tiles you exclude using the property do not display the application name and only display the logo image. There are no options that include the [small](PlayerSettings.WSAImageType.UWPSquare71x71Logo.html) tile size because this size can't display the application name.
**Note:** If you do not set logo images for the corresponding tiles ([medium](PlayerSettings.WSAImageType.UWPSquare150x150Logo.html), [large](PlayerSettings.WSAImageType.UWPSquare310x310Logo.html), and [wide](PlayerSettings.WSAImageType.UWPWide310x150Logo.html)), the platform ignores the tiles and does not display the application name.
            **Important:** Unity writes these settings to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.
            Additional resources: [tileShowName](PlayerSettings.WSA-tileShowName.html)





### Properties



| Property | Description |
| --- | --- |
| NotSet | Indicates that you have not set the application name and to use the default Universal Windows Platform behavior. |
| AllLogos | Displays the application name on all tile sizes. |
| NoLogos | Doesn't display the application name on any tile size. |
| StandardLogoOnly | Displays the application name for medium and large tiles. |
| WideLogoOnly | Displays the application name for the wide tiles. |


            
