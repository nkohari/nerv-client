abstract class Model {

  id: string;
  created: Date;

  constructor(data: any = {}) {
    this.id = data.id;
    this.created = data.created ? new Date(data.created) : null;
  }

}

export default Model;
