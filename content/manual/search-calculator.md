This version of Unity is unsupported.

Execute Static API methods

Visual query builder reference

# The calculator

The Calculator search provider performs mathematical calculations that you can copy to the clipboard. You can also save the formula as a reusable search query, so it’s available to anyone in the project.

For more information about mathematical expressions, refer to [Use numeric field expressions](InspectorNumericFields.html).

**Note:** You can’t implicitly use this search provider [as part of a default search](search-filter-by-provider.html). You must explicitly use its search token or its [visual query](search-visual-query.html) filter.

## Query syntax

Provider token: `=`

**Tip:** If you leave only the Calculator search provider [active](search-manage-providers.html), you don’t have to use the provider token.

Supported operators: `+ - * / % ^ ( )`

Query examples:

- `=cos(3 * (2 * pi) * 5)`

- `=42/34 + (56 % 6)`

- `=23 * 9 ^ 3`

## Provider filters

The Calculator search provider doesn’t have any filters.

## Results

**Search** window tab: **Calculator**.

## Actions

To copy the result to the clipboard, double-click it, or right-click and select **Exec**.

## Additional resources

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Activate and deactivate search providers](search-manage-providers.html)

- [Search query operators](search-query-operators.html)

- [Use numeric field expressions](InspectorNumericFields.html)

Execute Static API methods

Visual query builder reference
