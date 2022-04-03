#include <stdio.h>
/* Count lines in input */
main()
{
  int c, n1, t1, b1;

  n1 = 0;
  while ((c = getchar()) != EOF)
    if (c == '\b')
      ++b1;
    else if (c == '\t')
      ++t1;
    else if (c == '\n')
      ++n1;
  printf("%d,%d,%d\n", b1, t1, n1);
}