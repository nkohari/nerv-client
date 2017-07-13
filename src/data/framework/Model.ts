export abstract class Model {

  id: string;
  created: Date;
  updated: Date;
  deleted: Date;
  version: number;

  constructor(data: Partial<Model> = {}) {
    this.id = data.id;
    this.created = data.created ? new Date(data.created) : null;
    this.updated = data.updated ? new Date(data.updated) : null;
    this.deleted = data.deleted ? new Date(data.deleted) : null;
    this.version = data.version;
  }

}
