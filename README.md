# Sonarlit
website analytics tool 

# Github Structure
1. The Root: The root should be reserved for configuration files, documentation (such as README.md and others). Also, it can contain VS solution files and git files.  
2. /src: We all know this one. This is where all source files are placed. However, in languages that use headers (or if you have a framework for your application) don't put those files in here.  
3. /lib, /dep, /inc etc.: This is the directory where all your dependencies should be stored. Also, if you have your project in multiple files, put your headers and attached source in here.  
4. /doc: Documentation goes in here. For example, docs.md.  
5. /res: A less common one. For all static resources in your project. For example, images and audio.  
6. /tools, /scripts: Convenience directory for your use. Should contain scripts to automate tasks in the project, for example, build scripts, rename scripts. Usually contains .sh, .cmd files for example.  
/build: The place where your built files will go. Usually split into two directories, Debug and Release, it can contain binaries, .DLLs and any compiled files. It may also contain build scripts, like makefiles, but they should generally be in the root.  
7. /test: Contains unit tests... no, in fact, all tests!  

# Basic rules
1. Push no more than 100 lines to master branch every time (https://google.github.io/eng-practices/review/developer/small-cls.html)
2. Pull request is required for each push - code review guide(https://google.github.io/eng-practices/review/reviewer/)
3. Make sure to pull master branch at least once a day/before adding new codes


# External documentations
A website that communicates/advertises Sonarlit(url:...)

# Internal documentations
