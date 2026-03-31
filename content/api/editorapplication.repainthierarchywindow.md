This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).RepaintHierarchyWindow




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















## Declaration

public static void RepaintHierarchyWindow();






### Description



Can be used to ensure repaint of the HierarchyWindow.





Use [EditorApplication.RepaintHierarchyWindow](EditorApplication.RepaintHierarchyWindow.html) to refresh the Hierarchy window when changes to GameObjects, such as names, icons, or tags, are not automatically reflected in the Hierarchy window. [EditorApplication.RepaintHierarchyWindow](EditorApplication.RepaintHierarchyWindow.html) can be useful when it is used with custom Editor tools or extensions that dynamically alter GameObject properties. Avoid frequent calls in a performance-critical context, because [EditorApplication.RepaintHierarchyWindow](EditorApplication.RepaintHierarchyWindow.html) might negatively affect Editor performance. This method must be used in the Unity Editor and it requires the [UnityEditor](UnityEditor.html) namespace. Typically, you combine it with [EditorApplication.hierarchyChanged](EditorApplication-hierarchyChanged.html) or custom events to ensure UI consistency. Not applicable at runtime since it’s Editor-only.
                    Additional resources: [HierarchyWindowItemCallback](EditorApplication.HierarchyWindowItemCallback.html), [EditorApplication.hierarchyWindowItemOnGUI](EditorApplication-hierarchyWindowItemOnGUI.html).


              


```
using UnityEditor;
                using UnityEngine;                [InitializeOnLoad]
                public class CustomHierarchyStyling
                {
                    static CustomHierarchyStyling()
                    {
                        // Register a callback to draw custom icons in the Hierarchy.
                        EditorApplication.hierarchyWindowItemOnGUI += OnHierarchyGUI;
                        // Repaint the Hierarchy window when the tag changes to reflect icon updates
                        EditorApplication.hierarchyChanged += () => EditorApplication.RepaintHierarchyWindow();
                    }                    static void OnHierarchyGUI(int instanceID, Rect selectionRect)
                    {
                        GameObject obj = EditorUtility.InstanceIDToObject(instanceID) as GameObject;                        //Add a tag named "Special" to the GameObject to display the custom icon
                        if (obj != null && obj.CompareTag("Special"))
                        {
                        // Draw a custom icon on the left side of the GameObject in the Hierarchy
                            Rect iconRect = new Rect(selectionRect.x - 20, selectionRect.y, 18, 18);
                            GUI.Label(iconRect, EditorGUIUtility.IconContent("d_Favorite"));
                        }
                    }
                }
```


            
