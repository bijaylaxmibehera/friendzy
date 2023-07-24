import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
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
    _id: 'bccae612-477d-425a-ad91-c6f2e272b6b4',
    firstName: 'Bijaylaxmi',
    lastName: 'Behera',
    username: 'bijaylaxmi567',
    password: 'bijaylaxmi@098',
    website: 'https://bijaylaxmi-behera-portfolio.netlify.app/',
    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/bijaylaxmi.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/bijaylaxmi.jpg',
    bio: 'web developer',
    location: 'India',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Sophia',
        lastName: 'Johnson',
        username: 'sophia',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/sophia.jpg'
      }
    ],
    bookmark: []
  },
  {
    _id: '25b84284-e623-403f-b6d4-baad482df4dd',
    firstName: 'Scarlett',
    lastName: 'Hill',
    username: 'scarlett',
    password: 'scarlett',
    website: 'https://scarlett.netlify.app/',
    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/Scarlett.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/Scarlett.jpg',
    bio: 'Software developer',
    location: 'USA',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    bookmark: []
  },
  {
    _id: '70fbd7c8-33f9-478e-9c38-4a285a430321',
    firstName: 'Aurora',
    lastName: 'Wright',
    username: 'aurora',
    password: 'aurora',
    website: 'https://aurora.netlify.app/',
    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/aurora.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/aurora.jpg',
    bio: 'Poet',
    location: 'Europe',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    bookmark: []
  },
  {
    _id: '578092d3-745a-43ac-839a-1146d237174b',
    firstName: 'Lily',
    lastName: 'Baker',
    username: 'sunshine',
    password: 'lily',
    website: 'https://lily.netlify.app/',
    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/lily.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/lily.jpg',
    bio: 'Product Manager',
    location: 'India',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    bookmark: []
  },
  {
    _id: 'aeea02dd-d966-4c51-a2de-54d94ad0d2a5',
    firstName: 'Harry',
    lastName: 'Walker',
    username: 'harry',
    password: 'harry',
    website: '',

    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/harry.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/harry.jpg',
    bio: 'Photographer',
    location: 'India',

    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    bookmark: []
  },
  {
    _id: '8c86e34b-87a5-4198-8efd-2f7da11040ea',
    firstName: 'John',
    lastName: 'Doe',
    username: 'john',
    password: 'john',
    website: '',
    profileAvatar:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/john.jpg',
    cover:
      'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/john.jpg',
    bio: 'Software developer',
    location: 'USA',

    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    following: [
      {
        _id: uuid(),
        firstName: 'Isabella',
        lastName: 'Anderson',
        username: 'isabella',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/isabella.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Subhalaxmi',
        lastName: 'Behera',
        username: 'subhalaxmi',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
      },
      {
        _id: uuid(),
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar:
          'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
      }
    ],
    bookmark: []
  }
]
