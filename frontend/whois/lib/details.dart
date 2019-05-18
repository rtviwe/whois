import 'package:flutter/material.dart';

class DetailsPage extends StatefulWidget {
  DetailsPage({Key key, this.domainName}) : super(key: key);

  final String domainName;

  @override
  State<StatefulWidget> createState() => _DetailsPageState();
}

class _DetailsPageState extends State<DetailsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
