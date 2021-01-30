import React from 'react';
import renderer from 'react-test-renderer';
import RepoListItem from '../RepoListItem';

const response = require('./fixtures/search-api-response.json')

test ('Repo list item is rendered correctly', () => {
    const repoListItemComponent = renderer.create(
        <RepoListItem
            htmlURL={ response.items[0].html_url }
            fullName={ response.items[0].full_name }
            description={ response.items[0].description }
            stargazersCount={ response.items[0].stargazers_count }
            color={ 'red' }
            language={ response.items[0]?.language }
            licenseName={ response.items[0].license?.name }
            updatedAt={ response.items[0].updatedAt }
            openIssuesCount={ response.items[0].open_issues_count }
        />
    )

    let tree = repoListItemComponent.toJSON()
    expect(tree).toMatchSnapshot();
})