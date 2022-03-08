# stdin, stdout, stderr
Three data streams created when you launch a Linux command.  You can use them to tell if your scripts are being piped or redirected.

A stream is something that can transfer data
- In this case: Text
- Streams join 2 points (Beginning and End)

stdin: Standard input stream
- Accepts text as its input

stdout: Text output from the command to the shell

stderr: Text error messages from the command

### Streams are handled like Files
- Can read from
- Can write text into
- Each file has a unique number to identify it
  - 0: stdin
  - 1: stdout
  - 2: stderr

### Reacting to Pipes (|) and Redirects
- A process does know where the input is coming from and going to

#### References
- [What Are stdin, stdout, and stderr on Linux?](https://www.howtogeek.com/435903/what-are-stdin-stdout-and-stderr-on-linux/)