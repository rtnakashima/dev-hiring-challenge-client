import RepoListItem from 'components/RepoListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 1em;
    width: 600px;
`;

const RepoList = (props) => {
    return (
        <StyledList>
            <RepoListItem
                htmlURL={'https://github.com/travisjeffery/timecop'}
                fullName={'travisjeffery/timecop'}
                description={'A gem providing "time travel", "time freezing", and "time acceleration" capabilities'}
                stargazersCount={5}
                stargazersUrl={''}
                color={'red'}
                language={'Ruby'}
                licenseName={'MIT license'}
                updatedAt={"2013-01-05T17:58:47Z"}
                openIssuesCount={18}
                />
            <RepoListItem url={'https://github.com/sonatype/nexus-book'} description={'Repository Management with Nexus'}/>
            <RepoListItem url={'https://github.com/cheese10yun/spring-guide'} description={'Spring 실전 가이드'}/>
        </StyledList>
    )
}

export default RepoList