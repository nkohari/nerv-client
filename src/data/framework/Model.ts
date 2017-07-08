export abstract class Model {

  id: string;
  created: Date;
  version: number;

  constructor(data: Partial<Model> = {}) {
    this.id = data.id;
    this.created = data.created ? new Date(data.created) : null;
    this.version = data.version;
  }

}
