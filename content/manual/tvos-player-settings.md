This version of Unity is unsupported.

Requirements and compatibility

Developing for tvOS

# tvOS Player Settings

tvOS shares many **Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings) with [iOS](class-PlayerSettingsiOS.html) but there are certain settings that are specific only to tvOS.

[Image: tvOS Player Settings]
tvOS Player Settings

## Icon

Use the **Icon** settings to customize the branding for your Apple TV app.

Apple TV images consist of between two and five layers. Unity only provides two layers for Apple TV icons. For more information on layering images for Apple TV, see the Apple Developer documentation on [Layered Images](https://developer.apple.com/design/human-interface-guidelines/tvos/icons-and-images/layered-images/).

| Setting | Function |
| --- | --- |
| App icons | Build the custom icon that you would like to appear on your AppleTV home screen for each resolution (1280x768, 800x480, and 400x240). |
| Top Shelf icons | Build the custom icon that you would like to appear on the Apple Top Shelf for each aspect and resolution (4640x1440, 2320x720, 3840x1440, and 1920x720). |

## Splash Image

In addition to the [common Splash Screen settings](class-PlayerSettingsSplashScreen.html), there are two additional settings for the tvOS platform:

[Image: tvOS Splash Settings]
tvOS Splash Settings

Use the **AppleTV (1x)** and **AppleTV (2x)** properties to set [Apple TV static splash screens](https://developer.apple.com/design/human-interface-guidelines/tvos/app-architecture/loading/).

## Configuration

tvOS has the same Configuration settings as iOS, except for one - the **Require Extended Game Controller** setting.

If your application requires a game controller, enable the **Require Extended Game Controller** setting. For more information, see the Apple Developer documentation on [Game Controllers](https://developer.apple.com/design/human-interface-guidelines/tvos/remote-and-controllers/game-controllers/)A device to control objects and characters in a game.
See in [Glossary](Glossary.html#gamecontroller).

Requirements and compatibility

Developing for tvOS
