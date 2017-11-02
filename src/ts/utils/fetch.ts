import Handlebars from 'handlebars';

interface IContentElement {
  [key: string]: string;
}

interface IContent {
  en: IContentElement;
  bg?: IContentElement;
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

  private get(name: string, type: string, extension: string): Promise<any> {
    const path = `/resources/${type}/${name}.${extension}`;
    return new Promise((resolve, reject) => {
      if (type === 'templates' && this.templateRegistry[name]) {
        return resolve(this.templateRegistry[name]);
      }
      if (type === 'content' && this.contentRegistry[name]) {
        return resolve(this.contentRegistry[name]);
      }
      $.get(path, (data: any) => {
        resolve(data);
      });
    });
  }

  public template(name: string): Promise<HandlebarsTemplateDelegate> {
    return this.get(name, 'templates', 'hbs')
      .then((template) => {
        if (!this.templateRegistry[name]) {
          this.templateRegistry[name];
        }
        return Handlebars.compile(template);
      });
  }

  public content(name: string): Promise<IContent> {
    return this.get(name, 'content', 'json');
  }
}

export { Fetch };
