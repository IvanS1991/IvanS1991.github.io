import Handlebars from 'handlebars';

interface IContent {
  en: object;
  bg?: object;
}

interface ITemplateRegistry {
  [key: string]: HandlebarsTemplateDelegate;
}

interface IContentRegistry {
  [key: string]: IContent;
}

class Fetch {
  private templateRegistry: ITemplateRegistry;
  private contentRegistry: IContentRegistry;

  constructor() {
    this.templateRegistry = {};
    this.contentRegistry = {};
  }

  private get<T>(name: string, type: string, extension: string): Promise<T> {
    const path = `/resources/${type}/${name}.${extension}`;
    return new Promise((resolve, reject) => {
      $.get(path, (data: T) => {
        resolve(data);
      });
    });
  }

  public template(name: string): Promise<HandlebarsTemplateDelegate> {
    return this.get<HandlebarsTemplateDelegate>(name, 'templates', '.hbs')
      .then((template) => {
        return Handlebars.compile(template);
      });
  }

  public content(name: string): Promise<IContent> {
    return this.get<IContent>(name, 'content', '.json');
  }
}

export { Fetch };
