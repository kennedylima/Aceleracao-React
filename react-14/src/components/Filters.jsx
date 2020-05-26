import React from 'react';
import './Filters.scss'
class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      order: 'asc',
      sort: ''
    }
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
    this.props.handleFilter({
      search,
      order: this.state.order,
      sort: this.state.sort
    });
  }

  handleClick = (sort) => {
    const state = {
      search: this.state.search,
      order: this.state.order,
      sort: sort
    }

    if (sort === this.state.sort) {
      if (state.order === 'asc'){
        state.order = 'desc';
      } else{
        state.order = 'asc';
        state.sort = '';
      }
    }

    this.setState(state);
    this.props.handleFilter(state);
  }

	render() {
    const { order, sort } = this.state;
		return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input 
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.search}
              onChange={this.handleSearch}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search"/>
            </button>
          </div>

          <button 
            className={`filters__item ${ sort === 'name' ? 'is-selected' : ''}`}
            onClick={ () => this.handleClick("name") }
          >
            Nome 
            <div className ={`order ${ order }`}> 
              <i className="fas fa-sort-down" />
            </div>
          </button>

          <button 
            className={`filters__item ${ sort === 'country' ? 'is-selected' : ''}`}
            onClick={ () => this.handleClick("country") }
          >
            País 
            <div className={`order ${ order }`}> 
              <i className="fas fa-sort-down" />
            </div>
          </button>

          <button 
            className={`filters__item ${ sort === 'admissionDate' ? 'is-selected' : ''}`}
            onClick={ () => this.handleClick("admissionDate") }
          >
            Data de admissão 
            <div className={`order ${ order }`}> 
              <i className="fas fa-sort-down" />
            </div>
          </button>

          <button 
            className={`filters__item ${ sort === 'company' ? 'is-selected' : ''}`}
            onClick={ () => this.handleClick("company") }
          >
            Empresa 
            <div className={`order ${ order }`}> 
              <i className="fas fa-sort-down" />
            </div>
          </button>

          <button 
            className={`filters__item ${ sort === 'department' ? 'is-selected' : ''}`}
            onClick={ () => this.handleClick("department") }
          >
            Departamento 
            <div className={`order ${ order }`}> 
              <i className="fas fa-sort-down" />
            </div>
          </button>
        </section>
      </div>
    );
	}
}

export default Filters;
