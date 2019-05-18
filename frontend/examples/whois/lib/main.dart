import 'package:flutter_web/material.dart';
// import 'dart:io';
// import 'dart:convert';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Whois',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(title: 'Whois'),
      debugShowCheckedModeBanner: false,
    );
  }
}

class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _domainName = "";
  bool _isButtonEnabled = true;
  String _data = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: <Widget>[
          Center(
            child: Padding(
              padding: EdgeInsets.all(16),
              child: TextField(
                decoration: new InputDecoration.collapsed(
                  hintText: 'Доменное имя',
                  enabled: _isButtonEnabled
                ),
                onChanged: (newName) => _domainName = newName,
              ),
            ),
          ),
          Center(
            child: RaisedButton(
              child: Text('Найти'),
              onPressed: () {
                setState(() { _isButtonEnabled = false; });

                _loadData();
              },
            ),
          ),
          Center(
            child: Text(_data),
          ),
        ],
      ),
    );  
  }

  Future<void> _loadData() async {
    setState(() => _data = "");

    Map<String, String> bodyJsonMap = {
      'domain_name': _domainName,
    };

    /*HttpClient()
        .postUrl(Uri.parse('http://localhost/backend.php'))
        .then((request) => request.close())
        .then((response) => response.transform(Utf8Decoder()).listen(
              (information) => {
                    setState(() {
                      _data = information;
                      _isLoading = false;
                    })
                  },
            ));*/
  }
}
