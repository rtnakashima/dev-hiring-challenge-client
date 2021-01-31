import { useState } from 'react'
import RepoList from 'components/RepoList';
import Button from 'components/Button';
import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`;

const StyledLoadingOverlay = styled(LoadingOverlay)`
    width: 100%;
    height: 100%;
`

function App() {
    const [ repos, setRepos ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ alreadySearched, setAlreadySearched ] = useState(false)

    const fetchRepos = () => {
        setIsLoading(true)
        setAlreadySearched(true)

        // it would be better if we could fetch directly from github from here..
        // this was designed this way so we could save the results to mysql later on..
        fetch('https://api-dhc.herokuapp.com/repos')
        .then(res => res.json())
        .then(json => {
            setIsLoading(false)
            setRepos(json)
        })
    }

    const loadingText = "Buscando repositórios. Por favor, aguarde..."

    return (
        <StyledLoadingOverlay active={ isLoading } spinner={ true } text = { loadingText }>
            <Container>
                <h1> Renan Nakashima - Dev Hiring Challenge</h1>
                <p> Este aplicativo busca e lista os principais repositórios em C, C++, Python, Javascript e Ruby existentes no GitHub. </p>
                <p> Para buscar os repositórios, clique no botão abaixo! </p>
                <hr/>
                <Button onClick={ fetchRepos } disabled={ alreadySearched }> Buscar repositórios </Button>
                { repos.items && <RepoList items ={ repos.items } /> }
            </Container>
        </StyledLoadingOverlay>
    );
}

export default App;
