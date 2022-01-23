public class Fruit {
  String name;
  Definition[] definitions;
  String[] synonyms;

  public Fruit(String fruitName, Definition... fruitDefinitions) {
    name = fruitName;
    definitions = fruitDefinitions;
  }
}
