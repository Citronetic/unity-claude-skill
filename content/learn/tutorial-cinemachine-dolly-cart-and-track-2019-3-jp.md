[Image: image]

# Cinemachine のドリーカートとトラック機能 - 2019.3

Tutorial

Beginner

+10XP

30 mins

10

(28)

Unity Technologies

[Image: Cinemachine のドリーカートとトラック機能 - 2019.3]Summary

シネマトグラフィーでは、「トラッキングショット」という用語は、カメラが撮影しているものに沿って移動するシーンを指します。撮影のために、カメラはドリーに取り付けられ、トラックの上に配置されます。シーンが撮影されている間、カメラはトラックに沿って移動します。

このチュートリアルでは、Cinemachine のカメラを設定してトラッキングショットを作成します。

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

*Unity 2019.1 をお使いの方は[こちら](https://learn.unity.com/tutorial/cinemachine-cameras-2019-1)。Unity 2018.4 以下をお使いの方は[こちらをクリック](https://learn.unity.com/tutorial/cinemachine-cameras-2018)してください。*

シネマトグラフィーでは、「トラッキングショット」とは、撮影しているものと一緒にカメラが動くシーンのことを指します。ショットを得るために、カメラはトラックの上に配置されたドリーに取り付けられています。シーンが撮影されているので、カメラはトラックに沿って移動します。

ドリーカートとトラックを使ったトラッキングショットを作成する機能は、Unity の Cinemachine パッケージのオプションの一つです。Cinemachine は、ゲーム内カメラ、映画のようなカットシーン、映画制作を支援するプレビジュアライゼーション、バーチャルシネマトグラフィの eSports ソリューションなどに使用できる統一された自動カメラシステムです。

Cinemachine の Track 機能や Dolly 機能を使うと、バーチャルカメラが移動するパスのウェイポイントを設定して、シーン内のターゲットを追跡することができます。(**画像 01**)

他の Cinemachine のカメラ機能と同様に、バーチャルカメラを作ってシーンのメインカメラを制御します。バーチャルカメラを直接動かすのではなく、シーンの周りのウェイポイントベースのトラックに沿ったドリーカートに沿って移動するように割り当てます。

カメラをキーフレームにしてトラックを下っていくこともできますし、Cinemachine の Auto Dolly 機能を使えば、被写体が何をしていてもカメラと被写体の距離を一定に保つことができます。これはプリプロダクションにおいて非常に有用であり、ショットを設定してから被写体の演出を修正したり、可変速度で対象物を追いかけるようなゲームでは非常に有用です。

[Image: image]ステップを完了としてマーク

## 2. Cinemachine の追加

Q&A (0)

1. メニューバーで、Windows > Package Manager の順に移動します。
2. 全てのパッケージが読み込まれるのを待って、リストから Cinemachine を選択し、インストールをクリックします。

ステップを完了としてマーク

## 3. Cinemachine Brain の追加

Q&A (0)

Cinemachine Brain は、Cinemachine の他のすべてのコンポーネントのハブとして機能します。メインカメラを制御し、ユーザーがさまざまなバーチャルカメラを作成して制御することができます。

1. シーン内のメインカメラを選択します。
2. Inspector で、Add Component をクリックします。
3. Cinemachine > Cinemachine Brain の順に選択します。**(画像 02)**

[Image: image]ステップを完了としてマーク

## 4. Cinemachine のバーチャルカメラの追加

Q&A (0)

バーチャルカメラは、Timeline を使って特定のカメラの挙動やカメラショットを作成するための鍵となるものです。バーチャルカメラの動作は、Game ビューで見たときに、Dead Zone と Soft Zone の境界を使って調整することができます。ターゲットが Dead Zone に入ると、この範囲ではカメラは回転しません。Soft Zone では、カメラは徐々にターゲットに再調整します。これらの境界は、バーチャルカメラのパラメーターを使用して調整することができます。

1. メニューバーで、**Cinemachine > Create Virtual Camera**の順に選択します。
2. Virtual Camera****を選択し、GameObject を LookAt パラメーターに割り当てます。
(**画像 03**)

[Image: image]

- Game ビューを選択し、Dead Zone の境界を調整します。
- Soft Zone の境界を調整します。(**画像 04**)

[Image: image]

- Lens のパラメーターを変更します。
- Damping パラメーターを調整します。

Dead Zone と Soft Zone を調整することで、カメラはターゲットが Dead Zone の外に出始めるまでターゲットを追跡しません。カメラで設定した Damping パラメーターに応じて、Soft Zone 内のターゲットを追尾します。減衰は、ターゲットを追跡する際のカメラの緩みや硬さを決定します。

ステップを完了としてマーク

## 5. Cinemachine の Dolly Cart と Track を追加

Q&A (0)

バーチャルカメラはカートに追従するように割り当てることができ、カートはトラックに追従するように割り当てることができます。必要なだけ多くのウェイポイントを持つトラックを作成し、各ポイントの Vector 3 の位置を提供することができます。

- Cinemachine のドロップダウンから、Create Dolly Track and Cart を選択します。
- Virtual Camera を選択し、Follow パラメーターに Dolly Cart を割り当てます。(**画像 05**)

[Image: image]

- Hierarchy ウィンドウで Dolly Cart を選択し、Dolly Track が Path パラメーターに割り当てられていることを確認します。
- Update Method、Speed、およびトラック上の Position で、Dolly Cart のパラメーターを調整します。(**画像 06**)

[Image: image]

- Hierarchy ウィンドウで Dolly Track を選択します。
- Waypoints フィールドの **+**ボタンをクリックして、必要なだけ新しい Waypoints を追加します。
- Waypoints の値を調整して、Vector 3 の場所および角度の Roll 値を設定します。(**画像 07**)

[Image: image]

- Resolution でトラックの滑らかさを設定することができます。
- Looped をチェックすると、最後の Waypoint が最初の Waypoint の位置にループします。

Cinemachine、Dolly Track、そして Cart 機能を使えば、オーディエンスに没入感を与える映画のような体験を素早く簡単に作ることができます。複数のトラックを作成し、Timeline を介して別のトラックを追跡するようにバーチャルカメラを割り当てる*こと*ができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
