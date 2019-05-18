import 'package:flutter/material.dart';

import 'details.dart';

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
                onChanged: (newName) {
                  _domainName = newName;
                },
              ),
            ),
          ),
          Center(
            child: RaisedButton(
              child: Text('Найти'),
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (BuildContext context) =>
                      DetailsPage(domainName: _domainName),
                ));
              },
            ),
          )
        ],
      ),
    );
  }
}
