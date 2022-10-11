import './index.css';
import Card from './CardItem.js/Index';

function TechnologyCard() {
  const cardsList=[
    {
      id:'card1',
      title:"Data Scientist",
      description:"Data scientists gather and analyse large sets of structured and unstructured data",
      imageUrl:"https://cdn-icons-png.flaticon.com/512/1925/1925173.png",
      className:'dataScientist',
    },
    {
      id:'card2',
      title:"IOT Developer",
      description:"Iot Developers are professionals who can develop, manage, and moniter IoT devices",
      imageUrl:"https://cdn-icons-png.flaticon.com/512/6119/6119533.png",
      className:"iot",
    },
    {
      id:'card3',
      title:"VR Developer",
      description:"A VR developer creates completely new digital enviroments that eople can see",
      imageUrl:"https://cdn-icons-png.flaticon.com/512/1509/1509638.png",
      className:"vr",
    },
    {
      id:'card4',
      title:"ML Engineer",
      description:"Machine learning engineers feed data into models defined by data scientists",
      imageUrl:"https://img.freepik.com/premium-vector/tiny-people-chatting-with-chatbot-application-ai-robot-assistant-online-customer-support-chat-bot-virtual-assistant-via-messaging-information-engineering-artificial-intelligence-faq-concept_458444-737.jpg?w=996",
      className:"ml",
    },
  ];
  return (
    <div className="technology-cards">
      <h1 className='main-header'>Learn 4.0 Technologies</h1>
      <p className='main-description'>Get trained by alumni of IITs and top compnaies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Developemnt</p>
      <div className='card-container'>
        {cardsList.map((item)=><Card className={item.className} key={item.key} id={item.id} 
        description={item.description} title={item.title} imageUrl={item.imageUrl}/>)}
      </div>
    </div>
  );
}

export default TechnologyCard;