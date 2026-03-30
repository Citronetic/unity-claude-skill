This version of Unity is unsupported.

Use unsupported video files in the Editor

Transcoding video files

# Video encoding compatibility reference

Video encoding compresses video files using a codec to save bandwidth and storage.

## Codecs

| Codec | Advantages | Disadvantages |
| --- | --- | --- |
| H.264 | Best natively supported codec for hardware acceleration. |  |
| H.265 | Higher compressionA method of storing data that reduces the amount of storage space it requires. See Texture Compression, Animation Compression, Audio Compression, Build Compression.See in Glossary. | Limited to supported devices. |
| VP8 | Cross-platform support and comprehensive feature setA feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. More infoSee in Glossary. | Consumes more resources compared to H.264. |

The Unity Editor supports the .ogv format, but it isn’t widely supported on other platforms. Transcode .ogv files into .mp4 (H.264) or .webm (VP8) depending on the target platform.

**Note:** Android supports VP8 using native libraries, so VP8 might be hardware-assisted on some Android devices.

## Encoding with external programs

If you use video files that the target platform supports, you can manage encoding with an external program for finer control. You can disable the **Transcode** property in the [Video Clip Importer](class-VideoClip.html) so Unity doesn’t modify the video files.

## Key encoding values

The following table lists key values in your encoding parameters:

| Parameter | Description |
| --- | --- |
| Video Codec | H.264, H.265, or VP8. |
| Resolution | The resolution of your display. For example: 1280 × 720. |
| Profile | The profile is a set of capabilities and constraints, often specified by the vendor, such as Baseline or Main. Applies to H.264/H.265. See H.264 or H.265. |
| Profile Level | Applies for H.264/H.265. Within a given profile, the level specifies performance requirements, for example, Baseline 3.1. |
| Audio Codec | AAC (for .mp4 videos using H.264/H.265) or Vorbis (for .webm videos using VP8). |
| Audio Channels | Dependent on the platform. Refer to the developer guide for your platform. For example, the article on Supported media formats for Android. |

## H.265 compatibility

The following table provides platform-specific requirements and information for the H.265 codec:

| Platform | Requirements | Encoding/Decoding | Notes |
| --- | --- | --- | --- |
| macOS | SDK 10.13+ | Hardware encoding: 6th Generation Intel Core processor Software encoding: All Macs  Hardware decoding: 6th Generation Intel Core processor Software decoding: All Macs |  |
| Windows | Windows 10 + HEVC extensions | EncoderDecoder | HEVC extension (Hardware only)HEVC extension (Hardware + software support) |
| UWP | Windows 10+ |  | If a device lists support for H.265, that might not apply to all devices within the device family. |
| Android | 5.0+ |  |  |
| iOS | SDK 11.0+ | Hardware decoding: A9 Chip Software decoding: All iOS Devices |  |
| tvOS | SDK 11.0+ |  |  |

## Additional resources

- [Understand video files](VideoSources-VideoFiles.html)

- [Video transcoding](video-transcoding.html)

- [Video file compatibility with the Unity Editor](VideoSources-FileCompatibility.html)

Use unsupported video files in the Editor

Transcoding video files
