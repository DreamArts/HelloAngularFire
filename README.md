# 勉強会について
## 概要
サーバーレスの時代ついに到来!

Webデザインとコーディングのスキルさえあれば、インフラ構築やサーバーサイドのプログラミングなしに、本格的なWebアプリが実現できる時代になってきました。

世界的にmBaaSのデファクトスタンダードになりつつある「Google Firebase」と、日本でも人気急上昇中の「Angular2」を用いたハンズオンセミナーを開催します。

作りたいものがあるが、サーバーサイドの設計・構築・実装に困っていたWebデザイナーやフロントエンジニアの方、個人でサービスを立ち上げたいが、インフラ構築・運用・コストがネックになって、なかなか踏み出せない方などなど、ご興味のある方は奮ってご参加ください。

- 2017/4/8@東京
    - https://dreamarts.connpass.com/event/50292/
- 2017/4/9@東京
    - https://dreamarts.connpass.com/event/50494/
- 2017/4/22@広島
    - https://da-oriduru.connpass.com/event/50333/

## 事前条件
- javascript等のオブジェクト指向言語を一つでも使ったことがあり、クラス・メソッド・フィールドなどの用語を一応理解している方を対象としています。プログラミングの初歩的な説明は割愛しますので、もし不慣れな場合は、プログラミングの入門書等で事前に予習をお願いします。

## 目次
1. 事前課題・・・環境設定とHello World!
    1. 環境のセットアップ（事前課題1）
    1. Hello Angular（事前課題2）
    1. Hello Firebase（事前課題3）
1. 導入編・・・Firebase, Angularの概要
    1. サーバーレスアーキテクチャの紹介
    1. Firebaseの紹介
    1. Angularの紹介
    1. 技術動向とエンジニアの需要の変化
1. 基礎編・・・Chatツールを作りながらAngularとFirebaseの基礎を理解する
    1. Angularの4要素を理解する・・・アプリの骨組みを作成
    1. Firebaseに接続する・・・ログイン処理の実装
    1. Firebaseのデータの読み書きを理解する・・・タイムラインの実装
    1. スタイルのつけ方を理解する・・・sassの使い方
1. 応用編・・・Chatツールを改善しながら、より実用的なトピックを理解する
    1. Firebaseにデプロイする
    1. Firebase Storageを使う・・・ファイルのアップロード・ダウンロード
    1. Singletonパターンを理解する・・・ユーザ情報を取得する
    1. UIライブラリの利用・・・UIを改善する
    - 付録：デバッグツールの利用
    - 付録：単体テストツールの利用
1. 実践編・・・グループワーク
    1. 4人1チームで復習と応用編の課題を進める。チームで独自のテーマを決めて進めてもよい。
    1. 成果発表

## 勉強会の参加前に
- 勉強会参加前に、事前課題1~3を実施しておいてください。
- 事前課題がうまくできない場合は、早めに受付にお越しください。

# 事前課題
## 1. 環境のセットアップ（事前課題1）
### Mac用
1. Googleアカウントを作成
    - https://www.google.co.jp
    - Firebaseを用いるためにはGoogleアカウントが必要です。もしGoogleアカウントをお持ちでない場合は、事前にGoogleアカウントを作成してください。
1. gitのインストール
    - http://qiita.com/furusin_oriver/items/974a7b7fb8c56ad88d6e
1. Chrome（Webブラウザのインストール）
    - https://www.google.co.jp/chrome/browser/desktop/
1. node v6.10.1のインストール
    - https://nodejs.org/ja/
    - nodebrew等によるインストールも可
1. angular-cli 1.0.0-beta.28.3をインストール
    - npm install -g @angular/cli
1. firebase-cliをインストール
    - npm install -g firebase-tools
1. Visual Studio Codeをインストール
    - https://code.visualstudio.com/download
    - エディタは何でもよいですが、当勉強会ではVisual Studio Codeを用います。

### Windows用

## 2. Hello Angular（事前課題2）
1. 勉強会用のフォルダを作成（ターミナルにて）
    - mkdir HelloAngularFire
    - cd HelloAngularFire
1. HelloAngularFire直下にAngular用のプロジェクトを作成
    - ng new AngularChat --style=scss
    - cd AngularChat
    - ng serve
1. ブラウザで動作確認
    - http://localhost:4200
1. ビルド
    - ng build
    - dist以下にindex.htmlなどビルドされたアプリが生成されることを確認する。
    - 次のHello Firebaseにて、dist以下をFirebaseにデプロイする。
    - 次の画像はターミナルでの操作例
    <img src="DocImages/hello_angular.png" width="400px" />

## 3. Hello Firebase（事前課題3）
### ブラウザにて
1. Googleアカウントでログイン
1. Firebaseを利用開始
    - https://firebase.google.com/?hl=ja
    - 無料で開始を押す。（勉強会の内容は無料枠しか使わない予定。）
    <img src="DocImages/start_firebase.png" width="400px" />
1. プロジェクトを作成
    - プロジェクト名：HelloAngularFire、国：日本
    <img src="DocImages/create_project.png" width="400px" />
    
    - https://console.firebase.google.com/

### ターミナルにてプロジェクトを作成
1. HelloAngularFireの直下にFirebaseディレクトリを作成する（ターミナルにて）
    - cd ..
    - mkdir Firebase
    - cd Firebase
1. Firebaseにログイン
    - firebase login
1. FirebaseのHosting用の設定をする
    - firebase init
        - ? What Firebase CLI features do you want to setup for this folder? : 上下キーでカーソルを動かしHostingを選択
        - ? What Firebase project do you want to associate as default? : 上下キーでカーソルを動かしHelloAngularFireを選択
        - ? What file should be used for Database Rules? (database.rules.json): そのままEnter
        - ? Do you want to install dependencies with npm now? : Yes
        - ? What do you want to use as your public directory? (public) : そのままEnter
        - ? Configure as a single-page app (rewrite all urls to /index.html)? : Yes
        <img src="DocImages/firebase_init.png" width="400px" />
    - 以上が成功すると、public, database.rules.json, firebase.jsonなどが生成される。
1. Hello Angularでビルドしたアプリ（AngularChat/dist以下）をFirebaseデプロイ用のプロジェクト内にコピー
    - cp -r ../AngularChat/dist/ public/
1. Firebaseにデプロイ
    - firebase deploy
    - deployコマンドのログの最後の方に、「Hosting URL: https://<Project ID>.firebaseapp.com」が出てきて、そのURLにアクセスして、Angularの「App Works!」の画面が出てくれば成功。

<br><br>
# 導入編
Firebase, Angularの概要。資料は後日公開する予定。

<br><br>
# 基礎編
Chatツールを作りながらAngularとFirebaseの基礎を理解する。

## 完成イメージ
<img src="DocImages/chat_image.png" width="400px" />

- 画面構成は下記の通り
    - ヘッダー（header）
    - ログイン（login）
    - タイムラインの入力（timeline-input）
    - タイムライン（timeline）

## 1. Angularの4要素を理解する
アプリの骨組みを作成する。
### Angularの4要素
<img src="DocImages/angular_elements.jpg" width="400px" />

### component・serviceの作成とTypeScript入門
1. TypeScriptとは
    - Microsoftが開発したオープンソースの言語。
    - JavaScriptにクラスベースのオブジェクト指向と静的型付けの機能を追加した言語で、JavaScriptの柔軟さゆえのハマりどころを最小化し、大規模開発にも対応できる。
    - JavaScriptと親和性が高く、Javaを簡略化したような文法のため、学習コストも低い。
    - TypeScriptはコンパイルするとJavaScriptに変換されて、実行される。
1. TypeScriptの制御構造
    - 順次
    ```.ts
    var a = 1;
    var b = 2;
    var c = a + b;
    ```
    - 分岐
    ```.ts
    if (0 < c) {
      console.log("plus");
    } else {
      console.log("zero or minus");
    }
    ```
    - 繰り返し
    ```.ts
    // C言語っぽいfor文
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
    // C言語っぽいwhile文も使える
    var i = 0
    while(i < 10) {
      console.log(i);
      i++;
    }
    // 列挙
    var array = ["a", "b", "c"];
    for (var element of array) {
      console.log(element);
    }
    // forEach関数による列挙も可
    array.forEach((element) => {
      console.log(element);
    });
    ```
1. クラス・プロパティ・メソッドの定義と呼び出し
    - クラス・プロパティ・メソッドの定義
    ```.ts
    // 下記のMessageDataクラスは、CommonDataを継承し、OnInitインターフェースを実装している
    class MessageData extends CommonData implements OnInit {
      // プロパティ（メンバ変数）の定義
      private messageId: string;
      text: string;
      createdBy: string;
      // インスタンス生成時に呼ばれるコンストラクタ
      constructor() {
      }
      // メソッドの定義
      getMessageId(): string {
        return this.messageId;
      }
    }
    ```
    - インスタンスの生成とプロパティの参照
    ```.ts
    var message = new MessageData();
    message.text = "メッセージ本文";
    ```
    - メソッドの呼び出し
    ```.ts
    var message = new MessageData();
    var messageId = message.getMessageId();
    ```

1. 変数・定数
    ```.ts
    let a = 1;    // 変数（ブロックスコープ）
    var b = 2;    // 変数（関数スコープ）
    const c = 3;  // 定数
    ```
    ```.ts
    // varは関数スコープなので、下記でも動く
    function f() {
      {
        var x = 2;
      }
      console.log(x);
    }
    f();
    // letはブロックスコープなので、下記だとエラー
    function f() {
      {
        let x = 2;
      }
      console.log(x);
    }
    f();
    ```
1. TypeScriptの基本型

    | 型名 | 内容 |
    |---|---|
    | boolean | 真偽値 |
    | number | 数値 |
    | string | 文字列 |
    | array | 配列 |
    | any | 任意の型 |
    
1. ログイン処理のためのcomponentとserviceを作成（ターミナルにて）
    - ng generate component login
    - ng generate service login
    - ng serve
1. LoginComponent, LoginServiceの呼び出し（Visual Studio Codeにて）
    - login.component.tsを開く

### templateの記法とデータバインド
1. 基本的なtemplateの記法
    - HTMLがそのまま使える。
    - sytleの指定の仕方もそのまま。
1. データバインド（TypeScript → HTML）
    - login.component.ts（Visual Studio Codeで編集）
    ```.ts
    export class LoginComponent implements OnInit {
      // プロパティの値は同一コンポーネントのtemplate(html)からは参照可
      errorMessage: string = "ログインできませんでした。";
    }
    ```
    - login.component.html
    ```.html
    <!-- {{プロパティ名}}で、HTMLにプロパティの値が埋め込まれる -->
    <div class="Login_errorMessage">{{errorMessage}}</div>
    ```
1. データバインド（HTML → TypeScript）とイベント処理
    - timelineとtimeline-inputのコンポーネントを追加（ターミナルにて）
        - ng generate component timeline
        - ng generate component timeline-input
    - timeline-input.component.htmlをVisual Studio Codeで編集
    ```.html
    <textarea #inputText></textarea>
    <button (click)="sendMessage(inputText)">送信</button>
    ```
    - timeline-input.component.tsを編集
    ```.ts
    sendMessage(inputText: HTMLTextAreaElement) {
      console.log(inputText.value);
    }
    ```
    - 引数で受け渡しをしなくても、JavaScriptと同じようにdocument.getElementById()やJQueryでHTMLのエレメントを取得することができる。
1. 双方向データバインド（HTML ↔ TypeScript）
    - timeline-input.component.html
    ```.html
    <textarea [(ngModel)]="text"></textarea>
    ```
    - timeline-input.component.ts
    ```.ts
    text: string;
    sendMessage(inputText: HTMLTextAreaElement) {
      console.log(this.text);
      this.text = "";
    }
    ```
1. HTMLタグの繰り返し表示（*ngFor）
    - timeline.component.html
    ```.html
    <div *ngFor="let message of messagesArray">{{message}}</div>
    ```
    - timelie.component.ts
    ```.ts
    messagesArray = ["aaa", "bbb", "ccc"];
    ```
1. HTMLタグの条件付き表示（*ngIf）
    - login.component.html
    ```.html
    <div *ngIf="errorMessage">{{errorMessage}}</div>
    ```
    - login.component.ts
    ```.ts
    errorMessage: string = null
    login() {
      this.loginService.login(() => {
        // 成功
      }, (error) => {
        // 失敗
        this.errorMessage = "ログインできませんでした。(" + error.message + ")";
      });
    }
    ```
1. HTMLタグの条件付き表示（*ngSwitch）
    - login.component.html
    ```.html
    <div [ngSwitch]="isLoggedIn">
      <button *ngSwitchCase="false" class="Login_button" (click)="login()">Login</button>
      <button *ngSwitchCase="true" class="Login_button" (click)="logout()">Logout</button>
    </div>
    ```
    - login.component.ts
    ```.ts
    isLoggedIn = false;
    login() {
      this.loginService.login(() => {
        // 成功
        this.isLoggedIn = true;
      }, (error) => {
        // 失敗
        this.isLoggedIn = false;
      });
    }
    ```
1. HTMLタグのattributeを動的に変更（[attribute名]）
    - timeline-input.component.html
    ```.html
    <textarea [class]="textareaClass"></textarea>
    <!-- 下記のような特殊記法もあるがあまり使わない -->
    <textarea [ngClass]="textareaClass"></textarea>
    ```
    - timeline-input.component.ts
    ```.ts
    textareaClass = "TimelineInput_textarea";
    sendMessage(inputText: HTMLTextAreaElement) {
      if (check(inputText)) {
        // チェックOK
        this.textareaClass = "TimelineInput_textarea";
      } else {
        // チェックNG
        this.textareaClass = "TimelineInput_textarea TimelineInput_textareaError";
      }
    }
    ```
1. HTMLタグのclassの一部を動的に追加・削除したい場合
    - timeline-input.component.html
    ```.html
    <textarea [class.TimelineInput_textarea]="true" [class.TimelineInput_textareaError]="hasError"></textarea>
    ```
    - timeline-input.component.ts
    ```.ts
    hasError = false;
    sendMessage(inputText: HTMLTextAreaElement) {
      if (check(inputText)) {
        // チェックOK
        this.hasError = false;
      } else {
        // チェックNG
        this.hasError = true;
      }
    }
    ```

### routerの設定

- routerを追加
  - app.modules.tsにRouterModuleなどをセット
  - app.component.htmlに「<router-outlet></router-outlet>」をセット

## 2. Firebaseに接続する
ログイン処理を実装する。

### Firebase consoleからGoogle認証を有効にする（ブラウザにて）

### angularfire2の導入（ターミナルにて）
- HelloAngularFire/AngularChatのディレクトリにて
- npm install firebase angularfire2 --save
  - https://github.com/angular/angularfire2
- firebaseConfig.jsを作成し、FirebaseのAPIキーをセット。
  - jsでエラーになる場合は、src/tsconfig.app.jsonのcompilerOptionsに下記をセット
  - "allowJs": true
### ログイン処理の実装



## 3. Firebaseのデータの読み書きを理解する
タイムラインの実装
### 入力画面の作成

## 4. スタイルのつけ方を理解する
sassの使い方

# 応用編
Chatツールを改善しながら、より実用的なトピックを理解する

## 1. Firebaseにデプロイする
## 2. Firebase Storageを使う
ファイルのアップロード・ダウンロード
## 3. Singletonパターンを理解する
ユーザ情報を取得する
## 4. UIライブラリの利用
UIを改善する
## 付録：デバッグツールの利用
## 付録：単体テストツールの利用


