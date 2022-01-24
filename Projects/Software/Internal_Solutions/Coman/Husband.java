public class Husband {
  String name;
  Attribute[] attributes;
  String[] dutyRequirements;
  String[] characterRequirements;

  
  
  public Husband(String theName, Attribute... theAttributes){
    name = theName;
    attributes = theAttributes;
    String [] dutyRequirements = {
      "Priestly",
      "Organizational",
      "Administrative",
      "Spiritual Leader",
      "Practical Leader",
      "Gifted Manager",
      "Loving counselor",
      "Lead while gaining respect by being a consistent example",
      "Loving soul-mate",
      "Mentor",
      "Friend",
      "Protector",
      "Encourager",
      "Devoted Listener"
    };

    String[] charcterRequirements = {
      "Heart for God",
      "Courage",
      "Conviction",
      "Patience",
      "Devotion",
      "Love",
      "Humility",
      "Determined",
      "Unshakable",
      "Commitment to wife",
      "Commitment to family",
      "Well-ordered priorities",
      "Willingness to sacrifice",
      "Consistent godly faithfulness"
    };
  }
}