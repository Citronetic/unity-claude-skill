[Image: image]

# チャレンジ 4：インタラクティブな UI コンポーネント

Tutorial

foundational

+10XP

20 mins

0

Unity Technologies

[Image: チャレンジ 4：インタラクティブな UI コンポーネント]Summary

- Slider、Toggle Group、Input フィールドを用いて UI メニューを更新する
- Input フィールドからの入力を反映させるための Scroll Rect を追加する

Languages available:

日本語English日本語日本語

## 1. Settings メニューの実装

Q&A (0)

**1.**  新しい Image を追加し、名前を Settings メニューに変更します。

**2.** 上部に Text を追加し、Text を「Settings」に置き換えます。

**3.**4つの Toggle を子のゲームオブジェクトとして追加します。

**4.** 各 Toggle の OnClick イベントを新規作成します。

**5.**  Hierarchy の中から 4つのゲームオブジェクト（UI 以外のオブジェクト）を見つけて、各 Toggle に個別にドラッグします。

**6.**  Onclick() を SetActive(bool) に設定します。

**7.**空のゲームオブジェクトを追加し、Grid Layout コンポーネントを追加します。

**8.**  Toggles (トグル) をこのゲームオブジェクトの親にして、Grid Layout パラメーターを調整し、トグルをグリッドのセルの形状にします。

**9.**  Slider を追加し、イベントリファレンスとして Spotlight ゲームオブジェクトを追加します。

**10.**  イベントを Light Intensity に設定します。

**11.** Max Value を 50 などの増加した値に更新します。

**12.** スライダーの下に Input フィールドを追加し、Placeholder Text を「Email」に置き換えます。

**13.**  下部にボタンを追加し、Text に「Save」と表示させます。

**14.**  再生ボタンを押して、各インタラクティブなコンポーネントをテストします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
