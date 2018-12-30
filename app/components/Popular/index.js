import React from 'react';
import PropTypes from 'prop-types';
import {fetchPopularRepos} from '../../utils/api';
import Loader from '../Loader';

function SelectMenu ({selectedMenu, updateMenu} ) {
  const menuList = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='menuList'>
      {menuList.map(function (item) {
        return (
          <li className={item === selectedMenu?'active':null} onClick={()=>updateMenu(item)} key={item}> {item} </li>
        )
      })}
    </ul>
  )
}

function RepoGrid ({repos}) {
    return (
      <ul className='popular-list'>
        {repos.map(function ({name, owner, html_url, stargazers_count}, index) {
          return (
            <li key={name} className='popular-item'>
              <div className='popular-rank'>#{index + 1}</div>
              <ul className='space-list-items'>
                <li>
                  <img className='avatar' src={owner.avatar_url} alt={'Avatar for ' + owner.login} />
                </li>
                <li><a href={html_url}>{name}</a></li>
                <li>@{owner.login}</li>
                <li>{stargazers_count} stars</li>
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectMenu.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
    updateMenu: PropTypes.func.isRequired,
};

class Popular extends React.Component {

  state = {
      selectedMenu: 'All',
      repos: null,
  }
  
  componentDidMount() {
    this.updateMenu(this.state.selectedMenu)
  }
  updateMenu = async (menuItem) => {
    this.setState(() => ({
            selectedMenu: menuItem,
            repos: null
    }));
    fetchPopularRepos(menuItem)
    const repos = await fetchPopularRepos(menuItem);
    this.setState(() => ({ repos }))
  }

  render() {
    const { selectedMenu, repos } = this.state

    return (
      <div>
        <SelectMenu selectedMenu={selectedMenu} updateMenu={this.updateMenu} />
        {!repos  ? <Loader/> : <RepoGrid repos={repos} />}
      </div>
    )
  }
}

export default Popular;