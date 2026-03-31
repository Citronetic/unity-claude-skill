This version of Unity is unsupported.



# [RenderingThreadingMode](Rendering.RenderingThreadingMode.html).NativeGraphicsJobsSplitThreading




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



















### Description



Generates intermediate graphics commands via several worker threads and render thread dispatches several worker threads to convert them into low-level platform API graphics commands.





In this mode, the main thread processes the application's high-level code and issues an intermediate representation of the required graphics commands for some of it.

The main thread can also dispatch Graphics Jobs commands that describe bigger chunks of the high-level code, to several other worker threads.

The separate render thread reads the intermediate graphics commands and the "graphics jobs" commands.

Similar to [RenderingThreadingMode.MultiThreaded](Rendering.RenderingThreadingMode.MultiThreaded.html), the render thread converts the intermediate graphics commands into the platform's low-level graphics API commands.

The render thread dispatches Graphics Jobs commands to several worker threads, which convert them into low-level graphics API commands in parallel.

On some platforms this mode can be tested by passing command line argument `-force-gfx-jobs split` to an application built with BuildSettings option [BuildOptions.Development](BuildOptions.Development.html).

**Note:** `RenderingThreadingMode.NativeGraphicsJobsSplitThreading` is supported only on DX12, Metal, Vulkan, PlayStation®4, and PlayStation®5.


            
