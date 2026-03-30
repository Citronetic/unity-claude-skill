This version of Unity is unsupported.

Windows

Integrating Unity into Windows applications

# Windows requirements and compatibility

Before you begin to develop a Windows application in Unity, check Unity’s requirements and compatibility information for Windows.

## Windows version support

Unity supports Windows 10 version 21H1 (build 19043) or newer.

## CPU support

Unity supports the following CPU architectures:

- x86, x64 architecture with SSE2 instruction set support

- Arm64

## Graphics API support

Windows devices support DirectX: DX10, DX11, DX12, and Vulkan capable GPUs.

## Additional requirements

The **IL2CPP**A Unity-developed scripting back-end which you can use as an alternative to Mono when building projects for some platforms. [More info](./scripting-backends-il2cpp.html)
See in [Glossary](Glossary.html#IL2CPP) **scripting backend**A framework that powers scripting in Unity. Unity supports three different scripting backends depending on target platform: Mono, .NET and IL2CPP. Universal Windows Platform, however, supports only two: .NET and IL2CPP. [More info](scripting-backends.html)
See in [Glossary](Glossary.html#ScriptingBackend) requires Visual Studio 2019 with C++ Tools component or later and Windows SDK version `10.0.19041.0` or newer.

## Additional resources

- [System requirements](system-requirements.html#desktop)

- [DirectX](UsingDX11GL3Features.html)

Windows

Integrating Unity into Windows applications
