// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This serves the same purpose as GeneratedPluginRegistrant in an iOS
// Flutter project. However, since there is no tooling support for plugins
// yet, adding a new plugin requires manually adding plugin registration.

#import "PluginRegistrant.h"

#import <FlutterEmbedderColorPanel/FlutterEmbedderColorPanel.h>
#import <FlutterEmbedderFileChooser/FlutterEmbedderFileChooser.h>
#import <FlutterEmbedderMenubar/FlutterEmbedderMenubar.h>
#import <FlutterEmbedderWindowSize/FlutterEmbedderWindowSize.h>

@implementation PluginRegistrant

+ (void)registerWithRegistry:(NSObject<FLEPluginRegistry>*)registry {
  [FLEColorPanelPlugin registerWithRegistrar:[registry registrarForPlugin:@"FLEColorPanelPlugin"]];
  [FLEFileChooserPlugin registerWithRegistrar:[registry registrarForPlugin:@"FLEFileChooserPlugin"]];
  [FLEMenubarPlugin registerWithRegistrar:[registry registrarForPlugin:@"FLEMenubarPlugin"]];
  [FLEWindowSizePlugin registerWithRegistrar:[registry registrarForPlugin:@"FLEWindowSizePlugin"]];
}

@end