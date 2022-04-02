#include <stdio.h>

main()
{
  /* Use int for a reason instead of char
  getchar returns a distinctive value when there is no more input,
  a value that can't be confused with any real character.
  This value is called EOF: "end of file"
  - It is a macro within stdio.h
  - The value returned by an I/O function when the End Of File (EOF)
    (or in some cases, an error) is found
    - The actual value doesn't matter as long as it's not the same as any char value
  - On a Mac: ctrl-D
  We must declare c to be a type big enough to hold any value that getchar returns
  We can't use char since c must be big enough to hold EOF in addition to any char.
  */
  int c;

  // getchar() Reads the next input character from a text stream and returns its value
  while ((c = getchar()) != EOF)
  /* By using EOF, we are assured that nothing
  in the program depends on the specific numeric value */
  /* the parentheses around c = getchar() is required
  because != is a higher precedence than = and would execute as:
  c = (getchar() !=EOF)
  */
  {
    // printf(getchar() != EOF); This didn't work to verify EOF is 0 or 1
    // Prints a character each time it is called
    putchar(c);
  };
  printf(EOF); // Output(after ctrl-D): [1]    15646 segmentation fault  ./a.out
}