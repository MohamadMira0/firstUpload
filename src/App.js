import Box from "./components/Box";
import { data } from "./data";

export default function App() {
  const dataShow = data.map((el) => (
    <Box
      key={el.id}
      title={el.title}
      desc={el.description}
      logoImg={el.logoImg}
      coverImg={el.coverImg}
      posted={el.stats.posted}
      review={el.stats.reviewCount}
    />
  ));
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {dataShow}
      </div>
    </div>
  );
}
