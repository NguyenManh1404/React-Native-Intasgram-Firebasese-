import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: 'https://i-dulich.vnecdn.net/2020/07/01/shutterstock-1169930359-4299-1593590420.jpg',
    user: USERS[0].user,
    like: 555,
    caption: "Hôm nay tôi code",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "Thât là hay",
      },
      {
        user: USERS[3].user,
        comment: "Thât là tuyệt",
      },
      {
        user: USERS[4].user,
        comment: "Hello bạn nhé",
      },
    ],
  },
  {
    imageUrl: 'https://static.kinhtedothi.vn/images/upload/2021/12/22/826832b6-ca62-49c8-a7fd-0d769b98bc00.jpg',
    user: USERS[2].user,
    like: 555,
    caption: "Hello anh nhá",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "Thât là hay",
      },
      {
        user: USERS[3].user,
        comment: "Thât là tuyệt",
      },
      {
        user: USERS[4].user,
        comment: "Hello bạn nhé",
      },
    ],
  },
  {
    imageUrl: 'https://www.vietnambooking.com/wp-content/uploads/2019/12/H%C3%ACnh-2-520x520.png',
    user: USERS[3].user,
    like: 555,
    caption: "Làm gì mà phải code",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "Thât là hay",
      },
      {
        user: USERS[3].user,
        comment: "Thât là tuyệt",
      },
      {
        user: USERS[4].user,
        comment: "Hello bạn nhé",
      },
    ],
  },
  {
    imageUrl: 'https://www.vietnambooking.com/wp-content/uploads/2020/07/da-nang.jpg',
    user: USERS[4].user,
    like: 555,
    caption: "Làm gì đó bạn ơi",
    profile_picture: USERS[4].image,
    comments: [
      
    ],
  },
  {
    imageUrl: 'http://dulichnamachau.com/wp-content/uploads/%C4%90L.jpg',
    user: USERS[5].user,
    like: 555,
    caption: "Hôm nay tâm tư rối bời",
    profile_picture: USERS[5].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "Thât là hay",
      },
      {
        user: USERS[3].user,
        comment: "Thât là tuyệt",
      },
      {
        user: USERS[4].user,
        comment: "Hello bạn nhé",
      },
    ],
  },
  {
    imageUrl: 'https://thuthachviet.com/images/uploads/dalat-thang10.jpg',
    user: USERS[6].user,
    like: 555,
    caption: "Đi chơi không anh e m",
    profile_picture: USERS[6].image,
    comments: [
      {
        user: USERS[2].user,
        comment: "Thât là hay",
      },
      {
        user: USERS[3].user,
        comment: "Thât là tuyệt",
      },
      {
        user: USERS[4].user,
        comment: "Hello bạn nhé",
      },
    ],
  }
];
