import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  console.log(isLoading);
  if (isLoading) return <Spinner />;
  console.log(cities);
  if (!cities)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  console.log("CityList---------");
  console.log(cities);

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
