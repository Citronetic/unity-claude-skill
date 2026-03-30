This version of Unity is unsupported.

Introduction to 2D light batching

2D Renderer asset component reference for URP

# Check how Unity batches lights

To open and use the debugger, follow these steps:

1. Open the debugger window by going to **Window** > **2D** > **Light Batching Debugger**.

[Image: Opening the Light Batching Debugger window]

2. View the Light Batching Debugger updates in real time by keeping the Game view and the debugger window open at the same time.

[Image: Light Batching Debugger window without a selected batch.]

3. Select a batch from the left side of the debugger window to view Lights and Shadow Casters in the current batch.

[Image: Light Batching Debugger window with selected batch.]

Sorting Layers that are color coded differently means that they’re in different batches with different **Batch IDs** and aren’t batched together.

[Image: Differently color coded]

Sorting Layers that share the same color code are batched together and will share the same **Batch ID**.

[Image: Similarly color coded]

4. Select adjacent batches to compare the differences between the selected batches. The debugger window displays the Light(s) and Shadow Caster(s) included in each batch in separate panels.

[Image: Light Batching Debugger window]

In this example, **Light A** exists in **Batch 0** and not in **Batch 1**. The debugger provides instructions at the bottom of the window on what you need to do to have Unity batch the two selected batches together; that is, **Batch 0** contains **Light A** which currently only targets the **BG** Sorting Layer. By having **Light A** also target the **Default** Sorting Layer, Unity may be able to batch both **Batch 0** and **Batch 1** together.

Introduction to 2D light batching

2D Renderer asset component reference for URP
