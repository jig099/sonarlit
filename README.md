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

# Basic rules of pulling/commiting/pushing
1. The CL makes a minimal change that addresses just one thing. This is usually just one part of a feature, rather than a whole feature at once.(https://google.github.io/eng-practices/review/developer/small-cls.html)
2. Pull request is required for each push - code review guide(https://google.github.io/eng-practices/review/reviewer/)
3. Make sure to pull master branch at least once a day/before adding new codes
4. Make sure that the commit lines meets the following requirements:
   1. First line:
    1.Short summary of what is being done.
    2.Complete sentence, written as though it was an order.
      Follow by empty line.
   2. Body: 
    1. How the problem is solved
    2. pros/cons of the approach
    
# Pipeline
Do we have a working pipeline? i.e. on every pull request, is the pipeline running?
Does our pipeline have these bare minimum steps?
Linter / Style Guide enforcer
Test Coverage checker (eg. CodeClimate)
Code Quality checker (eg. GoReport)
Unit Tests Harness
End-To-End / Integration test harness
Is there an easy way to fire off the pipeline/ is there a local version of the pipeline?

## Linter / Style Guide Enforcer

### Definition 

> Lint, or a linter, is a tool that analyzes source code to flag programming errors, buys, stylistic errors, and suspicious constructs
[https://en.wikipedia.org/wiki/Lint_(software)]

Think of it as the grammarly of coding, or the familar red squiggly line in your code that drives you crazy.  

### Functionalities

1. Static Analysis - Run through your source code without actually executing them
2. Code Standardizing - Enforce a particular style guide
3. Security Issues - Find potential security issues

### How to Use

You can configure TONS of rules for your team's liking. A catalog of rules is listed here[https://eslint.org/docs/rules/]. 


# Testing
Are coders writing tests?
Is the testing team writing tests independent of the coders as well?

# External documentations
A website that communicates/advertises Sonarlit(url:...)

# Internal documentations
1. Contribution guide (https://reactjs.org/docs/implementation-notes.html)
2. Design desicion (https://reactjs.org/docs/design-principles.html)
3. Codebase tour guide (https://reactjs.org/docs/codebase-overview.html)

