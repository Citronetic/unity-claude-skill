[Image: image]

# Challenge: Importing a CAD Using PiXYZ

Tutorial

Beginner

+10XP

30 mins

0

(10)

Unity Technologies

[Image: Challenge: Importing a CAD Using PiXYZ]Summary

In this tutorial, you will use a web-streamed editor to prepare a CAD model for use in Unity. It builds off of the Streaming by allowing you to implement detail specific functions on a vehicle you’d find on a road construction site. You’ll repair, tessellate, and separate the geometry of the vehicle into individual parts. This is desirable so that you can animate individual portions of the vehicle, or have more artistic control within Unity.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this tutorial, you will prepare a CAD model for use in Unity. It builds off of the Streaming by allowing you to implement detail specific functions on a vehicle you’d find on a road construction site. You’ll repair, tessellate, and separate the geometry of the vehicle into individual parts. This is desirable so that you can animate individual portions of the vehicle, or have more artistic control within Unity.

[Image: image][Image: image]

What Will You Do?

In this challenge tutorial, you will prepare an actual flattener model for use in Unity. To do so, you’ll need to:

1. Import, repair, and tessellate a model

2. Switch view and orientation types

3. Select multiple parts

4. Invert the orientation of those parts

5. Merge the final assemblies

6. Execute a smart hidden removal script

7. Export a .FBX version of the model

(Assuming you have a free trial license, if not, visit [the Studio page of the PiXYZ website and click on 7-day trial at the bottom of the page.](https://www.pixyz-software.com/studio/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952396397) The PiXYZ Studio workflow depends heavily on the model.)

Mark step as complete

## 2. PiXYZ Studio Import

Q&A (0)[Image: image]

**Step by Step**

1. Use the PiXYZ Studio’s normal Import Dialog to bring the Road Flatter .step model into the application.

Mark step as complete

## 3. Repair CAD

Q&A (0)[Image: image]

**Step by Step**

1. Click on CAD > Repair CAD

[Image: image]

2. Adjust the parameters in the off-chance that you need to have a lower or higher tolerance, or essentially how accurate do you need to be a smaller tolerance is more accurate, and then click Execute.

[Image: image]

3. After using Repair CAD, ensure the road flattener looks like this:

[Image: image]Mark step as complete

## 4. Tessellate

Q&A (0)[Image: image]

Run the CAD > Tessellate function.

What is a tessellation?

Especially for real-time rendering, data is tessellated into triangles. A tessellation for instance, is the tiling of a surface using one or more geometric shapes.

Step by Step

1. Click on CAD>Tessellate.

[Image: image]

2. On the resulting dialog box, you can leave all default values and click Execute.

[Image: image]

3. After using Tessellate, the flattener will look like this:

[Image: image]

**Note**: for the first time now our statistics have changed. Statistics can be found in the top left-hand corner of the main area for model editing in PiXYZ Studio. Occurrences stay the same, but Triangles increase as PiXYZs’ algorithms correctly and quickly map the represent the surfaces of the road flattener using triangles.

**Occurrences: 575**

**Triangles: 460,436**

Mark step as complete

## 5. Explode Patches

Q&A (0)[Image: image]

Click in Mesh > Explode Patches

**What is explode patches?**

This is a function that will explode CAD faces or surfaces limited by spline curves into parts of their own. A finished Lego creation is defined by it’s new contours as a whole, however one can break that composition into its many Lego pieces, in essence parts.

**Step by Step**

Click on Mesh > Explode Patches

[Image: image]

2. When you see the following dialog box, make sure to click Yes.

[Image: image]

3. After using Explode Patches the road flattener will look like this:

[Image: image]

Note that this is the top-down view with 2-Sided, 100% visibility, and B-Rep, Shaded, and Outline toggled on.

Mark step as complete

## 6. Use Backface (BF) Color View

Q&A (0)

You will note that currently you’re using a view that is default called 2-Sided. This isn’t going to showcase those areas of the road flattener that still aren’t fixed. Switch the view to BF Color to see areas we need to work on.

[Image: image]

***Pro Tip: Using BF Color***

By using the Backface (BF) Color view you’ll be able to see areas of the geometry where the faces of the polygons generated using “Tessellate” are misaligned, hidden, or flipped. This can be managed by then using a smart orient script in the next step.

Mark step as complete

## 7. Use Smart Orient

Q&A (0)

Note the number of Occurrences has since grown drastically as patches were exploded to parts in step four. Smart Orient is a script used to correct and reorganize the topology to reduce pink blotches, some of which would appear as holes in the model in Unity if left unaddressed.

[Image: image]

***Pro Tip: The Smart Orient Script***

The Smart Orient Script is actually just a way to speed up workflow; however, what it really does is call four other functions. Those are Smart Hidden Create Visibility Information, Orient, and Delete Hidden Attributes.

**Step by Step**

1. Open up the Help menu in the toolbar, and click on Open Sample Scripts Directory.

[Image: image]

2. Use the Python script “SmartOrient.py” within the resulting file explorer window by dragging it

over into the Scripts window.

3. The Scripts window is located down at the bottom where you’ll see Output as well.

[Image: image]

Click execute the script.

[Image: image]

Note this window may be on the right-side of the editor or also right next to the Output bar. You need to find the scripts window and then you’ll be able to use the execution button.

When complete, the road flattener will look like this:

[Image: image]

Note this result is almost desirable! Let’s hone in on a few of these pink areas.

Mark step as complete

## 8. Merge Final Assemblies

Q&A (0)

All along the way, we’re paying attention to the occurrences and tri count. Merge final assemblies will reduce our occurrences (which impact the number of Draw Calls in Unity) and triangles (which we also want to decrease by the end of this process).

[Image: image]

**Step by Step**

1. Found by going and clicking on Scene > Merge Final Assemblies.

[Image: image]

2. This is largely what the road flattener will look like before you Merge Final Assemblies

Mark step as complete

## 9. Smart Hidden Removal

Q&A (0)

At the very end we need to drastically reduce the amount of overall Triangles in the road flattener model.

[Image: image]

**Step by Step**

1. Use Optimize Mesh > Smart Hidden Removal:

[Image: image]

2. When the resulting dialog box pops up change Resolution to Medium:

[Image: image]

3. Once finished with the Smart Hidden Removal step, continue to export the file as a .FBX file.

[Image: image]

This is the final state of the scene in PiXYZ Studio. Statistics read Occurrences: 486 and Triangles: 438,360

Mark step as complete

## 10. Key Takeaways

Q&A (0)

You have now a command of the main functions within PiXYZ Studio.

By completing this module, you’re now able to:

- Import, repair, and tessellate a model
- Switch view and orientation types
- Select multiple parts
- Invert the orientation of those parts
- Merge the final assemblies
- Execute a smart hidden removal script

Mark step as complete

## Complete this Tutorial

Mark all steps complete
