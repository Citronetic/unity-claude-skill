This version of Unity is unsupported.

Facebook Instant Games setup process

Facebook Instant Games templates

# Facebook Instant Games configurations

Choose a configuration when you create a **build profile**A set of customizable configuration settings to use when creating a build for your target platform. [More info](build-profiles.html)
See in [Glossary](Glossary.html#Buildprofile) to apply default settings to the new profile. These presets optimize your Facebook Instant Games build for development or release on mobile or desktop devices.

The Facebook Instant Games platform has the same settings as the [Web platform](webgl.html) but includes preset configurations with different defaults tailored for delivery environments.

For descriptions of the Facebook Instant Games settings, refer to [Web build settings](web-build-settings.html) and [Web Player settings](class-PlayerSettingsWebGL.html). For the build profile settings shared across platforms, refer to [Build Profiles window reference](build-profiles-reference.html).

## Configurations

Configurations are groups of default settings that tailor builds for specific delivery environments. Use configurations to create multiple optimized build profiles and simplify the process of switching between different environments.

Select a configuration in the **Platform Browser** when you [create a build profile](create-build-profile.html). If you don’t choose a configuration, the build profile inherits the values from the global settings.

## Facebook Instant Games configuration defaults

The Facebook Instant Games platform has the following configurations:

- Mobile - Development

- Mobile - Release

- Desktop - Development

- Desktop - Release

### Shared defaults for configurations

All Facebook Instant Games configurations have the following default settings that differ from the Web default settings.

#### Player Settings Overrides

| Property | Default |
| --- | --- |
| IL2CPPA Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. More infoSee in Glossary Code Generation | Optimize for code size and build time |
| Target WebAssembly 2023 | Enabled |
| Use WebAssembly.Table | Enabled |
| Enable BigInt | Enabled |

### Mobile and desktop defaults

The mobile and desktop configurations differ as follows:

#### Platform Settings

| Property | Mobile | Desktop |
| --- | --- | --- |
| Texture compressionA method of storing data that reduces the amount of storage space it requires. See Texture Compression, Animation Compression, Audio Compression, Build Compression.See in Glossary format | ASTC | DXT |

#### Player Settings Overrides

| Property | Mobile | Desktop |
| --- | --- | --- |
| WebGLA JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. More infoSee in Glossary template | Default (Portrait) | Landscape |

### Release and development defaults

The release and development configurations differ as follows:

#### Platform Settings

| Property | Development | Release |
| --- | --- | --- |
| Development BuildA development build includes debug symbols and enables the Profiler. More infoSee in Glossary | Enabled | Disabled |
| Code Optimization | N/A | Disk Size with LTO |

#### Player Settings Overrides

| Property | Development | Release |
| --- | --- | --- |
| C++ Compiler Configuration | Debug | Master |
| Compression Format | Disabled | Brotli |
| Data Caching | Disabled | Enabled |

## Additional resources

- [Facebook Instant Games setup process](instant-games-setup.html)

- [Upload to Facebook Instant Games](instant-games-upload.html)

- [Introduction to build profiles](build-profiles.html)

- [Create and manage build profiles](create-build-profile.html)

- [Override settings with build profiles](build-profiles-override-settings.html)

Facebook Instant Games setup process

Facebook Instant Games templates
