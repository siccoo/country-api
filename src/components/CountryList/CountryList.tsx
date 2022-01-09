import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../types";
import { fetchAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";

import "./countrylist.scss";

const CountryList = () => {
  // const [allCountries, setAllCountries] = useState<any[]>([]);
  // GET ALL COUNTRIES FROM REDUX STATE
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  console.log(countries);
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  );



  // INITIALIZE DISPATCH
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (countries) {
  //     setAllCountries(countries);
  //   }
  // }, [countries]);

  // DISPATCH fetchAllCountries
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);
  console.log(countries);
  return (
    <div className="country__list">
      {/* SORT COUNTRY */}
      <div className="country__list__sort"></div>
      {/* COUNTRY CARD LIST */}
      <div className="country__list__card">
        {isLoading && <h2>Loading...</h2>}

        {!isLoading &&
          countries &&
          countries.map((country) => (
            <CountryCard
              // flag={country?.flags?.png}
              // name={country?.name}
              // region={country?.region}
              {...country}
              // key={country.name}
            />
          ))}
      </div>
      <div className="country__list__pagination"></div>
    </div>
  );
};

export default CountryList;
