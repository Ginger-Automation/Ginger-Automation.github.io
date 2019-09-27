rh._.exports({"0":["How to use PACT in Actions?"],"1":["Plugins:PACT Plugin"],"2":["\n  ","\n  ","Add New (Any) Action:","\n          1.    Go to Automate tab","\n          2.    On Actions Grid click on the Plus (+) button","\n          3.    On the Add Action page go to PlugIns Actions tab","\n          4.    Select the desiered action","\n          5.    Click Add Action button","\n                ","\n  ","         ","\n       ","\n       "," 1.    Start Mock Server","\n                  Pre-requisites: ","\n                  Pact PlugIn should be loaded.","\n  ","             ","\n  ","\n                  1.     This action should be used for starting the PACT server in order for it to be ready to get Interactions load.","\n                  2.    Configure free port on the port field.","\n                  3.    If Use Dynamic port is checked, Ginegr will search for a free port on your machine and will use it to start the server.","\n                  4.    Run Action","\n                  5.    When Running the Action – the Mock service is started at: http://localhost:1234 with the port specified.","\n                  6.    On Extra Info Field (Can be seen on the actions grid or from the start server action edit page on another tab) you will find the server location it been started. http://localhost: <<port specified>>","\n  ","  2.    Load Interaction File","\n                  Prerequisites: ","\n                      •    Pact PlugIn loaded","\n                      •    Pact File Created or Imported to the Documents Folder","\n                      •    Pact File Compiled","\n                      •    Pact File Exported to JSON","\n                      •    Pact Server Started","\n                         ","\n  ","            1.    This Action should be used to Load Interaction JSON file in order to fire real API requests against the PACT server.","\n                  2.    Open the Action Edit Page","\n                  3.    Browse for the Exported Json file","\n                  4.    Run Action","\n                      Note: The server should be up and running while executing this action","\n  "," 3.    Clear Interaction","\n                  Pre-requisites: ","\n                      •    Pact PlugIn loaded","\n                      •    Pact File Created or Imported to the Documents Folder","\n                      •    Pact File Compiled","\n                      •    Pact File Exported to JSON","\n                      •    Pact Server Started","\n                      ","\n                  1.    This Action should be used to clean all interaction which been loaded to the pact server","\n                  2.    This action doesn’t required any configuration","\n                  3.    Simply add the action and run it in order to clean all loaded interactions from the server","\n  "," 4.    Stop Mock Server","\n                  Pre-requisites: ","\n                      •    Pact PlugIn loaded","\n                      •    Pact Server Started","\n                      ","\n                  1.    This Action should be used to stop the pact server","\n                  2.    This action doesn’t required any configuration","\n                  3.    Simply add the action and run it in order to stop the Pact server","\n\n"],"3":["How to use PACT in Actions?"],"id":"54"})