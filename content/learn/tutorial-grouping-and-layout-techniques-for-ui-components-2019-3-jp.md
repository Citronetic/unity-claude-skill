[Image: image]

# UI コンポーネントのグループ化とレイアウトテクニック

Tutorial

Beginner

+10XP

25 mins

4

(15)

Unity Technologies

[Image: UI コンポーネントのグループ化とレイアウトテクニック]Summary

Unity の UI システムは、想像しうるほぼすべての目的に対応できる柔軟性を備えています。時には、何を表示する必要があるかではなく、何を表示する余地があるかを事前に知らなければならない状況もあります。本チュートリアルでは、異なるレイアウトグループを使用して UI 要素を配置するインベントリを作成する方法を学びます。

Languages available:

日本語English日本語简体中文日本語

## 1. UI コンポーネントのグループ化とレイアウトテクニック

Q&A (0)

本チュートリアルは、*Unity 2019.4.10f1 LTS*を使用して検証されています。[https://learn.unity.com/tutorial/grouping-and-layout-techniques-for-ui-components-2019-3](https://learn.unity.com/tutorial/grouping-and-layout-techniques-for-ui-components-2019-3)

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Unity の UI システムは、想像しうるほぼすべての目的に対応できる柔軟性を備えています。時には、何を表示する必要があるかではなく、何を表示する余地があるかが事前にわからない状況もあります。 その一例が、ロールプレイングゲームのインベントリです。開発者はゲームの可能性を形にしますが、ありとあらゆる状況に対応した UI を設計しようとするのは現実的ではありません。その代わりに、Unity には UI 要素の配置を扱う Layout Groups があります。この演習では、Vertical and Grid Layout Groups を使用するインベントリを作成します。また、Vertical と同様の機能を持つ Horizontal Layout Group も用意されています。Layout Groups で配置された UI 要素は、オプションで Layout Element コンポーネントを搭載することで、より制御しやすくなります。

ステップを完了としてマーク

## 2. インベントリの作成：Part 1 — スクリプティング

Q&A (0)

1. 新しいスクリプト **InventoryItemButton**を作成し、Project ウィンドウでダブルクリックして Visual Studio を開きます。

2. 今回の演習では不要なので、Update を削除します。Start を**Awake**に変更します。

3. 4行目に入力します：

```csharp
using UnityEngine.UI;
```

4. クラス定義のすぐ内側から以下のように入力します。

```csharp
private Text buttonText;
private string[] itemTypes = { “Armor”, “Weapon”, “Spell” };
public int typeIndex;
```

5. Awake 内で以下のように入力します。

```csharp
typeIndex = Random.Range(0, 3);
buttonText = GetComponentInChildren<Text>();
buttonText.text = itemTypes[typeIndex];
```

6. **InventoryItemButton**の完成です (**画像** **01**)。 変更を保存してください。

[Image: image]

7. Unity エディターに戻って、**InventoryDisplay**というスクリプトを新規作成し、Visual Studio で開きます。

8. Start と Update の両方を削除します。このスクリプトは、インベントリ内のアイテムの表示/非表示のみを担当します。

9. 7 行目から入力します：

```csharp
public void ShowOnly(int itemType)
{
	for (int i = 0; i < transform.childCount; i++)
	{
   	InventoryItemButton thisItem = transform.GetChild(i).GetComponent<InventoryItemButton>();
    	thisItem.gameObject.SetActive(thisItem.typeIndex == itemType);
	}
}

public void ShowAll()
{
	for (int i = 0; i < transform.childCount; i++)
	{
    		transform.GetChild(i).gameObject.SetActive(true);
	}
}
```

10 . 変更を保存します。これで InventoryDisplay が完成しました (**画像** **02**)

[Image: image]

11. Unity エディターに戻ります。

ステップを完了としてマーク

## 3. インベントリの作成：Part 2 — UI アセンブリ

Q&A (0)

1. 新しいシーンで、InventoryDisplayControl という名前の空のゲームオブジェクトを作ります。

2. InventoryDisplayControl に **Vertical Layout Group** コンポーネントを追加し、**Child Alignment**を **Middle Center**に設定します (**画像 03**)。

[Image: image]

3. Inspector では、InventoryDisplayControl の Transform が Rect Transform に置き換えられ、Rect Transform の位置が元の Transform の位置に設定されていることに注意してください。サイズを 150x100 に設定します (**画像** **04**)。他のインベントリが設定された時に位置を調整します。

[Image: image]

4. ゲームオブジェクトのドロップダウンから、**UI > Button** と選択します。UI エレメントを作成すると、Canvas と Event System も作成されます（それらがシーンにまだ存在していない場合）。ボタンの名前を ShowAllItems と付けて、サイズを 150x25 に設定します。

5. Hierarchy ウィンドウで、ShowAllItemsButton の隣にある三角マークをクリックして、子の Text コンポーネントを表示します。Text ゲームオブジェクトを強調表示して、Inspector でテキストを  Button to Show All に変更します。

6. Hierarchy ウィンドウで、InventoryDisplayControl をキャンバスにドラッグして放します。

7. ShowAllItemsButton を InventoryDisplayControl にドラッグアンドドロップして、Vertical Layout Group の制御下に置きます (**画像** **05**)。

[Image: image]

8. ゲームオブジェクトのドロップダウンから、**UI > Panel**と選択して、メインのインベントリ表示の背景を作成します。名前を Inventory Panel とします。アンカーのプリセットをセンターに設定し、サイズを 676x340 に設定します (**画像** **06**)。このサイズは、最大で 6x3 のボタンを 100x100 ピクセルで配置し、どちらかの方向に 12 ピクセルのパディングを入れて、パネルの境界線に余裕を持たせるというレイアウトを想定して選びました。

[Image: image]

9. 移動ギズモを使うか、InventoryPanel とInventoryDisplayControl の Rect Transforms に直接位置を入力して、両者が重ならないように移動します。

10. InventoryPanel を強調表示し、先ほど作成した **Inventory Display** コンポーネントを追加します。

11. InventoryPanel に Grid Layout Group コンポーネントを追加します。Left と Top のパディングを 8 ピクセル、Spacing を 12x12 ピクセルに設定し、Constraint：Fixed Column Count の Constraint Count を 6 に設定します (**画像** **07**)。

[Image: image]

12. **Button** を作成し、名前を*InventoryItemSample*とします。**Inventory Item Button** コンポーネントを追加して、ボタンを*InventoryPanel*にドラッグします (**画像** **08**)。

[Image: image]

13.  Hierarchy ウィンドウで InventoryItemSample を強調表示して、**Ctrl + D**（PC）または**Cmd + D**（Mac）を押して 17 回複製し、合計 18 個のボタンを作成します (**画像** **09**)。

[Image: image]

14. Hierarchy ウィンドウで ShowAllItemsButton を強調表示します。Inspector の下部にある Button (Script) セクションで + をクリックして、OnClick() イベントを追加します。InventoryPanel をゲームオブジェクトスロットにドラッグし、Event ドロップダウンから InventoryDisplay > ShowAll と選択します (**画像** **10**)。

[Image: image]

15. ShowAllItemsButton が強調表示された状態で、**Ctrl + D**（PC）または**Cmd + D**（Mac）を 1回押して複製します。新しいボタンを ShowArmorButton と名付け、そのテキストを**Show Armor**に変更します。

16. *ShowArmorButton* の OnClick() イベントリストで、イベントを**InventoryDisplay > ShowOnly (int)**に変更します。パラメーターはデフォルトの **0** のままにしておきます。

17. *ShowArmorButton*を複製し、名前とテキストの**Armor**を **Weapons**に変更します。

18. *ShowWeaponsButton*の Inspector で、**InventoryDisplay.ShowOnly** のパラメーターを**1** に変更します。

19. *ShowWeaponsButton*を複製し、名前とテキストの **Weapons**を**Spells**に変更します。**InventoryDisplay.ShowOnly** のパラメーターを**2** に変更します (**画像** **11**)。

[Image: image]

20. Play を押してください。各ボタンにはランダムにアイテムが割り当てられ、その内容に応じてテキストが更新されます (**画像** **12**)。

[Image: image]

21. Show Armor などをクリックしてみてください。インベントリ内のアイテムをクリックすることもできますが、このデモでは何もできません。実際のゲームでは、インベントリ内のアイテムを直接クリックしたときに、装備/非装備のアクションを有効にすることができます。

22. 準備ができたら、Play モードを終了します。

ステップを完了としてマーク

## 4. まとめ

Q&A (0)

UI 要素をレイアウトグループに入れ子（ネスト）にすることは、レイアウトを自動化し、さまざまな状況に対応するための効率的な方法であり、他の方法では必要とされないはるかに少ないコードと手作業で対応できます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
