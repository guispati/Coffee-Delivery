import { HomeContainer, HeaderContainer, TitleContainer, CoffeListContainer } from "./styles";
import image from '../../assets/home.png';
import { ShopInfo } from "./components/ShopInfo";
import { CoffeeCard } from "./components/CoffeeCard";
import { coffeeList } from "../../data/coffeeList";

export function Home() {
    return (
        <HomeContainer>
            <HeaderContainer>
                <div>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    </TitleContainer>
                    <ShopInfo />
                </div>
                
                <img src={image} alt="" />
            </HeaderContainer>

            <CoffeListContainer>
                <h2>Nossos cafés</h2>

                <div>
                    {coffeeList.map(product => (
                        <CoffeeCard key={product.id} product={product} />
                    ))}
                </div>
            </CoffeListContainer>
        </HomeContainer>
    );
}