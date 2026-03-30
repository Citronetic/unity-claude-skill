This version of Unity is unsupported.

Finding packages and feature sets

Sorting the list

# Packages list context

To change which packages appear in the list panel of the Package Manager window, select the context you want from the navigation panel.

[Image: Set the context for the packages you want to appear in the list]
Set the context for the packages you want to appear in the list

You can select from these options:

| Context | Description |
| --- | --- |
| In Project | Displays all feature sets and packages installed in your project, including local, git, and embedded packages, and packages installed from any registry. The list also includes any packages from the Asset Store that you added from the My Assets context. In Project has a nested entry, Updates, which lists all packages in your project that you can update, including Asset Store packages. |
| Unity Registry | Displays all feature setsA feature set is a collection of related packages that you can use to achieve specific results in the Unity Editor. You can manage feature sets directly in Unity’s Package Manager. More infoSee in Glossary and packages on the Unity package registry, regardless of whether they’re already installed in your project. This doesn’t include packages installed from any other location or from any scoped registry. |
| My Assets | Displays all Asset Store packages that you have purchased using the Unity ID you are currently logged in with. |
| Built-in | Displays only built-in Unity packages, which represent core Unity features. You can use these packages to turn Unity modules on and off.Tip: You can find out more about what each built-in package (module) implements in the Unity Scripting API. Each module assembly page lists which APIs the built-in package implements. |
| ServicesA Unity facility that provides a growing range of complimentary services to help you make games and engage, retain and monetize audiences. More infoSee in Glossary | Displays integrated services to help you to engage, retain, and monetize audiences. |
| My Registries | Displays any packages available from any scoped registry installed in this project.This context appears only if you installed a scoped registry in this project.If you installed a scoped registry but it’s not listed in the My Registries context or the My Registries context isn’t available at all, it might be because the package registry server you added doesn’t implement either of the /-/v1/search or /-/all endpoints, which means that it’s not compatible with Unity’s Package Manager. |

When you select a context in the navigation panel, the [list panel](upm-ui-list.html) displays the feature sets and packages that match your choice.

**Note**: If you entered any text in the [search box](upm-ui-search.html) or set any [filters](upm-ui-filter2.html), the list panel displays only feature sets and packages which match the context, the search criteria, and the active filters.

Finding packages and feature sets

Sorting the list
