abstract class Model {

  id: string;
  created: Date;

  constructor(data: Partial<Model> = {}) {
    this.id = data.id;
    this.created = data.created ? new Date(data.created) : null;
  }

}

export default Model;
