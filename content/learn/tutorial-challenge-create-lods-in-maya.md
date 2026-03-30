[Image: image]

# Challenge: Create LODs in Maya

Tutorial

intermediate

+10XP

25 mins

3

(12)

Unity Technologies

[Image: Challenge: Create LODs in Maya]Summary

In this challenge, you will create LODs for the International Space Station model in Maya.

**Steps:**

1. Export your prefab model from Unity into Maya using the FBX Exporter.
2. Begin the LOD creation process.
3. Configure the LOD Options.
4. Set Reduction Percentage.
5. Finish generating your LOD meshes.
6. Already custom, pre-built LOD meshes? Skip mesh generation and group the objects together.
7. Export LOD Group back into Unity.
8. Add LOD functionality to the prefab.
9. Specify which LOD object to use, and at which percentage / LOD threshold
10. Bonus: create LODs with specific children subsets within the model

Languages available:

日本語English日本語日本語

## 1. Export the ISS Model into Maya

Q&A (0)

- Set up the FBX Exporter
- Export the ISS Prefab with the FBX Exporter into Maya.

[Image: image]ステップを完了としてマーク

## 2. Create LOD meshes of your model in Maya

Q&A (0)

- Select the prefab in Maya in the outliner or main viewport
- From the main window, choose Edit > LOD (Level of Detail) > Generate LOD Meshes, and click the option box.
- Configure the LOD options
- Set the Reduction Percentage
- Finish generating the LODs by selecting “Generate”
- Test the LODs in the Outliner window: Window Menu > Outliner.

[Image: image]ステップを完了としてマーク

## 3. Export the LOD meshes back into Unity, and configure LOD Group

Q&A (0)

- Export Maya Scene by selecting File > Unity > Export.
- Select the prefab in the Hierarchy.
- Add an LOD Group component.
- Select one of the LOD thresholds.
- Add an LOD Renderer by dragging and dropping it under the LOD Group Meter, or click “Add” and find it in the search window.
- Drag each LOD into their corresponding percentage threshold
- How do you adjust the threshold percentage?
- Click and drag between each threshold to extend or minimize the corresponding thresholds.

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
