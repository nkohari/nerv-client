class User {

  id: string;
  username: string;

  constructor(data = <any> {}) {
    this.id = data.id;
    this.username = data.username;
  }

}

export default User;
