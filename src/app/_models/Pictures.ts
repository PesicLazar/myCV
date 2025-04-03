export class Pic{
    static readonly picGraphic = new Pic ('Graphics', '/assets/project_snippets/computer_grafics.png');
    static readonly picMining = new Pic ('Mining', '/assets/project_snippets/mining.png');
    static readonly picAi = new Pic ('AI', '/assets/project_snippets/Ai_finnal.png');
    static readonly picPig = new Pic('Pig Game', '');// Placeholder for a future image
    static readonly picVision = new Pic ('Computer Vision', '/assets/project_snippets/computer_vision.png');


    private constructor(
        private readonly key: string, // Description or name of the image
        public readonly url: string   // URL path to the image
    ){}

    toString() {
        return this.key;
      }
}