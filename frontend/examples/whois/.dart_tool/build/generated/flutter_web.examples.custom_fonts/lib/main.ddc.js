define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/http/http', 'packages/http/src/base_client'], function(dart_sdk, material, animation, http, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__text_field = material.src__material__text_field;
  const src__material__input_decorator = material.src__material__input_decorator;
  const src__material__raised_button = material.src__material__raised_button;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__binding = animation.src__widgets__binding;
  const http$ = http.http;
  const src__response = base_client.src__response;
  const main = Object.create(dart.library);
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ResponseToNull = () => (ResponseToNull = dart.constFn(dart.fnType(core.Null, [src__response.Response])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({title: "Whois", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue}), home: new main.HomePage.new({title: "Whois", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 22, name: "title"})))], src__widgets__widget_inspector._Location))})))}), debugShowCheckedModeBanner: false, $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "theme"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "home"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "debugShowCheckedModeBanner"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.HomePage = class HomePage extends src__widgets__framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._HomePageState.new();
    }
  };
  (main.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.HomePage.prototype;
  dart.addTypeTests(main.HomePage);
  const title$ = Symbol("HomePage.title");
  dart.setMethodSignature(main.HomePage, () => ({
    __proto__: dart.getMethods(main.HomePage.__proto__),
    createState: dart.fnType(main._HomePageState, [])
  }));
  dart.setFieldSignature(main.HomePage, () => ({
    __proto__: dart.getFields(main.HomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _domainName = dart.privateName(main, "_domainName");
  const _data = dart.privateName(main, "_data");
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  const _loadData = dart.privateName(main, "_loadData");
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  main._HomePageState = class _HomePageState extends src__widgets__framework.State$(main.HomePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 16, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 28, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 15, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 9, name: "title"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Center.new({child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.all(16.0), child: new src__material__text_field.TextField.new({decoration: new src__material__input_decorator.InputDecoration.collapsed({hintText: "Доменное имя"}), onChanged: dart.fn(newName => this[_domainName] = newName, StringToString()), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 17, name: "decoration"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 17, name: "onChanged"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 20, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, name: "padding"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Center.new({child: new src__material__raised_button.RaisedButton.new({child: new src__widgets__text.Text.new("Найти", {$creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 27, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => this[_loadData](), VoidToFutureOfvoid()), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 20, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 15, name: "child"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Center.new({child: new src__widgets__text.Text.new(this[_data], {$creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 20, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 11, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "appBar"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_loadData]() {
      return async.async(dart.void, (function* _loadData() {
        this.setState(dart.fn(() => this[_data] = "", VoidToString()));
        let bodyJsonMap = new (IdentityMapOfString$String()).from(["domain_name", this[_domainName]]);
        return yield http$.post(core.Uri.encodeFull("http://localhost/backend.php"), {body: bodyJsonMap, headers: new (IdentityMapOfString$String()).from(["Accept", "application/json"])}).then(dart.void, dart.fn(response => {
          this.setState(dart.fn(() => this[_data] = response.body, VoidToString()));
        }, ResponseToNull()));
      }).bind(this));
    }
  };
  (main._HomePageState.new = function() {
    this[_domainName] = "";
    this[_data] = "";
    main._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._HomePageState.prototype;
  dart.addTypeTests(main._HomePageState);
  dart.setMethodSignature(main._HomePageState, () => ({
    __proto__: dart.getMethods(main._HomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_loadData]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setFieldSignature(main._HomePageState, () => ({
    __proto__: dart.getFields(main._HomePageState.__proto__),
    [_domainName]: dart.fieldType(core.String),
    [_data]: dart.fieldType(core.String)
  }));
  let const$48;
  let const$49;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 4, column: 23, file: "org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart", parameterLocations: const$48 || (const$48 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/flutter_web.examples.custom_fonts/main", {
    "package:flutter_web.examples.custom_fonts/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.custom_fonts/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,gDACE,gBACA,wDACiB,2CAElB,8BAAgB,+eACM;IAEhC;;;;;;EACF;;;;;;;IAKe;;;;;;;AAGmB;IAAgB;;;QALlC;QAAU;;;AAAU,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAavB;AACxB,YAAO,mDACG,8CACC,gCAAK,AAAO,w7BAEf,8CACc,sBAChB,2CACS,8CACe,8CAAI,cACjB,yDACW,wEACJ,6BAED,QAAC,WAAY,oBAAc,OAAO,kpDAInD,2CACS,0DACE,gCAAK,seACD,cAAM,glCAGrB,2CACS,gCAAK;IAKtB;;AAEsB;QACpB,cAAS,cAAM,cAAQ;AAEH,0BAAc,yCAChC,eAAe;AAGjB,cAAO,OAAM,AAIT,WAHI,oBAAW,wCACT,WAAW,WACR,yCAAC,UAAS,uCACd,QAAC;UACR,cAAS,cAAM,cAAQ,AAAS,QAAD;;MAEnC;;;;IAlDO,oBAAc;IACd,cAAQ;;;EAkDjB;;;;;;;;;;;;;;;AA7Ee,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
