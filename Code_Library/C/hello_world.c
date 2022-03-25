#include <stdio.h>

// print Fahrenheit-Celsius table for F 0, 20, 300...
main()
{
  printf("hello Ben\n\n");
  printf("F\tC\n\n");
  float fahr, celsius;
  int lower, upper, step;
  #define LOWER = 0; // Lower limit of temp table
  #define UPPER = 300; // Upper limit
  #define STEP = 20; // Step size

  fahr = lower;
  while (fahr <= upper) {
    celsius = 5.0*(fahr-32.0)/9.0;
    printf ("%3.0f %6.1f\n",fahr, celsius);
    fahr = fahr + step;
  }
}

// clang