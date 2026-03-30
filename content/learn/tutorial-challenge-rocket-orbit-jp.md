[Image: image]

# 練習問題：ロケットの軌道

Tutorial

Beginner

+10XP

15 mins

7

Unity Technologies

[Image: 練習問題：ロケットの軌道]Summary

この練習問題では、ロケットが軌道を離れて宇宙へと旅立つときの 2 番目のカットシーンをキャプチャします。Timeline Signals を使ってシーンのスカイボックスを変更したり、アクティベーショントラックを使って地球を追加したり、山の地形を非アクティブにしたり、バーチャルカメラを使ってロケットが宇宙空間を通過していく様子を「見る」ことになります。

Languages available:

日本語English日本語日本語

## 1. ロケットの軌道外へのアニメーション

Q&A (0)

- 新しい Timeline を作成し、「OrbitTimeline」と呼びます。Master Timeline に追加します。
- OrbitGameObjects を Activation Track に追加して、Earth GameObject をアクティブにします。
- Saturn V ロケットを複製し、「SaturnV_Orbit」に名前を変更します。
- SaturnV_Orbit GameObject を Activation Track に追加して、2 つ目の SaturnV が Timeline シーケンスの第 2 ステージの間にアクティベートされるようにします。
- OrbitObjects GameObject を Activation Track に追加し、Orbit シーケンス中に地球モデルがアクティベートするようにします。
- OrbitParticles ゲームオブジェクトを Activation Track に追加し、ロケットがカメラを通過するとゲームオブジェクトを非アクティブにします。

[Image: image]ステップを完了としてマーク

## 2. Timeline Signal を作成してスカイボックスを変更

Q&A (0)

- OrbitTimeline に Timeline Signalトラックを追加します。
- 新しい Signal Asset を作成します。
- Environment Manager でドラッグして、メソッドの値を *EnvironmentManager.SwapSkyboxMilkyWay* に設定すると、スカイボックスが Timeline の先頭にある MilkyWay に切り替わります。
- OrbitTimeline と RocketTakeOffTimeline の両方のタイムラインの間に FadeOutFadeIn Clip Track を追加して、スカイボックスのスワップをマスクします。

ステップを完了としてマーク

## 3. ロケットが宇宙空間を移動するときのカメラアングルの設定

Q&A (0)

- 別のバーチャルカメラを追加し、その Look At パラメーターをロケットに設定します。
- ロケットの前にカメラを配置し、ロケットがバーチャルカメラに向かって移動するように表示され、その後、バーチャルカメラを通過します。
- OrbitTimeline に Cinemachineトラックを追加し、そのトラックに新しい Virtual Camera を追加します。
- 船の右側を見るように角度をつけた 2 台目のバーチャルカメラを追加します。
- 宇宙船に Follow パラメーターを設定すると、ロケットと一緒に宇宙空間を移動することができます。
- 2 つのバーチャルカメラを Cinemachine Track に追加した後、2 つのバーチャルカメラの間に FadeOutFadeIn を追加します。長さを適切なサイズに調整するようにしてください。

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
