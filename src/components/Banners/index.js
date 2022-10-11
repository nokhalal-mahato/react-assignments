import './index.css';
import Banner from './BannerCarditem/Index';

function BannerPage() {
  const bannerCardsList=[
    {
      id:'item1',
      className:'right-banner',
      description:"Get the seasons all latest designs in a flick of your hand",
      headerText:"The Seasons Latest",
    },
    {
      id:'item2',
      className:"left-banner",
      description:"Get the designs developed by our in-house team all for yourself",
      headerText:"Our New Designs",
    },
    {
      id:'item3',
      className:"center-banner",
      description:"Get the top class products for yourself with an extra off",
      headerText:"Insiders",
    }
  ]
  return (
    <div className="banner-page">
      {bannerCardsList.map((item) => <Banner className={item.className} key={item.id} id={item.id} description={item.description} headerText={item.headerText} />)}      
    </div>
  );
}

export default BannerPage;
