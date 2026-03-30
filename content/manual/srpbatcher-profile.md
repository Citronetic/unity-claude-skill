This version of Unity is unsupported.

Enable the SRP Batcher in URP

Remove SRP Batcher compatibility for GameObjects in URP

# Troubleshoot the SRP Batcher in URP

You can check the status of SRP batches in the [Frame Debugger](FrameDebugger.html) window. Each SRP Batch displays how many draw calls Unity used, which keywords Unity attached to the **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader), and the reason why Unity didn’t batch that draw call with the previous one.

To check the status of SRP Batcher batches:

1. In the Editor, open the Frame Debugger (menu: **Window** > **Analysis** > **Frame Debugger**).

2. In the Frame Debugger, go to **Render Camera** > **Render Opaques**.

3. Expand the **RenderLoopNewBatcher. Draw** list.

4. Select on the **SRP Batch** you want to inspect.

In the example below, the reason is: **Nodes have different shaders**. This means that the shader for that SRP batch is different to the one in the previous SRP batch. Because the SRP Batcher used a different shader, the SRP Batcher created a new batch. If several SRP batches have a low number of draw calls, it often means the project uses too many shader variants.

[Image: In the Frame Debugger window, you can find details about individual SRP batches, including why the SRP Batcher created a new SRP batch instead of continuing the existing one.]
In the Frame Debugger window, you can find details about individual SRP batches, including why the SRP Batcher created a new SRP batch instead of continuing the existing one.

If you write your own Scriptable **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), instead of using either the Universal Render Pipeline or the High Definition Render Pipeline, try to write a generic multi-purpose shader with a minimal number of keywords. This is optimal because you can use as many material properties as you want.

Enable the SRP Batcher in URP

Remove SRP Batcher compatibility for GameObjects in URP
