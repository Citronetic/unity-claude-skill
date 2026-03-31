This version of Unity is unsupported.



# SearchTable





class in
          UnityEditor.Search


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



A search table configuration is used to define the columns when search results are displayed in table view.





See [DisplayMode.Table](Search.DisplayMode.Table.html).


              


```
static SearchTable CreateDecalsTableConfiguration()
{
    var materialIcon = EditorGUIUtility.Load("Material Icon") as Texture;
    var shaderIcon = EditorGUIUtility.Load("Shader Icon") as Texture;
    return new SearchTable("decals", new SearchColumn[]
    {
        new SearchColumn("DecalsName0", "label", "name", new GUIContent("Name", materialIcon)) { width = 160 },
        new SearchColumn("DecalsShader1", "#shader", "name", new GUIContent("Shader", shaderIcon)) { width = 150 },
        new SearchColumn("DecalsBaseColor1", "#_BaseColor", "color", new GUIContent("Color", shaderIcon)) { width = 130 },
    });
}
```





The previous example can be used when creating a [SearchViewState](Search.SearchViewState.html).


              


```
var selectHandler = args.selectorClosedHandler;
var trackingHandler = args.trackingHandler;

var query = SearchService.CreateContext(CreateDecalProvider(), $"a={dbName} t={selectContext.requiredTypeNames.First()} shader=Decal");
var viewState = SearchViewState.CreatePickerState("decals",
    query,
    selectHandler: (item, canceled) => selectHandler(item?.ToObject(), canceled),
    trackingHandler: (item) => trackingHandler(item?.ToObject()), null,
    SearchViewFlags.TableView
    );
viewState.tableConfig = CreateDecalsTableConfiguration();
var materialIcon = EditorGUIUtility.Load("Material Icon") as Texture;
viewState.windowTitle = new GUIContent("Material Decals", materialIcon);
viewState.hideAllGroup = true;
viewState.position = SearchUtils.GetMainWindowCenteredPosition(new Vector2(600, 400));
s_SearchView = SearchService.ShowPicker(viewState);
```





### Properties



| Property | Description |
| --- | --- |
| columns | Search columns displayed in table view. |
| id | Unique id of the search table used for persistance. |
| name | Display name of the search table used for serialization. |





### Constructors



| Constructor | Description |
| --- | --- |
| SearchTable | Creates a new search table configuration. |





### Public Methods



| Method | Description |
| --- | --- |
| Clone | Creates a copy of the search table configuration. |
| InitFunctors | Initialize all search columns functors based on their format provider. |





### Static Methods



| Method | Description |
| --- | --- |
| LoadFromFile | Load a search table configuraiton from a JSON file. |


            
