import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: uuid(),
  //   firstName: "Adarsh",
  //   lastName: "Balika",
  //   username: "adarshbalika",
  //   password: "adarshBalika123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  {
    _id:uuid(),
    name:"Bijaylaxmi Behera",
    username:"bijaylaxmi567",
    password:"bijaylaxmi@098",
    followers:[
      {
        _id:uuid(),
        name:"Isabella Anderson",
        username:"isabella",
        avatar:"https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ],
    following:[
      {
      _id:uuid(),
      name:"Sophia Johnson",
      username:"sophia",
      avatar:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
    ],
    avatar:"https://avatars.githubusercontent.com/u/72284560?s=96&v=4",
    cover:"",
    bio:"web developer",
    location:"India",
    website:"https://bijaylaxmi-behera-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:"Scarlett Hill",
    username:"scarlett",
    password:"scarlett",
    followers:[],
    following:[],
    avatar:"https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cover:"",
    bio:"Software developer",
    location:"USA",
    website:"https://scarlett.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:"Aurora Wright",
    username:"aurora",
    password:"aurora",
    followers:[],
    following:[],
    avatar:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cover:"",
    bio:"Poet",
    location:"Europe",
    website:"https://aurora.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:"Lily Baker",
    username:"sunshine",
    password:"lily",
    followers:[],
    following:[],
    avatar:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cover:"",
    bio:"Product Manager",
    location:"India",
    website:"https://lily.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:"Harry Walker",
    username:"harry",
    password:"harry",
    followers:[],
    following:[],
    avatar:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cover:"",
    bio:"Photographer",
    location:"India",
    website:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:"John Doe",
    username:"john",
    password:"john",
    followers:[],
    following:[],
    avatar:"https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cover:"",
    bio:"Software developer",
    location:"USA",
    website:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
