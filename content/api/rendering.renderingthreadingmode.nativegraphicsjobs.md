This version of Unity is unsupported.



# [RenderingThreadingMode](Rendering.RenderingThreadingMode.html).NativeGraphicsJobs




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



Main thread generates intermediate graphics commands. Render thread converts them into low-level platform API graphics commands. Render thread can also dispatch graphics jobs to several worker threads.





In this mode, the main thread processes the application's high-level code and issue an intermediate representation of the required graphics commands for some of it.

The main thread can also issue "Graphics Jobs" commands that describe bigger chunks of the high-level code.

The separate render thread reads the intermediate graphics commands and the "graphics jobs" commands.

Similarly to [RenderingThreadingMode.MultiThreaded](Rendering.RenderingThreadingMode.MultiThreaded.html), the render thread converts the intermediate graphics commands into the platform's low-level graphics API commands.

In addition, the render thread dispatches the "Graphics Jobs" commands to several other worker threads. In parallel, the worker threads will convert the graphics jobs into the platform's low-level graphics API commands.

On some platforms this mode can be tested by passing command line argument `-force-gfx-jobs native` to an application built with BuildSettings option [BuildOptions.Development](BuildOptions.Development.html) .


            
