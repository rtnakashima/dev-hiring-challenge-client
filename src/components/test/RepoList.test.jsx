import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react'
import RepoList, { emptyRepoListMsg } from '../RepoList';

const response = require('./fixtures/search-api-response.json')

test ('repo list renders a message if no repo exists', () => {
    render ( <RepoList items={[]} />)
    expect(screen.queryByText(emptyRepoListMsg)).toBeInTheDocument()
    expect(screen.queryByText('RepoList')).toBeNull()
})

test ('repo list renders accordingly', () => {
    const repoListComponent = renderer.create(
        <RepoList items={ response.items } />
    )

    let tree = repoListComponent.toJSON()
    expect(tree).toMatchSnapshot();
})