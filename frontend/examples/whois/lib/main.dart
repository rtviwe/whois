import 'package:flutter_web/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

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
                ),
                onChanged: (newName) => _domainName = newName,
              ),
            ),
          ),
          Center(
            child: RaisedButton(
              child: Text('Найти'),
              onPressed: () => _loadData(),
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
    final bodyJsonBody = jsonEncode(bodyJsonMap);

    return await http.post(
        Uri.encodeFull('http://localhost/backend.php'),
        body: bodyJsonBody,
        headers: {'Content-Type':'application/json'},
      ).then((response) => setState(() {
          final map = jsonDecode(response.body);
          dynamic domainName = map[0]['domain_name'];
          dynamic ip = map[1]['ip'];
          String contacts = map[2]['contacts'];
          contacts.replaceAll("<br>", "");
          _data = "Доменное имя: $domainName\nIP-адрес: $ip\nКонтактные данные\n$contacts";
        })
      );
  }
}
