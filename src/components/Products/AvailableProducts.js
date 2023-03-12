import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import P1 from "../../assets/P1.jpg";
import P2 from "../../assets/P1.jpg";
import P3 from "../../assets/P1.jpg";
import P4 from "../../assets/P1.jpg";
import P5 from "../../assets/P1.jpg";

const DUMMY_MEALS = [
    {
      id: 'p1',
      name: 'Apple iPhone 14 Pro (256 GB) - Space Black',
      description: 'A16 Bionic chip,6-core CPU with 2 performance cores and 4 efficiency cores, 5-core GPU, 16-core Neural Engine',
      price: 1622.62,
    },
    {
      id: 'p2',
      name: 'Apple TV 4K (64GB) 2nd Generation',
      description: 'A12 Bionic chip gives a big boost to audio, video, and graphics, for even better game and app experiences. 4K High Frame Rate HDR with Dolby Vision for fluid, crisp video',
      price: 243.99,
    },
    {
      id: 'p3',
      name: 'Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB)',
      description: 'Apple M2 chip, 8-core CPU with 4 performance cores and 4 efficiency, cores, 10-core GPU, 16-core, Neural Engine, 100GB/s memory bandwidth',
      price: 919.90,
    },
    {
      id: 'p4',
      name: 'Apple Watch SE (2nd Gen)',
      description: 'Built-in GPS, GLONASS, Galileo, and QZSS, S8 with 64-bit dual-core processor, W3 Apple wireless chip, Always-on altimeter, Capacity 32GB, Third-generation optical heart sensor, Electrical heart sensor, High-g accelerometer, Ambient light sensor, Retina LTPO OLED display, Digital Crown with haptic feedback',
      price: 346.49,
    },
    {
      id: 'p5',
      name: 'Apple 2021 iMac',
      description: 'Apple M1 chip, 8-core CPU with 4 performance cores and 4 efficiency cores 8-core GPU',
      price: 1457.81,
    },
  ];

const AvailableProducts = () => {
  const mealsList = DUMMY_MEALS.map((meal)=><li>{meal.name}</li>);
  return (
    <section className={classes.products}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;