// not being used

// const React = require('react')
// const SearchResults = require('./MainContent/SearchResults')
// const ContentLists = require('./MainContent/ContentLists')

// class MyFirstComponent extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       SearchResult: false,
//       searchInput: ''
//     }
//     this.searchInputEvent = this.searchInputEvent.bind(this)
//   }
//   searchInputEvent (e) {
//     this.setState({
//       searchInput: e.target.value
//     })

//     if (!e.target.value) {
//       this.setState({
//         SearchResult: false
//       })
//     } else {
//       this.setState({
//         SearchResult: true
//       })
//     }
//   }
//   render () {
//     let ResultListing = null

//     if (this.state.SearchResult) {
//       ResultListing = (<div><SearchResults searchInput={this.state.searchInput} /></div>)
//     } else {
//       ResultListing = (<div><ContentLists /></div>)
//     }
//     return (
//       <div>
//         <div>
//           <form >
//             <input onChange={this.searchInputEvent} type='text' ref='search' placeholder='Search' />
//           </form>
//         </div>
//         {ResultListing}
//       </div>
//     )
//   }
// }

// module.exports = MyFirstComponent
