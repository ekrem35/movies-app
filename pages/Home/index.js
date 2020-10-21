import Head from 'next/head';
import Header from '../../src/components/Header';
import Container from '../../src/components/Container';
import SearchBox from '../../src/components/SearchBox';
import InputSearch from '../../src/components/InputSearch';
import styles from './Home.module.sass';

export default function Home() {
    return (
        <>
            <Header rightComponent={<InputSearch />} />
            <div className={styles.banner}>
                <Container style={{ display: 'flex', height: '100%' }}>
                    <div className={styles.textArea}>
                        <h1>Welcome to Movie<b>UP</b></h1>
                        <p>Text text text text text text text text text text text text text text text</p>
                        text text text text text text text text text text text text text text text text text
                        text text text text text text text text text text text text text text text text text
                    </div>
                </Container>
                <Container>
                    <SearchBox />
                </Container>
            </div>
        </>
    )
}
