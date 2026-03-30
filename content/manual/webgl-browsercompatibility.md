This version of Unity is unsupported.

Web introduction

Technical limitations

# Web browser compatibility

This page gives an overview of Unity’s Web platform support for desktop and mobile browsers.

## Web browser compatibility for desktop

Unity’s Web platform support for desktop browsers differs depending on the browser. It supports browsers providing the following conditions are true:

- The browser is **WebGL**A JavaScript API that renders 2D and 3D graphics in a web browser. The Unity Web build option allows Unity to publish content as JavaScript programs which use HTML5 technologies and the WebGL rendering API to run Unity content in a web browser. [More info](webgl.html)
See in [Glossary](Glossary.html#WebGL) 2 capable.

- The browser is HTML 5 standards-compliant.

- The browser is 64-bit and supports WebAssembly.

The Unity Web platform supports some compressed **texture formats**A file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureFormat). For information on the compressed texture formats that Unity Web supports, refer to [Recommended, default, and supported texture compression formats, by platform](texture-choose-format-by-platform.html). For more detail about texture **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression), refer to [Texture compression in Web](webgl-texture-compression.html).

Web platform supports the following desktop browsers:

| Desktop Browser | Desktop Platforms |
| --- | --- |
| Google Chrome | Windows, macOS, Linux |
| Mozilla Firefox | Windows, macOS, Linux |
| Apple Safari | macOS |
| Microsoft Edge | Windows, macOS, Linux |

**Notes:**

- The Web platform also supports the latest version of the Chromium-based Edge browser.

- Apple Safari doesn’t support WebGL 2 in versions before Safari 15.

- Apple Safari doesn’t support IndexedDB for content running in an iFrame.

- On Linux, you might have to install Advanced Audio Coding (AAC) codec support via a package manager (for example, the GStreamer package).

## Web browser compatibility for mobile

The Unity Web platform supports some mobile browsers. To use a Web application on a mobile device, you have a few options:

- Run the application in your mobile browser.

- Use WebView to embed the application into native apps.

- Use a **Progressive Web App**A software application that’s delivered through the web. It uses certain browser features to create a user experience on par with a native application. [More info](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
See in [Glossary](Glossary.html#ProgressiveWebApp) (PWA) template.

Unity’s Web platform supports the following mobile browsers:

| Mobile Browser | Mobile Platform |
| --- | --- |
| iOS Safari 15 and newer | iOS |
| Chrome 58 and newer | Android |

**Note**: Use the latest browser versions for the best experience. Older versions might have issues that affect performance or prevent Unity content from running.

---

Web introduction

Technical limitations
