import { data } from './data';

import Container from './components/UI/Container/Container';
import Hero from './components/Hero/Hero';
import ExtensionFilter from './components/ExtensionFilter/ExtensionFilter';
import CardsGrid from './components/UI/CardsGrid/CardsGrid';
import Card from './components/Card/Card';

function App() {
    return (
        <Container>
            <Hero />
            <main>
                <ExtensionFilter />
                <CardsGrid>
                    {data.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </CardsGrid>
            </main>
        </Container>
    );
}

export default App;
