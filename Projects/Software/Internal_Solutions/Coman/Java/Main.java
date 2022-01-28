import java.util.*;

public class Main {

  static void printString(String message) {
    System.out.println(message);
  }

  static void printBoolean(boolean message) {
    System.out.println(message);
  }

  static void printObject(Object message) {
    System.out.println(message);
  }

  static void printDefinition(Definition definition) {
    printString(definition.name);
    printString(definition.source.name);
    printString(definition.original);
    printString(definition.partOfSpeech);
    printString(definition.transliteration);
    printString(definition.phoneticSpelling);
    printString(definition.definition);
  }

  static boolean checkFamilySuccess(Person person) {
    if (person.attributes[0].name == "Spiritual Leader") {
      return true;
    } else if (person.attributes[0].name != "Spiritual Leader") {
      return false;
    } else
      return false;
  }

  static void creation() {
    printString("In the begining");
    printString("God created: ");
    Heaven theHeavens = new Heaven();
    printString("The heavens");
    Earth theEarth = new Earth();
    printString("and the earth");
    printString("The earth was without form");
    printString("and void");
    printString("darkness was over the face of the deep");
    printString("and the Spirit of God was hovering over the face of the waters");
    printString("and God said: 'Let there be light'");
    Light light = new Light();
    printString("and there was light");
  }

  static Map createDefinitions() {

    // Initialize Variables
    Map<String, Definition> references = new HashMap<String, Definition>();

    // Creates all the sources used
    Source strongsHebrew = new Source();
    Source strongsGreek = new Source();
    Source bible = new Source();
    Source websters = new Source();

    // Define words
    Definition beginning = new Definition("beginning");
    beginning.source = strongsHebrew;
    beginning.original = "רֵאשִׁית";
    beginning.partOfSpeech = "Noun Feminine";
    beginning.transliteration = "reshith";
    beginning.phoneticSpelling = "ray-sheeth'";
    beginning.definition = "beginning, chief";

    Definition logos = new Definition("logos");
    // System.out.println(logos.getClass().getField("name"));
    logos.source = strongsGreek;
    logos.original = "λόγος, ου, ὁ";
    logos.partOfSpeech = "Noun, Masculine";
    logos.transliteration = "logos";

    // Set references
    references.put("beginning", beginning);
    references.put("logos", logos);

    return references;
  }

  static void inTheBeginning() {
    printString("In the beginning");
    printString("was the word");
    printString("and the word was with God");
    printString("and the word was God");
    printString("He was in the begining with God");

  }

  public static void main(String[] args) {
    Map definitions = createDefinitions();
    // Definition logos = definitions.get("logos");
    printObject(definitions.get("logos"));
    // printString(definitions.get("logos").getClass().);

    // God existed
    God Elohim = new God("Elohim");
    Spirit RuahElohim = new Spirit("RuahElohim");
    Word Logos = new Word("Logos");
    Logos.definition = definitions.get("logos");
    Logos.greekDefinition = definitions.get("logos");
    // printObject(Logos.definition);
    // printString(Logos.definition.getClass());
    // System.out.println(Logos.definition);
    Word Beginning = new Word("Beginning");

    // In the beginning
    // inTheBeginning();
    // creation();

    Husband husbandRole = new Husband();

    // Attributes
    // Attribute spiritualLeader = new Attribute("Spiritual Leader");

    // Create Ben
    Person ben = new Person();
    ben.firstName = "Ben";
    ben.lastName = "Jensen";

    // ben.attributes = new Attribute[] {spiritualLeader};
    printString("Ben's family will succeed: ");
    // printBoolean(checkFamilySuccess(ben));

    // Create Current Life, Society, World
    Life currentLife = new Life();
    currentLife.characteristics = new String[] { "busier than ever before", "more fast paced than ever before" };
    Society currentSociety = new Society();
    currentSociety.characteristics = new String[] { "Being torn apart", "Anti-family forces" };
    World currentWorld = new World();
    currentWorld.life = currentLife;
    currentWorld.society = currentSociety;
    currentWorld.attacks = new String[] { "Distractions", "Temptations" };

    // Standard of Godliness
    Standard standardOfGodliness = new Standard();
    standardOfGodliness.charecteristics = new String[] { "Thoroughly Biblical", "Intensely practical",
        "Truly spiritual" };

    // Stuart Scott
    // - Basics
    Person stuartScott = new Person();
    stuartScott.firstName = "Stuart";
    stuartScott.lastName = "Scott";
    stuartScott.title = "Doctor";
    stuartScott.titleAbbreviated = "Dr.";

    // Role husband =

    // - Characteristics
    // stuartScott.qualities = new String[] {"Passion","Insight","Godly
    // Man","Committed"};

    // Roles
    // Role.Husband stuart = new Role.Husband("Stuart", stuartScott.qualities);
    stuartScott.roles = new Object[] {};

    // Institutions
    Institution mastersUniversity = new Institution();
    mastersUniversity.name = "The Master's University";

  }
}