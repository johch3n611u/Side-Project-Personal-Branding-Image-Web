# Website_Background_Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

已更新至以下版本

<details><summary> ng version msg </summary>

```JavaScript
Angular CLI: 9.1.0-rc.0
Node: 12.16.1
OS: win32 x64
Angular: 9.1.0

... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router

Ivy Workspace: Yes

Package                                    Version

--------------------------------------------------------------------

@angular-devkit/architect                  0.901.0
@angular-devkit/build-angular              0.901.0
@angular-devkit/build-optimizer            0.901.0
@angular-devkit/build-webpack              0.901.0
@angular-devkit/core                       9.1.0
@angular-devkit/schematics                 9.1.0-rc.0
@angular/cdk                               9.2.0
@angular/cli                               9.1.0-rc.0
@angular/material                          9.2.0
@ngtools/webpack                           9.1.0
@nguniversal/module-map-ngfactory-loader   8.1.1
@schematics/angular                        9.1.0-rc.0
@schematics/update                         0.901.0-rc.0
rxjs                                       6.5.3
typescript                                 3.8.3
webpack                                    4.42.0
```

</details>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Wireframe

<https://www.figma.com/file/Trw2pDqLBz8ximcE1r0cDk/Personal-Branding-Image-Web?node-id=52%3A2>

--------------------------------

1-50 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/StudyProject/Angular%20Material>

50. ng new AngularTri --style=scss -> 預設 style 風格吃 .scss 檔
51. 舊專案可至 angular.json 裡面所有 "style" 裡的 style.css 修改為 style.scss
52. /src/app 新建一個 shared-style 的 folder ，新建 shared.scss
53. npm install -g typescript@latest
54. Visual Studio 又莫名其妙編譯不起來但用 VS Code ng serve 卻可以開起來 ...
55. 那感覺就是要將專案拆開前端歸前端，後端只搞 API ，目前判斷可能是這篇的原因 <https://github.com/angular/angular-cli/issues/16961>
56. 測試後發現是手動更改為 scss 檔案時，會出現錯誤，但 npm update 了許多套件後還是無法用 Visual Studio 編譯。
57. 看到以下文章發現似乎在去年就有類似問題且官方已修正?如果透過 dotnet run 似乎可以成功運行。 <https://developercommunity.visualstudio.com/content/problem/234150/the-angular-cli-process-did-not-start-listening-fo.html>
58. 所以直接刪除整個專案重新測試

<details><summary> CMD msg </summary>

```JavaScript
D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image>cd Website_Background

D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background>cd ClientApp

D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background\ClientApp>ng help
Available Commands:
  add Adds support for an external library to your project.
  analytics Configures the gathering of Angular CLI usage metrics. See https://v8.angular.io/cli/usage-analytics-gathering.
  build (b) Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.
  deploy Invokes the deploy builder for a specified project or for the default project in the workspace.
  config Retrieves or sets Angular configuration values in the angular.json file for the workspace.
  doc (d) Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.
  e2e (e) Builds and serves an Angular app, then runs end-to-end tests using Protractor.
  generate (g) Generates and/or modifies files based on a schematic.
  help Lists available commands and their short descriptions.
  lint (l) Runs linting tools on Angular app code in a given project folder.
  new (n) Creates a new workspace and an initial Angular app.
  run Runs an Architect target with an optional custom builder configuration defined in your project.
  serve (s) Builds and serves your app, rebuilding on file changes.
  test (t) Runs unit tests in a project.
  update Updates your application and its dependencies. See https://update.angular.io/
  version (v) Outputs Angular CLI version.
  xi18n (i18n-extract) Extracts i18n messages from source code.

For more detailed help run "ng [command name] --help"

D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background\ClientApp>ng version
An unhandled exception occurred: ENOENT: no such file or directory, scandir 'D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background\ClientApp\node_modules'
See "C:\Users\liu\AppData\Local\Temp\ng-rOKrJm\angular-errors.log" for further details.

D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background\ClientApp>ng serve
An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'
Require stack:
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\node_modules\@angular-devkit\architect\node\node-modules-architect-host.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\node_modules\@angular-devkit\architect\node\index.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\models\architect-command.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\commands\serve-impl.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\node_modules\@angular-devkit\schematics\tools\export-ref.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\node_modules\@angular-devkit\schematics\tools\index.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\utilities\json-schema.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\models\command-runner.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\lib\cli\index.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\lib\init.js
- D:\program\nvm\v12.16.1\node_modules\@angular\cli\bin\ng
See "C:\Users\liu\AppData\Local\Temp\ng-RmcGse\angular-errors.log" for further details.

D:\Desk\Side-Project-Personal-Branding-Image-Web\Personal-Branding-Image\Website_Background\ClientApp>
```

</details>

59. ng version 後 An unhandled exception occurred: ENOENT: no such file or directory, scandir
60. 似乎 Visual Studio 起的專案，在還沒編譯第一次前 Angular 是還沒起專案的。
61. 所以嘗試在執行 1-50 步驟前先改為 scss 編譯。
62. <https://github.com/angular/angular-cli/issues/10949> ng config projects.[projectname].schematics.@schematics/angular:component.style scss
63. 1>Restoring dependencies using 'npm'. This may take several minutes... <https://stackoverflow.com/questions/58158344/restoring-dependencies-using-npm-this-may-take-several-minutes-in-visual-stud>
64. Data path ".projects['Website_Background']" should NOT have additional properties(@schematics/angular:component).
65. 似乎只能改除了 schematics 外的東西，不知道會不會影響到其他問題。重新起了一次專案重新執行 1-50 步驟

<details><summary> ng version msg </summary>

```JavaScript
Your global Angular CLI version (9.0.7) is greater than your local
version (8.3.14). The local Angular CLI version is used.
To disable this warning use "ng config -g cli.warnings.versionMismatch false".

Angular CLI: 8.3.14
Node: 12.16.1
>OS: win32 x64
Angular: 8.2.12

... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router

Package                                    Version

--------------------------------------------------------------------
@angular-devkit/architect                  0.803.24
@angular-devkit/build-angular              0.803.24
@angular-devkit/build-optimizer            0.803.24
@angular-devkit/build-webpack              0.803.24
@angular-devkit/core                       8.3.24
@angular-devkit/schematics                 8.3.14
@angular/cli                               8.3.14
@ngtools/webpack                           8.3.24
@nguniversal/module-map-ngfactory-loader   8.1.1
@schematics/angular                        8.3.14
@schematics/update                         0.803.14
rxjs                                       6.5.4
typescript                                 3.5.3
webpack                                    4.39.2
```

</details>

66. nvm version -> nvm version 1.1.7
67. nvm list -> * 12.16.1 (Currently using 64-bit executable)
68. node -v -> v12.16.1
69. npm -v -> 6.13.4
70. VS ng 專案，預設 router 是直接寫在 app.module.ts 內，這邊我們轉移出來。
71. ng generate module app-routing --flat --module=app -> CREATE src/app/app-routing.module.ts (196 bytes)
UPDATE src/app/app.module.ts (1250 bytes)
72. app-routing.module.ts 忘記 exports -> <https://stackoverflow.com/questions/44517737/router-outlet-is-not-a-known-element>
73. 在安裝 angular material 前先確認一下 npm package <http://dreamerslab.com/blog/tw/npm-basic-commands/>
74. npm ls -g -> -g 全域套件, -l 詳細內容
75. 結果發現 VS ng 專案，安裝了一堆東西 ... 果斷先不看
76. npm install --save @angular/material @angular/cdk -> 有點慘版本太高依賴高版本 ng core

<details><summary> CMD msg </summary>

```JavaScript
npm
+ @angular/cdk@9.2.0
+ @angular/material@9.2.0
added 3 packages from 1 contributor and audited 17329 packages in 39.014s
 WARN @angular/cdk@9.2.0 requires a peer of @angular/core@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/cdk@9.2.0 requires a peer of @angular/common@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@9.2.0 requires a peer of @angular/animations@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@9.2.0 requires a peer of @angular/core@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@9.2.0 requires a peer of @angular/common@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN @angular/material@9.2.0 requires a peer of @angular/forms@^9.0.0 || ^10.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\@angular\compiler-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

32 packages are looking for funding
  run `npm fund` for details

found 78 vulnerabilities (77 low, 1 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details
```

</details>

77.  ng update 

<details><summary> CMD msg </summary>

```JavaScript
Your global Angular CLI version (9.0.7) is greater than your local
version (8.3.14). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
The installed Angular CLI version is older than the latest published version.
Installing a temporary version to perform the update.Installing packages for tooling via npm.

npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-W6KGab\ng -> C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-W6KGab\node_modules\@angular\cli\bin\ng

> @angular/cli@9.1.0 postinstall C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-W6KGab\node_modules\@angular\cli
> node ./bin/postinstall/script.js

+ @angular/cli@9.1.0
added 254 packages from 195 contributors in 9.878s
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
Found 40 dependencies.
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              8.3.14 -> 9.1.0          ng update @angular/cli
      @angular/core                             8.2.12 -> 9.1.0          ng update @angular/core
      @nguniversal/aspnetcore-engine            8.1.1 -> 8.2.6           ng update @nguniversal/aspnetcore-engine
      rxjs                                      6.5.4 -> 6.5.5           ng update rxjs
```

</details>

78. ng update --all --force -> 不知道為何就是強制更新不了 ...
79. ng update @angular/cli @angular/core --allow-dirty --force -> <https://stackoverflow.com/questions/56773528/repository-is-not-clean-please-commit-or-stash-any-changes-before-updating-in-a>

<details><summary> CMD msg </summary>

```JavaScript
Your global Angular CLI version (9.0.7) is greater than your local
version (8.3.14). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
The installed Angular CLI version is older than the latest published version.
Installing a temporary version to perform the update.Installing packages for tooling via npm.

npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-aB0ir2\ng -> C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-aB0ir2\node_modules\@angular\cli\bin\ng

> @angular/cli@9.1.0 postinstall C:\Users\liu\AppData\Local\Temp\.ng-temp-packages-aB0ir2\node_modules\@angular\cli
> node ./bin/postinstall/script.js

+ @angular/cli@9.1.0
added 254 packages from 195 contributors in 9.078s
Installed packages for tooling via npm.
Repository is not clean. Update changes will be mixed with pre-existing changes.Using package manager: 'npm'

Collecting installed dependencies...
Found 40 dependencies.
Fetching dependency metadata from registry...
                  Package "@angular/compiler" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/animations" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/core" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/forms" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/platform-browser-dynamic" has a missing peer dependency of "tslib" @ "^1.10.0".
    Updating package.json with dependency @angular-devkit/build-angular @ "0.901.0" (was "0.803.24")...                  Package "@angular/platform-browser" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/router" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/platform-server" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/compiler-cli" has a missing peer dependency of "tslib" @ "^1.10.0".
                  Package "@angular/common" has a missing peer dependency of "tslib" @ "^1.10.0".

    Updating package.json with dependency @angular/language-service @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency typescript @ "3.8.3" (was "3.5.3")...
    Updating package.json with dependency @angular/compiler @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/animations @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/core @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/forms @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/platform-browser @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/router @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/platform-server @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency @angular/cli @ "9.1.0" (was "8.3.14")...
    Updating package.json with dependency @angular/compiler-cli @ "9.1.0" (was "8.2.12")...
    Updating package.json with dependency zone.js @ "0.10.3" (was "0.9.1")...
    Updating package.json with dependency @angular/common @ "9.1.0" (was "8.2.12")...
UPDATE package.json (1706 bytes)
- Installing packages...
??Packages installed successfully.
** Executing migrations of package '@angular/core' **

> Static flag migration.
  Removes the `static` flag from dynamic queries.
  As of Angular 9, the "static" flag defaults to false and is no longer required for your view and content queries.
  Read more about this here: https://v9.angular.io/guide/migration-dynamic-flag
  Migration completed.

> Missing @Injectable and incomplete provider definition migration.
  In Angular 9, enforcement of @Injectable decorators for DI is a bit stricter and incomplete provider definitions behave differently.
  Read more about this here: https://v9.angular.io/guide/migration-injectable
  Migration completed.

> ModuleWithProviders migration.
  In Angular 9, the ModuleWithProviders type without a generic has been deprecated.
  This migration adds the generic where it is missing.
  Read more about this here: https://v9.angular.io/guide/migration-module-with-providers
  Migration completed.

> Renderer to Renderer2 migration.
  As of Angular 9, the Renderer class is no longer available.
  Renderer2 should be used instead.
  Read more about this here: https://v9.angular.io/guide/migration-renderer
  Migration completed.

> Undecorated classes with decorated fields migration.
  As of Angular 9, it is no longer supported to have Angular field decorators on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.

> Undecorated classes with DI migration.
  As of Angular 9, it is no longer supported to use Angular DI on a class that does not have an Angular decorator.
  Read more about this here: https://v9.angular.io/guide/migration-undecorated-classes
  Migration completed.

** Executing migrations of package '@angular/cli' **

> Angular Workspace migration.
  Update an Angular CLI workspace to version 9.
- Installing packages...
UPDATE angular.json (4506 bytes)
UPDATE src/tsconfig.app.json (210 bytes)
UPDATE src/tsconfig.server.json (264 bytes)
UPDATE package.json (1732 bytes)
UPDATE src/main.ts (651 bytes)
??Packages installed successfully.
  Migration completed.

> Lazy loading syntax migration.
  Update lazy loading syntax to use dynamic imports.
  Migration completed.

> Replace deprecated 'styleext' and 'spec' Angular schematic options.
  Migration completed.


Your project has been updated to Angular version 9!
For more info, please see: https://v9.angular.io/guide/updating-to-version-9
```

</details>

80. 終於更新上 v9 ... 似乎跟 where npm ，npm install .msi 安裝版本有關係 npm 更新的 package 並不支援 npm update 指令安裝位置。

<details><summary> CMD msg </summary>

```JavaScript

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / ??\ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 9.1.0
Node: 12.16.1
OS: win32 x64

Angular: 9.1.0
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router
Ivy Workspace: Yes

Package                                    Version
--------------------------------------------------------------------
@angular-devkit/architect                  0.901.0
@angular-devkit/build-angular              0.901.0
@angular-devkit/build-optimizer            0.901.0
@angular-devkit/build-webpack              0.901.0
@angular-devkit/core                       9.1.0
@angular-devkit/schematics                 9.1.0
@angular/cdk                               9.2.0
@angular/material                          9.2.0
@ngtools/webpack                           9.1.0
@nguniversal/module-map-ngfactory-loader   8.1.1
@schematics/angular                        9.1.0
@schematics/update                         0.901.0
rxjs                                       6.5.4
typescript                                 3.8.3
webpack                                    4.42.0
```

</details>

81. 以上就再說吧，看來最好的配置應該是前端專案與後端拆開，後端單純 API 即可 Angular Universal SEO 就要再研究看看原理是啥。
82. ng update @angular/animations --allow-dirty --force

<details><summary> CMD msg </summary>

```JavaScript
Repository is not clean. Update changes will be mixed with pre-existing changes.Using package manager: 'npm'

Collecting installed dependencies...
Found 41 dependencies.
Fetching dependency metadata from registry...
Package '@angular/animations' is already up to date.
```

</details>

83. 結果編譯還是不行#@$#$@!#@# ... 現在問題是 angular material 新版本，需要較高的 ng core 依存，但似乎只是警告不是報錯 ...
84. 只好刪除不更新先寫 demo 不然拖太久 ...不過在先刪除前嘗試之前在網路上看到的方法，刪除 ClientApp 用 Cli 起一個乾淨的試試看。
85. 第一階段刪除槓掉有關部分但沒資料夾就會報錯，新增後 API 正常運行。看了資料夾後新增了一個 package-lock.json <https://ithelp.ithome.com.tw/articles/10191888>
86. 哀新手被坑，可能大概是有鎖 package 依賴，所以才會在環境方面搞半天 ... <https://www.itread01.com/content/1543392248.html>
87. ng new ClientApp --routing  --style=scss
88. 成功了但是還是有以下異常，可能整個 npm 都要整理一下。

<details><summary> Error msg </summary>

```JavaScript
Microsoft.AspNetCore.SpaServices: Error: Compiling @angular/common : es2015 as esm2015

Microsoft.AspNetCore.SpaServices: Error: Compiling @angular/platform-browser : es2015 as esm2015

Microsoft.AspNetCore.SpaServices: Error: Compiling @angular/platform-browser-dynamic : es2015 as esm2015
```

</details>

89. <https://stackoverflow.com/questions/55406292/timeoutexception-the-angular-cli-process-did-not-start-listening-for-requests-w>
90. 莫名其妙在 angular.json 加上 "progress": true 就又恢復正常 debug 模式 ...
91. 繼續照著 1-50 操作，
92. npm install --save @angular/material @angular/cdk -> 相較於之前 core 幾乎都兼融了。

<details><summary> CMD msg </summary>

```JavaScript
npm+ @angular/cdk@9.2.0
+ @angular/material@9.2.0
added 3 packages from 1 contributor and audited 15602 packages in 40.321s
 WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})


37 packages are looking for funding
  run `npm fund` for details

found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

</details>

93. "@angular/animations": "~9.0.7" -> package.json
94. 接續著成功處理了前幾天卡住的步驟，而架構整理則是將共用 module data function style 等等抽出 ...
95. ng g component [name] --spec false -> spec為false不會建立測試程式，依照 Wireframe 切出 Component。
96. spec 改為 skipTests -> <https://angular.io/cli/generate>
97. ng g service shared
98. 發現一個現象，看範例與一些網路文章，都會把 HTML 直接寫在 TS 檔內的 template 內，不知為何不是強調 MVC ... ?
99. Form login sample -> <https://stackblitz.com/edit/angular-material-login-form?file=src%2Fapp%2Flogin-form.component.ts>
100. 改為先用 VS Code 將 ng 完成，在進 VS 完成 .NET Core API。
101. <https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form>
102. 以往都寫的程式都是用 server side render ， ng 專案則改為 client side render ，所以新的驗證,傳遞資料方式還要花時間研究一下 <https://dotblogs.com.tw/topcat/2017/07/12/115753>
103. More than one module matches. Use skip-import option to skip importing the component into the closest module. <https://stackoverflow.com/questions/46174863/error-more-than-one-module-matches-use-skip-import-option-to-skip-importing-th>
104. ng g c Home --skipTests false --module app
105. http 更新至 httpClient 所以範本內容需要改寫，不然就要找更高階版本來看。先嘗試自己改改看，可以順道了解 module 操作方式。
106. <https://blog.miniasp.com/post/2019/01/20/Angular-HttpClient-Pitfall-and-Tricks>
107. <https://angular.io/guide/http>
108. HttpClientModule NGMODULE 與 HttpClient CLASS 是兩個不同的東西 ... 在這邊卡很久。
109. 且如果引入參數名稱與 tslint 提供的不一樣，程式可以跑但 VS Code 還是會顯示錯誤 ... 且不會有提示字。
110. 這邊遇到一個新問題是，因為是 login 需要的就不只是假資料 get json ，可行的方法有兩種 1.先用 get json 畫面先出來後續再改寫 2. post .NET Core API 那也要同步動工
111. 這邊選擇第二種避免重工，但就要在更多一些時間了，因為 .NET Core API 那就會涉及資料庫部分，就換要先處理環境跟建置問題。
112. 先轉移至 VS 編輯 .NET Core API <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>
113. 接續後端 API 部分，繼續前端 service 的部分 <https://blog.miniasp.com/post/2019/01/20/Angular-HttpClient-Pitfall-and-Tricks>
114. 這邊要用新版的 http 方法處理，舊版的要改寫，主要先確認。 <https://dotblogs.com.tw/topcat/2017/07/12/115753>
115. 因為不是全不學原作操作，而是更簡化版，並沒有利用到 UToken 機制作驗證，所以這邊先邊跳邊補。
116. 這邊要用到一個新的 NG Component guard -> ng g guard [NAME] -> canActivate
117. 這裡看起來很像是後端 server render 常會在頁面渲染前，判斷暫存驗證的機制。 <https://pvt5r486.github.io/f2e/20190609/1487025750/>
118. 這個範例的前端經驗看起來至少要個半年以上 ... 很多底層知識跟不上，也沒寫註解 GG ...
119. 改為參考 <https://ithelp.ithome.com.tw/articles/10195391>
120. getter setter -> <https://ithelp.ithome.com.tw/articles/10194798>
121. 重新整理思路，第一篇是將 cookie 方法獨立出來一個 ts 檔，主要是藉由 dologin 進行 api 驗證，並用剛獨立出來的方法 setcookie 存入 utoken。
122. <https://dotblogs.com.tw/topcat/2017/07/12/115753#AppModule>
123. 這邊要修改的地方是， cookie 一樣要存但是不需要儲存 utoken ，主要是用來 guard component 使用，其中會涉及 rxjs Observable 必須看懂。
124. <https://ithelp.ithome.com.tw/articles/10192030>
125. 第二篇則是涉及到 input 的 getter 與 setter 似乎也不是一定需要，驗證方面也先不要，似乎相較於第一篇後續更雜 ...
126. 所以還是先回到簡化第一篇並將不足的內容補上。首先先補足 cookie-util.ts 。 cookie 通用方法。
127. http RequestOptions 已棄用需要改成新方法 <https://angular.tw/api/http/RequestOptions>
128. http post subscribe 新寫法 <https://blog.miniasp.com/post/2019/01/20/Angular-HttpClient-Pitfall-and-Tricks>
129. constructor public service <https://stackoverflow.com/questions/43141576/property-x-is-private-and-only-accessible-within-class-xyzcomponent>
130. 有時間要把這個看完，蠻基礎的內容。<https://ithelp.ithome.com.tw/articles/10187416>
131. canActivate:[Guard Name]
132. 終於完成與 API 連動的 Signin Component 其中的技術與坑一言難盡，就看程式碼吧，有用到的檔案架構如下圖。

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Website_Background/ClientApp/src/assets/Architecture.png)

133. 接下來就是重頭戲了Home Component 的  Web API CRUD ，後台主要是 C 建立、 U 更新、 D 刪除，前台主要是 R 就快完成了。
134. 整體功能完成後才來處理景觀建築設計系的作品整理與一些樣式上的細修。
135. Home component side nav <https://ithelp.ithome.com.tw/m/articles/10193290>
136. ng g c FunctionBar --module=Home --flat -> <https://www.figma.com/file/Trw2pDqLBz8ximcE1r0cDk/Personal-Branding-Image-Web?node-id=52%3A3>
137. 這邊覺得奇怪的地方是 mat-sidenav 設計上似乎就應該直接套用在 Home Component 上而不需再另增一個 component 不然感覺違背用法。本身就是 Master Page 的感覺。
138. &lt;a [routerLink]="" (click)="function()">Click me&lt;/a> <https://stackoverflow.com/questions/35639174/passive-link-in-angular-2-a-href-equivalent> 。 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/StudyProject/Angular%20Basis/todolist1/src/app/app.component.html>
139. router-outlet 遇到問題，還問到社群去了，解決中。 <https://github.com/leochen0818/NestSample>
140. 不太確定之前巢狀 router 遇到什麼問題，不過解決了，現在則是要實作 Data Tables ，不過這部分需要跳回 Web API 中的 API 功能。
141. 在實作 CRUD API 前，先依照社群大大給的建議架構重新整理了一下架構。 <https://forum.angular.tw/t/topic/1758/2>
142. 主要是藉由 AuthGuard 直接將組件分為需要驗證與不需要驗證，而需要驗證的因為需要子路由所以依功能延伸，但資料夾較難分類，所以先改路由並先去
143. 實作 Web API <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>

---------------------------

162. <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background> API 利用樣板產生告一段落，接著處理 table,sort_header,paginator-> <https://ithelp.ithome.com.tw/m/articles/10196731>
163. fakedata -> <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/StudyProject/Angular%20Basis/todolist2/src/app/todo-list.service.ts>
164. new MatTableDataSource&lt;any>(); -> 提供給 mat table 的資料必須是此型態。
165. ts 檔案內嘗試使用 template `` 而不是 templateURL ''。
166. 主要外層為　matTable 內分為　定義表格的欄位及資料呈現部分與顯示資料列部分
167. ###　定義表格的欄位及資料呈現　###
168. &lt;ng-container matColumnDef="colname">&lt;mat-header-cell *matHeaderCellDef>&lt;/mat-header-cell>&lt;mat-cell *matCellDef="let row">{{ row.dataname }}&lt;/mat-cell>&lt;/ng-container> -> 定義表格呈現與資料欄位，使用方式蠻像 ASP Webform 的 ...
169. &lt;mat-header-cell *matHeaderCellDef>realtitledisplay&lt;/mat-header-cell> -> 資料在標題列 cell 內容。
170. &lt;mat-cell *matCellDef="let row">{{ row.dataname }}&lt;/mat-cell> -> 實際呈現資料的 cell 。
171. ###　顯示資料列　###
172. &lt;mat-header-row *matHeaderRowDef="['colname','colname'...]"> -> matColumnDef='colname' 標題列顯示。
173. &lt;mat-row *matRowDef="let Row; columns: ['colname', 'colname'...]">&lt;/mat-row> -> matRowDef 每一列的資料列名稱 , columns 實際上要呈現的資料欄位名稱。
174. 因為 timestamp 資料型態必須做多一次的轉內容，又沒其他地方需要用到 timestamp 型態，所以從根本上 SQL Server 直接做修改。<https://pjchender.github.io/2017/12/27/js-javascript-date-time-method-%E6%97%A5%E6%9C%9F%E6%99%82%E9%96%93/>。<https://dotblogs.com.tw/kevinya/2014/09/05/146474>
175. matTable 是依照 flexbox 排版組合，所以客製化樣式，ng 會依照 matColumnDef 將 class 產生，只要寫入 CSS 即可 Sample 如下。 -> class="mat-header-cell cdk-header-cell cdk-column-id mat-column-id ng-star-inserted"

<details><summary> CSS </summary>

```CSS
.mat-column-user {
  max-width: 100px;
}

.mat-header-cell.mat-column-user {
  color: red;
}

.mat-cell.mat-column-user {
  font-weight: bold;
  text-decoration: underline dashed #000;
  cursor: pointer;
}
```

</details>

176. 資料顯示設定完後是結合另外兩個元件的用法， NG 在這方面拆得非常開，另外兩個元件也可以在別處使用不局限於 matTable ，分頁元件與排序元件。
177. 再來是進階應用的 data source filter。以上使用方式都直接看程式碼較方便理解。<https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Website_Background/ClientApp/src/app/home/mangement/management.component.ts>
178. 分頁 mat-paginator -> 因為參數涉及到必須傳至 API 做一些查詢參數上的操作，故先用資料一次查詢至前端再分頁的方式。
179. @ViewChild -> <https://lawrencetech.blogspot.com/2017/06/angular-viewchild-contentchild.html?m=1>
180. MatPaginatorModule 與 MatPaginator 又是不同東西 ... 跟之前遇到狀況一樣 -> <https://medium.com/itsems-frontend/angular-material-table-pagination-sorting-filtering-httpclient-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-part-1-9f924e78df4f>
181. ERROR TypeError: Cannot read property 'length' of undefined while accessing length property -> <https://stackoverflow.com/questions/47258260/angular4-error-typeerror-cannot-read-property-length-of-undefined-while-acce>
182. mat-paginator 與 mat-table 是兩個不同的 component 還以為可以把分頁元件放入表格元件內搞了半天 ...
183. 接著排序功能，首先在 &lt;mat-table> 中加入 matSort ，接著在要排序欄位的 &lt;mat-header-cell> 加入 mat-sort-header 這個 directive 即可。部分無法排序的欄位不會報錯但會直接不顯示畫面。
184. 也一樣可以透過把資料傳遞給後端的方式來進行排序，只需要在加入matSort的來源(也就是 &lt;mat-table> )加入一個matSortChange事件即可，當使用者按下欄位排序時，會傳入一個Sort型別的變數。
185. &lt;mat-table [dataSource]="emailsDataSource" matSort #sortTable="matSort" (matSortChange)="changeSort($event)">&lt;/mat-table> -> active：選擇要排序的欄位。 direction：包含 asc ， desc 和空字串，代表要如何進行排序。
186. DataSource.filter -> &lt;mat-form-field>&lt;input matInput #filter placeholder="搜尋">&lt;/mat-form-field> -> <https://ithelp.ithome.com.tw/m/articles/10196827> -> <https://ithelp.ithome.com.tw/articles/10195100>
187. Error: mat-form-field must contain a MatFormFieldControl. -> <https://stackoverflow.com/questions/46705101/mat-form-field-must-contain-a-matformfieldcontrol>
188. Rxjs 上也有版本更替的問題 ... -> <https://xbuba.com/questions/50571550>
189. 使用上直接查關鍵字看 Rxjs 官網。 -> <https://rxjs-cn.github.io/learn-rxjs-operators/operators/creation/fromevent.html>
190. TypeError: Cannot read property 'nativeElement' of undefined -> <https://segmentfault.com/a/1190000008653690> 基本搜尋功能完成 !
191. 進階功能就先不實作了接著先處理 Delete 與 Mananege 真實資料 management Read Web API 的部分。-> <https://ithelp.ithome.com.tw/m/articles/10196827>
192. 跳至 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
193. 接續切 Creat 和 Update 的版 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>
194. 選擇了一個較小較簡易的線上編輯器 Library -> npm i @types/jquery.cleditor --save ->　每個用 npm 安裝的套件，一律放在 node_modules 資料夾裡
195. 跟著一步一步做　<https://premiumsoftware.net/cleditor/gettingstarted>

<details><summary> node_modules\cl-editor\README.md </summary>

## Lightweight text editor

typescript + svelte (no external dependencies)

#### File size (bundle includes css, html and js)

* min: 28kb
* gzip: 9kb

## Installation

#### npm:

```bash
npm install --save cl-editor
```

#### HTML:

```html
<head>
  ...
</head>
<body>
  ...
  <div id="editor"></div>
  ...
</body>
```

#### Usage
```js
import Editor from 'cl-editor';
// or
const Editor = require('cl-editor');
```
```js
// Initialize editor
const editor = new Editor({
    // <HTMLElement> required
    target: document.getElementById('editor'),
    // optional
    data: {
        // <Array[string | Object]> string if overwriting, object if customizing/creating
        // available actions:
        // 'viewHtml', 'undo', 'redo', 'b', 'i', 'u', 'strike', 'sup', 'sub', 'h1', 'h2', 'p', 'blockquote',
        // 'ol', 'ul', 'hr', 'left', 'right', 'center', 'justify', 'a', 'image', 'forecolor', 'backcolor', 'removeFormat'
        actions: [
            'b', 'i', 'u', 'strike', 'ul', 'ol',
            {
                name: 'copy', // required
                icon: '<b>C</b>', // string or html string (ex. <svg>...</svg>)
                title: 'Copy',
                result: () => {
                    // copy current selection or whole editor content
                    const selection = window.getSelection();
                    if (!selection.toString().length) {
                        const range = document.createRange();
                        range.selectNodeContents(editor.refs.editor);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                    editor.exec('copy');
                }
            },
            'h1', 'h2', 'p'
        ],
        // default 300px
        height: '300px',
        // initial html
        html: '',
        // remove format action clears formatting, but also removes some html tags.
        // you can specify which tags you want to be removed.
        removeFormatTags: ['h1', 'h2', 'blackquote'] // default
    }
})
```

#### API
```js
// Methods
editor.exec(cmd: string, value?: string) // execute document command (document.executeCommand(cmd, false, value))
editor.getHtml(sanitize?: boolean) // returns html string from editor. if passed true as argument, html will be sanitized before return
editor.getText() // returns text string from editor
editor.setHtml(html: string, sanitize?: boolean) // sets html for editor. if second argument is true, html will be sanitized
editor.saveRange() // saves current editor cursor position or user selection
editor.restoreRange() // restores cursor position or user selection
// saveRange and restoreRange are useful when making custom actions
// that demands that focus is shifted from editor to, for example, modal window.
```
* For list of available _**exec**_ command visit [https://codepen.io/netsi1964/pen/QbLLG](https://codepen.io/netsi1964/pen/QbLLGW)
```js
// Events
editor.on('change', (html) => console.log(html)) // on every keyup event
editor.on('blur', (event) => console.log(event)) // on editor blur event
```
```js
// Props
editor.refs.<editor | raw | modal | colorPicker> // references to editor, raw (textarea), modal and colorPicker HTMLElements
```

#### Run demo
```bash
git clone https://github.com/nenadpnc/cl-text-editor.git cl-editor
cd cl-editor
npm i
npm run dev
```

#### This library is inspired by https://github.com/Alex-D/Trumbowyg and https://github.com/jaredreich/pell

## Licence

 MIT License
</details>

## ↑ Details pls Read ↓ Easy Sample pls Read

```JavaScript
(alias) new Editor(options: {
    target: Element;
    props?: {
        actions?: (string | {
            name: string;
            title?: string;
            icon?: string;
            result?: Function;
        })[];
        height?: string;
        html?: string;
        removeFormatTags?: string[];
    };
}): Editor
import Editor
```

196. 畫面 ok 但編輯器按鈕一按 reflash ... DevTools failed to load SourceMap: Could not load content for chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/include.postload.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME
197. npm install jquery --save -> $('.cl-button').attr('type', 'button'); 成功解決 button 預設 type submit 問題
198. npm install @types/jquery --save -> <https://stackoverflow.com/questions/48639564/cannot-find-name-in-component-ts>
199. 本來 cl editor 放進 mat-form-field 也能解決 button 問題，但會造成這個 component mat-form-field 效果消失，連 img button 問題也解決了...
200. 畫面完成接著回 management 處理 output id 至 posts input request 接收 response 顯示 -> <https://medium.com/@jscinin/angular-output-%E4%BD%BF%E7%94%A8-2a3f18ed93bf>
201. 本來是想 management matTable 內參數藉由 output 至 sidenav 再利用 router-outlet 帶參數傳入 posts 用 input 接，但好像不能這樣搞 ... <https://stackoverflow.com/questions/37662456/angular-2-output-from-router-outlet>
202. Input 與 Output 應該是父子關係跟路由插頭似乎不能這樣混用，搞了半天沒有進度... <https://lawrencetech.blogspot.com/2017/06/angular-input-or-output.html?m=1>。<https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/StudyProject/Angular%20Basis/todolist1/src/app/home-page/home-page.component.html>
203. 後來躺床一想應該照老模式，不管是靜態還是動態網頁還是 MVC 記得這種功能都是藉由網址帶參數過去才對，所以參考這篇 -> <https://medium.com/chikuwa-tech-study/angular-%E7%AC%AC9%E8%AA%B2-%E8%B7%AF%E7%94%B1%E6%94%9C%E5%B8%B6%E5%8F%83%E6%95%B8-39a4d4f05448>
204. layout form 與 submit 分開 <https://jiepeng.me/2018/03/05/submit-form-using-outside-form-tag>
205. 版型大致完成接著先完成 Creat 在完成 Update 涉及 api 轉至 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>
206. 這邊涉及 cleditor, FormBuilder Module 混合使用，特別標註 Program sequence run 因為必須動態將 formControlName 屬性塞至 cleditor 渲染後內部的 textarea <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Website_Background/ClientApp/src/app/home/posts/posts.component.ts>
207. 成功塞 formControlName 至 textarea ，但遇到一個問題是 cleditor 內容居然在另一個 div cl-content 內，且是 innerHTML 方式存在。
208. 改為 $('.cl-content').innerText ; 與 $('.cl-content').innerHTML; 都是必要欄位 可能 display none 一個 div input 傳送至 api 。
209. Property 'innerText' does not exist on type 'Element'. <https://stackoverflow.com/questions/57551589/property-innertext-does-not-exist-on-type-element> 。 <https://stackoverflow.com/questions/17896746/document-getelementsbyclassname-innerhtml-always-returns-undefined>
210. update creatat -> <https://gogo1119.pixnet.net/blog/post/28140411>
211. 要初始化 update 介面的 form value ... 生命週期不清楚很麻煩，看起來是初始化後才呼叫 api ...，半夜了明日在解決...
212. 整個 ts 似乎都是非同步(異步)的，service 還沒 response 時 client formgroup 就已經渲染完成 ...
213. 但 rxjs 還沒搞懂 ... 只好降慢 client render 時間 ...這樣後續肯定會有弊端的，畢竟無法預測 request 的 db 查詢時間...
214. 解決了，但是 cleditor 的值好像還是要用 jQ 塞值解決 -> 當 Form 的結構確定下來後，剩下的就是將值放進去，所以會是這樣子處裡 this.form.setValue(value); kevin... <https://forum.angular.tw/t/topic/1764/2>
215. 最後遇到一點小問題也解決了，總結
216. 整體為了初學體驗此架構寫程式與考慮時程問題，程式碼架構較亂且也無考慮資安問題，但最後基本後台 crud 功能完成，接著靠此後台整理景觀建築設計專案文章，接著就進入最後前台 AJAX 顯示畫面了，弄完此架構會再回去整理履歷，就可以開始面試了預計是下個禮拜。
217. 先確定那些頁面哪些內容需要用到 API 資料，大概是什麼類型，才能確定如何整理景觀建築設計資料。 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Site_Reception>
