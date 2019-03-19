import React from 'react';
import { Route } from 'react-router-dom';
import Index from './userDashIndex';
import EditParty from './editParty';
import AddParty from './addParty';
import { withRouter } from 'react-router'
import './userdash.scss'
import { connect } from 'react-redux';

// const AdminDash = ( { history } ) => {
//     return <div className="adminDash">
//         <div className="sidebar">
//             <div className="item">Dashboard</div>
//             <div className="item" onClick={ () => history.push( '/admin' ) }>Supplier</div>
//         </div>
//         <div className="content">
//             <Route exact path="/admin" render={ props => ( <Index /> ) } />
//             <Route path="/admin/editSupplier/:name" component={ EditParty } />
//             <Route path="/admin/addSupplier" component={ AddParty } />
//         </div>


//     </div>
// }


// export default withRouter( AdminDash );

class AdminDash extends React.Component {
    render() {
        let { history, loggedUserData} = this.props 
        return (
            <div className="adminDash">
                <div className="sidebar">
                    <div className="item" onClick={ () => history.push( '/user' ) }>Dashboard</div>
                </div>
                <div className="content">
                    <Route exact path="/user" render={ props => ( <Index /> ) } />
                    <Route path="/user/editSupplier/:name" render={ props => {
                        {/* let isUserParty = false;
                        console.log(loggedUserData)
                        loggedUserData.userParties.map((i) => {
                            if(i._id == props.match.params.name){
                                isUserParty = true;
                            }
                        })
                        if( !isUserParty ){
                            props.history.push('/user')
                        } */}
                        return ( <EditParty parties={loggedUserData.userParties || []} /> ) }
                    } />
                    <Route path="/user/addSupplier" component={ AddParty } />
                </div>
            </div>
        )
    }
}

// export default withRouter( AdminDash );

function mapStateToProps( state ) {
    return { loggedUserData: state.auth.loggedUserData, loggedUserData: state.auth.loggedUserData }
}


export default withRouter( connect( mapStateToProps, null )( AdminDash ) );

