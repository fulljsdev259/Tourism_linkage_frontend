import React from 'react';
import { Route } from 'react-router-dom';
import Index from './adminDashIndex';
import EditParty from './editParty';
import AddParty from './addParty';
import { withRouter } from 'react-router'
import './admindash.scss'
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
        let { history } = this.props 
        console.log( this.props )
        return (
            <div className="adminDash">
                <div className="sidebar">
                    {
                        this.props.loggedUserData.role == 'user' ? <div className="item">Dashboard</div> : null
                    }
                    {
                        this.props.loggedUserData.role == 'admin' ? <div className="item" onClick={ () => history.push( '/admin' ) }>Supplier</div> : null
                    }
                    
                    
                </div>
                <div className="content">
                    <Route exact path="/admin" render={ props => ( <Index /> ) } />
                    <Route path="/admin/editSupplier/:name" component={ EditParty } />
                    <Route path="/admin/addSupplier" component={ AddParty } />
                </div>
            </div>
        )
    }
}

// export default withRouter( AdminDash );

function mapStateToProps( state ) {
    return { loggedUserData: state.auth.loggedUserData }
}


export default withRouter( connect( mapStateToProps, null )( AdminDash ) );

