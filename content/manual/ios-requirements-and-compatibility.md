This version of Unity is unsupported.

Introducing iOS

How Unity builds iOS applications

# iOS requirements and compatibility

Learn about the system requirements and compatibility information for iOS to make sure you’re aware of any limitations for developing a Unity application for this platform.

## iOS version support

Unity supports iOS 13 and above. For more information, refer to [`PlayerSettings.iOS-targetOSVersionString`](../ScriptReference/PlayerSettings.iOS-targetOSVersionString.html).

## Xcode version support

When developing for iOS, it’s recommended to use Xcode version 15+. For more information, refer to [Xcode](https://developer.apple.com/support/xcode/).

## Graphics API support

iOS devices support [Metal](https://developer.apple.com/documentation/metal). For more information, refer to [Metal Graphics API](Metal.html).

## Audio compression

Unity supports importing a variety of source format sound files. However, when importing these files (with the exception of tracker files), they are always re-encoded to the build target format. By default, this format is Vorbis, though this can be overridden per platform to other formats (ADPCM, MP3, etc.) if required. Vorbis playback provides better **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression) and quality for iOS compared with MP3 playback.

## ASTC and PVRTC instead of DXT texture compression

Unity iOS does not support DXT textures. Instead, ASTC, PVRTC, ETC2, and ETC **texture compression**3D Graphics hardware requires Textures to be compressed in specialized formats which are optimized for fast Texture sampling. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureCompression) are natively supported by iPhone/iPad devices. For more information about iOS **texture formats**A file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureFormat), refer to [texture import settings](class-TextureImporter.html) and [texture compression format](texture-choose-format-by-platform.html#ios-and-tvos).

**Note**: PVRTC format is deprecated. Use ASTC or ETC format instead.

Introducing iOS

How Unity builds iOS applications
