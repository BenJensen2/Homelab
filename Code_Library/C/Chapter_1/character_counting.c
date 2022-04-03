#include <stdio.h>
/* Counts number of characters in input */
main()
{
  double nc;

  nc = 0;
  for (nc = 0; getchar() != EOF; ++nc)
    // The body is empty
    ; // Separate line to make it visible
  // increment nc by 1 each time
  // Can be prefix (++nc) or postfix (nc++)
  printf("%.0f\n", nc);
}