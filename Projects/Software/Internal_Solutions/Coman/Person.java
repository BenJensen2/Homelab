import java.security.KeyStore.Entry.Attribute;

public class Person {
  // A Person is a Human
  // Basics
  String firstName;
  String lastName;

  // Work
  String title;
  String titleAbbreviated;
  Education education;
  Job currentJob;

  // Attributes
  Attribute[] attributes;

  // Relationships
  Person spouse;
  Person[] children;

  // Roles
  Object[] roles;
}
