[Image: image]

# ゲームをカスタマイズする

Tutorial

Beginner

+0XP

0 mins

3

(28)

Unity Technologies

[Image: ゲームをカスタマイズする]Summary

このチュートリアルは、「Creator Kit：コーディング入門」のゲームをさらにカスタマイズするためのリファレンスガイドです。

スクリプトテンプレートを使って、以下のような部品を作成するために役立つガイダンスを提供します。

- 使用することで効果が発生する使用可能なアイテム（最後のチュートリアルで扱ったライフ回復ポーションなど）
- 装備することで効果が発生する装備品
- 武器攻撃時に効果を発揮する武器

Languages available:

日本語English日本語한국어简体中文日本語

## 1. ゲームのカスタマイズ

Q&A (0)

このチュートリアルは、「Creator Kit：コーディング入門」で扱ったゲームをさらにカスタマイズするためのリファレンスガイドです。

以下の作成に役立つスクリプトテンプレートに関するガイダンスを提供します。

- 使用することで効果が発生する使用可能なアイテム（最後のチュートリアルで扱ったライフ回復ポーションなど）
- 装備することで効果が発生する装備品
- 武器攻撃時に効果を発揮する武器

#### このガイドの構成

このガイドは、ステップバイステップのガイドではなく、ゲームの理解を深め、実験を行うために役立つツールとなるように構成しています。他の Unity チュートリアルで学んだことを応用するためにも役立つかもしれません。

このガイドの構成は次のとおりです。

**1.** Unity エディターでアイテムタイプを作成する方法

**2.** アイテムのカスタムの効果を持たせるスクリプトを作る方法、およびそれを使うための基本的なガイダンス

**3.** アイテムに効果を適用する方法

#### コミュニティに参加する

「Creator Kit：コーディング入門」のチュートリアルは終了しましたが、学習を続ける仲間はたくさんいます。疑問に思うことが出てきた時や、または他の学習者がこのチュートリアルで扱ったゲームを使ってどんなことをしているのかを知りたいと思った時などには、「Creator Kit：コーディング入門」の[Unity フォーラムの公式スレッド](https://forum.unity.com/threads/creator-kit-beginner-code-beta.724871/?_ga=2.245592460.905155714.1610931610-1880619545.1535881689)に参加されてみることをおすすめします。

ステップを完了としてマーク

## 2. Usable Item（使用可能なアイテム）を作成する

Q&A (0)

#### Usable Item（使用可能なアイテム）とは何か

使用可能なアイテムとは、プレイヤーが持ち物リストの中でダブルクリックして使うことのできるアイテムのことを指します（たとえば、ライフ回復ポーション）。

#### Unity エディターで使用可能なアイテムを作成する方法

エディターで使用可能なアイテムを作成するには、以下のようにします。

**1.** プロジェクトウィンドウで、 *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* に移動する。

**2.** プロジェクトウィンドウを右クリックし、コンテキストメニューから **Create > Beginner Code > Usable Item** を選択する。画面上部のメインメニューの **Assets** からこのメニューにアクセスすることもできる。

[Image: image]

この手順を行うと、新しく使用可能なアイテムのアセットが作成されます。

**3.** プロジェクトウィンドウで、新しくできた使用可能なアイテムを右クリックし、**Rename** を選択する。アイテムに覚えやすい名前を付ける。

**4.** 使用可能なアイテムが選択されたままの状態でインスペクターを見ると、次のフィールド（公開変数）が表示されている。

- **Item Sprite：**持ち物リスト内でアイテムを表すために使われるスプライト。World Object Prefab（後述）が設定されていない場合は、ゲームの世界でアイテムを表すためにもこのスプライトが使われる。
- **Item Name：**ゲーム内でアイテムの上に表示されるアイテムの名前、およびプレイヤーの持ち物リストのツールチップに表示されるアイテムの名前。
- **Description：**プレイヤーの持ち物リストのツールチップに表示されるアイテムの説明。
- **World Object Prefab：**ゲームの世界に使用可能なアイテムが配置された時に、そのアイテムをゲームの世界の中に表示するために生成される 3D ゲームオブジェクト。これを空（null）のままにすると、代わりに Item Sprite が使用されます。
- **Add New Effect：**作成した **Usage Effect**（使用時の効果）を一覧表示するドロップダウンメニュー。新しい使用時の効果を作成すると、ここに表示されます。アイテム使用時の効果を選択して、使用可能なアイテムに追加します。

[Image: image]

次のステップでは、アイテムを使用した時の効果を記述する Usage Effect スクリプトを作成し、それを使用可能なアイテムに適用する方法を学習します。

ステップを完了としてマーク

## 3. Usage Effect（使用時の効果）スクリプトを書く

Q&A (0)

#### Usage Effect（使用時の効果）スクリプトとは何ですか？

使用時の効果スクリプトは、使用可能なアイテムがプレイヤーの持ち物リストの中でダブルクリックされたときに何が起こるかを決めるものです。作成した使用時の効果は、エディターの使用可能なアイテムアセットに追加されます。

#### 新しい使用時の効果スクリプトを作成する方法

Creator Kit で新しく使用時の効果スクリプトを作成するには、以下のようにします。

**1.** 画面上部のメニューで、**Beginner Code > Create Item Effect** に移動する。

[Image: image]

**2.** NameWindow ダイアログボックスが開くので、使用時の効果スクリプトに名前をつけ、**Create** を選択する。

これにより、*Assets/Scripts/ItemEffect* にスクリプトが作成され、エディターで選択された状態になります。

**3.** プロジェクトウィンドウで、スクリプトをダブルクリックしてコードエディターで開く。

Creator Kit に、アイテムの使用時の効果を作成するために役立つテンプレートスクリプトが用意されています。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SceneKitCode;

public class EFFECTNAME : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

**EFFECTNAME** は、使用時の効果スクリプトの名前を入れるプレースホルダーです。

#### 使用時の効果をカスタマイズする方法

使用時の効果をカスタマイズするには、**Use** 関数に命令を追加する必要があります。

```csharp
public override bool Use(CharacterData user)
    {
        return false;
    }
```

引数 **user** には、アイテムを使用したキャラクターの **CharacterData** が含まれています。このゲームでは、アイテムを使用できるキャラクターはヘラジカのキャラクター 1 人だけです。この引数を使用して、ステータス、持ち物リスト、および装備しているアイテムにアクセスし、それらを変更できます。

#### カスタムの CharacterData クラスについて詳しく知る方法

**CharacterData** クラスの詳細を知りたい方は、以下の手順に従ってください。

**1.** Unity エディターで、メインメニューの **Beginner Code > Open Documentation** に移動する。

**2.** ローカルドキュメントガイドの上部のメニューバーで、**API Documentation** を選択する。

**3.** 検索バーで、「**CharacterData**」を検索する。

**4.** **左側のメニュー**でリンクを選択する。

#### 使用可能なアイテムの戻り値を設定する方法

Use 関数は、ブール値（true または false）を返します。以下のような意味を持つように設定します。

- オブジェクトが使用され、プレイヤーの持ち物リストから削除された場合は true（オブジェクトが複数ある場合、所持数を 1 つ減らす）。
- オブジェクトを使用できない場合は false（たとえば、ライフを追加する前にライフがすでに最大値になっているかどうかをテストして、ライフが最大値の時はライフ回復ポーションが無駄にならないように false を返すという処理が可能）。

ステップを完了としてマーク

## 4. 使用可能なアイテムに使用時の効果スクリプトを適用する

Q&A (0)

使用時の効果スクリプトを変更したら、その使用時の効果をエディターで使用可能なアイテムに追加できます。

**1.** プロジェクトウィンドウで、作成した使用可能なアイテムを選択する（ファイルパスは *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*）。

**2.** インスペクターで、**Add New Effect** フィールドを探す。ドロップダウンメニューから使用時の効果を選択する。

**3.** 使用時の効果について **Description** フィールドに説明を追加する。

**4.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**5.** 再生モードで使用可能なアイテムをテストする。

**ヒント：**使用時の効果を削除する場合は、インスペクターの **Script** フィールドの右側にあるマイナスボタン（**-**）を選択します。

ステップを完了としてマーク

## 5. Equipped Item（装備アイテム）を作成する

Q&A (0)

#### Equipped Item（装備アイテム）とは何か

装備アイテムは、装備時にプレイヤーキャラクターに特定の属性を与えるアイテムです（武器は追加機能を備えた特別な種類の装備アイテムです。これについては、このガイドの後の部分で個別に説明します）。

装備アイテムには以下の情報を与えることができます。

- 最小ステータス要件。プレイヤーがそのアイテムを装備できるために必要なあるステータスの最小値を満たすまでは、アイテムを装備できないようにします（たとえば、プレイヤーの HP が 5 を超えている場合にのみ装備できるアイテムを作ることができる）。
- 装備時の効果。アイテムを装備している間、プレイヤーキャラクターに付与される効果です（たとえば、ステータスを上げる）。

#### Unity エディターで装備アイテムを作成する方法

エディターで装備アイテムを作成するには、以下のようにします。

**1.** プロジェクトウィンドウで、*Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* に移動する。

**2.** プロジェクトウィンドウを右クリックし、コンテキストメニューから **Create > Beginner Code > Equipment Item** を選択する。または、画面上部のメニューの **Assets** からこのメニューにアクセスすることもできる。

[Image: image]

これにより、新しく装備アイテムのアセットが作成されます。

**3.** プロジェクトウィンドウで、新しくできた装備アイテムを右クリックし、**Rename** を選択する。アイテムに覚えやすい名前を付ける。

**4.** 装備アイテムが選択されていると、インスペクターに以下のフィールド（公開変数）が表示される。

- **Item Sprite：**持ち物リスト内でアイテムを表すために使われるスプライト。World Object Prefab（後述）が設定されていない場合は、ゲームの世界でアイテムを表すためにもこのスプライトが使われる。
- **Item Name：**ゲーム内でアイテムの上に表示されるアイテムの名前、およびプレイヤーの持ち物リストのツールチップに表示されるアイテムの名前。
- **Description：**プレイヤーの持ち物リストのツールチップに表示されるアイテムの説明。
- **World Object Prefab：**ゲームの世界に使用可能なアイテムが配置された時に、そのアイテムをゲームの世界の中に表示するために生成される 3D ゲームオブジェクト。これを空（null）のままにすると、代わりに Item Sprite が使用されます。
- **Slot：**装備アイテムを着用できる装備スロット（「Head」（頭）など）。
- **Minimum Stats：**アイテムを装備するために必要な最小の **Strength**（強さ）、**Agility**（敏捷性）、**Defense**（防御）ステータスの値。プレイヤーがこれらのステータスの最小値を満たしていない場合、持ち物リスト内のアイテムをダブルクリックしても何も起こらない。
- **Add New Effect：**作成した **Equipped Effect**（装備時の効果）を一覧表示するドロップダウンメニュー。新しい効果を作成すると、ここに表示される。装備時の効果を選択して、装備アイテムに追加する。

次のステップでは、装備時の効果スクリプトを作成し、それを装備アイテムに適用する方法を学習します。

ステップを完了としてマーク

## 6. Equipped Effect（装備時の効果）スクリプトを書く

Q&A (0)

#### Equipped Effect（装備時の効果）スクリプトとは何ですか？

装備時の効果スクリプトは、カスタムの効果を指定しておき、プレイヤーがアイテムを装備したときにそれを有効にするものです。エディターで、装備アイテムまたは武器に追加します。

#### 新しい装備時の効果スクリプトを作成する方法

「Creator Kit：コーディング入門」のテンプレートから新しい装備効果スクリプトを作成するには、以下のようにします。

**1.** 画面上のメニューで、**Beginner Code > Create Equipped Effect** に移動する。

[Image: image]

**2.** NameWindow ダイアログボックスが開くので、装備時の効果スクリプトに名前を付けて **Create** を選択する。

これにより、*Assets/Scripts/EquippedEffect* にスクリプトが作成され、エディターで選択された状態になります。

**3.** プロジェクトウィンドウで、スクリプトをダブルクリックしてコードエディタで開く。

Creator Kit に、装備時の効果を作成するために役立つテンプレートスクリプトが用意されています。

```csharp
public class EFFECTNAME : EquipmentItem.EquippedEffect
{
     public override void Equipped(CharacterData user)
     {

     }

     public override void Removed(CharacterData user)
     {

     }
}
```

**EFFECTNAME** は、装備時の効果スクリプトの名前を入れるプレースホルダーです。

#### 装備時の効果をカスタマイズする方法

装備時の効果スクリプトでカスタマイズできる関数は 2 つあります。

**1. void Equipped(CharacterData user)**

この関数は、プレイヤー（user）がアイテムを装備したときに呼び出されます。この関数を使用して効果をプレイヤーに与えます。たとえば、キャラクターの強さに +1 の修正をかける、などです。

**ヒント：**ここで使う修正値を格納しておくために private 変数を使うことができます。

**2.  void Removed(CharacterData user)**

この関数は、プレイヤー（user）がアイテムの装備を外したときに呼び出されます。この機能を使用して、装備がプレイヤーキャラクターに与える影響を無効にします。

ステップを完了としてマーク

## 7. 装備時の効果スクリプトを装備アイテムに適用する

Q&A (0)

装備時の効果スクリプトを変更したら、エディターの装備アイテムに追加できます。

**1.** プロジェクトウィンドウで、作成した装備アイテムを選択する（ファイルパスは *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*）。

**2.** インスペクターで、**Add New Effect**フィールドを探す。ドロップダウンメニューから装備時の効果を選択する。

**3.** 装備時の効果について **Description**フィールドに説明を追加する。

**4.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**5.** 再生モードで装備アイテムをテストする。

**ヒント：**装備時の効果を削除する場合は、インスペクターの **Script**フィールドの右側にあるマイナスボタン（**-**）を選択します。

ステップを完了としてマーク

## 8. Weapon（武器）を作成する

Q&A (0)

#### Weapon（武器）とは何か

武器は、キャラクターの武器スロットに装備できる特別な装備アイテムです。

装備アイテムに通常の装備アイテムの機能に加えて、武器としての機能を与えることができます。武器は以下のようなステータスを持ちます。

- 攻撃アクションに関連するステータス：**Reach**（射程距離）、**Speed**（スピード）、**Minimum Damage**（最小ダメージ）、**Maximum Damage**（最大ダメージ）。
- **Weapon Attack Effect**（武器で攻撃したときの効果）：武器が敵キャラクターにダメージを与えたときに起こる現象をカスタマイズできる。

#### Unity エディターで武器を作成する方法

エディターで武器を作成するには、以下のようにします。

**1.** プロジェクトウィンドウで、*Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* に移動する。

**2.** プロジェクトウィンドウを右クリックし、コンテキストメニューから **Create > Beginner Code > Weapon** を選択する。または、画面上部のメニューの **Assets** からこのメニューにアクセスすることもできる。

[Image: image]

これにより、新しく武器アセットが作成されます。

**3.** プロジェクトウィンドウで、新しくできた武器を右クリックし、**Rename** を選択する。武器に覚えやすい名前を付ける。

**4.** 武器が選択されていると、装備アイテムに表示されるすべての項目に加えて、インスペクターに以下のフィールド（公開変数）が表示される。

- **Weapon Stats（武器のステータス）：**

- **Speed：**武器の攻撃速度。これは、攻撃の間のクールダウン時間を表します。値が小さいほど、次の攻撃の出が早くなります。値が 0 の場合、最初のアニメーションが終了するとすぐに次の攻撃を実行できます。
- **Minimum Damage：**武器が与えられる最小のダメージ量。キャラクターのステータス修正の影響を受けません。与えるダメージは、この Minimum Damage と次の Maximum Damage の間のランダムな値になります。
- **Maximum Damage：**武器が与えられる最大のダメージ量。キャラクターのステータス修正の影響を受けません。与えるダメージは、Minimum Damage と Maximum Damage の間のランダムな値になります。
- **Range：**武器が敵キャラクターにダメージを与えることができる距離。攻撃を試みた時に標的のキャラクターがこの距離よりも遠くにいる場合、ダメージを与えることはできません。
- **Add New Weapon Attack Effect：**作成した **Weapon Attack Effect**（武器の攻撃時の効果）を一覧表示するドロップダウンメニュー。新しい効果を追加するとここに表示されます。武器の攻撃時の効果を選択して、武器に追加します。

次のステップでは、武器の攻撃時の効果スクリプトを作成して武器に適用する方法を学習します。

ステップを完了としてマーク

## 9. Weapon Attack Effect（武器の攻撃時の効果）スクリプトを書く

Q&A (0)

#### Weapon Attack Effect（武器の攻撃時の効果）スクリプトとは何か

武器の攻撃時の効果スクリプトは、武器がターゲットに当たったときに発生する効果をカスタマイズし、これを武器に付与するものです。武器に追加して使います。

#### 新しい武器の攻撃時の効果スクリプトを作成する方法

「Creator Kit：コーディング入門」のテンプレートから新しい武器の攻撃時の効果スクリプトを作成するには、以下のようにします。

**1.** 画面上のメニューで、**Beginner Code > Create Weapon Attack Effect** に移動する。

[Image: image]

**2.** NameWindow ダイアログボックスが開くので、武器の攻撃時の効果スクリプトに名前を付けて **Create** を選択する。

これにより、*Assets/Scripts/WeaponEffect* にスクリプトが作成され、エディターで選択された状態になります。

**3.** プロジェクトウィンドウで、スクリプトをダブルクリックしてコードエディタで開く。

Creator Kit に、武器の攻撃時の効果を作成するために役立つテンプレートスクリプトが用意されています。

```csharp
public class EFFECTNAME : Weapon.WeaponAttackEffect
{
    public override void OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)
    {

    }

    public override void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)
    {

    }
}
```

**EFFECTNAME**は、武器の攻撃時の効果スクリプトの名前を入れるプレースホルダーです。

#### 武器の攻撃時の効果をカスタマイズする方法

武器の攻撃時の効果スクリプトでカスタマイズできる関数は 2 つあります。

**1.  OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)**

この関数には、武器が敵に当たったときに何が起こるかを制御する命令を記述します。**attackData** の **AddDamage** 関数を使用して、標的にダメージを与えたり、必要な効果を適用したりできます。

**2.  void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)**

この関数は、すべての OnAttack 関数の命令が実行された後に呼び出されます。これにより、OnAttack ですべての効果が適用された後、標的が受けるダメージの合計量に応じて、その後に発生することをカスタマイズできます。

たとえば、この関数を使用して、敵に与えたダメージの一部を、プレイヤーキャラクターが吸収してライフを回復させるといったことができます。

#### カスタムの Weapon.AttackData クラスの詳細について

カスタムの **Weapon.AttackData クラス**を使用すると、敵が受けたダメージの量を参照できます。**Weapon.AttackData**クラスの詳細を参照するには、以下の手順に従ってください。

**1.** Unity エディターの画面上のメニューの **Beginner Code > Open Documentation** を選択する。

**2.** 画面上のメニューバーで、**API Documentation** を選択する。

**3.**検索バーで、「**Weapon.AttackData**」を検索する。

**4.** 左側のメニューでリンクを選択する。

ステップを完了としてマーク

## 10. 武器の攻撃時の効果を武器に適用する

Q&A (0)

武器の攻撃時の効果スクリプトを変更したら、エディターで武器に追加できます。

**1.** プロジェクトウィンドウで、作成した武器を選択する（ファイルパスは Assets/Creator Kit - Beginner Code/Prefabs/InGameItem）。

**2.** インスペクターで、**Add New Weapon Attack Effect** フィールドを探す。ドロップダウンメニューから武器の攻撃時の効果を選択する。

**3.** 武器の攻撃時の効果について **Description**フィールドに説明を追加する。

**4.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**5.** 再生モードで武器をテストする。

**ヒント：**武器の攻撃時の効果を削除する場合は、インスペクターの Script フィールドの右側にあるマイナスボタン（**-**）を選択します。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
