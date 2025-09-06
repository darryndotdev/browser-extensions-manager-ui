import { data } from './data';

import Container from './components/UI/Container/Container';
import Hero from './components/Hero/Hero';
import ExtensionFilter from './components/ExtensionFilter/ExtensionFilter';
import CardsGrid from './components/UI/CardsGrid/CardsGrid';
import Card from './components/Card/Card';
import { useState } from 'react';

function App() {
    const [extensions, setExtensions] = useState(data);

    const [sortBy, setSortBy] = useState('all');

    let sortedExtensions;

    if (sortBy === 'all') sortedExtensions = extensions;

    if (sortBy === 'active')
        sortedExtensions = extensions.filter((item) => item.isActive === true);

    if (sortBy === 'inactive')
        sortedExtensions = extensions.filter((item) => item.isActive === false);

    function handleRemoveExtension(id) {
        setExtensions((extensions) =>
            extensions.filter((item) => item.id !== id)
        );
    }

    console.log(extensions);

    return (
        <Container>
            <Hero />
            <main>
                <ExtensionFilter input={sortBy} onSetSortBy={setSortBy} />
                <CardsGrid>
                    {sortedExtensions.map((extension) => (
                        <Card
                            extension={extension}
                            key={extension.id}
                            onRemoveExtension={handleRemoveExtension}
                        />
                    ))}
                </CardsGrid>
            </main>
        </Container>
    );
}

export default App;
