import Button from "@material-ui/core/Button";

import "./countrycard.scss";

type CountryCardProps = {
  flag: string;
  name: string;
  region: string;
}

const CountryCard = (
  // props: CountryCardProps
  { flag, name, region }: CountryCardProps
  ) => {
  // const { flag, name, region } = props;
  return (
    <div className="country__card">
      <div className="country__card__wrapper">
        <img src={flag} alt={name} />
        <h2 className="country__card__name">{name}</h2>
        <h2 className="country__card__region">{region}</h2>
        <Button className="btn btn__primary">Add to cart</Button>
      </div>
    </div>
  );
};

export default CountryCard;
