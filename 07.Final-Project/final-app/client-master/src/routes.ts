import HomeComponent from './components/Home';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp';

const Routes = [
  {
    path: '/',
    component: HomeComponent,
    isPrivate: false
  },
  {
    path: '/login',
    component: LoginPage,
    isPrivate: false
  },
  {
    path: '/signup',
    component: SignUpPage,
    isPrivate: false
  }
]

export default Routes