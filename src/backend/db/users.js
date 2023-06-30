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
    _id:"bccae612-477d-425a-ad91-c6f2e272b6b4",
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
    _id:"25b84284-e623-403f-b6d4-baad482df4dd",
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
    _id:"70fbd7c8-33f9-478e-9c38-4a285a430321",
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
    _id:"578092d3-745a-43ac-839a-1146d237174b",
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
    _id:"aeea02dd-d966-4c51-a2de-54d94ad0d2a5",
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
    _id:"8c86e34b-87a5-4198-8efd-2f7da11040ea",
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
