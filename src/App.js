import './App.css';
import { DefaultLayout } from './layout/defaultlayout';
import { Dashboard } from './pages/dashboard/dashboard.page';
import { AddStudent } from './pages/new-student/addstudent';
//import { Entry } from './pages/entry/Entry.page';


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
      {/* <Dashboard/> */}
      <AddStudent/>
      </DefaultLayout>
    </div>
  );
}

export default App;