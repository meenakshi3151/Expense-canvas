import { InnerLayout } from "../../../styles/Layout";
import { Content, Header, Heading } from "./Stocks.style";
import Amazon from "./StocksComponents/Amazon";
import Apple from "./StocksComponents/Apple";
import Facebook from "./StocksComponents/Facebook";
import Google from "./StocksComponents/Google";
import Microsoft from "./StocksComponents/Microsoft";

function Stocks() {
    return (
        <InnerLayout>
            <Header>
                <Heading>
                    Stocks
                </Heading>

            </Header>
            <Content>
                <Amazon />
                <Google />
                <Facebook />
                <Microsoft />
                <Apple />
            </Content>
        </InnerLayout>
    )
}
export default Stocks;