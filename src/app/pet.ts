export interface Pet {
  id: number;
  category: string;
  info: Info;
  status: string;
  zip: number;
  contact: Contact;
}
export interface Info {
  name: string;
  photoUrls?: (string)[] | null;
  tags?: (TagsEntity)[] | null;
}
export interface TagsEntity {
  key?: string | null;
  value?: string | null;
}
export interface Contact {
  phone: string;
  email: string;
  address: string;
}




/*
  {
    "category": "cat",
    "info": {
      "name": "Marbles",
      "photoUrls": [
        "todo"
      ],
      "tags": [
        {
          "description": "Domestic Short Hair"
        },
        {
          "health": "Vaccinations up to date, spayed \/ neutered."
        },
        {
          "good in home with": "other cats"
        },
        {
          "age": "young"
        },
        {
          "sex": "female"
        }
      ]
    },
    "status": "available",
    "zip": 19702,
    "contact": {
      "phone": "895-514-0673",
      "email": "hwimsett9@wordpress.com",
      "address": "36399 Cody Court"
    }
  }
  */
