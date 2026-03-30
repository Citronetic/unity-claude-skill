[Image: image]

# VR のソフトウェア設定

Tutorial

Beginner

+10XP

60 mins

2

(38)

Unity Technologies

[Image: VR のソフトウェア設定]Summary

本レッスンでは、パソコンと VR 機器に必要なソフトウェアをインストールし、VR 開発のための設定を行います。まず、本コースに参加するために、推奨バージョンの Unity をインストールします。使用する VR 機器によっては、追加のエクスポートモジュールをインストールする必要があります。

また、VR ヘッドセットが開発やテストのために適切に設定されているかどうか、必要なデバイス固有のソフトウェアを追加でダウンロードすることも含めて確認します。

本チュートリアルは「[Create with VR course](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. どんな人におすすめ？

Q&A (0)

**Unity の経験**

本講座は、Unity エディターの使用経験はあるものの、Unity での VR は初心者という方を対象としています。

全くの Unity 初心者の方は、以下の学習から始めてください：

- [Unity Essentials Pathway](https://learn.unity.com/pathway/unity-essentials)
- [Creator Kit: FPS](https://learn.unity.com/project/creator-kit-fps)

**あなたの VR 体験について**この学習コンテンツを学習者として最大限に活用するためには、これまでに VR を使った基本的な体験があることが必要です。これまでに何も VR 体験をしたことがない場合は、お使いの VR ハードウェア用に作成された基本的なチュートリアルコンテンツをお試しください。

この学習コンテンツを利用するのに、VR 用の開発経験は必要ありません。

**お使いの VR ハードウェア**

この学習コンテンツは、以下のヘッドセットで完全に検証済みです：

- Oculus Quest モデル
- Oculus Rift モデル

[Valve Index](https://store.steampowered.com/valveindex) や  [HTC Vive](https://www.vive.com/us/) など、[OpenXR](https://www.khronos.org/openxr/) に対応した他のヘッドセットを使用することもできますが、途中で障害が発生する可能性が高くなります。すべて正常に機能するはずですが、学習コンテンツはこれらのデバイスで完全にテストおよび検証されていません。すべて正常に機能するはずですが、学習コンテンツはこれらのデバイスで完全にテストされ、検証されていません。

VR ヘッドセットをお持ちでない方でも、この学習コンテンツの恩恵を受けることができますが、VR 体験を十分に試すことができない場合があります。

ステップを完了としてマーク

## 2. Unity Hub をインストールして開く

Q&A (0)

Unity Hub は、Unity のプロジェクトやバージョンを管理する最も簡単な方法です。

お使いのコンピューターにすでに Unity Hub がインストールされていて、開いている場合は、このステップをスキップできます。Unity Hub がインストールされていない場合は、今すぐインストールしてください。

**1.  Unity Hub のインストーラーをダウンロード：**

- [Download Unity ページ](https://unity3d.com/get-unity/download?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930889218)に移動し、**Download Unity Hub** を選択します。

**2.  Unity Hub のインストール：**

- Unity Hub のインストーラーがダウンロードされたら、ファイルを開いてインストーラーを実行します。

**3.  Unity Hub を開く：**

- Unity hub のインストールが完了したら、Unity hub を起動します。

これで、コンピューターに Unity Hub がインストールされ、開いているはずです。

**注意：**Unity Hub のインストールに問題がある場合は、チュートリアル「[Install Unity and the Hub](https://learn.unity.com/tutorial/install-unity-and-the-hub?uv=2019.4&pathwayId=5f7bcab4edbc2a0023e9c38f&missionId=5f77cc6bedbc2a4a1dbddc46&projectId=5fa1b1a1edbc2a001f612a3d)」の詳細な指示に従ってください。

ステップを完了としてマーク

## 3. Unity 2020.3 LTS のインストール

Q&A (0)

このコースを受講するには、特定のバージョンの Unity と、Oculus Quest を使用する場合は、追加の Android Build Support モジュールをインストールする必要があります。

**1.  Unity 2020.3 LTS を選択する：**

- Unity Hub の **Installs**タブで **Add** をクリックし、**Unity 2020.3 (LTS)**を選択します：

- この LTS（Long-Term Support）版の Unity は安定しており、2 年間のフルサポートを受けることができるので、開発に最適です。

**2.  Oculus Quest を使用している方は、Android Build Support Module をインストールする：**

- 追加のエクスポートモジュールをインストールするよう求められたら、**Android Build Support** を選択します。

- これにより、Oculus Quest デバイス上で動作するAndroid アプリ（.apk ファイル）を作成することができます。
- Oculus Quest を使用していない場合は、すべてのエクスポートモジュールを選択しないでおくことができます。

**3.  Unity エディターをダウンロードしてインストールする：**

- Unity Hub のプロンプトに従って、Unity 2020.3 LTS のダウンロードとインストールを続行し、インストールされるのを待ちます。

これで、推奨バージョンの Unity と、追加で必要なエクスポートモジュールがインストールされたはずです。

ステップを完了としてマーク

## 4. Oculus デバイスの設定

Q&A (0)

**Oculus Quest** または **Oculus Rift**を使用している場合は、このステップを完了します。そうでない場合は、このステップをスキップします。

Oculus デバイスを使って開発を始める前に、デバイスが適切に設定されていることを確認するためのいくつかのステップがあります。

**1.  デバイスを Developer モードにする：**

- [Oculus Developer ページの Device Setup](https://developer.oculus.com/documentation/native/android/mobile-device-setup/) の指示に従って、デバイスを Developer モードにしてください。

- これにより、あなたのデバイスでテストや開発を行うことができます。

**2.  Oculus Link（Windows のみ）を使って、デバイスをコンピュータに接続する：**

- **Mac** をお使いの方は、このステップをスキップしてください。Oculus ソフトウェアは現在、Windows にのみ対応しています。
- [Oculus Link Setup](https://www.oculus.com/accessories/oculus-link/) ページから、指示に従ってデバイスをコンピューターに接続します。
- 対応するケーブルでデバイスを接続し、Oculus ソフトウェアをダウンロードする必要があります。
- このステップが正常に完了すると、Oculus デスクトップアプリ内でデバイスが認識され、接続されるはずです。

[Image: image]

これで、Oculus デバイスが Unity で開発できる状態になったはずです。

ステップを完了としてマーク任意のステップ

## 5. HTC Vive や Valve Index の設定

Q&A (0)

**HTC Vive** または **Valve Index** を使用している場合は、このステップを完了します。それ以外の場合は、このステップをスキップしてください。

HTC Vive、HTC Vive Pro、Valve Index を使って開発を始める前に、Steam と SteamVR をインストールする必要があります。

**1.  Steam のインストール：**

- [Steam のダウンロードページ](http://store.steampowered.com/about)にアクセスし、指示に従って Steam をダウンロード、インストールしてください。

**2.  SteamVR をインストールして、デバイスをリンクする：**

- [SteamVR ダウンロードページ](https://store.steampowered.com/app/250820/SteamVR/)にアクセスし、指示に従って SteamVR をダウンロードして実行します。
- Steam を起動します。
- プロンプトが表示されたら、SteamVR をインストールします。
- ヘッドセットをコンピューターに接続し、SteamVR にリンクして認識されていることを確認します。

[Image: image]

これで、デバイスが正常に接続し認識され、SteamVR が起動するはずです。

ステップを完了としてマーク任意のステップ

## 6. 他のデバイスの設定

Q&A (0)

上記以外の [OpenXR](https://www.khronos.org/openxr/) 対応の VR 機器を使用している場合は、オンラインで関連するドキュメントを検索し、それに従ってその機器を Unity での開発用に設定してください。

ステップを完了としてマーク

## 7. まとめ

Q&A (0)

これで、コンピューターに必要なバージョンの Unity を設定し、デバイスを開発可能な状態に設定することができました。この 2 つのタスクが完了すれば、初めての VR プロジェクトに取り掛かることができます。

次のレッスンは：

- VR プロジェクトの設定

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
