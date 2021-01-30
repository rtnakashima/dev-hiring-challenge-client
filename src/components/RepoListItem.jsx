import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1em;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.8em;
`

const StyledDescription = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MetaWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5em;
`

const MetaItem = styled.div`
    margin-right: 2em;
`

const Circle = styled.span`
    display: inline-block;
    border-radius: 100px;
    background-color: ${ props => props?.color };
    width: 1em;
    height: 1em;
`

const RepoListItem = (props) => {
    return (
        <StyledListItem>
            <a href={ props?.htmlURL || '#' }> { props?.fullName || '' } </a>
            <StyledDescription> { props?.description || "-" } </StyledDescription>
            <MetaWrapper>
                <MetaItem>
                    <a href={ props?.stargazersUrl }>
                        <FontAwesomeIcon icon={faStar} />
                        <span> { props?.stargazersCount || 0 } </span>
                    </a>
                </MetaItem>
                <MetaItem>
                    <Circle color={ props?.color || 'white' }/>
                    <span> { props?.language } </span>
                </MetaItem>
                <MetaItem> { props?.licenseName } </MetaItem>
                <MetaItem> { props?.updatedAt } </MetaItem>
                <MetaItem> { props?.openIssuesCount && <a> {`${props.openIssuesCount} issues need help.`} </a> } </MetaItem>
            </MetaWrapper>
        </StyledListItem>
    )
}

export default RepoListItem