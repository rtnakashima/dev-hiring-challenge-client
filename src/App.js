import { useState } from 'react'
import RepoList from 'components/RepoList';
import Button from 'components/Button';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`;

function App() {

    const [ repos, setRepos ] = useState({})

    const fetchRepos = () => {
        // it would be better if we could fetch directly from github from here..
        // this was designed this way so we could save the results to mysql later on..
        fetch('https://api-dhc.herokuapp.com/repos')
        .then(res => res.json())
        .then(json => setRepos(json))
    }

    return (
        <Container>
            <h1> Ateliware - Dev Hiring Challenge</h1>
            <p> Este aplicativo busca e lista os principais repositórios em C, C++, Python, Javascript e Ruby existentes no GitHub. </p>
            <p> Para buscar os repositórios, clique no botão abaixo! </p>
            <hr/>
            <Button onClick={fetchRepos}> Buscar repositórios </Button>
            { repos.items && <RepoList items ={ repos.items } /> }
        </Container>
    );
}

export default App;
