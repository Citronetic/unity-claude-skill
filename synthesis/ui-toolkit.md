# UI Toolkit -- Synthesis Notes

> Source: 3669 pages from manual(120), learn-tutorial(30), api-reference(3514), package-docs(5)
> Generated: 2026-03-31
> Status: CURATED

## Key Concepts

**UI Toolkit vs uGUI**: UI Toolkit is Unity's modern UI system, recommended for all new UI work. It uses a web-like model: UXML (structure, like HTML), USS (styling, like CSS), and C# (behavior). uGUI (Canvas/RectTransform) is legacy but still needed for world-space UI in some cases.

**UIDocument Component**: The bridge between UXML and a scene. Attach `UIDocument` to a GameObject, assign a UXML asset (Visual Tree Asset) and an optional Panel Settings asset. The UIDocument's `rootVisualElement` is your entry point for querying and manipulating elements.

**Visual Elements**: Everything in UI Toolkit is a `VisualElement`. Built-in elements: `Label`, `Button`, `TextField`, `Toggle`, `Slider`, `ScrollView`, `ListView`, `DropdownField`, `Foldout`, `ProgressBar`. Custom elements derive from `VisualElement`.

**USS Styling**: USS files define styles. Selectors: type (`Button { ... }`), class (`.my-class { ... }`), name (`#my-element { ... }`). USS supports: colors, margins, padding, borders, flex layout, transitions. Apply USS in UXML: `<ui:UXML ... style-sheet="path/to/style.uss">`.

**Data Binding (Runtime)**: Use `ListView` and `MultiColumnListView` for data-driven UI. Bind to serialized properties with `BindProperty()` for Editor UI. For runtime, manually set element values and register callbacks.

## Patterns & Workflows

### Basic Runtime UI Setup
```csharp
using UnityEngine;
using UnityEngine.UIElements;

// Requires: UIDocument component on same GameObject with UXML assigned
public class MainMenuUI : MonoBehaviour
{
    private Button playButton;
    private Button quitButton;
    private Label titleLabel;

    private void OnEnable()
    {
        var root = GetComponent<UIDocument>().rootVisualElement;

        // Query elements by name (set in UXML with name="play-button")
        playButton = root.Q<Button>("play-button");
        quitButton = root.Q<Button>("quit-button");
        titleLabel = root.Q<Label>("title-label");

        // Register click handlers
        playButton.clicked += OnPlayClicked;
        quitButton.clicked += OnQuitClicked;
    }

    private void OnDisable()
    {
        playButton.clicked -= OnPlayClicked;
        quitButton.clicked -= OnQuitClicked;
    }

    private void OnPlayClicked()
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene("GameScene");
    }

    private void OnQuitClicked()
    {
        Application.Quit();
    }
}
```

### Corresponding UXML
```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements" xmlns:uie="UnityEditor.UIElements">
    <Style src="MainMenu.uss" />
    <ui:VisualElement class="container">
        <ui:Label name="title-label" text="My Game" class="title" />
        <ui:Button name="play-button" text="Play" class="menu-button" />
        <ui:Button name="quit-button" text="Quit" class="menu-button" />
    </ui:VisualElement>
</ui:UXML>
```

### Corresponding USS
```css
.container {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background-color: rgb(30, 30, 30);
}

.title {
    font-size: 48px;
    color: white;
    margin-bottom: 40px;
    -unity-font-style: bold;
}

.menu-button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    margin: 10px;
    background-color: rgb(60, 60, 60);
    color: white;
    border-radius: 8px;
    transition-duration: 0.2s;
}

.menu-button:hover {
    background-color: rgb(80, 120, 200);
    scale: 1.05;
}
```

### Dynamic ListView (Runtime Data)
```csharp
using UnityEngine;
using UnityEngine.UIElements;
using System.Collections.Generic;

public class InventoryUI : MonoBehaviour
{
    [SerializeField] private VisualTreeAsset itemTemplate; // UXML for each item row

    private ListView listView;
    private List<ItemData> items = new List<ItemData>();

    private void OnEnable()
    {
        var root = GetComponent<UIDocument>().rootVisualElement;
        listView = root.Q<ListView>("inventory-list");

        // Configure ListView
        listView.makeItem = () => itemTemplate.Instantiate();
        listView.bindItem = (element, index) =>
        {
            var item = items[index];
            element.Q<Label>("item-name").text = item.name;
            element.Q<Label>("item-count").text = $"x{item.count}";
            element.Q<VisualElement>("item-icon").style.backgroundImage = new StyleBackground(item.icon);
        };
        listView.itemsSource = items;
        listView.fixedItemHeight = 60;
        listView.selectionType = SelectionType.Single;
        listView.selectionChanged += OnItemSelected;
    }

    private void OnItemSelected(IEnumerable<object> selectedItems)
    {
        // Handle selection
    }

    public void AddItem(ItemData item)
    {
        items.Add(item);
        listView.RefreshItems();
    }
}

[System.Serializable]
public class ItemData
{
    public string name;
    public int count;
    public Sprite icon;
}
```

### Health Bar with USS Transitions
```csharp
using UnityEngine;
using UnityEngine.UIElements;

public class HealthBarUI : MonoBehaviour
{
    private VisualElement healthFill;
    private Label healthText;

    private void OnEnable()
    {
        var root = GetComponent<UIDocument>().rootVisualElement;
        healthFill = root.Q<VisualElement>("health-fill");
        healthText = root.Q<Label>("health-text");
    }

    // Call from Health component event
    public void UpdateHealth(int current, int max)
    {
        float ratio = (float)current / max;
        // USS transition handles the smooth animation
        healthFill.style.width = Length.Percent(ratio * 100f);
        healthText.text = $"{current}/{max}";

        // Change color based on health
        if (ratio < 0.25f)
            healthFill.RemoveFromClassList("health-high");
        else
            healthFill.AddToClassList("health-high");
    }
}
```

### Custom Element with UxmlElement (Unity 6+)
```csharp
using UnityEngine;
using UnityEngine.UIElements;

// Unity 6+: Use [UxmlElement] attribute instead of UxmlTraits/UxmlFactory
[UxmlElement]
public partial class StarRating : VisualElement
{
    [UxmlAttribute]
    public int maxStars { get; set; } = 5;

    [UxmlAttribute]
    public int currentRating { get; set; } = 0;

    public StarRating()
    {
        // Constructor called when element is created
        RegisterCallback<AttachToPanelEvent>(OnAttach);
    }

    private void OnAttach(AttachToPanelEvent evt)
    {
        Clear();
        for (int i = 0; i < maxStars; i++)
        {
            var star = new Label(i < currentRating ? "\u2605" : "\u2606");
            star.AddToClassList("star");
            int index = i;
            star.RegisterCallback<ClickEvent>(e => SetRating(index + 1));
            Add(star);
        }
    }

    public void SetRating(int rating)
    {
        currentRating = Mathf.Clamp(rating, 0, maxStars);
        OnAttach(null); // Rebuild
    }
}
```

## API Quick Reference

| API | Purpose |
|-----|---------|
| `UIDocument.rootVisualElement` | Root element of the UXML tree |
| `element.Q<T>("name")` | Query child element by name and type |
| `element.Q(className: "class")` | Query by USS class |
| `element.QueryAll<T>("name")` | Query all matching elements |
| `Button.clicked` | Event for button clicks |
| `element.RegisterCallback<EventType>(handler)` | Register event handler |
| `element.UnregisterCallback<EventType>(handler)` | Remove event handler |
| `element.AddToClassList("class")` | Add USS class |
| `element.RemoveFromClassList("class")` | Remove USS class |
| `element.style.display` | Show/hide (DisplayStyle.Flex / None) |
| `ListView.itemsSource` | Set data source for list |
| `ListView.RefreshItems()` | Rebuild list from data |
| `VisualTreeAsset.Instantiate()` | Create element tree from UXML template |

## DO / DON'T

| DON'T | DO | Why |
|-------|-----|-----|
| Use `OnGUI()` for game UI | Use UI Toolkit with `UIDocument` + UXML/USS | `OnGUI` is legacy immediate-mode; terrible performance |
| Use `UxmlTraits` / `UxmlFactory` | Use `[UxmlElement]` + `[UxmlAttribute]` attributes | `UxmlTraits/UxmlFactory` deprecated in Unity 6.0 |
| Use `ExecuteDefaultAction` | Use `HandleEventBubbleUp` | Renamed in Unity 6.0 |
| Use `VisualElement.transform` for layout | Use `style.translate/rotate/scale` | `.transform` deprecated in Unity 6.2 |
| Use `PreventDefault` | Use `StopPropagation` | `PreventDefault` deprecated in Unity 6.0 |
| Query elements every frame | Cache references in `OnEnable` | `Q<T>()` traverses the tree each call |
| Forget to unregister callbacks | Unregister in `OnDisable` | Leaked callbacks cause null references and memory leaks |
| Build complex UI purely in C# | Use UXML for structure, USS for style, C# for behavior | Separation of concerns; UXML/USS are designer-friendly |

## Version Notes

- **Unity 6.0**: `ExecuteDefaultAction` -> `HandleEventBubbleUp`. `PreventDefault` -> `StopPropagation`.
- **Unity 6.0**: `UxmlTraits`/`UxmlFactory` deprecated. Use `[UxmlElement]` + `[UxmlAttribute]` on partial classes.
- **Unity 6.0**: `AtTarget` dispatching phase removed. Use TrickleDown/BubbleUp only.
- **Unity 6.2**: `VisualElement.transform` deprecated. Use `style.translate`, `style.rotate`, `style.scale`.
- **Unity 6.0+**: UI Toolkit supports runtime UI fully. No longer Editor-only.
