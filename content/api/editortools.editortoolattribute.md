This version of Unity is unsupported.



# EditorToolAttribute





class in
          UnityEditor.EditorTools



/



Inherits from:[EditorTools.ToolAttribute](EditorTools.ToolAttribute.html)


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



Registers an [EditorTool](EditorTools.EditorTool.html) as either a Global tool or a [Component](Component.html) tool for a specific target type.





A Global tool works on any selection. A Global tool is also always available from the top toolbar. A Component tool, like a [CustomEditor](CustomEditor.html), is only available for selections that match a target type.


              


```
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine.Rendering;

// By passing `typeof(MeshFilter)` as the second argument, we register VertexTool as a CustomEditor tool to be presented
// when the current selection contains a MeshFilter component.
[EditorTool("Show Vertices", typeof(MeshFilter))]
class VertexTool : EditorTool, IDrawSelectedHandles
{
    struct TransformAndPositions
    {
        public Transform transform;
        public Vector3[] positions;
    }

    IEnumerable<TransformAndPositions> m_Vertices;
    GUIContent m_ToolbarIcon;

    public override GUIContent toolbarIcon
    {
        get
        {
            if (m_ToolbarIcon == null)
                m_ToolbarIcon = new GUIContent(
                    AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/Examples/Icons/VertexTool.png"),
                    "Vertex Visualization Tool");
            return m_ToolbarIcon;
        }
    }

    void OnEnable()
    {
        m_Vertices = targets.Select(x =>
        {
            return new TransformAndPositions()
            {
                transform = ((MeshFilter)x).transform,
                positions = ((MeshFilter)x).sharedMesh.vertices
            };
        }).ToArray();
    }

    public override void OnToolGUI(EditorWindow window)
    {
        foreach (var entry in m_Vertices)
        {
            var matrix = entry.transform.localToWorldMatrix;
            Drawing.DrawHandleCaps(matrix, entry.positions, Color.cyan * .3f, .05f, CompareFunction.Greater);
            Drawing.DrawHandleCaps(matrix, entry.positions, Color.cyan, .05f, CompareFunction.LessEqual);
        }
    }

    public void OnDrawHandles()
    {
        if(!ToolManager.IsActiveTool(this))
            return;

        foreach (var entry in m_Vertices)
        {
            var matrix = entry.transform.localToWorldMatrix;
            Drawing.DrawHandleCaps(matrix, entry.positions, Color.cyan * .3f, .03f, CompareFunction.Greater);
            Drawing.DrawHandleCaps(matrix, entry.positions, Color.cyan, .03f, CompareFunction.LessEqual);
        }
    }
}
```





You can also use tool variants to group similar tools into a single button in the Tools overlay. Refer to [ToolAttribute.variantGroup](EditorTools.ToolAttribute-variantGroup.html).


              


```
using System;
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine;

namespace GlobalToolVariants
{
    // Define 3 tools that should be shown as a single button in the Tools Overlay.
    struct ShapeVariantGroup {}

    [EditorTool("Line (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 2)]
    [Icon("Assets/Examples/Icons/Variant-Line.png")]
    class Line : EditorTool {}

    [EditorTool("Circle (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 1)]
    [Icon("Assets/Examples/Icons/Variant-Circle.png")]
    class Circle : EditorTool {}

    [EditorTool("Square (Custom Global)", variantGroup = typeof(ShapeVariantGroup), variantPriority = 0)]
    [Icon("Assets/Examples/Icons/Variant-Square.png")]
    class Square : EditorTool {}
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| EditorToolAttribute | Registers an EditorTool as either a Global tool or a CustomEditor tool. |





### Inherited Members



### Static Properties

| Property | Description |
| --- | --- |
| defaultPriority | The default value for ToolAttribute.toolPriority and ToolAttribute.variantPriority. Specify a priority lower than this value to display a tool before the default entries, or specify a higher value to display it after the default entries. |



### Properties

| Property | Description |
| --- | --- |
| displayName | The name that displays in menus. |
| targetContext | If provided, the EditorTool will only be made available when the ToolManager.activeContextType is equal to targetContext. |
| targetType | Set to the type that this EditorTool or EditorToolContext can edit. Set to null if the tool is not specific to a Component and should be available at any time. |
| toolPriority | Tool priority defines the order that tools are displayed in within the Tools Overlay. |
| variantGroup | Tool variants are used to group logically similar tools into a single button in the Tools Overlay. |
| variantPriority | The variant priority defines the order that tools are displayed in when they are displayed in a ToolAttribute.variantGroup dropdown. |












            
