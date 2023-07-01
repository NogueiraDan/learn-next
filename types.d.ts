type User = {
  id: Number;
  name: string;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: String;
      lng: String;
    };
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
