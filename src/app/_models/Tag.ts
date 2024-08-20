export class Tag {
  static readonly tagAngular = new Tag('Angular', 'violet');
  static readonly tagCsharp = new Tag('C#', 'purple');
  static readonly tagUnity = new Tag('Unity', 'black');
  static readonly tagPyhton = new Tag('Python', 'blue');
  static readonly tagTypescript = new Tag('TypeScript', 'teal');
  static readonly tagKrita = new Tag('Krita/Photoshop', '#8A2BE2');
  static readonly tagMongoDB = new Tag('MongoDB', 'green');
  static readonly tagRxJS = new Tag('RxJS', 'pink');
  static readonly tagJava = new Tag('Java', 'orange');
  static readonly tagExcel = new Tag('Excel', '#32CD32'); 
  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
