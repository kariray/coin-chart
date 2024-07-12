import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 30px;
  width: 100%;
`;

const Item = styled.div`
  width: 100%;
  padding: 25px;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 10px;
`;

function Home() {
  //   const { isPending, error, data } = useQuery({
  //     queryKey: ["coins"],
  //     queryFn: async () =>
  //       fetch("https://api.coinpaprika.com/v1/coins").then((res) => res.json()),
  //   });

  return (
    <>
      <Title>Coin List</Title>
      <ItemContainer>
        {/* {isPending ? (
          <div>loading...</div>
        ) : (
          data.map((item: Item) => <Item id={item.id}>{item.name}</Item>)
        )} */}
        <Item>aa</Item>
      </ItemContainer>
    </>
  );
}

type Item = {
  id: string;
  name: string;
};

export default Home;
