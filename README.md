# sonarlit
website analytics tool 
#Stock Structure
The Root: The root should be reserved for configuration files, documentation (such as README.md and others). Also, it can contain VS solution files and git files.  
/src: We all know this one. This is where all source files are placed. However, in languages that use headers (or if you have a framework for your application) don't put those files in here.  
/lib, /dep, /inc etc.: This is the directory where all your dependencies should be stored. Also, if you have your project in multiple files, put your headers and attached source in here.  
/doc: Documentation goes in here. For example, docs.md.  
/res: A less common one. For all static resources in your project. For example, images and audio.  
/tools, /scripts: Convenience directory for your use. Should contain scripts to automate tasks in the project, for example, build scripts, rename scripts. Usually contains .sh, .cmd files for example.  
/build: The place where your built files will go. Usually split into two directories, Debug and Release, it can contain binaries, .DLLs and any compiled files. It may also contain build scripts, like makefiles, but they should generally be in the root.  
/test: Contains unit tests... no, in fact, all tests!  

# Basic rules:
1. push no more than 100 lines per time 
2. pull request is required for each push
