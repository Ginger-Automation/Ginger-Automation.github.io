rh._.exports({"0":["Web (Safari Browser) Testing on Real Device Setup"],"1":["Mobile Agent"],"2":["\n  ","\n  ","If you’re interested in automating your web app in Mobile Safari on iOS Appium can help you. Basically, you write a normal WebDriver test, and use Appium as the Selenium server with a special set of desired capabilities.","\n  ","\n          Appium use the SafariLauncher App to launch Safari and run tests against mobile Safari. Once Safari has been launched the Remote Debugger automatically connects using the ios-webkit-debug-proxy. ","\n         "," Prerequisites:","\n           • iOS Development account with iOS App Development & Distribution certificates","\n           • ios-webkit-debug-proxy installed on the Appium server machine (see below)","\n  ","              ","Install iOS Web Proxy","\n  ","                    a. Go to the Mac main menu bar -> “Utilities” -> “Terminal” ","\n  ","                    b. ","Type and run below command:","\n  ","            brew install ios-webkit-debug-proxy","\n  ","\n    ","Make sure installation ended successfully","\n    ","More details on iOS Web Proxy can be found in:","\n  ","\n  ","           ","https://github.com/google/ios-webkit-debug-proxy","\n  ","                         ","http://appium.io/slate/en/master/?ruby#installation","\n           ","\n          ","1. Creating Provisioning Profile for SafariLauncher App","\n  ","\n               Note: New Provisioning Profile is needed only if existing one can’t be used. Usually an existing one can be used and just it list of                      included real devices need to be updated for it.","\n               For creating a new Provisioning Profile:","\n                  a.    Go to https://developer.apple.com/","\n                  b.    Click on Member Center and login using your iOS Developer Account","\n                  c.    Click on Certificates, Identifiers & Profiles","\n                         ","\n  ","\n                 d.    Click on iOS Apps->Certificates","\n                "," e.    Validate your account has a valid iOS Development and iOS Distribution certificates","\n                          ","\n  ","\n                   f.    Create an App ID for SafariLauncher app (if existing one can’t be used):","\n                         I.    Click on Identifiers-> App IDs->Add","\n                                 ","\n  "," ","\n                       II.    Give the App ID some Name to be identified in the App IDs list","\n                      III.    Select Wildcard App ID radio button","\n                      IV.    Set the Bundle ID as “*”","\n                              ","\n                       V.    Click Continue","\n                      VI.    Click Submit","\n                     VII.    Click Done","\n                    VIII.    Validate the new App ID was added to the list","\n                               ","\n  ","\n                 g.    Add your real device to the Devices list (in case it’s not already there):","\n                        I.    Click on Devices-> All->Add","\n                               ","\n  ","\n                       II.    Set the real device Name as it appear in step 2.2","\n                      III.    Set the real device UDID as it appear in step 2.2","\n                              ","\n  ","\n                       IV.    Click on Continue","\n                        V.    Click on Register","\n                       VI.    Validate the device was added to the Devices list","\n  ","          h.    Create Provisioning Profile for the SafariLauncher app (if existing one can’t be used, for editing existing one just select it and click Edit button)","\n                      I.    Click on Provisioning Profile->All->Add","\n                            ","\n  ","\n                     II.    Select Development -> iOS App Development and click Continue","\n                             ","\n  ","\n                    III.    Select the wildcard App ID you created in step 1.f and click Continue","\n                             ","\n  ","\n                     IV.    Select your account iOS Distribution certificate and click Continue","\n                      V.    Select your real device which was added in step 1.g (you can select all devices)","\n                                 "," ","\n  ","\n                     VI.    Give your provisioning profile a Name which will be used to recognize it","\n                               ","\n  ","\n                    VII.    Click on Generate","\n                   VIII.    Click on the Download button for downloading the Provisioning Profile file to your Mac machine (Downloads folder)","\n                     IX.    Click on Done","\n                      X.    Right click on the Provisioning Profile file which is on your Mac and select Open","\n                     XI.    Noting visible supposed to happen","\n                    XII.    Open the Provisioning Profile file in Text editor by","\n                          1. Right click the file and click on Open With->Other…->TextEdit","\n                               ","\n  ","\n                          2.    Search for the TeamIdentifier and UUID (Provisioning Profile ID) keys in the text document","\n                                 ","\n  ","\n                          3.    Save those values for later use","\n  ","\n      ","    2.    Sign and Install SafariLauncher App","\n              a.    Go to the Mac main menu bar Utilities-> Terminal","\n              b.    Type and run below command to get Appium source code:","\n                      git clone https://github.com/appium/appium.git","\n              c.    Validate it ended successfully","\n              d.    Go to Appium source code folder by typing","\n                     cd appium ","\n              e.    Type below command for building and signing SafariLauncher app","\n                     ./reset.sh --ios --real-safari --code-sign <<the_TeamIdentifier_Key_from step_4.2.XII>> --profile <<the_UUID_Key_from         step_4.2.XII>> --verbose","\n                      ","\n  ","\n              f.    Make sure it ended successfully","\n                       ","\n  ","\n              g.    In case running Appium using the Appium.App, need to copy the built & signed SafariLauncher app into it:","\n                    I.    Open “Finder” and go to the appium source files build folder- supposed to be located in “/Users/<<MAC_USER_NAME>>/appium/build”","\n                   II.    Copy “SafariLauncher” folder which in it","\n                         ","\n  ","\n                  III.    Go to the Appium.App “Build” folder by right click on the “Appium” app in “Applications” folder, choose “Show Package                            "," Contents” and go to “/Applications/Appium.app/Contents/Resources/node_modules/appium/build”","\n                        ","   ","\n  ","\n                   IV.    Paste the “SafariLauncher” folder into it","\n                         ","\n  ","\n      ","  3.  Prepare Appium Server for Web Testing","\n  ","\n               To allow Web (Safari) testing’s, the ios-web-proxy need to run for the specific tested real device in parallel to Appium server:","\n                  a.    Go to the Mac main menu bar Utilities-> Terminal","\n                  b.    Type and run below command to run ios-webkit-debug-proxy:","\n                          ios_webkit_debug_proxy –c <<REAL_DEVICE_UDID_founded in step 2.2>>:27753 –d","\n                          ","\n                  c.    Validate no error showing","\n                  d.    Leave the Terminal window open- ios-webkit-debug-proxy is running!","\n                  e.    Launch Appium server according to steps in section 1.3","\n  "," ","\n  ","   4.  Launch and Test Safari Browser Using Ginger","\n                  a.    Launch Ginger (on the Windows machine which is in the same network like the Appium Mac machine)","\n                  b.    Create Business Flow with the Mobile platform","\n                  c.    Add new Agent, give it logical name and select the MobileAppiumIOSBrowser driver","\n                          ","\n                  d.    Define the Agent Driver Configurations as follow:","\n                      1.    StartAppiumServerAutomatically – “false” or “true” if you want Ginger to start Appium server automatically.","\n                      2.     AppiumServerIP – set IP value for Appium server.","\n                      3.    AppiumServerPort – Set specific port or “dynamic” if you wish Ginger to allocate free port for appium server.","\n                      4.    AppiumInstallationFolderPath - if StartAppiumServerAutomatically is set to “true” - insert your Appium installation folder path here.","\n                      5.    AppiumServer – is Deprecated – keep empty and use AppiumServerIP and AppiumServerPort instead.","\n                      6.    DeviceName: Any Device name","\n                      7.    DevicePlatformVersion: Real device platform version ","\n                      8.    DeviceID: the device ID you found in \"Mobile iOS Testing  Device Setup\" file","\n                      9.    In case the tested app is installed on the device:","\n                          InstalledAppPackage: The tested app Package found in step 1.d of \"Native/Hybrid App Testing on Real Device Setup\" file","\n                          InstalledAppActivity: The tested app Package found in step 1.d ","of \"Native/Hybrid App Testing on Real Device Setup\" file","\n                          Else, in case using the tested app APK file:","\n                          AppInstallerPath: The full path to the tested app APK file on the Appium server machine.","\n                            ","\n  ","\n                  e.    Save the Agent settings","\n                  f.    Select the Business Flow created in step b and shift to the Automate tab","\n                  g.    Select the Agent created in step c from the Agents selection in the ribbon","\n                  h.    Click on Launch Agent","\n                  i.    If you choose to start Appium Manually: Make sure that the connection request got to the Appium server, you supposed to see                         ","something like this in screen shot below","\n                       ","\n                  j.    Once the connection establish the Safari app supposed to be launched on the tested device and the Appium Mobile Driver                                ","Window supposed to appear on Ginger and allow you to execute Selenium Web Driver actions on it","\n  ","                  ","\n  ","                    ","\n\n"],"3":["Web (Safari Browser) Testing on Real Device Setup"],"id":"113"})