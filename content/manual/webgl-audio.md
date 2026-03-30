This version of Unity is unsupported.

Enable the WebGPU graphics API

Video playback in Web

# Audio in Web

This page only provides information about audio capabilities in the Web platform. To learn how to use audio in your Unity project, refer to [Audio Overview](AudioOverview.html).

Because Unity uses [FMOD](https://www.fmod.com)Audio in Unity is built on top of a middleware called FMOD. FMOD is integrated with the Unity engine for creating and playing back interactive audio.
See in [Glossary](Glossary.html#FMOD) to manage audio for platforms, the Web platform supports limited audio functionality, which only includes the basic features. FMOD relies on threads, which the **WebGL**A JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. [More info](webgl.html)
See in [Glossary](Glossary.html#WebGL) API doesn’t support. For this reason, Unity uses an implementation based on the internal Web Audio API, which enables the browser to handle audio playback and mixing.

**Note:** Google Chrome’s new Autoplay policy prevents autoplay of audio and video under certain conditions. For example, while your game might be set to autoplay some background music soon after the game loads, it won’t play automatically unless you click or tap on the website. For more information on how to enable or disable this policy, refer to Google Chrome’s documentation on [Autoplay policy in Chrome](https://developer.chrome.com/blog/autoplay/).

## Supported classes

Unity Web supports the following API classes:

| Class | WebGL Support status |
| --- | --- |
| AudioSource | WebGL supports some APIs. Refer to AudioSource for specific support details. |
| AudioListener | All APIs supported. |
| AudioClip | WebGL supports some APIs. Refer to AudioClip for specific support details. |
| AudioMixer | WebGL supports some APIs. Refer to Audio Mixer for specific support details. |
| SystemInfo.supportsAudio | The browser provides audio support for WebGL. For this reason, SystemInfo.supportsAudio is always true. |
| Microphone | Not supported. |

## AudioSource

The [AudioSource](../ScriptReference/AudioSource.html) API supports basic positional audio playback, including:

- Pausing and resuming

- Rolloff

- Pitch setting

- Doppler effect support

Unity WebGL supports the following AudioSource APIs:

| Settings | Description |
| --- | --- |
| Clip | Determines the audio clipA container for audio data in Unity. Unity supports mono, stereo and multichannel audio assets (up to eight channels). Unity can import .aif, .wav, .mp3, and .ogg audio file format, and .xm, .mod, .it, and .s3m tracker module formats. More infoSee in Glossary that plays next. |
| dopplerLevel | Sets the Doppler scale for the AudioSource. |
| ignoreListenerPause | Allows AudioSource to ignore AudioListener.pause and continue to play audio. |
| ignoreListenerVolume | Ignores the end-user’s AudioSource volume. |
| isPlaying | Returns true if the AudioSource.clip is playing. |
| loop | Allows the application to loop the AudioSource.clip. |
| maxDistance | Sets the maximum distance at which the AudioSource.clip stops attenuating or becomes inaudible. |
| minDistance | Sets the minimum distance at which the AudioSource.clip no longer rises in volumes. The sound starts to attenuate beyond the minimum distance. |
| mute | Mutes the AudioSource. |
| pitch | Sets the pitch of the AudioSource.clip. WebGL only supports positive pitch values. |
| playOnAwake | Plays the AudioSource on Awake. |
| rolloffMode | Sets the AudioSource attenuation over distance. |
| time | Sets the playback position in seconds. |
| timeSamples | Sets the playback position in Pulse-code modulation (PCM) samples. |
| velocityUpdateMode | Sets whether the AudioSource updates in the fixed or dynamic update loop. |
| volume | Sets the volume of the AudioSource (0.0 to 1.0). |
| Pause | Pauses the AudioSource.clip. |
| Play | Plays the AudioSource.clip. |
| PlayDelayed | Plays the AudioSource.clip with a delay you specify in seconds. |
| PlayOneShot | Plays an AudioClip and scales the AudioSource volume by volumeScale. |
| PlayScheduled | Plays the AudioSource at a time you specify. |
| SetScheduledEndTime | Sets a time that a scheduled AudioSource.clip ends. |
| SetScheduledStartTime | Sets the time that a scheduled AudioSource.clip starts. |
| Stop | Stops playing the AudioSource.clip. |
| UnPause | Unpauses a paused AudioSource.clip. |
| PlayClipAtPoint | Plays an AudioSource.clip at a given position in the worldspace. |

**Note:** Because audio data is decoded in the browser with [`decodeAudioData`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-decodeaudiodata), it is possible that the runtime sampling rate of the audio file is different from the serialized audio data (44100Hz) as the browser will match the `BaseAudioContext` sampling rate, generally aligned with the device audio driver setup. Considering this, we recommend validating the [`AudioClip.frequency`](../ScriptReference/AudioClip-frequency.html) value at runtime or using [`AudioSource.time`](../ScriptReference/AudioSource-time.html) when performing seeking operations.

## AudioClip

Unity WebGL imports [AudioClip](../ScriptReference/AudioClip.html) files in the AAC Format, which is supported by most browsers. Unity WebGL supports the following AudioClip APIs:

| Properties | Description |
| --- | --- |
| frequency | The sample frequency of the clip in Hertz. |
| length | The length of the AudioClip in seconds. |
| loadState | Returns the current load state of the audio data associated with an AudioClip. |
| samples | The length of the AudioClip in samples. |
| loadType | The load type of the clip. You can set the AudioClip load type in the InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary. |

| Method | Description | Additional information |
| --- | --- | --- |
| AudioClip.Create | Creates an AudioClip with a name and length you specify. | Unity WebGL partially supports AudioClip.Create. Browsers don’t support dynamic streaming, so to use AudioClip.Create, set the Stream to false. |
| AudioClip.SetData | Sets sample data in an AudioSource.clip. | Unity WebGL partially supports AudioClip.SetData. You can use this method only on compressed audio files with Load Type set to Decompress on Load. Refer to Compressed audio. |
| AudioClip.GetData | Retrieves an array with sample data from an AudioSource.clip. | Unity WebGL partially supports AudioClip.GetData. You can use this method only on compressed audio files with Load Type set to Decompress on Load. Refer to Compressed audio. |

**Note:** For audio clip support on Linux, make sure you’ve installed the [ffmpeg](https://ffmpeg.org/) package.

## Audio Mixer

Unity Web supports some functionality of [Audio Mixer](AudioMixer.html) assets.

You can do the following with Audio Mixers on Web:

- Create an Audio Mixer asset.

- Add AudioMixerGroups to the hierarchy.

- Adjust the volume of each group. To expose or change the volume with scripting, use [AudioMixer.SetFloat](../ScriptReference/Audio.AudioMixer.SetFloat.html).

**Note**: Volume is the only property you can change on Web. Other properties and sound effects aren’t supported.

## Compressed audio

To use compressed audio with WebGL in Unity, set the AudioClip [loadType](../ScriptReference/AudioClip-loadType.html) to one of the following options:

- [CompressedInMemory](../ScriptReference/AudioClipLoadType.CompressedInMemory.html)

- [DecompressOnLoad](../ScriptReference/AudioClipLoadType.DecompressOnLoad.html)

You can also change these settings in the Unity Editor. To change the setting, select your Audio Clip, then set **Load Type** in the Inspector window to your preferred option (**Decompress On Load** or **Compressed In Memory**).

| CompressionA method of storing data that reduces the amount of storage space it requires. See Texture Compression, Animation Compression, Audio Compression, Build Compression.See in Glossary method | Description | Considerations |
| --- | --- | --- |
| CompressedInMemory | Use this to compress the audio on disk and have it remain compressed after it loads into your application memory. | Compressed audio can cause latency and is less precise when it comes to audio playback. However, compressed audio uses less memory in your application than decompressed audio. It’s best practice to use CompressedInMemory for audio that’s unaffected by precision for example, background music. |
| DecompressOnLoad | Use this to compress the audio on disk, similar to CompressedInMemory, and decompress when it loads into your application memory. | Decompressed audio uses a significant amount of memory compared to compressed audio but has lower latency and more audio flexibility. Use DecompressedOnLoad for audio that’s affected by precision (for example, character dialog or sound effects). |

### Issues with DecompressOnLoad on iOS devices

If you set your audio clip’s `loadType` to `DecompressOnLoad`, the clip might not be audible on iOS devices that are in Silent Mode. This issue occurs only in Web builds.

The Web audio system uses the browser’s `AudioBufferSourceNode` node to load audio clips that have the `DecompressOnLoad` load type. The sounds aren’t audible on iOS devices in Silent Mode because WebKit categorizes this node type differently than `MediaElementSourceNode`, which is used for `CompressedInMemory` sounds.

To ensure audio plays regardless of Silent Mode, set your audio clip `loadType` to `CompressedInMemory`. If you need to load in a sound when a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) starts, it’s recommended to load the sound completely in a temporary scene and [load the target scene additively](../ScriptReference/SceneManagement.LoadSceneMode.Additive.html).

## Audio playback and browser security

For security reasons, browsers don’t allow audio playback until an end user interacts with your application webpage via a mouse click, touch event, or key press. Use a loading screen to allow the end user to interact with your application and start audio playback before your main content begins.

Enable the WebGPU graphics API

Video playback in Web
