import Button from "../ui/Button";

const Cards = () => (
  <div className="container">
    <section className="cards">
      <h2 className="container__header">Offers</h2>
      <Card 
        variant={"full"}
        headText={"Move the borders of reality!"}
        subheadText={"Go on a space adventure - it's possible with us!"}
      />
      <Card 
        variant={'half'}
        headText={'Space is not just stars and planets'}
        subheadText={'Go on a space adventure'}
      />
      <Card 
        variant={'half'}
        headText={'For those who dream of stars'}
        subheadText={'Our offer: make your dream come true'}
      />
      <Card 
        variant={'full'}
        headText={'Fulfill your fantastic dreams'}
        subheadText={'Space has never been so close'}
      />
    </section>
  </div>
)

const Card = ({variant, headText, subheadText}) => (
  <div className={`cards__box cards__box-${variant}`}>
    <h3 className={`cards__head cards__head-${variant}`}>{headText}</h3>
    <h4 className={`cards__subhead cards__subhead-${variant}`}>{subheadText}</h4>
    <Button variant={'empty'} />
  </div>
)

export default Cards;
