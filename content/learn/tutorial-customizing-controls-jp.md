[Image: image]

# コントロールのカスタマイズ

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: コントロールのカスタマイズ]Summary

本チュートリアルでは、シーンのモーションを制御するスクリプトの場所と、設定を調整する方法を説明します。

Resources

- [CustomizingControls_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/fb89964e-926f-432b-bd0e-6433c9c792ef/CustomizingControls_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954445523)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

Reflect Viewer では、ゲームでおなじみの標準入力システムを採用しています。3D シーンのナビゲーションシステムである WASD やマウスを使った動きに慣れている人は少ないと思いますので、このシステムの仕組みを理解し、自分の好みに合わせて調整することが必要です。本チュートリアルでは、シーンのモーションを制御するスクリプトの場所と、設定を調整する方法を説明します。

このチュートリアルでは、次のものが必要です：

- [Github](https://github.com/Unity-Technologies/com.unity.reflect.viewer)からダウンロードした Reflect Viewer プロジェクト
- Unity エディターの Pro ライセンス

ステップを完了としてマーク

## 2. Scene Movement スクリプトの理解

Q&A (0)

**1.** Github から Reflect プロジェクトをダウンロードして開きます。

**2.** **Assets** > **Scenes**と選択して Reflect シーンを開きます。

**3.** プロジェクトを実行して、シーン内でのカメラの動きを確認します。終了したらプロジェクトを閉じます。

**4**. カメラの動きは設定アセットで制御されており、**Assets > Settings** と選択して FreeFlyCameraSettings アセットを選択することで、設定を変更することができます。

このアセットを選択すると、Inspector パネルに設定が表示されます。

[Image: image]

以下のパラメーターは、スクリプトを介して利用できます。カメラの動きは、シーンの中でより自然な動きをするために、スケールに基づいています。これは、以下の設定で制御される動きに、一般的な遅延やカーブがあることを意味しています：

- **Max Time To Travel Min：**カメラの最低速度のとき、シーン全体を移動する最大時間を秒単位で表す
- **Max Time to Travel Full：**カメラの最高速度のとき、シーン全体を移動する最大時間を秒単位で表す
- **Max Time to Accelerate：**カメラが最低速度から最大速度に加速するまでの最大時間を秒単位で指定する
- **Min Speed Scaling：**カメラの最低速度に対するスケールファクタ
- **Max Speed Scaling：**カメラの最高速度に対するスケールファクタ
- **Acceleration Scaling：**カメラの加速度を利用したスケーリング
- **Waiting Deceleration：**減速度のスケーリング。高い値を設定すると、加速していないときにカメラが最低速度に戻るのに時間がかかる

ステップを完了としてマーク

## 3. 次のステップ

Q&A (0)

本チュートリアルでは、Reflect Viewer シーンの移動オプションについて説明しました。これらのモーションの感度を自分の好みに合わせて設定することができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
