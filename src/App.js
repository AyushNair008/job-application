import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import AdminDashboard from './AdminDashboard'
import EmployeeDetails from './EmployeeDetails'

function App(props){
    return (
        <BrowserRouter>
        <div>
            <Route path='/' component = {ApplicationForm} exact={true}/>
            <Route path='/admin' component={AdminDashboard}/>
            <Route path='/EmployeeDetails' component={EmployeeDetails}/>
            <Link to='/admin'>admin</Link>
            <Link to='/'>Application</Link>
        </div>
        </BrowserRouter>
    )
}
export default App