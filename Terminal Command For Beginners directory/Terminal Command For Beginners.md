# Terminal Command For Beginners

Especially thanks to **Brad Traversy**

## Basic command

- keyboard shortcut
  - `Ctrl + Alt + T` : open a terminal in Linux
  - `Up Arrow`: Will show your last command
  - `Down Arrow`: Will show your next command
  - `Tab`: Will auto-complete your command
  - `Ctrl + L`: Will clear the screen
  - `Ctrl + C`: Will cancel a command
  - `Ctrl + R`: Will search for a command
  - `Ctrl + D`: `exit` Will exit the terminal
- manual command
  - For max or Linux user :
    `man ls`
  - For Windows users
    `ls --help`
  - You should be able to use the arrow keys or page up and down. When you are ready to exit, just press `q`.
- logged in user
  `whoami`
- date command
  `date`
- Get my working directory
  `pwd`
  `~` : this symbol represents the home directory
- File System Navigation
  | **Command** | **Description** |
  | ----------------------------------- | --------------------------------------------------------------------------------- |
  | pwd | Lists the path to the working directory |
  | ls | List directory contents |
  | ls -a | List contents including hidden files (Files that begin with a dot) |
  | ls -l | List contents with more info including permissions (long listing) |
  | ls -r | List contents reverse order |
  | cd [dirname] | Change directory to specific directory |
  | cd | Change directory to home |
  | cd ~ | Change to home directory |
  | cd .. | Change to parent or back directory |
  | cd / | Change to root directory |
  | cd - | Change to previous directory (which could be different than the parent of course) |
  | find [dirtosearch] -name [filename] | Find location of a program |
  I could do `ls -l -a` and even shorten it to `ls -la`.
- Opening a Folder or File on the GUI
  - Mac - `open [dirname]`
  - Windows - `start [dirname]`
  - Linux - `xdg-open [dirname]` or `open [dirname]`
  - You can open folders, files and even URLs
    `open https://youtube.com`
- Modifying Files & Directories
  | **Command** | **Description** |
  | --------------------------- | --------------------------------------------------- |
  | mkdir [dirname] | Make directory |
  | touch [filename] | Create file |
  | rm [filename] | Remove file |
  | rm -i [filename] | Remove directory, but ask before |
  | rm -r [dirname] | Remove directory |
  | rm -rf [dirname] | Remove directory with contents |
  | rm ./\* | Remove everything in the current folder |
  | cp [filename] [dirname] | Copy file |
  | mv [filename] [dirname] | Move file |
  | mv [dirname] [dirname] | Move directory |
  | mv [filename] [filename] | Rename file or folder |
  | mv [filename] [filename] -v | Rename Verbose - print source/destination directory |
  If you delete by the terminal, don't store it in the trash folder
  example: `touch text1.txt text2.txt`
  We can also do multiple commands at once with the `&&` operator:
  `cd test2 && mkdir test3`
- The cat (concatenate) Command
  - view the contents of a single file
    `cat [filename]`
  - view the contents of multiple files
    `cat [filename] [filename]`
  - Create a file with content
    `cat > sumon.txt` new text
    `cat >> sumon.txt` append to new text
  - open content with line number
    `cat -n [filename]`
- The head and tail Commands
  By default, it outputs the **first** 10 lines of each file.
  `head [filename]`
  You can also specify the number of lines to output:
  `head -n 5 [filename]`
  By default, it outputs the **last** 10 lines of each file.
  `tail [filename]`
  You can also specify the number of lines to output:
  `tail -n 5 [filename]`
- The nano text editor
  Open an existing file to edit or create a new file
  `nano [filename]`
  When you're ready to exit, just hit `Ctrl + X` and then `Y` to save and `N` to not save.
- The echo Command
  - The `echo` The command is used to display messages or to create and write to files. It is similar to the `cat` command, but it is used to display a single line of text.
    `echo "Hello World"`
  - You can also use it to create a file:
    `echo "Hello World" > [filename]`
  - You can also append to a file:
    `echo "Hello World" >> [filename]`
- The grep Command
  The `grep` The command is used to search for a text pattern in a file. It is very powerful and can be used to search for a string or regular expression in a file or set of files.
  `grep [searchterm] [filename]`
  You can also search for a string in multiple files:
  `grep [searchterm] [filename] [filename]`
  There are a lot more things that you can do with the `grep` command, but it's a but more advanced.
- The find command
  The `find` command is extremely powerful and is used to find the location of files and directories based on conditions that you specify.
  To start off by creating something to work with. Let's create 100 files in the current directory. This is one of those things that I talked about earlier where you can do certain things much faster than you could in the GUI. We already know that the `touch` command will create a file. It can also be used to create multiple files.
  `touch file-{001..100}.txt`
  Now we have 100 .txt files in the current directory. Something that would have taken a lot longer to do in the GUI.
  Let's do something very simple and find a specific file. The format looks like this:
  `find [dirname] -name [filename]`
  Let's find the file called `file-001.txt`:
  `find . -name "file-001.txt"`
  This will look in the current directory, which is represented with a dot.
  We can look in other directories as well. Let's create a file in our home folder called test.txt

  ```
    touch ~/test.txt

  ```

  To find that file:
  `find ~/ -name "test.txt"`
  We can look for files that match a certain pattern as well. Let's find all files that start with `file-`:
  `find . -name "file-*"`
  We can search for files that are empty:
  `find . -empty`
  Let's append some text to the file `file-002.txt`. We could use the `cat` command, like I showed you earlier, but we can also use the `echo` command:
  `echo "Hello World" >> file-002.txt`
  Now if we find the empty files again, we will see that `file-002.txt` is no longer empty:
  `find . -empty`
  We can remove all of the files that we created with this command:
  `find . -name "file-*" -delete
    rm -f file-* # This will also work`
  There is so much more that you can do with the `find` command, but it goes beyond the scope of this tutorial.

- Piping
  Piping is very powerful. It is a way of redirecting standard output to another destination, such as another file. Let's actually use the find command to find a list of files and then pipe them to a new file.
  First, we'll create 10 files:
  `touch file-{001..010}.txt`
  Now, let's pipe the result from our find into a new file named `output.txt`
  `find . -name "file-0*" > output.txt`
  You can see the results now in the new file:
  `cat output.txt`
- Creating a Symlink
  A symlink is a special type of file that points to another file. It is a shortcut to the original file. It is useful when you want to access a file in a different location without having to copy it.
  We can use the `ln` command to create a symlink:
  `ln -s [filename] [symlinkname]`
  You can remove a symlink with the `rm` command:
  `rm [symlinkname]`
  If you're on Windows and you are not using something like Git Bash, you can use the `mklink` command:
  `mklink [symlinkname] [filename]`
- File Compression
  `tar` is a program for concatenating multiple files into one big file called a **tarball** and reversing this process by extracting the files from the tarball.
  | **Command** | **Description** |
  | ------------------------------------ | -------------------------- |
  | tar -czvf [dirname].tar.gz [dirname] | Create tarball |
  | tar -tzvf [dirname] | See what is in the tarball |
  | tar -xzvf [dirname].tar.gz | Extract tarball |
  Note: `tar -xzvf ../folder/file.tar.gz`
  - c : Creates Archive
  - x : Extract the archive
  - f : creates archive with given filename
  - t : displays or lists files in archived file
  - u : archives and adds to an existing archive file
  - v : Displays Verbose Information
  - A : Concatenates the archive files
  - z : zip, tells tar command that creates tar file using gzip
  - j : filter archive tar file using tbzip
  - W : Verify a archive file
  - r : update or add file or directory in already existed .tar file
- The history Command
  - Used to display the history of commands that you have run.
    `history`
  - You can also use the `!` to run a command from the history.
    `!100`
  - This will run the command that is in the 100th position in the history.

## Node package manager (npm)command

- What is npm
 
- What are command-line tools
- Difference between npm vs npx
