import {v4 as uuidv4} from 'uuid';
const EventList = [
  {
    id: uuidv4(),
    imageUrl:
      "https://www.todocanada.ca/wp-content/uploads/Toronto-International-Dance-Festival.jpg",
    registrationStatus: "YET_TO_REGISTER",
    title: "Canada Dance Festival",
    location: "Canada, America",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://welcomekeralaonline.com/sites/default/files/field/image/cherpulassery_kala_web.jpg",
    registrationStatus: "REGISTERED",
    title: "Puthanalkkal Kalavela",
    location: "Karnataka, India",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2020/08/Kathakali-Dance-Kerala.jpg",
    registrationStatus: "YET_TO_REGISTER",
    title: "Nithyopahara",
    location: "Kerala, India",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://www.iasgyan.in//ig-uploads/images//3fb4031f2e67d5288a0c36430da2268b.jpg",
    registrationStatus: "REGISTRATION_CLOSED",
    title: "Shivam",
    location: "Andhra Pradesh, India",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://indianetzone.files.wordpress.com/2018/12/South-Indian-Classical-dance-Forms.jpg?w=800",
    registrationStatus: "REGISTRATION_CLOSED",
    title: "Janapada Kolatam",
    location: "Tamil Nadu, India",
  },
  {
    id: uuidv4(),
    imageUrl:
      "https://s3.amazonaws.com/iexplore_web/images/assets/000/011/751/full/2529441343_9a2b3a4fb2_o.jpg?1461183316",
    registrationStatus: "YET_TO_REGISTER",
    title: "Colonial Fest",
    location: "Washington, America",
  },
];
export default EventList;