import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'; //to get the action creator
import {bindActionCreators} from 'redux'; // make sure that the action flows through all reducers

class BookList extends Component{
  renderList(){
    // console.log(this.props);
    //in props theres bookii
    return this.props.books.map((book) =>{
      return(
        <li
          key={book.title}
          onClick={()=> this.props.selectBooko(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>

    );
  }
}
//take application state as argument.
function mapStateToProps(state){
  //Whatever that is returned will show up as props
  //inside of BookList
  //this is the connection between redux and our component
  // state is from reducers?
  // console.log(state);
  return{
    // bookii:state.testing
    books:state.books
  };
}

//mapDispatchToProps everything returned from it will end up as props for the component/container / Booklist
function mapDispatchToProps(dispatch){

  //whenever selectBook is called, the result should be passed to all our reducers
  //dispatch is a function. it get all the actions and send it to all the reducers
  return bindActionCreators({selectBooko: selectBook}, dispatch)//second selectBook is the action creator we created at the top
}

//Promote BookList from a component to a container, it needs to know about this new dispatch method, selectBook.
//Make it available as a props
//connect our booklist component mapStateToProps which we have books:state.books and produce a
//container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);// calling mapStateToProps?
