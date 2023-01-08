import HorizontalCard from "../../components/Cards/HorizontalCard";
import style from "./Search.module.css";

const data = [
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=240",
    title: "Unstoppable",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/37BA7292-BFA6-4B9E-8B08-9714B147136A/0-16x9.jpg?width=240",
    title: "Arjuna Phalguna",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-16x9.jpg?width=240",
    title: "Senapathi",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF/0-16x9.jpg?width=240",
    title: "The American Dream",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/A7C4A8B8-B112-4C74-8AFC-6128093F71FC/0-16x9.jpg?width=240",
    title: "Chef mantra",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/5A8AAB23-17F7-4E49-A299-8D422EA8117B/0-16x9.jpg?width=240",
    title: "Pushpaka Vimanam",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/6B0D8C15-6BF9-4B85-A5B9-511462B75BA3/0-16x9.jpg?width=240",
    title: "Manchi Rojulochaie",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/836A0A87-656C-46FE-BBD1-F12BA6088F68/0-16x9.jpg?width=240",
    title: "SARKAAR",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/7C1146D3-79CA-47FF-AB88-B9721D445531/0-16x9.jpg?width=240",
    title: "The Baker & The Beauty",
  },
  {
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=240",
    title: "3 Roses",
  },
];

const TrendingSearches = (props) => {
  return (
    <>
      <h1>Trending Searches</h1>
      <div className={style.trending}>
        {data.map((e, i) => {
          return (
            <HorizontalCard
              image={e.image}
              title={e.title}
              key={i}
              id={e.id || null}
            />
          );
        })}
      </div>
    </>
  );
};

export default TrendingSearches;
