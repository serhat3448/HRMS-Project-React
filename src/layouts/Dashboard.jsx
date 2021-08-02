import React from 'react'
import { Grid } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import { Route } from 'react-router-dom'
import EmployerList from '../pages/User/Employer/EmployerList'
import JobAdvertList from '../pages/JobAdvert/JobAdvertList'
import MyProfile from '../pages/User/MyProfile'
import JobseekerRegister from '../pages/User/Jobseeker/JobseekerRegister'
import EmployerRegister from '../pages/User/Employer/EmployerRegister'
import Login from '../pages/User/Login'
import { ToastContainer } from "react-toastify";
import JobseekerList from '../pages/User/Jobseeker/JobseekerList'
import JobPositionList from '../pages/JobAdvert/JobPosition/JobPositionList'
import JobAdvertDetail from '../pages/JobAdvert/JobAdvertDetail'
import JobAdvertCreate from '../pages/JobAdvert/JobAdvertCreate'
import CompanyProfile from '../pages/User/CompanyProfile'
import JobAdvertsOfCompany from '../pages/User/JobAdvertsOfCompany'
import JobseekerDetails from '../pages/User/Jobseeker/JobseekerDetails'


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Route exact path="/" component={JobAdvertList}/>
                        <Route exact path="/jobAdvertList" component={JobAdvertList}/>
                        <Route path="/jobAdvertDetails/:id" component={JobAdvertDetail}/>
                        <Route path="/myProfile" component={MyProfile}/>
                        <Route path="/employerList" component={EmployerList}/>
                        <Route path="/jobseekerRegister" component={JobseekerRegister}/>
                        <Route path="/employerRegister" component={EmployerRegister}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/jobseekerList" component={JobseekerList}/>
                        <Route path="/jobPositions" component={JobPositionList}/>
                        <Route path="/jobAdvertCreate" component={JobAdvertCreate}/>
                        <Route path="/companyProfile" component={CompanyProfile}/>
                        <Route path="/jobAdvertsOfCompany/:id" component={JobAdvertsOfCompany}/>
                        <Route path="/jobseekerDetails/:id" component={JobseekerDetails}/>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}
