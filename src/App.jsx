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

    function handleToggleExtension(id) {
        setExtensions((extensions) =>
            extensions.map((item) =>
                item.id === id ? { ...item, isActive: !item.isActive } : item
            )
        );
    }

    return (
        <Container>
            <Hero />
            <main>
                <ExtensionFilter input={sortBy} onSetSortBy={setSortBy} />
                <CardsGrid>
                    {!extensions.length ? (
                        <h3>You have removed all your extensions!</h3>
                    ) : (
                        sortedExtensions.map((extension) => (
                            <Card
                                sortedExtensions={sortedExtensions}
                                extension={extension}
                                key={extension.id}
                                onRemoveExtension={handleRemoveExtension}
                                onToggleExtension={handleToggleExtension}
                            />
                        ))
                    )}
                </CardsGrid>
            </main>
        </Container>
    );
}
export default App;
