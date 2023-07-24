// import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // {
  //   _id: uuid(),
  //   content: '',
  //   mediaUrl: '',
  //   altText: '',
  //   likes: {
  //     likeCount: 3,
  //     likedBy: [
  //       {
  //         _id: uuid(),
  //         firstName: '',
  //         lastName: '',
  //         username: '',
  //         profileAvatar: ''
  //       }
  //     ]
  //   },
  //   dislikedBy: [],
  //   username: '',
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   comments: [
  //     {
  //       _id: uuid(),
  //       commentData: '',
  //       firstName: '',
  //       lastName: '',
  //       username: '',
  //       profileAvatar: '',
  //       createdAt: formatDate(),
  //       updatedAt: formatDate()
  //     }
  //   ]
  // },
  {
    _id:"998197f6-0f0a-490f-b10e-b93607e00974",
    content: 'Peacock❤️',
    mediaUrl: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,h_300,w_500/peacock_1.jpg',
    altText: 'peacock',
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id:"4276529e-210a-44bf-a18e-c94f7263ac7e",
          firstName: 'Bijaylaxmi',
          lastName: 'Behera',
          username: 'bijaylaxmi',
          profileAvatar:'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/bijaylaxmi.jpg'
        
        },
        {
          _id:"20957116-42e9-49d7-9112-9cd547addbba",
          firstName:'Subhalaxmi',
          lastName:'Behera',
          username:'subhalaxmi',
          profileAvatar:'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
        },
        {
          _id:"02e8bf4c-15ce-4df8-a476-c404e262c062",
          firstName:'Neha',
          lastName:'Sharma',
          username:'neha',
          profileAvatar: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
        }
      ]
    },
    dislikedBy: [],
    username: 'bijaylaxmi',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "77fa2e87-4e3a-49a7-a16b-5c5874434861",
        commentData: 'beautiful',
        firstName: 'Neha',
        lastName: 'Sharma',
        username: 'neha',
        profileAvatar: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg',
        createdAt: formatDate(),
        updatedAt: formatDate()
      }
    ]
  },
  {
    _id:"c77a4756-8b87-4645-a86e-715f3e1c7005",
    content:" 🎉🖥️ Guess what, fam? I've got some exciting news to share! 🎉 Just unboxed my brand new laptop, and I'm absolutely thrilled! 💻✨🙌 This sleek and powerful machine ticks all the boxes on my wish list. It's got the speed, the storage, and the graphics to handle anything I throw at it! From work to play, this laptop is going to be my new best buddy. 🤩",
    mediaUrl: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_scale,h_530,w_700/macbook.jpg',
    altText: 'macbook',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id:"2f0d86b5-3acd-4d3c-a8eb-bf5198f5d093",
          firstName:'Subhalaxmi',
          lastName:'Behera',
          username:'subhalaxmi',
          profileAvatar:'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/subhalaxmi.jpg'
        },
        {
          _id:"d6a2d341-5389-4864-b7f3-de8ba704ef9f",
          firstName:'Neha',
          lastName:'Sharma',
          username:'neha',
          profileAvatar: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_1.jpg'
        }
      ]
    },
    dislikedBy: [],
    username: 'shruti',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id:"42f410a1-2fb9-4fab-85b7-063cc4121239",
        commentData: "🎊 Congrats on your new laptop! 🎉 It looks like a powerhouse! 💪 Enjoy the seamless performance and endless possibilities it brings to your digital world. Can't wait to see those unboxing pics! 📸 Have a blast exploring all the amazing features! 🚀",
        firstName: 'Manisha',
        lastName: 'Panda',
        username: 'manisha',
        profileAvatar: 'https://res.cloudinary.com/dwcoxmoat/image/upload/c_fill,g_face,h_300,w_300/f_png/r_max/pic_2.jpg',
        createdAt: formatDate(),
        updatedAt: formatDate()
      }
    ]
  },
  {
    _id:"29a1c8b6-bd5e-4b2e-a778-4773a449051c",
    content: '"Embrace the journey of learning, for it is the path that leads to growth and discovery." ✨🌱',
    mediaUrl: '',
    altText: '',
    likes: {
      likeCount: 0,
      likedBy: []
    },
    dislikedBy: [],
    username: 'suman',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  },
 
  // {
  //   _id: uuid(),
  //   content: '',
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: []
  //   },
  //   username: 'adarshbalika',
  //   createdAt: formatDate(),
  //   updatedAt: formatDate()
  // },
  // {
  //   _id: uuid(),
  //   content:
  //     'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: []
  //   },
  //   username: 'shubhamsoni',
  //   createdAt: formatDate(),
  //   updatedAt: formatDate()
  // }
]
