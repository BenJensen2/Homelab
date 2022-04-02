#include <stdio.h>

// Every program must have a main function
main()
{
#define LOWER 0
#define UPPER 300
#define STEP 20
/* The #define creates a macro, 
which is the association of an identifier or 
parameterized identifier with a token string. 
After the macro is defined, 
the compiler can substitute the token string 
for each occurrence of the identifier in the source file.*/

/* Can change the #define name within the program
#define name replacement text */

  printf("Temp Chart\n");
  printf("F\tC\n\n");
  int fahr;

// For loop stepping through the values for conversion
  for (fahr = LOWER; fahr <= UPPER; fahr = fahr + STEP)
  /* Prints a formatted output with 3 space decimal 
  and a float variable with 6 spaces in front and 
  1 behind the decimal point.*/
    printf("%3d %6.1f\n", fahr, (5.0 / 9.0) * (fahr - 32));
}

// clang