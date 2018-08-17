export class Article
{


  constructor(public title: string = 'Ipsum', public paragraphs: string[] = ['snippet']) {
  }

  getSnippet()
  {
    return this.paragraphs[0];
  }

  addParagraph(paragraph: string)
  {
    this.paragraphs.push(paragraph);
  }

  getParagraphs()
  {
    return this.paragraphs;
  }
}
