import RepoListItem from 'components/RepoListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 1em;
    width: 600px;
`;

const emptyRepoListMsg = "Oops! Não há repositórios válidos."

const RepoList = (props) => {

    if (props.items.length == 0)
    {
        return <p> { emptyRepoListMsg } </p>
    }

    const colorMap = {
        "Python": "#3572A5",
        "Ruby": "red",
        "C": "gray",
        "C++": "magenta",
        "Javascript": "yellow"
    }

    const listItems = props.items.map((repo, key) => {
        let listItemProps = {
            htmlURL:         repo.html_url,
            fullName:        repo.full_name,
            description:     repo.description,
            stargazersCount: repo.stargazers_count,
            stargazersURL: repo.stargazers_url,
            color:           colorMap[repo.language] || "black",
            language:        repo.language,
            licenseName:     repo.license?.name || "",
            updatedAt:       repo.updated_a,
            openIssuesCount: repo.open_issues_count
        } 

        return <RepoListItem key={key} { ...listItemProps } />
    })

    return (
        <StyledList>
            { listItems }
        </StyledList>
    )
}

export default RepoList
export { emptyRepoListMsg }